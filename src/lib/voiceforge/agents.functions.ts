import {createServerFn} from '@tanstack/react-start';
import {requireSupabaseAuth} from '@/integrations/supabase/auth-middleware';
import {z} from 'zod';
import {buildVapiPayload} from './vapi-payload';
const config=z.object({name:z.string().trim().min(1).max(80),business_type:z.string().max(100),role:z.string().min(1).max(100),personality:z.string().max(100),description:z.string().max(5000),greeting:z.string().max(1000),system_prompt:z.string().max(15000),language:z.enum(['en','ur','hi','ar']),voice:z.string().regex(/^[a-zA-Z0-9_-]{1,100}$/),avatar:z.string().optional()});
function providerError(value:unknown){if(typeof value==='string')return value.slice(0,1200);if(value&&typeof value==='object'){const o=value as {message?:unknown;error?:unknown};if(Array.isArray(o.message))return o.message.map(String).join('; ').slice(0,1200);if(typeof o.message==='string')return o.message.slice(0,1200);if(typeof o.error==='string')return o.error.slice(0,1200);}return 'Vapi could not complete this request.';}
export const saveAgent=createServerFn({method:'POST'}).middleware([requireSupabaseAuth]).inputValidator(config.extend({id:z.string().uuid().optional()})).handler(async({data,context})=>{
 const {supabase,userId}=context;
 const {data:profile}=await supabase.from('profiles').select('organization_id').eq('user_id',userId).single();
 if(!profile)throw new Error('Complete your business profile first.');
 const {id,...fields}=data;
 let assistantId:string|null=null;let rowId=id;
 if(id){const {data:existing,error}=await supabase.from('ai_agents').select('*').eq('id',id).eq('organization_id',profile.organization_id).single();if(error||!existing)throw new Error('Agent not found in your business.');assistantId=existing.vapi_assistant_id;}
 const key=process.env['VAPI_PRIVATE_API_KEY'];
 if(!key)return {ok:false,error:'VAPI_PRIVATE_API_KEY is not configured. Add it securely in this project’s Secrets before creating a connected agent.',id:rowId};
 if(!rowId){const {data:row,error}=await supabase.from('ai_agents').insert({...fields,organization_id:profile.organization_id,status:'connecting'}).select('id').single();if(error||!row)throw new Error('Unable to save your agent.');rowId=row.id;}
 try{
 const res=await fetch(`https://api.vapi.ai/assistant${assistantId?'/'+encodeURIComponent(assistantId):''}`,{method:assistantId?'PATCH':'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify(buildVapiPayload(fields)),signal:AbortSignal.timeout(30000)});
 const payload:unknown=await res.json().catch(()=>null);
 if(!res.ok)throw new Error(providerError(payload));
 const returned=payload&&typeof payload==='object'?(payload as {id?:unknown}).id:undefined;
 if(typeof returned!=='string'||returned.length<1)throw new Error('Vapi returned no assistant ID. Agent was not activated.');
 const {error}=await supabase.from('ai_agents').update({...fields,vapi_assistant_id:returned,status:'active',last_error:null}).eq('id',rowId).eq('organization_id',profile.organization_id);
 if(error)throw new Error(`Vapi created assistant ${returned}, but saving failed. Do not retry creation; contact support to reconcile this ID.`);
 return {ok:true,id:rowId,error:null};
 }catch(error){const message=error instanceof Error?error.message:'Unable to connect to Vapi.';await supabase.from('ai_agents').update({status:'failed',last_error:message}).eq('id',rowId).eq('organization_id',profile.organization_id);return {ok:false,id:rowId,error:message};}
});
export const agentAction=createServerFn({method:'POST'}).middleware([requireSupabaseAuth]).inputValidator(z.object({id:z.string().uuid(),action:z.enum(['delete','pause','activate'])})).handler(async({data,context})=>{
 const {supabase,userId}=context;const {data:profile}=await supabase.from('profiles').select('organization_id').eq('user_id',userId).single();if(!profile)throw new Error('Business not found.');
 const {data:agent,error}=await supabase.from('ai_agents').select('*').eq('id',data.id).eq('organization_id',profile.organization_id).single();if(error||!agent)throw new Error('Agent not found.');
 if(data.action==='pause'){const {error:e}=await supabase.from('ai_agents').update({status:'inactive'}).eq('id',agent.id);if(e)throw new Error('Unable to pause agent.');return {ok:true};}
 if(data.action==='activate'&&!agent.vapi_assistant_id)throw new Error('Connect this agent to Vapi before activation.');
 if(agent.vapi_assistant_id){const key=process.env['VAPI_PRIVATE_API_KEY'];if(!key)throw new Error('VAPI_PRIVATE_API_KEY is not configured.');const res=await fetch('https://api.vapi.ai/assistant/'+encodeURIComponent(agent.vapi_assistant_id),{method:data.action==='delete'?'DELETE':'GET',headers:{Authorization:`Bearer ${key}`},signal:AbortSignal.timeout(15000)});if(!res.ok&&!(data.action==='delete'&&res.status===404))throw new Error('Vapi could not verify or remove this assistant. No local deletion was performed.');}
 const result=data.action==='delete'?await supabase.from('ai_agents').delete().eq('id',agent.id):await supabase.from('ai_agents').update({status:'active',last_error:null}).eq('id',agent.id);
 if(result.error)throw new Error('Unable to update agent. Remove its knowledge or phone assignments before deletion.');return {ok:true};
});

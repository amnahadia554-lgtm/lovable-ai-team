import {createServerFn} from '@tanstack/react-start';
import {requireSupabaseAuth} from '@/integrations/supabase/auth-middleware';
import {z} from 'zod';
export const getWorkspace = createServerFn({method:'GET'}).middleware([requireSupabaseAuth]).handler(async({context})=>{
 const {supabase,userId}=context;
 const profileResult=await supabase.from('profiles').select('*').eq('user_id',userId).maybeSingle();
 if(profileResult.error) throw new Error('Unable to load your business profile.');
 const profile=profileResult.data;
 if(!profile) return {profile:null,organization:null,agents:[],calls:[],leads:[],appointments:[],knowledge:[],phones:[],settings:null};
 const org=profile.organization_id;
 const results=await Promise.all([
 supabase.from('organizations').select('*').eq('id',org).single(),
 supabase.from('ai_agents').select('*').eq('organization_id',org).order('created_at',{ascending:false}),
 supabase.from('calls').select('*').eq('organization_id',org).order('started_at',{ascending:false}),
 supabase.from('leads').select('*').eq('organization_id',org).order('created_at',{ascending:false}),
 supabase.from('appointments').select('*').eq('organization_id',org).order('scheduled_date'),
 supabase.from('knowledge_base').select('*').eq('organization_id',org).order('created_at',{ascending:false}),
 supabase.from('phone_numbers').select('*').eq('organization_id',org),
 supabase.from('org_settings').select('*').eq('organization_id',org).maybeSingle()]);
 if(results.some(r=>r.error)) throw new Error('Unable to load workspace data. Please try again.');
 return {profile,organization:results[0].data,agents:results[1].data??[],calls:results[2].data??[],leads:results[3].data??[],appointments:results[4].data??[],knowledge:results[5].data??[],phones:results[6].data??[],settings:results[7].data};
});
export type Workspace = Awaited<ReturnType<typeof getWorkspace>>;
export const setupBusiness = createServerFn({method:'POST'}).middleware([requireSupabaseAuth]).inputValidator(z.object({businessName:z.string().trim().min(1).max(150),displayName:z.string().trim().min(1).max(150)})).handler(async({data,context})=>{
 const {error}=await context.supabase.rpc('bootstrap_organization',{business_name:data.businessName,display_name:data.displayName});
 if(error) throw new Error('Unable to create your business workspace. Please try again.');
 return {success:true};
});
export const getVapiStatus = createServerFn({method:'GET'}).middleware([requireSupabaseAuth]).handler(async()=>{
 const key=process.env['VAPI_PRIVATE_API_KEY']; if(!key) return {status:'Not Connected',reason:'VAPI_PRIVATE_API_KEY is not configured.'};
 try {const res=await fetch('https://api.vapi.ai/assistant?limit=1',{headers:{Authorization:`Bearer ${key}`},signal:AbortSignal.timeout(10000)});return {status:res.ok?'Connected':'Needs Attention',reason:res.ok?'Credentials verified.':'Vapi rejected the configured credentials.'};}catch{return {status:'Needs Attention',reason:'Vapi could not be reached.'};}
});

import {describe,it,expect} from 'vitest';
import {buildVapiPayload,type AgentConfig} from '@/lib/voiceforge/vapi-payload';
const config:AgentConfig={name:'Test configuration',business_type:'Clinic',role:'Support',personality:'Warm',description:'Business information',greeting:'Hello',system_prompt:'Only use supplied information',language:'en',voice:'21m00Tcm4TlvDq8ikWAM'};
describe('Vapi configuration',()=>{
 it.each([['en','en-US'],['ur','ur-IN'],['hi','hi-IN'],['ar','ar-AE']])('uses valid Azure locale for %s',(language,locale)=>{const p=buildVapiPayload({...config,language});expect(p.transcriber).toEqual({provider:'azure',language:locale});expect(p.model.provider).toBe('openai');expect(p.model.model).toBe('gpt-4o-mini');expect(p.voice.provider).toBe('11labs');expect(p.voice.model).toBe('eleven_v3');expect(p.firstMessage).toBe('Hello');});
 it('rejects unsupported languages',()=>expect(()=>buildVapiPayload({...config,language:'invalid'})).toThrow('Unsupported language'));
 it('keeps system instructions in the system message',()=>{const p=buildVapiPayload(config);expect(p.model.messages).toHaveLength(1);expect(p.model.messages[0]?.role).toBe('system');expect(p.model.messages[0]?.content).toContain(config.system_prompt);});
});

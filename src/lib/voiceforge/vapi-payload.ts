// Schema source: VapiAI/server-sdk-typescript/src/api/types (verified 2026-10-07).
// Azure's published Vapi enum uses ur-IN, NOT ur-PK. No Azure model field exists.
export type AgentConfig={name:string;business_type:string;role:string;personality:string;description:string;greeting:string;system_prompt:string;language:string;voice:string;avatar?:string};
const locale:Record<string,string>={en:'en-US',ur:'ur-IN',hi:'hi-IN',ar:'ar-AE'};
const languageNames:Record<string,string>={en:'English',ur:'Urdu',hi:'Hindi',ar:'Arabic'};
export function buildVapiPayload(agent:AgentConfig){
 if(!locale[agent.language]) throw new Error('Unsupported language.');
 return {name:agent.name,transcriber:{provider:'azure',language:locale[agent.language]},voice:{provider:'11labs',voiceId:agent.voice,model:'eleven_v3'},model:{provider:'openai',model:'gpt-4o-mini',messages:[{role:'system',content:`${agent.system_prompt || `You are a ${agent.role} for a ${agent.business_type} business. ${agent.description}`}\nPersonality: ${agent.personality}. Respond in ${languageNames[agent.language]}. Never invent business information. If you cannot safely answer or the caller requests a human, offer human assistance.`}]},firstMessage:agent.greeting||'Hello! How can I help you today?'};
}

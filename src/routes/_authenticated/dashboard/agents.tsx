import {createFileRoute} from '@tanstack/react-router';
import {Agents} from '@/components/voiceforge/agents';
import {pageHead} from '@/lib/voiceforge/meta';
export const Route=createFileRoute('/_authenticated/dashboard/agents')({head:()=>pageHead('AI Agents','Your VoiceForge workspace.'),validateSearch:(s:Record<string,unknown>)=>(s['create']===true||s['create']==='true'?{create:true as const}:{}),component:Agents});
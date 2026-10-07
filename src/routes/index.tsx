import {createFileRoute,redirect} from '@tanstack/react-router';
import {pageHead} from '@/lib/voiceforge/meta';
export const Route=createFileRoute('/')({head:()=>pageHead('VoiceForge AI','Create and manage your AI voice team.'),beforeLoad:()=>{throw redirect({to:'/dashboard'});}});

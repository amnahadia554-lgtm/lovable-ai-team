import {createFileRoute} from '@tanstack/react-router';
import {DataPage} from '@/components/voiceforge/data-page';
import {pageHead} from '@/lib/voiceforge/meta';
export const Route=createFileRoute('/_authenticated/dashboard/knowledge-base')({head:()=>pageHead('Knowledge Base','Manage your VoiceForge knowledge base.'),component:()=> <DataPage kind="knowledge-base"/>});
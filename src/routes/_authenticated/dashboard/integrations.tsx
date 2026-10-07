import {createFileRoute} from '@tanstack/react-router';
import {DataPage} from '@/components/voiceforge/data-page';
import {pageHead} from '@/lib/voiceforge/meta';
export const Route=createFileRoute('/_authenticated/dashboard/integrations')({head:()=>pageHead('Integrations','Manage your VoiceForge integrations.'),component:()=> <DataPage kind="integrations"/>});
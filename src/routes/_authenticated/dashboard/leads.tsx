import {createFileRoute} from '@tanstack/react-router';
import {DataPage} from '@/components/voiceforge/data-page';
import {pageHead} from '@/lib/voiceforge/meta';
export const Route=createFileRoute('/_authenticated/dashboard/leads')({head:()=>pageHead('Leads','Manage your VoiceForge leads.'),component:()=> <DataPage kind="leads"/>});
import {createFileRoute} from '@tanstack/react-router';
import {DataPage} from '@/components/voiceforge/data-page';
import {pageHead} from '@/lib/voiceforge/meta';
export const Route=createFileRoute('/_authenticated/dashboard/analytics')({head:()=>pageHead('Analytics','Manage your VoiceForge analytics.'),component:()=> <DataPage kind="analytics"/>});
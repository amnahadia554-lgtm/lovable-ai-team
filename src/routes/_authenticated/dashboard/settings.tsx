import {createFileRoute} from '@tanstack/react-router';
import {DataPage} from '@/components/voiceforge/data-page';
import {pageHead} from '@/lib/voiceforge/meta';
export const Route=createFileRoute('/_authenticated/dashboard/settings')({head:()=>pageHead('Settings','Manage your VoiceForge settings.'),component:()=> <DataPage kind="settings"/>});
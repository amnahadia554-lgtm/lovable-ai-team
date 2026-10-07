import {createFileRoute} from '@tanstack/react-router';
import {DataPage} from '@/components/voiceforge/data-page';
import {pageHead} from '@/lib/voiceforge/meta';
export const Route=createFileRoute('/_authenticated/dashboard/calls')({head:()=>pageHead('Calls','Manage your VoiceForge calls.'),component:()=> <DataPage kind="calls"/>});
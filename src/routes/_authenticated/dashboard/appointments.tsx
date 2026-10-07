import {createFileRoute} from '@tanstack/react-router';
import {DataPage} from '@/components/voiceforge/data-page';
import {pageHead} from '@/lib/voiceforge/meta';
export const Route=createFileRoute('/_authenticated/dashboard/appointments')({head:()=>pageHead('Appointments','Manage your VoiceForge appointments.'),component:()=> <DataPage kind="appointments"/>});
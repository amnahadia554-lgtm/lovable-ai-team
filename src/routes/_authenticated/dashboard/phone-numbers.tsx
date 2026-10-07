import {createFileRoute} from '@tanstack/react-router';
import {DataPage} from '@/components/voiceforge/data-page';
import {pageHead} from '@/lib/voiceforge/meta';
export const Route=createFileRoute('/_authenticated/dashboard/phone-numbers')({head:()=>pageHead('Phone Numbers','Manage your VoiceForge phone numbers.'),component:()=> <DataPage kind="phone-numbers"/>});
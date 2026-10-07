import {createFileRoute} from '@tanstack/react-router';
import {Overview} from '@/components/voiceforge/overview';
import {pageHead} from '@/lib/voiceforge/meta';
export const Route=createFileRoute('/_authenticated/dashboard/')({head:()=>pageHead('Overview','Your VoiceForge workspace.'),component:Overview});
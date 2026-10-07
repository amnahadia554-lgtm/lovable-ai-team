import {createFileRoute} from '@tanstack/react-router';
import {AuthScreen} from '@/components/voiceforge/auth-screen';
import {pageHead} from '@/lib/voiceforge/meta';
export const Route=createFileRoute('/login')({head:()=>pageHead('Login','Secure access to your VoiceForge business workspace.'),component:()=> <AuthScreen initialMode="login"/>});

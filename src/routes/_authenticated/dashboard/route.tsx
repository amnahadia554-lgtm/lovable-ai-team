import {createFileRoute} from '@tanstack/react-router';
import {workspaceQuery} from '@/lib/voiceforge/query';
import {WorkspaceShell} from '@/components/voiceforge/workspace-shell';
import {RouteError,RouteNotFound} from '@/components/voiceforge/route-feedback';
export const Route=createFileRoute('/_authenticated/dashboard')({loader:({context})=>context.queryClient.ensureQueryData(workspaceQuery),component:WorkspaceShell,errorComponent:RouteError,notFoundComponent:RouteNotFound});
<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Treat the downloaded Next.js repository as the source of truth for existing business capabilities; the current TanStack starter is not evidence those capabilities were imported.
- Keep migration capability status in the migration ledger and open work in roadmap.md so pending provider, identity, and record verification cannot be mistaken for a completed migration.

- Adapt the source organization-owner model using authenticated Cloud reads and composite same-organization foreign keys; this prevents cross-tenant linked records without trusting client organization IDs.
- Keep Vapi payload construction in a pure shared module and all private-key requests in authenticated server functions; this supports schema tests without exposing credentials.
- Treat migration_identities as service-role-only with RLS and no visitor policy; imported identity ownership must be verified server-side before linking records.

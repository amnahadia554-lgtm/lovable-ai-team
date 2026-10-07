# VoiceForge upgrade

- [x] Acquire and inspect the existing GitHub source without running imported code.
- [x] Check current workspace and required secret names.
- [ ] Resolve import/platform mismatch and consent for changes to existing database/auth architecture.
- [ ] Adapt existing application and preserve source business capabilities.
- [ ] Improve Overview, agents, detail views, and multilingual creation wizard.
- [ ] Implement knowledge, phone numbers, calls, leads, appointments, analytics, integrations, and settings using real records only.
- [ ] Harden tenant isolation and real Vapi creation/update/failure persistence.
- [ ] Securely configure Vapi credentials before any real Vapi testing.
- [ ] Verify authenticated flows, tenant isolation, navigation, real assistant creation and stored ID.

Blocked: current workspace is a blank TanStack starter; GitHub source is Next.js with an existing external database. Architecture preservation was expressly requested; no database replacement has been performed. VAPI_PRIVATE_API_KEY is not configured in this project. Existing database, users, and file exports have not been supplied.
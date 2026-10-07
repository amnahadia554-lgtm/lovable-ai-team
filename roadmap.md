# VoiceForge upgrade

- [x] Acquire and inspect the existing GitHub source without running imported code.
- [x] Check current workspace and required secret names.
- [x] Resolve import/platform mismatch and consent for changes to existing database/auth architecture.
- [ ] Adapt existing application and preserve source business capabilities.
- [ ] Improve Overview, agents, detail views, and multilingual creation wizard.
- [ ] Implement knowledge, phone numbers, calls, leads, appointments, analytics, integrations, and settings using real records only.
- [ ] Harden tenant isolation and real Vapi creation/update/failure persistence.
- [ ] Securely configure Vapi credentials before any real Vapi testing.
- [ ] Verify authenticated flows, tenant isolation, navigation, real assistant creation and stored ID.

Current results: Cloud schema applied, real-data workspace and navigation adapted, Overview and agent wizard added, language payload tests added, latest compilation successful, signed-out auth page rendered without runtime errors.

External blockers: VAPI_PRIVATE_API_KEY absent; existing database/users/file exports missing; no auth users available for an authenticated test.

Remaining implementation: secure document upload/processing, actual phone assignment, browser voice testing, live event ingestion, complete lead/appointment editing and calendar rendering, full settings controls and password recovery completion. These are not yet production-ready and must not be reported complete.
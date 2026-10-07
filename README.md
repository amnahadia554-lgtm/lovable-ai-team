# Lovable AI Team

https://github.com/amnahadia34-dotcom/bolt-ai-voice-agent

Target: Import from GitHub

Continue and improve this EXISTING VoiceForge AI Voice Agent SaaS project imported from GitHub.

IMPORTANT:
This is NOT a new project.
First inspect the existing codebase, database integration, routes, components, authentication, and server functions.

DO NOT rebuild the application from scratch.
DO NOT remove working functionality.
DO NOT replace the existing Supabase architecture.
DO NOT expose private credentials.

My goal is to turn the existing project into a polished, production-quality AI Voice Agent SaaS.

==================================================
1. FIRST: INSPECT AND PRESERVE EXISTING WORK
==================================================

Before changing anything, inspect:

- Existing Supabase authentication
- Organization / multi-tenant architecture
- RLS policies
- Existing AI Agents page
- Create Agent flow
- Existing Vapi server-side function
- Existing routes
- Existing database schema
- Existing dashboard
- Existing sidebar/pages

Reuse and improve the existing implementation instead of recreating everything.

==================================================
2. UI/UX — MAJOR PROFESSIONAL UPGRADE
==================================================

Redesign the application to look like a premium enterprise AI Voice Agent platform.

The visual direction should communicate:

AI employees
Human-like voice conversations
Customer support
Sales calls
Lead capture
Appointment booking
AI + human collaboration

Use a sophisticated combination of:

- professional human photography
- AI agent avatars
- people communicating by phone
- modern voice waveforms
- call-status indicators
- clean enterprise SaaS components
- tasteful geometric image treatments
- premium dark/light UI

Human photography should be used professionally in hero areas, onboarding, AI agent identity and selected empty states.

Do NOT make the application look like a generic admin template.

Do NOT fill every page with random photos.

Keep the design clean and premium.

==================================================
3. OVERVIEW DASHBOARD
==================================================

Create a polished Overview dashboard.

Hero/welcome section:

“Your AI Team is Ready”

Supporting text:
“Create AI voice agents that answer calls, assist customers, capture leads and book appointments.”

Include an attractive professional human/voice-AI visual treatment.

Quick Actions:

Create AI Agent
Add Knowledge
Connect Phone
View Calls

Real dashboard cards:

AI Agents
Calls
Leads
Appointments

Only use real database values.

If there is no data, show 0.

Also add:

Recent Calls
Agent Activity

Use professional empty states when no data exists.

==================================================
4. AI AGENTS — VIRTUAL EMPLOYEE EXPERIENCE
==================================================

Redesign AI Agents so each agent visually feels like a professional virtual employee.

Agent cards should include:

Professional AI avatar
Agent Name
Role
Business Type / Department
Language
Voice
Status
Vapi Connection Status

Actions:

View
Edit
Test
Activate/Pause
Delete

Create a professional Agent Detail page with tabs:

Overview
Instructions
Knowledge
Voice
Calls
Tools
Settings

==================================================
5. CREATE AGENT EXPERIENCE
==================================================

Improve Create Agent into a polished multi-step wizard.

STEP 1 — Identity
Agent Name
Agent Role
Business Type
Avatar

STEP 2 — Personality
Professional
Friendly
Warm
Sales-focused
Support-focused
Custom

STEP 3 — Language & Voice

Include:

English
Urdu
Hindi
Arabic

Prepare architecture for additional languages.

Allow appropriate voice selection.

STEP 4 — Conversation

Business Description
Greeting
System Instructions

STEP 5 — Review

Show complete configuration before creation.

Then:

Create Agent

==================================================
6. FIX THE CURRENT REAL VAPI ERROR
==================================================

The existing Create Agent flow previously returned this Vapi error:

"transcriber.provider must be one of the following values:
assembly-ai, azure, custom-transcriber, deepgram, 11labs,
gladia, google, openai, soniox, talkscriber,
speechmatics, cartesia, xai, vapi"

Inspect the existing server-side Vapi assistant creation function.

Fix the ENTIRE assistant creation payload using the CURRENT valid Vapi API schema.

Verify:

transcriber provider/model
LLM provider/model
voice provider/voice ID
first message
system instructions
language-related configuration

Do not guess invalid provider values.

The flow must be:

Create Agent
→ secure server-side function
→ real Vapi API
→ REAL Vapi Assistant created
→ Vapi Assistant ID returned
→ save ID in Supabase
→ agent displayed as Connected/Active.

CRITICAL:

Never show Active if Vapi creation failed.

If Vapi fails:

show the useful real error
set status to Failed / Not Connected
do not create a fake Vapi ID.

==================================================
7. SECRETS
==================================================

This project was imported through GitHub.

Therefore do NOT assume secrets were transferred from the previous environment.

Check whether the required server-side secret exists:

VAPI_PRIVATE_API_KEY

If it does NOT exist, STOP before testing Vapi and tell me to add it securely through the current project's Secrets/environment interface.

Never ask me to paste the private key into chat.

Never put the private key in frontend code.

Never commit secrets to GitHub.

==================================================
8. KNOWLEDGE BASE — BUILD THE PAGE
==================================================

Remove the generic Coming Soon page.

Build a professional Knowledge Base interface.

Support:

Upload Knowledge
Drag & Drop

Architecture for:

PDF
DOCX
TXT
CSV

Also provide:

Add Text
Add FAQ

Display:

Name
Type
Assigned Agent
Processing Status
Upload Date
Actions

Each knowledge item must belong to organization_id.

Prepare secure architecture for Vapi Files/Knowledge integration.

Do not pretend a document has been processed unless the backend confirms it.

==================================================
9. PHONE NUMBERS
==================================================

Create a professional Phone Numbers page.

Support:

Phone Number
Provider
Assigned Agent
Direction
Status

Actions:

Connect Number
Assign Agent
Unassign
Configure

Prepare for Vapi/Twilio integration.

Do NOT automatically modify any existing external Vapi or Twilio number.

==================================================
10. CALLS
==================================================

Replace Coming Soon with a complete Calls interface.

Support:

Caller
Phone Number
Agent
Direction
Date/Time
Duration
Status
Outcome

Call Details should support:

Recording player
Full transcript
AI summary
Tools used
Lead information
Appointment information
Outcome

Also design a Live Call interface prepared for REAL events:

Agent avatar
Caller
Call duration
Listening
Thinking
Speaking
Tool Running
Human Handoff
Ended

Include a premium voice waveform/audio visualizer.

Do NOT fake live calls.

==================================================
11. LEADS
==================================================

Build the Leads page.

Fields:

Name
Phone
Email
Interested In
Agent
Call
Source
Status
Notes
Created At

Statuses:

New
Qualified
Follow-up
Converted
Closed

All lead data must be tenant-isolated using organization_id.

==================================================
12. APPOINTMENTS
==================================================

Build Appointments.

Support:

Customer
Phone
Email
Agent
Purpose
Date
Time
Status

Provide:

Calendar View
List View

Prepare architecture for Google Calendar integration.

Do not claim Google Calendar is connected until verified.

==================================================
13. ANALYTICS
==================================================

Build a polished Analytics page.

Use REAL database data only.

Support:

Total Calls
Answered Calls
Average Duration
Leads Generated
Appointments Booked
Conversion Rate
Agent Performance

Use professional charts.

When there is no real data show:

0
or
“No data yet”

Never generate fake analytics.

==================================================
14. INTEGRATIONS
==================================================

Build professional integration cards for:

Vapi
Twilio
Google Calendar
Supabase
CRM
Webhooks

Statuses:

Connected
Not Connected
Needs Attention

Only show Connected if actually verified.

==================================================
15. SETTINGS
==================================================

Build Settings with:

Business Profile
AI Defaults
Human Handoff
Team
Notifications
Security
Integrations/API

Business Profile:

Business Name
Industry
Email
Phone
Website
Timezone

AI Defaults:

Default Language
Default Voice
Default Greeting
Default Handoff Rules

Human Handoff:

Human phone number
Business hours
Handoff conditions
Fallback behavior

==================================================
16. HUMAN HANDOFF
==================================================

Prepare the platform for real human escalation.

Examples:

Caller asks for a human
AI cannot safely answer
Complaint/escalation
Business-specific rule
Agent/tool failure

The interface should clearly show when a call is:

AI Handling
Human Handoff Requested
Transferred
Completed

==================================================
17. MULTI-TENANCY & SECURITY
==================================================

Preserve and verify strict organization isolation.

One organization must NEVER access another organization's:

Agents
Knowledge
Calls
Leads
Appointments
Settings

Preserve:

Supabase Auth
RLS
organization_id isolation
secure server functions

Never expose:

VAPI_PRIVATE_API_KEY
Supabase service role key
or other private credentials.

==================================================
18. REMOVE GENERIC “COMING SOON” EXPERIENCE
==================================================

Replace generic Coming Soon boxes with real page layouts and useful empty states.

Examples:

“No calls yet — connect a phone number to start receiving calls.”

“No knowledge added — upload business information to train your AI agents.”

“No leads yet — leads captured by your AI agents will appear here.”

“No appointments yet — bookings made by your agents will appear here.”

==================================================
19. IMPORTANT: NO FAKE PRODUCTION DATA
==================================================

Do not invent:

calls
customers
leads
appointments
revenue
analytics
recordings
transcripts

Human images may be used as clearly visual AI-agent avatars or design imagery, but never represent invented people as real customers or employees.

==================================================
20. FINAL TESTING
==================================================

After implementing the improvements:

Run the application and fix:

TypeScript errors
build errors
runtime errors
broken routes
database errors
Vapi payload errors

Verify:

Signup works
Login works
Organization isolation works
All sidebar pages open correctly
Create Agent works
Urdu language option exists
Vapi secret is server-side only
Real Vapi Assistant creation works
Real Vapi Assistant ID is stored in Supabase
Failed Vapi calls are never displayed as Active

Do NOT simply tell me that implementation is complete.

Actually run/build the project and resolve errors that can be resolved within the codebase.

At the end provide a concise report:

1. What you improved
2. What is genuinely functional
3. What was successfully tested
4. What still requires external credentials/configuration
5. Any remaining errors

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/194543a9-cd61-436e-8228-3fc23b44e35b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

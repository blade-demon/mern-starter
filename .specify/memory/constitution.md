<!--
Sync Impact Report
Version change: 0.0.0 → 1.0.0
Modified principles:
- [PRINCIPLE_1_NAME] → I. Full-Stack JavaScript Consistency
- [PRINCIPLE_2_NAME] → II. API Contract-First Delivery
- [PRINCIPLE_3_NAME] → III. Test-Driven User Journeys
- [PRINCIPLE_4_NAME] → IV. Secure Authentication & Data Governance
- [PRINCIPLE_5_NAME] → V. Operations Readiness & Observability
Added sections:
- Platform & Security Constraints
- Delivery Workflow & Quality Gates
Removed sections:
- None
Templates requiring updates:
- ✅ .specify/templates/plan-template.md
- ✅ .specify/templates/spec-template.md
- ✅ .specify/templates/tasks-template.md
Follow-up TODOs:
- None
-->

# MERN Starter Constitution

## Core Principles

### I. Full-Stack JavaScript Consistency
- Product code MUST remain within the MERN stack: MongoDB with Mongoose, Express APIs, React clients, and a Node.js entry orchestrated by `index.js`.
- Shared data contracts reside in `models/` and act as the single source of truth for API payloads, server validation, and React data helpers.
- Client and server build scripts MUST compile under the Node.js/npm versions declared in `package.json` before merges are accepted.
Rationale: A consistent stack limits context switching, accelerates Heroku debugging, and allows any engineer to ship across the stack.

### II. API Contract-First Delivery
- Every feature MUST define or extend REST/JSON contracts under `specs/<feature>/contracts/` before routes or components are merged.
- Contracts MUST document authentication requirements plus pagination/ratelimiting rules when applicable, and plan.md MUST link to the artifacts.
- Pull requests cannot merge without updated Swagger/Markdown snippets or tests that prove the new contract behavior.
Rationale: Contract-first work protects React clients from backend drift and enables early validation with integrations such as Stripe or OAuth.

### III. Test-Driven User Journeys
- Each user story recorded in spec.md MUST have at least one automated test (backend integration, RTL, etc.) that fails before implementation starts.
- Critical flows (auth, billing, persistence) MUST include both success and failure-path coverage; single-unit tests are insufficient.
- CI (`npm test` or equivalent) MUST run before merge; any failure blocks release unless a maintainer grants a written exemption.
Rationale: Journey-level tests mitigate the high regression risk inherent in full-stack work and preserve deploy confidence.

### IV. Secure Authentication & Data Governance
- All secrets (OAuth, Stripe, session salts) live in environment variables; new keys MUST be mirrored in `.env.example`, and hardcoding is prohibited.
- Express inputs MUST be validated and sanitized before touching MongoDB, and Passport strategies enforce least privilege.
- Dependency upgrades MUST pass `snyk test`, or tasks.md MUST record a mitigation plan; unresolved critical CVEs justify rollbacks.
Rationale: The app handles payment data and social login tokens; mishandling secrets or dependencies jeopardizes user trust.

### V. Operations Readiness & Observability
- Feature work MUST keep `npm run dev`, `npm run client`, and the Heroku `Procfile` deployable; long-lived feature flags require cleanup tasks.
- Services MUST emit structured logs (request ID, user ID, action) and expose health indicators or alerts when behavior deviates.
- Production rollouts MUST include rollback steps and data migration plans (when relevant) before promotion.
Rationale: Ongoing operational hygiene lets the small team isolate incidents quickly and uphold availability promises.

## Platform & Security Constraints
- **Runtime**: Node.js 10.12.0 + npm 6.4.1 manage backend builds; `client/` uses React 18+, with storage via MongoDB Atlas-compatible Mongoose.
- **Authentication**: Google and GitHub Passport strategies remain the primary auth flows; additional methods require a security review.
- **Payments**: Stripe interactions run through a dedicated service layer to isolate PCI-sensitive code; non-production runs MUST use test keys.
- **Tooling**: Prettier is the sole formatter, CI MUST execute Snyk scans, and Heroku stays the only sanctioned deployment target absent governance approval.
- **Configuration**: Environment settings flow through helpers in `config/`, ensuring server/client share feature flags while preventing secret leakage into bundles.

## Delivery Workflow & Quality Gates
- Feature sequence is `/speckit.plan` → `/speckit.spec` → `/speckit.tasks`, and each artifact MUST explain how it satisfies the principles.
- plan.md MUST pass Constitution Check before Phase 0 research; otherwise reduce scope or seek a governance waiver.
- Each plan MUST list the code directories it touches (`client/`, backend, shared models) and how shared schemas are reused to avoid divergence.
- spec.md MUST list independent user journeys with explicit acceptance tests, and tasks.md MUST keep stories isolated to support incremental delivery.
- Before merging, reviewers MUST confirm contracts, tests, security requirements, and ops documentation are updated; missing items block approval.

## Governance
- This constitution outranks ad-hoc agreements; deviations require an RFC linked from spec.md plus approvals from two maintainers.
- Amendments MUST include (1) summary of motivation/impact, (2) updated Sync Impact Report, (3) recorded version bump rationale in git history, and (4) confirmation that templates/runtime docs stayed in sync.
- **Versioning policy**: Principle/governance removals or rewrites are MAJOR; new principles/sections or substantive expansions are MINOR; clarifications/typos are PATCH.
- A quarterly compliance review samples at least two recent features to ensure contracts, tests, and ops artifacts meet requirements; discovered gaps become tasks.
- Runtime guidance (README, quickstarts, agent files) MUST reference current principles, and contributors are accountable for flagging drift.

**Version**: 1.0.0 | **Ratified**: 2025-11-15 | **Last Amended**: 2025-11-15

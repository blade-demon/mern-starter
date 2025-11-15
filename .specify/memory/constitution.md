<!--
Sync Impact Report
Version change: 0.0.0 → 1.0.0
Modified principles:
- Template slot PRINCIPLE_1_NAME → Full-Stack JavaScript Parity
- Template slot PRINCIPLE_2_NAME → API Contract-First Delivery
- Template slot PRINCIPLE_3_NAME → Test-Driven User Journeys
- Template slot PRINCIPLE_4_NAME → Secure Auth & Data Stewardship
- Template slot PRINCIPLE_5_NAME → Operational Readiness & Observability
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

### I. Full-Stack JavaScript Parity
- All product code MUST stay within the canonical MERN stack: MongoDB with Mongoose, Express APIs, React client, and Node.js services orchestrated through `index.js`.
- Shared data contracts live under `models/` and MUST be the single source of truth for API payloads, server validation, and React data access helpers.
- Client and server build scripts MUST compile with the currently supported Node.js + npm engines declared in `package.json` before a change is accepted.
Rationale: A consistent stack minimizes context switching, makes debugging Heroku deployments predictable, and lets any engineer deliver across the stack.

### II. API Contract-First Delivery
- Every feature MUST define or extend REST/JSON contracts (request, response, and errors) inside `specs/<feature>/contracts/` before any route or component code merges.
- Contracts MUST include authentication expectations and pagination or rate-limiting rules when applicable, and plan.md MUST link to them.
- Pull requests MUST attach updated swagger/markdown snippets or tests proving the contract behavior before reviewers approve.
Rationale: Contract-first work protects the React client from backend churn and allows external integrations (Stripe, OAuth providers) to be validated early.

### III. Test-Driven User Journeys
- Each user story documented in spec.md MUST receive at least one automated test that fails before implementation (backend integration under `tests/` or React testing library equivalent).
- Critical flows (authentication, billing, data persistence) MUST have both happy-path and failure-path coverage; unit-only submissions are rejected.
- CI (or local `npm test`) MUST run before merging, and failures block release until resolved or explicitly waivered by a maintainer.
Rationale: Regression risk is highest in a full-stack codebase; enforcing journey-level tests keeps deployments safe and documents intent.

### IV. Secure Auth & Data Stewardship
- All secrets (OAuth keys, Stripe secrets, session salts) MUST be stored via environment variables and never hard-coded; `.env.example` updates accompany new secrets.
- Inputs received through Express routes MUST be validated and sanitized before touching MongoDB, and Passport strategies MUST enforce least-privilege scopes.
- Dependency updates MUST pass `snyk test` or include a mitigation plan tracked in tasks.md; failing to patch critical CVEs is grounds for rollback.
Rationale: The app handles payment data and social-auth tokens, so mishandling secrets or dependencies directly threatens users and platform trust.

### V. Operational Readiness & Observability
- Feature work MUST keep `npm run dev`, `npm run client`, and the Heroku `Procfile` path deployable; no long-lived feature flags without documented cleanup tasks.
- All services MUST emit structured logs (request id, user id, action) and surface key health metrics or alerts when something deviates from expected behavior.
- Deployment plans MUST document rollback steps and data migrations (if any) before promoting to production.
Rationale: Consistent operational hygiene keeps the small team able to triage incidents quickly and meet availability commitments.

## Platform & Security Constraints
- **Runtime**: Node.js 10.12.0 + npm 6.4.1 for server builds, React 18+ for the `client/` app, MongoDB Atlas-compatible storage via Mongoose ODM.
- **Authentication**: Passport strategies for Google/GitHub MUST remain primary auth mechanisms; introducing alternatives demands explicit security review.
- **Payments**: Stripe interactions go through the dedicated service layer to keep PCI-sensitive code isolated; test keys MUST gate non-production runs.
- **Tooling**: Prettier is the canonical formatter, Snyk scanning MUST run on CI, and Heroku is the authoritative deployment target unless governance approves another.
- **Configuration**: Environment configuration MUST flow through `config/` helpers so server and client share consistent feature toggles and secrets are never bundled client-side.

## Delivery Workflow & Quality Gates
- Feature discovery flows through `/speckit.plan` → `/speckit.spec` → `/speckit.tasks`; each artifact MUST cite how it satisfies the principles above.
- Constitution Check in plan.md MUST pass before research can start; specs that fail must either narrow scope or solicit governance approval.
- Every plan MUST document the source code directories that will change (`client/` vs backend) and how shared models are reused to avoid drift.
- Specs MUST list independent user journeys with explicit acceptance tests; tasks.md MUST keep stories isolated so they can be delivered incrementally.
- Before merge, reviewers confirm contracts, tests, security requirements, and operational runbooks are updated; incomplete fields constitute a block.

## Governance
- This constitution supersedes ad-hoc conventions; deviations require an RFC linked from the relevant spec.md and approval by two maintainers.
- Amendments require: (1) motivation + impact summary, (2) updated Sync Impact Report, (3) version bump rationale logged in git history, and (4) confirmation that templates and runtime docs are synchronized.
- **Versioning**: MAJOR for removing/replacing principles or governance, MINOR for adding principles/sections or expanding scope, PATCH for clarifications only.
- A quarterly compliance review samples at least two recent features to ensure contracts, tests, and operational artifacts match the rules; findings become tasks.
- Runtime guidance (README, quickstarts, agent files) MUST reference the active principles, and contributors are responsible for flagging drift when noticed.

**Version**: 1.0.0 | **Ratified**: 2025-11-15 | **Last Amended**: 2025-11-15

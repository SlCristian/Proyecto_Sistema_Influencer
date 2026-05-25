# AGENTS.md — Proyecto Sistema Influencer

## Purpose

AI-native development workspace for an influencer outreach and scheduling platform.

This repository is designed around:
- specialized AI agents,
- reusable engineering skills,
- workflow-driven architecture,
- operational consistency,
- scalable system design.

The project currently contains:
- AI agent definitions,
- reusable engineering skills,
- architectural standards,
- operational conventions,
- documentation structure.

Application code will be generated progressively inside the appropriate directories.

---

# Project Vision

The platform manages the complete lifecycle of influencer outreach operations.

Core workflows include:
- AI-assisted influencer generation
- Influencer validation
- Invitation workflows
- Volunteer coordination
- Meeting scheduling
- Notification orchestration
- Operational analytics
- KPI tracking
- Workflow observability

The platform follows:
- human-in-the-loop workflows,
- AI-assisted generation,
- event-driven orchestration,
- workflow-based operational design.

AI assists workflows.
Humans remain responsible for validation and operational decisions.

---

# Core Architecture Philosophy

The platform is NOT CRUD-driven.

The platform is:
- workflow-driven,
- event-driven,
- async-first,
- operationally observable.

Every major domain action should:
- emit events,
- support observability,
- support analytics,
- preserve workflow consistency,
- remain traceable.

Examples:
- influencer.generated
- influencer.validated
- invitation.sent
- meeting.scheduled
- notification.delivered

---

# Architecture Principles

## Backend Architecture

- Modular monolith architecture
- Clear domain boundaries
- Workflow-oriented services
- Queue-driven processing
- Event-based coordination
- Observable infrastructure

Primary backend stack:
- NestJS
- PostgreSQL
- Prisma
- Redis
- BullMQ
- JWT
- class-validator / class-transformer

---

## Frontend Architecture

- Feature-based frontend architecture
- Domain-oriented UI organization
- Server Actions oriented workflows
- Reusable UI systems
- Workflow-driven interfaces
- Analytics-ready dashboards

Primary frontend stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- react-hook-form
- zod
- Recharts

---

## AI Architecture

AI is used as:
- workflow augmentation,
- influencer generation assistance,
- operational support.

AI does NOT:
- control workflows,
- make critical operational decisions,
- bypass validation processes.

AI outputs must:
- remain validated,
- remain observable,
- support deduplication,
- preserve workflow safety.

---

# Domain Entities

Primary domain entities include:

- Volunteer
- Influencer
- Campaign
- Invitation
- Meeting
- Availability
- Notification
- WorkflowEvent

Additional entities may evolve as workflows expand.

---

# Repository Structure

| Path | Purpose |
|---|---|
| `agents/` | AI agent role definitions |
| `skills/` | Reusable engineering standards and implementation patterns |
| `apps/` | Frontend and backend application code |
| `packages/` | Shared libraries and reusable packages |
| `commands/` | OpenCode operational commands |
| `scripts/` | Automation and operational scripts |
| `docs/` | Long-term architectural and operational documentation |
| `workflows/` | Workflow orchestration definitions |

---

# Documentation Structure

All long-term knowledge must be documented inside `/docs`.

Documentation structure:

```text
docs/
├── architecture/
├── workflows/
├── decisions/
├── onboarding/
├── integrations/
├── analytics/
├── observability/
└── known-issues/
```

Documentation responsibilities:

| Directory | Responsibility |
|---|---|
| `docs/architecture/` | System architecture, module boundaries, folder structures |
| `docs/workflows/` | Workflow orchestration and lifecycle documentation |
| `docs/decisions/` | Architectural Decision Records (ADRs) |
| `docs/onboarding/` | Developer onboarding and project understanding |
| `docs/integrations/` | External providers and integration behavior |
| `docs/analytics/` | KPI definitions and reporting systems |
| `docs/observability/` | Logging, monitoring, tracing, alerting |
| `docs/known-issues/` | Technical debt, unresolved issues, temporary limitations |

Documentation should evolve together with the system.

Avoid:
- outdated documentation,
- undocumented workflows,
- hidden architectural decisions.

---

# AI Agent Orchestration Rules

Agents collaborate as specialized engineering systems.

Each agent owns a specific responsibility domain.

---

## frontend-architect

Responsible for:
- frontend architecture,
- feature structure,
- UI scalability,
- component organization,
- dashboard architecture,
- frontend workflows.

Load when:
- building UI,
- creating frontend features,
- designing dashboards,
- organizing frontend architecture.

---

## backend-architect

Responsible for:
- backend architecture,
- modular monolith organization,
- API structure,
- service boundaries,
- backend scalability.

Load when:
- creating backend modules,
- designing APIs,
- organizing backend workflows,
- defining service boundaries.

---

## workflow-engineer

Responsible for:
- workflow orchestration,
- state transitions,
- event-driven coordination,
- queue orchestration,
- async systems.

Load when:
- implementing workflows,
- designing event systems,
- coordinating queues,
- defining lifecycle orchestration.

---

## database-architect

Responsible for:
- Prisma schema design,
- database normalization,
- indexing,
- relations,
- persistence architecture.

Load when:
- modifying schemas,
- designing relations,
- optimizing queries,
- evolving persistence systems.

---

## ai-integration-engineer

Responsible for:
- AI provider integrations,
- prompt pipelines,
- AI validation,
- AI observability,
- AI workflow coordination.

Load when:
- integrating Gemini,
- implementing AI generation,
- validating AI outputs,
- building AI workflows.

---

## integration-engineer

Responsible for:
- Slack integrations,
- email providers,
- external APIs,
- webhooks,
- notification delivery systems.

Load when:
- integrating external providers,
- implementing notifications,
- managing webhooks,
- coordinating provider communication.

---

## analytics-engineer

Responsible for:
- KPI systems,
- dashboards,
- analytics pipelines,
- operational metrics,
- reporting systems.

Load when:
- implementing dashboards,
- building KPIs,
- creating reports,
- designing analytics systems.

---

## observability-engineer

Responsible for:
- logging,
- tracing,
- monitoring,
- operational visibility,
- debugging systems.

Load when:
- implementing logs,
- adding tracing,
- building monitoring systems,
- debugging workflow infrastructure.

---

## security-engineer

Responsible for:
- authentication,
- authorization,
- RBAC,
- workflow protection,
- API security,
- secret management.

Load when:
- implementing auth,
- protecting APIs,
- validating permissions,
- securing workflows.

---

## documentation-manager

Responsible for:
- documentation consistency,
- architectural knowledge,
- onboarding documentation,
- workflow documentation,
- project operational memory.

Load when:
- updating docs,
- documenting workflows,
- recording architecture decisions,
- organizing operational knowledge.

---

# Skill Loading Rules

Skills should be loaded according to the implementation context.

---

## Frontend Skills

| Context | Skill |
|---|---|
| Frontend architecture | `Nextjs` |
| UI workflows | `ui-system` |
| Forms | `forms` |
| Dashboards | `dashboard` |

---

## Backend Skills

| Context | Skill |
|---|---|
| NestJS architecture | `nestjs` |
| Database modeling | `prisma` |
| PostgreSQL patterns | `postgres` |
| Workflow orchestration | `workflow-engine` |
| Notifications | `notifications` |
| Queues | `queues` |
| Authentication | `auth` |
| Validation | `validation` |
| Integrations | `integrations` |
| Observability | `observability` |
| Analytics | `analytics` |
| Security | `security` |
| Caching | `caching` |

---

## Core Skills

| Context | Skill |
|---|---|
| AI collaboration | `ai-collaboration` |
| Project conventions | `project-standards` |
| Documentation | `documentation` |

---

# Engineering Standards

All generated code should follow:

- consistency over cleverness,
- reusability over duplication,
- explicit workflows over hidden behavior,
- observable systems over opaque systems,
- modularity over tight coupling.

---

# Naming Conventions

| Type | Convention |
|---|---|
| Directories | kebab-case |
| React components | PascalCase |
| Variables | camelCase |
| Constants | UPPER_SNAKE_CASE |
| Database tables | snake_case |
| Prisma models | PascalCase |

---

# Workflow Engineering Standards

Workflows should:
- remain explicit,
- emit events,
- support retries,
- support observability,
- preserve auditability.

Avoid:
- hidden workflow transitions,
- synchronous-heavy orchestration,
- scattered side effects.

---

# Observability Standards

Critical systems must expose:
- logs,
- metrics,
- tracing,
- workflow visibility,
- queue visibility,
- provider failures.

Critical workflows should support:
- correlation IDs,
- workflow tracing,
- operational debugging.

---

# Analytics Standards

Operational metrics should remain:
- measurable,
- reproducible,
- observable,
- scalable.

Dashboards should:
- prioritize operational clarity,
- avoid expensive blocking queries,
- support future scalability.

---

# Security Standards

Critical systems must:
- validate permissions,
- validate external input,
- protect secrets,
- preserve authorization boundaries.

Avoid:
- implicit trust,
- hardcoded credentials,
- unsafe workflow execution.

---

# Integration Standards

External providers should:
- remain isolated,
- remain replaceable,
- support retries,
- preserve observability.

Avoid:
- provider lock-in,
- scattered integration logic.

---

# Documentation Standards

Documentation should:
- remain updated,
- remain structured,
- preserve architectural context,
- support onboarding,
- support AI collaboration.

Avoid:
- undocumented workflows,
- outdated references,
- hidden operational logic.

---

# Development Workflow

Recommended workflow:

1. Identify implementation domain
2. Load appropriate agent
3. Load corresponding skill(s)
4. Implement feature/workflow
5. Add observability if needed
6. Update analytics if needed
7. Document important architectural decisions
8. Update related documentation

---

# Current Development State

Current repository state:
- architecture phase completed,
- AI agents completed,
- engineering skills completed,
- operational standards established.

Application implementation begins next.

---

# Operational Philosophy

This repository is designed to evolve as:
- an AI-native engineering workspace,
- a workflow-oriented platform,
- a scalable operational system.

Architecture decisions should prioritize:
- long-term maintainability,
- operational visibility,
- workflow consistency,
- modular scalability,
- AI-assisted development alignment.

---
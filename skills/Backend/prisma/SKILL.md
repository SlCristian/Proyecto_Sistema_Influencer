# Prisma Skill

## Purpose
Define Prisma architecture, schema organization, relational mapping standards, query strategies, migration workflows, and database access patterns for the entire backend system.

This skill standardizes how Prisma integrates with PostgreSQL, NestJS modules, workflows, and business logic using scalable and maintainable backend practices.

---

## Prisma Philosophy

Prisma is the bridge between:
- Business workflows
- Domain logic
- Relational persistence
- Type-safe database access
- Scalable backend architecture

Prisma should reinforce:
- Modularity
- Type safety
- Relational consistency
- Workflow-oriented persistence

---

## Core Principles

- Type safety first
- Relational consistency
- Workflow-oriented persistence
- Modular query organization
- Maintainable schema design
- Explicit relationships
- Reusability over duplication
- AI-friendly database access

---

## Prisma Architecture

Prisma should integrate with:
- NestJS modules
- Workflow services
- Business logic services
- Analytics systems
- Notification systems
- Automation pipelines

Prisma should NOT:
- Control business logic
- Replace workflows
- Centralize unrelated logic

---

## Prisma Structure

Recommended structure:

/src
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seeds/
│
├── database/
│   ├── prisma.service.ts
│   └── prisma.module.ts

---

## Schema Organization Rules

The schema should:
- Reflect domain boundaries
- Represent workflows explicitly
- Preserve relational integrity
- Remain readable
- Support future scalability

Avoid:
- Giant unreadable schemas
- Unclear relationships
- Random entity organization

---

## Model Design Rules

Models should:
- Represent business concepts
- Maintain clear relationships
- Support workflow traceability
- Remain modular

Examples:
- Campaign
- Influencer
- Invitation
- Notification
- WorkflowEvent

---

## Naming Conventions

### Models
Use PascalCase.

Examples:
- Campaign
- WorkflowEvent
- InfluencerInvitation

---

### Fields
Use camelCase.

Examples:
- createdAt
- updatedAt
- campaignStatus

---

### Relations
Use descriptive relation names.

Examples:
- campaignId
- influencerId
- notificationId

---

## Relationship Rules

Relationships must:
- Be explicit
- Use proper relation definitions
- Preserve integrity
- Support workflow traceability

Prefer:
- One-to-many relations
- Explicit many-to-many tables
- Clear ownership relationships

Avoid:
- Hidden relationships
- Ambiguous relation naming
- Weak relational structures

---

## Workflow Persistence Rules

Workflow-related entities should persist:
- States
- Timestamps
- Event history
- Processing status
- Automation references

Examples:
- pending
- approved
- rejected
- completed
- failed

Prisma models must support operational visibility.

---

## Timestamp Rules

Important models should include:

- createdAt
- updatedAt

Workflow-heavy models may also include:
- processedAt
- approvedAt
- rejectedAt
- completedAt

Use:
- @default(now())
- @updatedAt

---

## UUID Rules

Prefer UUID primary keys.

Example:

id String @id @default(uuid())

Avoid:
- Mixed ID strategies
- Inconsistent primary key patterns

---

## Query Rules

Queries should:
- Remain modular
- Support readability
- Avoid excessive nesting
- Use reusable query patterns
- Remain performance-friendly

Avoid:
- Giant Prisma queries
- Massive include chains
- Repeated relational queries

---

## Service Integration Rules

Prisma should be accessed through:
- Services
- Repository-like abstractions when necessary
- Modular domain boundaries

Avoid:
- Direct controller access
- Scattered Prisma logic
- Cross-module query chaos

---

## Transaction Rules

Use Prisma transactions for:
- Multi-step workflows
- Critical state transitions
- Related workflow persistence
- Sensitive operations

Avoid:
- Partial workflow updates
- Inconsistent relational writes

Example use cases:
- Campaign approval workflows
- Invitation processing
- Notification orchestration

---

## Migration Rules

Migrations must:
- Be incremental
- Be descriptive
- Preserve integrity
- Support rollback strategies when possible

Avoid:
- Dangerous destructive changes
- Random schema mutations
- Untracked database modifications

---

## Seed Rules

Seeds should:
- Support development environments
- Remain modular
- Avoid production-sensitive data
- Support testing workflows

Examples:
- Development users
- Workflow states
- Dashboard demo data

---

## Reusability Rules

Before creating new queries:
- Check existing services
- Reuse query patterns
- Reuse workflow persistence logic
- Reuse relational structures

Avoid duplicated Prisma logic.

---

## Performance Rules

Prefer:
- Selective field fetching
- Optimized includes
- Pagination
- Indexed query support
- Efficient filtering

Avoid:
- N+1 query patterns
- Overfetching
- Massive nested relations
- Full-table queries without reason

---

## Pagination Rules

Large collections should support:
- Pagination
- Filtering
- Sorting
- Search

Examples:
- Campaign lists
- Influencer dashboards
- Workflow logs

---

## Soft Delete Rules

Prefer soft deletes for:
- Workflow-heavy entities
- Audit-sensitive systems
- Analytics-sensitive records

Use:
- deletedAt

Avoid:
- Permanent deletion of critical workflow history

---

## Workflow Event Persistence Rules

Workflow event models should support:
- Event names
- Event timestamps
- Processing status
- Related entity references
- Failure tracking

Examples:
- campaign.created
- invitation.accepted
- workflow.failed

---

## Analytics Support Rules

Schemas should support:
- Dashboard metrics
- Workflow analytics
- Historical reporting
- Operational visibility

Design models with future analytics in mind.

---

## AI Prisma Development Rules

AI agents must:
- Preserve relational integrity
- Reuse existing query patterns
- Respect module boundaries
- Maintain naming consistency
- Avoid duplicated relational logic
- Preserve workflow traceability

---

## Security Rules

Prisma usage must:
- Protect sensitive data
- Avoid exposing hidden fields
- Validate access permissions
- Prevent unauthorized workflow access

Sensitive data should never be exposed unintentionally.

---

## Error Handling Rules

Prisma operations should:
- Handle failures gracefully
- Preserve workflow consistency
- Avoid silent query failures
- Support transaction rollback

Avoid:
- Ignored database failures
- Hidden relational inconsistencies

---

## Scalability Principles

Prisma architecture must support:
- Additional modules
- Future workflows
- Event-driven systems
- Queue integration
- Analytics growth
- Automation expansion

---

## Monitoring Principles

Database access should support:
- Query monitoring
- Workflow visibility
- Performance tracking
- Failure monitoring

---

## Future Expansion Principles

The Prisma architecture should support future:
- Queue systems
- Background workers
- Event buses
- Microservice evolution
- AI workflow systems

---

## Forbidden Practices

- Direct Prisma access from controllers
- Giant nested queries
- Duplicated relational logic
- Unstructured schema organization
- Missing workflow persistence
- Hidden state mutations
- Random migrations
- Massive unoptimized includes
- Cross-module query chaos

---

## Recommended Prisma Features

Prefer using:
- Relations
- Transactions
- Prisma Client
- UUIDs
- Migrations
- Select queries
- Include queries carefully
- Typed workflows

---

## Recommended Stack

- Prisma ORM
- PostgreSQL
- NestJS
- TypeScript

---

## Related Skills

- postgres
- nestjs
- workflow-engine
- documentation
- ai-collaboration
- project-standards
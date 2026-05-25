# PostgreSQL Skill

## Purpose
Define database architecture, relational modeling standards, workflow-oriented persistence strategies, data integrity rules, scalability principles, and database organization for the entire application.

This skill standardizes how PostgreSQL is used to support scalable business workflows, analytics, integrations, automation systems, and operational consistency.

---

## Database Philosophy

The database represents:
- Business workflows
- Domain relationships
- State transitions
- Operational history
- System consistency
- Business traceability

The database is not just storage.

It is a representation of the operational system.

---

## Core Principles

- Relational thinking first
- Data consistency over shortcuts
- Explicit relationships
- Workflow-oriented persistence
- Scalable schema design
- Auditability
- Maintainable migrations
- AI-friendly database structure

---

## Database Architecture

The database should:
- Reflect domain boundaries
- Support modular workflows
- Preserve data integrity
- Support analytics and dashboards
- Support future automation systems
- Support event-driven workflows

---

## Relational Design Rules

Relationships must:
- Be explicit
- Use foreign keys
- Maintain integrity
- Support scalability
- Reflect real business relationships

Prefer:
- Normalized structures
- Clear ownership relationships
- Junction tables for many-to-many relations

Avoid:
- Duplicated relational data
- Hidden relationships
- Weak schema design

---

## Entity Design Rules

Entities should:
- Represent business concepts
- Remain focused
- Have clear responsibilities
- Avoid excessive coupling
- Support workflow traceability

Examples:
- campaigns
- influencers
- invitations
- notifications
- workflow_events

---

## Workflow-Oriented Persistence

Workflows should persist:
- States
- Timestamps
- Workflow history
- Transition events
- Automation tracking

Examples:
- pending
- approved
- rejected
- completed
- failed

The database must support workflow visibility.

---

## State Persistence Rules

State management should:
- Use explicit state fields
- Support controlled transitions
- Preserve workflow history
- Prevent invalid states

Avoid:
- Implicit workflow states
- Random status mutations
- Missing state tracking

---

## Auditability Rules

Important workflows should support:
- created_at
- updated_at
- audit logs
- workflow tracking
- traceability

Critical operations should remain auditable.

---

## Timestamp Rules

Entities should generally include:
- created_at
- updated_at

Workflow-heavy entities may also include:
- processed_at
- approved_at
- rejected_at
- completed_at

Timestamps improve:
- monitoring
- analytics
- workflow tracking
- debugging

---

## Naming Conventions

### Tables
Use snake_case and plural names.

Examples:
- campaigns
- influencer_invitations
- workflow_events

---

### Columns
Use snake_case.

Examples:
- created_at
- updated_at
- campaign_status

---

### Foreign Keys
Use explicit relational naming.

Examples:
- campaign_id
- influencer_id
- notification_id

---

## Primary Key Rules

Prefer:
- UUID primary keys
- Consistent ID strategy

Avoid:
- Mixed ID patterns
- Unclear relational identifiers

---

## Constraint Rules

Use:
- Foreign key constraints
- Unique constraints
- NOT NULL constraints
- Check constraints when appropriate

Constraints should enforce business consistency.

Avoid:
- Weak integrity enforcement
- Optional critical relationships
- Missing validation constraints

---

## Indexing Rules

Indexes should support:
- Dashboard queries
- Workflow queries
- Filtering
- Sorting
- Analytics
- High-frequency operations

Examples:
- status indexes
- timestamp indexes
- relational indexes

Avoid:
- Excessive indexing
- Unnecessary duplicate indexes

---

## Migration Rules

Migrations must:
- Be incremental
- Be reversible when possible
- Remain descriptive
- Preserve consistency
- Avoid dangerous destructive changes

Avoid:
- Massive undocumented migrations
- Random schema mutations
- Direct production schema editing

---

## Soft Delete Rules

Prefer soft deletes for:
- Workflow-heavy entities
- Audit-sensitive systems
- Operational tracking

Use:
- deleted_at

Avoid:
- Permanent deletion of critical operational data
- Losing workflow history

---

## Analytics Support Rules

The database should support:
- Dashboard analytics
- Reporting systems
- Historical metrics
- Operational monitoring

Design schemas with future analytics in mind.

---

## Notification Persistence Rules

Notifications should persist:
- Delivery state
- Timestamps
- Retry tracking
- Related workflow references

Examples:
- pending
- sent
- failed
- retrying

---

## Event Persistence Rules

Workflow events should support:
- Event tracking
- Event timestamps
- Related entity references
- Processing status
- Automation visibility

Examples:
- campaign.created
- invitation.sent
- workflow.failed

---

## Transaction Rules

Use transactions for:
- Critical workflow operations
- Multi-step state transitions
- Financial or sensitive operations
- Related workflow updates

Avoid:
- Partial workflow persistence
- Inconsistent state updates

---

## Performance Principles

Prefer:
- Efficient queries
- Proper indexing
- Relational optimization
- Controlled joins
- Scalable query structures

Avoid:
- N+1 query patterns
- Excessive joins
- Unoptimized analytics queries
- Massive payload retrieval

---

## Scalability Principles

The database architecture must support:
- Future modules
- Additional workflows
- Event-driven systems
- Dashboard expansion
- Notification systems
- Automation growth

---

## AI Database Development Rules

AI agents must:
- Respect relational integrity
- Reuse existing relationships
- Preserve naming consistency
- Avoid duplicated entities
- Maintain workflow traceability
- Follow migration standards

---

## Security Rules

The database must:
- Protect sensitive data
- Avoid exposing secrets
- Support role-based access
- Preserve workflow integrity

Sensitive information must never be stored insecurely.

---

## Backup and Reliability Principles

The system should support:
- Backups
- Recovery strategies
- Migration safety
- Operational resilience

Critical operational data must remain recoverable.

---

## Monitoring Principles

Database monitoring should support:
- Query monitoring
- Workflow monitoring
- Performance tracking
- Analytics visibility
- Failure tracking

---

## Future Expansion Principles

The database should support future:
- Queue systems
- Event systems
- Background workers
- Analytics engines
- Microservice evolution
- AI workflow systems

---

## Forbidden Practices

- Duplicated relational data
- Missing foreign keys
- Weak schema integrity
- Random table structures
- Massive denormalization without reason
- Hidden workflow states
- Untracked workflow changes
- Missing timestamps
- Unstructured migrations
- Hardcoded relational assumptions

---

## Recommended PostgreSQL Features

Prefer using:
- UUIDs
- Indexes
- Transactions
- JSONB when appropriate
- Foreign keys
- Constraints
- Views for analytics when necessary

---

## Related Skills

- nestjs
- workflow-engine
- prisma
- documentation
- ai-collaboration
- project-standards
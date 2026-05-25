# Workflow Engine Skill

## Purpose
Define workflow architecture, event-driven processing, automation patterns, state management, orchestration rules, and business process standards across the entire application.

This skill standardizes how workflows, automations, notifications, events, and multi-step business processes are designed and implemented.

---

## Workflow Philosophy

The system is workflow-oriented.

Features are not isolated CRUD operations.

Features represent:
- Business processes
- State transitions
- Operational flows
- Automation pipelines
- Event-driven systems

---

## Core Workflow Principles

- Workflows first
- Event-driven thinking
- Modular workflows
- Reusable workflow logic
- Clear state transitions
- Automation-friendly architecture
- Scalable orchestration
- AI-friendly process structure

---

## Workflow Responsibilities

Workflows are responsible for:
- Coordinating business processes
- Managing state transitions
- Triggering notifications
- Executing automations
- Handling asynchronous operations
- Orchestrating integrations
- Managing operational flows

---

## Workflow Architecture

Workflows should remain modular.

Workflow logic should live inside:
- Services
- Workflow modules
- Automation handlers
- Event processors

Avoid:
- Giant workflow services
- Workflow chaos across modules
- Tight workflow coupling

---

## Workflow Structure

Recommended structure:

/modules
└── workflow-name/
    ├── services/
    ├── handlers/
    ├── events/
    ├── actions/
    ├── processors/
    ├── types/
    ├── dto/
    └── workflow-name.module.ts

---

## Workflow Lifecycle

Each workflow should define:

1. Trigger
2. Validation
3. State transition
4. Processing
5. Notifications
6. Integrations
7. Logging
8. Final state

---

## State Management Rules

Workflows should:
- Use explicit states
- Support predictable transitions
- Prevent invalid states
- Maintain traceability
- Preserve workflow consistency

Examples:
- pending
- approved
- rejected
- scheduled
- completed

Avoid:
- Undefined states
- Random state mutations
- Hidden transitions

---

## Event-Driven Principles

Workflows should support:
- Event emission
- Event listeners
- Future queue systems
- Background processing
- Async orchestration

Examples:
- campaign.created
- influencer.approved
- invitation.sent
- workflow.failed

---

## Event Rules

Events must:
- Be descriptive
- Remain domain-oriented
- Support scalability
- Avoid excessive coupling

Prefer:
- Domain events
- Workflow events
- Notification events

Avoid:
- Generic event names
- Unstructured event systems

---

## Automation Rules

Automations should:
- Remain isolated
- Be reusable
- Support retries
- Handle failures gracefully
- Remain observable

Examples:
- Email automation
- Slack notifications
- Status updates
- Scheduled workflows

---

## Async Processing Rules

Long-running workflows should:
- Use async processing
- Support retries
- Support future queue integration
- Avoid blocking requests

Avoid:
- Heavy synchronous workflows
- Long request chains
- Blocking operations

---

## Notification Workflow Rules

Notification workflows should support:
- Email notifications
- Slack notifications
- Dashboard notifications
- System alerts

Notifications must:
- Remain modular
- Be reusable
- Support future channels

---

## Integration Workflow Rules

External integrations should:
- Remain isolated
- Support retries
- Handle external failures
- Maintain logging
- Support scalability

Examples:
- Slack API
- Email providers
- External campaign systems

---

## Workflow Error Handling Rules

Workflow failures must:
- Be logged
- Support retries when possible
- Preserve workflow traceability
- Avoid silent failures

Prefer:
- Explicit workflow errors
- Structured logging
- Recoverable workflows

Avoid:
- Hidden workflow failures
- Untracked async errors
- Unrecoverable automation chains

---

## Workflow Logging Rules

Important workflows should log:
- Workflow start
- Workflow completion
- Failures
- State transitions
- External integrations
- Automation events

Logs should help:
- Monitoring
- Debugging
- Auditing
- Operational visibility

---

## Workflow Modularity Rules

Each workflow should:
- Have a single responsibility
- Remain isolated
- Support future expansion
- Avoid unrelated logic

Avoid:
- Monolithic workflows
- Cross-domain workflow chaos
- Repeated orchestration logic

---

## AI Workflow Development Rules

AI agents must:
- Respect workflow boundaries
- Preserve workflow consistency
- Reuse existing workflow patterns
- Maintain event naming consistency
- Avoid duplicated automations
- Follow workflow lifecycle rules

---

## Scalability Principles

Workflow architecture must support:
- Future automation systems
- Queue systems
- Background workers
- Event-driven expansion
- Additional integrations
- Complex business processes

---

## Workflow-Oriented Design

The application should evolve as:

Business Events
→ Trigger Workflows
→ Trigger Automations
→ Trigger Notifications
→ Trigger Analytics
→ Update Dashboards

---

## Security Rules

Workflows must:
- Validate transitions
- Protect sensitive operations
- Verify permissions
- Avoid unauthorized state changes

Never trust client-driven workflow states.

---

## Performance Rules

Prefer:
- Async operations
- Lightweight orchestration
- Event-based processing
- Modular execution

Avoid:
- Massive synchronous chains
- Heavy workflow blocking
- Overcomplicated orchestration

---

## Monitoring Principles

Workflows should support:
- Observability
- Monitoring
- Failure tracking
- Operational metrics
- Analytics visibility

---

## Naming Conventions

### Workflow Events
Use domain.event format.

Examples:
- campaign.created
- invitation.accepted
- influencer.rejected

### Workflow Services
Use PascalCase with Workflow suffix.

Examples:
- CampaignInvitationWorkflow
- InfluencerApprovalWorkflow

### Workflow Handlers
Use descriptive naming.

Examples:
- SendInvitationHandler
- NotifySlackHandler

---

## Future Expansion Principles

The workflow engine should support future:
- Queues
- Schedulers
- Cron jobs
- Background workers
- Event buses
- Automation pipelines
- Microservice evolution

---

## Forbidden Practices

- Workflow logic inside controllers
- Random state transitions
- Hidden workflow chains
- Massive orchestration services
- Tight workflow coupling
- Duplicated workflow logic
- Hardcoded workflow states
- Unstructured event systems
- Blocking async workflows

---

## Recommended Future Technologies

Future integrations may include:
- BullMQ
- Redis
- Event Emitters
- Cron jobs
- Queue systems
- Background workers

These should integrate naturally with the workflow architecture.

---

## Related Skills

- nestjs
- forms
- dashboard
- ai-collaboration
- documentation
- project-standards
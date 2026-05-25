# Notifications Skill

## Purpose
Define notification architecture, event-driven communication systems, delivery workflows, notification channels, retry strategies, and operational messaging standards across the application.

This skill standardizes how notifications are triggered, processed, delivered, monitored, and integrated with workflows and automation systems.

---

## Notification Philosophy

Notifications are workflow reactions.

Notifications represent:
- Operational communication
- Workflow feedback
- System awareness
- Event-driven reactions
- User alerts
- Automation outputs

Notifications should remain:
- Modular
- Observable
- Reusable
- Event-driven
- Scalable

---

## Core Principles

- Event-driven notifications
- Decoupled communication
- Async-first architecture
- Reusable notification workflows
- Scalable delivery systems
- Clear delivery states
- Centralized notification handling
- AI-friendly notification structure

---

## Notification Architecture

Notifications should remain isolated inside:

/modules/notifications/

Recommended structure:

/modules/notifications/
├── services/
├── handlers/
├── providers/
├── templates/
├── dto/
├── events/
├── types/
├── utils/
└── notifications.module.ts

---

## Notification Responsibilities

Notifications are responsible for:
- Delivering workflow alerts
- Sending emails
- Sending Slack messages
- Sending dashboard alerts
- Tracking delivery status
- Handling retries
- Managing notification templates

Notifications should NOT:
- Contain core business logic
- Replace workflow orchestration
- Become tightly coupled to modules

---

## Notification Workflow

Recommended notification flow:

1. Workflow emits event
2. Notification handler reacts
3. Notification is prepared
4. Delivery provider executes
5. Delivery status is tracked
6. Failures are logged
7. Retries occur when needed

---

## Event-Driven Notification Rules

Notifications should react to:
- Domain events
- Workflow events
- Automation events

Examples:
- campaign.created
- campaign.approved
- invitation.sent
- volunteer.registered
- workflow.failed

Avoid:
- Direct notification calls from controllers
- Scattered notification logic

---

## Notification Channels

The architecture should support:
- Email notifications
- Slack notifications
- Dashboard notifications
- System alerts
- Future SMS support
- Future push notifications

Channels should remain modular and interchangeable.

---

## Email Notification Rules

Email notifications should:
- Use reusable templates
- Support async delivery
- Support retry logic
- Remain isolated from workflows

Examples:
- Invitation emails
- Approval emails
- Reminder emails

Avoid:
- Hardcoded email content
- Inline email generation
- Workflow logic inside email providers

---

## Slack Notification Rules

Slack notifications should:
- Support workflow alerts
- Support operational visibility
- Remain configurable
- Support environment-based configuration

Examples:
- Workflow failures
- Campaign approvals
- Automation alerts

Avoid:
- Hardcoded Slack logic
- Mixed workflow responsibilities

---

## Dashboard Notification Rules

Dashboard notifications should:
- Support operational awareness
- Support activity feeds
- Support workflow monitoring
- Support status tracking

Examples:
- Pending approvals
- Failed workflows
- New invitations

---

## Notification Provider Rules

Providers should:
- Remain isolated
- Handle delivery execution
- Support retries
- Handle provider failures
- Remain replaceable

Examples:
- EmailProvider
- SlackProvider
- DashboardNotificationProvider

Avoid:
- Provider-specific business logic
- Mixed workflow orchestration

---

## Notification Template Rules

Templates should:
- Remain reusable
- Support scalability
- Remain modular
- Support personalization

Examples:
- campaign-approved.template
- invitation-email.template

Avoid:
- Inline template duplication
- Hardcoded messaging everywhere

---

## Async Processing Rules

Notifications should:
- Prefer async delivery
- Avoid blocking workflows
- Support future queue systems
- Support background processing

Avoid:
- Synchronous heavy notification chains
- Blocking API requests

---

## Retry Rules

Failed notifications should:
- Support retries
- Preserve failure logs
- Track retry attempts
- Avoid infinite retry loops

Examples:
- Email provider unavailable
- Slack API timeout

---

## Delivery Status Rules

Notifications should persist delivery states.

Examples:
- pending
- sent
- delivered
- failed
- retrying

Notification tracking improves:
- Monitoring
- Debugging
- Analytics
- Operational visibility

---

## Notification Logging Rules

Notification systems should log:
- Delivery attempts
- Failures
- Retries
- Processing timestamps
- Provider responses when appropriate

Avoid:
- Silent notification failures
- Missing delivery visibility

---

## Notification Persistence Rules

Notifications should persist:
- Related entity references
- Workflow references
- Delivery timestamps
- Failure reasons
- Retry counts

Examples:
- campaignId
- workflowEventId
- notificationStatus

---

## Notification Modularity Rules

Notification workflows should:
- Remain isolated
- Be reusable
- Support future channels
- Avoid cross-domain coupling

Avoid:
- Giant notification services
- Mixed delivery responsibilities
- Notification chaos across modules

---

## Workflow Integration Rules

Workflows should:
- Emit events
- Allow notification reactions
- Avoid direct provider dependency

Good example:

Workflow
→ emits event

Notification Handler
→ reacts and sends notifications

Bad example:

Workflow
→ directly sends emails everywhere

---

## AI Notification Development Rules

AI agents must:
- Reuse providers
- Reuse templates
- Preserve event-driven architecture
- Avoid duplicated notification logic
- Maintain delivery consistency
- Follow workflow boundaries

---

## Security Rules

Notifications must:
- Avoid exposing sensitive data
- Respect user permissions
- Validate workflow ownership when necessary
- Protect provider credentials

Sensitive configuration must use environment variables.

---

## Environment Variable Rules

Sensitive values should use:
- EMAIL_PROVIDER_KEY
- SLACK_WEBHOOK_URL
- SMTP_PASSWORD

Never hardcode secrets.

---

## Performance Rules

Prefer:
- Async notifications
- Lightweight payloads
- Background delivery
- Efficient provider usage

Avoid:
- Blocking workflow execution
- Heavy synchronous delivery
- Massive notification chains

---

## Monitoring Principles

Notification systems should support:
- Delivery monitoring
- Failure tracking
- Retry visibility
- Operational dashboards
- Workflow analytics

---

## Scalability Principles

Notification architecture must support:
- Additional providers
- Queue systems
- Background workers
- Automation expansion
- Multi-channel communication
- Enterprise workflow scaling

---

## Future Expansion Principles

The notification architecture should support future:
- BullMQ
- Redis queues
- SMS providers
- Push notifications
- Webhooks
- Event buses
- AI-generated notifications

---

## Naming Conventions

### Notification Events
Use domain.event format.

Examples:
- campaign.approved
- invitation.sent
- workflow.failed

---

### Providers
Use PascalCase with Provider suffix.

Examples:
- EmailProvider
- SlackProvider

---

### Handlers
Use descriptive naming.

Examples:
- SendCampaignApprovalNotificationHandler
- NotifySlackWorkflowFailureHandler

---

## Forbidden Practices

- Direct notifications from controllers
- Hardcoded notification content
- Notification logic inside workflows
- Blocking notification chains
- Mixed provider responsibilities
- Notification duplication
- Missing retry handling
- Hidden delivery failures
- Untracked notification states

---

## Recommended Technologies

- NestJS
- Nodemailer
- Slack API
- BullMQ
- Redis
- PostgreSQL
- Prisma

---

## Related Skills

- workflow-engine
- nestjs
- prisma
- postgres
- auth
- api-design
- ai-collaboration
- documentation
- project-standards
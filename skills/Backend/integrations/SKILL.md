# Integrations Skill

## Purpose
Define external integration architecture, provider abstraction patterns, webhook handling, API communication standards, retry strategies, and operational integration workflows across the application.

This skill standardizes how external services, APIs, webhooks, providers, and third-party systems integrate with workflows and backend modules using scalable and maintainable architecture.

---

## Integration Philosophy

Integrations are external workflows.

External services represent:
- Communication channels
- Operational dependencies
- Workflow extensions
- Automation systems
- External event sources

Integrations must remain:
- Isolated
- Observable
- Replaceable
- Modular
- Fault-tolerant

---

## Core Principles

- Integration isolation first
- Provider abstraction
- Event-driven integrations
- Async-friendly communication
- Retry-safe architecture
- Failure-tolerant systems
- Observable integrations
- AI-friendly provider structure

---

## Integration Architecture

Integrations should remain isolated inside:

/integrations/

Recommended structure:

/integrations/
├── slack/
├── email/
├── webhooks/
├── analytics/
├── calendar/
├── providers/
├── shared/
└── types/

---

## Provider Architecture Rules

Each integration provider should:
- Have a single responsibility
- Remain replaceable
- Handle external communication
- Support retries
- Handle provider-specific logic internally

Examples:
- SlackProvider
- EmailProvider
- GoogleCalendarProvider

Avoid:
- Mixed provider responsibilities
- Workflow logic inside providers
- Provider chaos across modules

---

## Integration Responsibilities

Integrations are responsible for:
- External API communication
- Webhook handling
- External workflow coordination
- Provider authentication
- Delivery execution
- Retry management
- Failure handling

Integrations should NOT:
- Own business logic
- Replace workflows
- Become tightly coupled to modules

---

## Workflow Integration Rules

Workflows should:
- Emit events
- Trigger integration handlers
- Avoid direct provider coupling

Good example:

Workflow
→ emits event

Integration Handler
→ reacts
→ calls provider

Bad example:

Controller
→ directly calls external APIs everywhere

---

## Event-Driven Integration Rules

Integrations should react to:
- Workflow events
- Notification events
- Automation events
- External webhooks

Examples:
- campaign.approved
- invitation.sent
- workflow.failed

Avoid:
- Random direct integration calls
- Tight integration coupling

---

## Webhook Architecture Rules

Webhook handling should remain isolated.

Recommended structure:

/integrations/webhooks/
├── controllers/
├── handlers/
├── services/
├── dto/
└── types/

Webhooks should:
- Validate payloads
- Verify signatures
- Handle retries safely
- Remain idempotent

---

## Webhook Security Rules

Webhooks must:
- Verify authenticity
- Validate signatures
- Protect sensitive endpoints
- Prevent replay attacks when possible

Never trust external webhook payloads directly.

---

## Retry Rules

Integrations should support:
- Retry logic
- Retry limits
- Failure tracking
- Temporary failure recovery

Examples:
- API timeouts
- Temporary provider outages
- Rate limits

Avoid:
- Infinite retries
- Silent integration failures

---

## Failure Handling Rules

Integration failures should:
- Be logged
- Preserve workflow visibility
- Trigger monitoring alerts when necessary
- Support operational debugging

Avoid:
- Hidden provider failures
- Silent workflow interruptions

---

## Rate Limiting Rules

Integrations should:
- Respect external API limits
- Support throttling
- Prevent excessive request bursts

Examples:
- Slack API limits
- Email provider limits
- Google API quotas

Avoid:
- Aggressive uncontrolled requests
- Missing provider protection

---

## Async Integration Rules

External communication should:
- Prefer async execution
- Avoid blocking workflows
- Support background processing
- Support queue systems

Avoid:
- Heavy synchronous external calls
- Long API blocking operations

---

## Provider Authentication Rules

Provider credentials must:
- Use environment variables
- Remain isolated
- Never be hardcoded
- Support rotation

Examples:
- SLACK_WEBHOOK_URL
- EMAIL_PROVIDER_KEY
- GOOGLE_API_KEY

---

## Integration Modularity Rules

Each integration should:
- Remain independent
- Support replacement
- Support scalability
- Avoid cross-provider coupling

Avoid:
- Massive integration services
- Shared provider chaos
- Tight integration dependencies

---

## Integration Logging Rules

Integrations should log:
- Requests
- Failures
- Retry attempts
- Response statuses
- Processing timestamps

Logging improves:
- Monitoring
- Debugging
- Operational visibility
- Reliability tracking

---

## Monitoring Rules

Integration systems should support:
- Failure monitoring
- Retry monitoring
- Rate limit monitoring
- Delivery visibility
- Workflow analytics

---

## Timeout Rules

External integrations should:
- Use timeouts
- Prevent hanging requests
- Fail gracefully
- Preserve workflow stability

Avoid:
- Infinite waiting
- Blocking workflows indefinitely

---

## Idempotency Rules

Critical integration operations should:
- Support safe retries
- Prevent duplicate execution
- Preserve workflow consistency

Examples:
- Sending invitations
- Scheduling meetings
- Triggering notifications

---

## Integration Persistence Rules

Important integration workflows should persist:
- Processing state
- Retry count
- Failure reasons
- Delivery timestamps
- External references

Examples:
- webhook_events
- integration_logs
- delivery_status

---

## External API Rules

External APIs should:
- Remain isolated
- Use provider services
- Handle failures gracefully
- Support versioning when necessary

Avoid:
- Scattered HTTP requests
- Raw integration chaos
- Duplicated API handling

---

## AI Integration Development Rules

AI agents must:
- Reuse providers
- Preserve integration boundaries
- Avoid duplicated external logic
- Follow retry standards
- Maintain event-driven patterns
- Preserve provider modularity

---

## Security Principles

Integrations must:
- Protect secrets
- Validate external payloads
- Sanitize inputs
- Prevent unauthorized access
- Protect operational workflows

Sensitive credentials must remain secure.

---

## Scalability Principles

Integration architecture must support:
- Additional providers
- Additional APIs
- Future automation systems
- Queue integration
- Workflow expansion
- Enterprise-scale communication

---

## Future Expansion Principles

The integration system should support future:
- Slack integrations
- Discord integrations
- Google Calendar
- CRM systems
- Webhook orchestration
- Queue systems
- Event buses
- AI automation systems

---

## Queue Integration Principles

Future queue systems should support:
- Async processing
- Retry workflows
- Background jobs
- Delayed processing
- High-volume integrations

Architecture should remain queue-friendly.

---

## Naming Conventions

### Providers
Use PascalCase with Provider suffix.

Examples:
- SlackProvider
- EmailProvider
- WebhookProvider

---

### Handlers
Use descriptive naming.

Examples:
- SendSlackCampaignApprovalHandler
- ProcessWebhookEventHandler

---

### Integration Events
Use domain.event format.

Examples:
- campaign.approved
- invitation.sent
- workflow.failed

---

## Forbidden Practices

- Direct external API calls from controllers
- Hardcoded credentials
- Mixed provider responsibilities
- Missing retry handling
- Blocking integration workflows
- Scattered HTTP logic
- Unstructured webhook handling
- Silent integration failures
- Tight provider coupling
- Missing monitoring

---

## Recommended Technologies

- NestJS
- Axios
- BullMQ
- Redis
- Slack API
- Nodemailer
- Webhooks
- PostgreSQL
- Prisma

---

## Related Skills

- workflow-engine
- notifications
- nestjs
- auth
- api-design
- prisma
- postgres
- ai-collaboration
- documentation
- project-standards
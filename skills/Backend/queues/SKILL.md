# Queues & Background Processing Skill

## Purpose
Define queue architecture, background job processing, async workflow orchestration, worker systems, retry strategies, and distributed task execution across the application.

This skill standardizes how heavy operations, notifications, integrations, automation tasks, and workflow reactions are processed asynchronously using scalable backend architecture.

---

## Queue Philosophy

Heavy workflows should run asynchronously.

Queues represent:
- Background processing
- Async workflow orchestration
- Distributed task execution
- Retry-safe operations
- Delayed workflows
- Scalable system execution

APIs should initiate workflows, not execute everything immediately.

---

## Core Principles

- Async-first architecture
- Non-blocking workflows
- Decoupled job execution
- Retry-safe processing
- Worker isolation
- Scalable background systems
- Observable job lifecycles
- AI-friendly queue structure

---

## Queue Architecture

Queue systems should remain isolated inside:

/queues/

Recommended structure:

/queues/
├── jobs/
├── workers/
├── processors/
├── handlers/
├── events/
├── monitoring/
├── types/
├── utils/
└── queues.module.ts

---

## Queue Responsibilities

Queues are responsible for:
- Background processing
- Async workflows
- Heavy task execution
- Notification delivery
- Integration orchestration
- Retry handling
- Delayed execution

Queues should NOT:
- Replace business workflows
- Own domain logic
- Become monolithic processing systems

---

## Async Workflow Rules

Heavy operations should use queues.

Examples:
- Sending emails
- Slack notifications
- Analytics generation
- File processing
- Report generation
- Integration synchronization

Avoid:
- Heavy synchronous API execution
- Blocking workflows
- Long-running requests

---

## Job Lifecycle Rules

Jobs should support:
- Creation
- Processing
- Retry handling
- Completion
- Failure tracking
- Cancellation when appropriate

Recommended job states:
- pending
- processing
- completed
- failed
- retrying
- delayed

---

## Worker Architecture Rules

Workers should:
- Remain isolated
- Process specific job types
- Support scalability
- Remain fault-tolerant

Examples:
- EmailWorker
- SlackNotificationWorker
- AnalyticsWorker

Avoid:
- Giant universal workers
- Mixed processing responsibilities

---

## Queue Naming Rules

Queues should use descriptive names.

Examples:
- notification-queue
- email-queue
- workflow-queue
- analytics-queue

Avoid:
- Generic unclear queue names
- Mixed-purpose queues without boundaries

---

## Job Naming Rules

Jobs should represent actions.

Examples:
- send-campaign-approval-email
- process-workflow-event
- generate-dashboard-analytics

Avoid:
- Ambiguous job naming
- Workflow confusion

---

## Retry Rules

Jobs should support retries for:
- Temporary failures
- External provider failures
- Timeouts
- Rate limits

Retries should:
- Use retry limits
- Track retry attempts
- Avoid infinite loops

Examples:
- Email provider unavailable
- Slack API timeout
- Temporary DB issue

---

## Failure Handling Rules

Failed jobs should:
- Be logged
- Preserve failure reasons
- Support monitoring
- Allow operational debugging

Avoid:
- Silent failures
- Hidden processing errors
- Lost job visibility

---

## Delayed Job Rules

Queues should support delayed execution.

Examples:
- Reminder notifications
- Scheduled workflows
- Retry backoff
- Future automation triggers

Delayed jobs improve:
- Workflow flexibility
- Operational automation
- Retry safety

---

## Priority Queue Rules

The architecture may support:
- High priority jobs
- Medium priority jobs
- Low priority jobs

Examples:
- Critical workflow alerts
- Notification delivery
- Analytics generation

Critical workflows should not compete with low-priority jobs.

---

## Queue Isolation Rules

Different workflows should use separate queues when appropriate.

Examples:
- notification-queue
- integration-queue
- analytics-queue

Isolation improves:
- Scalability
- Monitoring
- Failure containment
- Operational visibility

---

## Monitoring Rules

Queue systems should support:
- Queue visibility
- Job tracking
- Retry monitoring
- Failure monitoring
- Worker monitoring
- Performance analytics

Monitoring is mandatory.

---

## Job Persistence Rules

Important jobs should persist:
- Status
- Retry count
- Failure reasons
- Processing timestamps
- Related workflow references

Examples:
- workflowEventId
- campaignId
- notificationId

---

## Event-Driven Queue Rules

Queues should react to:
- Workflow events
- Notification events
- Integration events
- Automation events

Examples:
- campaign.approved
- invitation.sent
- workflow.failed

Good example:

Workflow
→ emits event
→ queue job created
→ worker processes task

Bad example:

Controller
→ executes everything synchronously

---

## Worker Scalability Rules

Workers should support:
- Horizontal scaling
- Independent execution
- Fault tolerance
- Parallel processing

Avoid:
- Single worker bottlenecks
- Tight worker coupling

---

## Timeout Rules

Jobs should:
- Use execution time limits
- Fail gracefully
- Avoid hanging workers

Avoid:
- Infinite processing
- Uncontrolled execution time

---

## Queue Performance Rules

Prefer:
- Lightweight job payloads
- Background execution
- Modular workers
- Queue separation
- Efficient retries

Avoid:
- Massive payload jobs
- Blocking worker execution
- Unstructured processing chains

---

## Idempotency Rules

Critical jobs should:
- Support safe retries
- Prevent duplicate execution
- Preserve workflow consistency

Examples:
- Sending invitations
- Scheduling meetings
- Workflow transitions

---

## Queue Modularity Rules

Queue systems should:
- Remain modular
- Support future queues
- Avoid worker chaos
- Maintain processing boundaries

Avoid:
- Giant processing services
- Mixed queue responsibilities

---

## Integration Rules

Queues should integrate with:
- Notifications
- Integrations
- Workflow-engine
- Analytics systems
- Automation systems

Queues are orchestration layers, not business layers.

---

## AI Queue Development Rules

AI agents must:
- Reuse queues
- Reuse workers
- Preserve async architecture
- Avoid blocking workflows
- Follow retry standards
- Maintain queue modularity

---

## Security Rules

Queue systems must:
- Protect sensitive payloads
- Validate job data
- Prevent unauthorized execution
- Protect operational workflows

Sensitive data should never be exposed inside logs or payloads.

---

## Queue Logging Rules

Queues should log:
- Job creation
- Job completion
- Failures
- Retries
- Worker execution
- Processing duration

Logging improves:
- Monitoring
- Debugging
- Reliability
- Operational visibility

---

## Queue Monitoring Dashboard Rules

Queue monitoring systems should support:
- Active jobs
- Failed jobs
- Retry visibility
- Queue throughput
- Worker health
- Processing metrics

---

## Scalability Principles

Queue architecture must support:
- High-volume workflows
- Additional workers
- Additional queues
- Distributed processing
- Enterprise automation
- Future event systems

---

## Future Expansion Principles

The queue architecture should support future:
- BullMQ
- Redis streams
- Event buses
- Distributed workers
- Cron orchestration
- AI automation workflows
- Large-scale async systems

---

## Recommended Queue Strategy

Prefer:
- Event-driven jobs
- Modular workers
- Separate queue domains
- Background processing
- Retry-safe architecture

---

## Queue Persistence Philosophy

Important jobs should remain traceable.

Operational visibility improves:
- Reliability
- Workflow monitoring
- Incident debugging
- Enterprise scalability

---

## Naming Conventions

### Queues
Use kebab-case.

Examples:
- notification-queue
- analytics-queue

---

### Workers
Use PascalCase with Worker suffix.

Examples:
- EmailWorker
- SlackNotificationWorker

---

### Jobs
Use action-oriented naming.

Examples:
- send-email
- process-webhook-event
- generate-report

---

## Forbidden Practices

- Heavy synchronous workflows
- Blocking API execution
- Giant workers
- Missing retry handling
- Silent queue failures
- Massive job payloads
- Mixed worker responsibilities
- Queue chaos
- Infinite retries
- Hidden background failures

---

## Recommended Technologies

- BullMQ
- Redis
- NestJS
- PostgreSQL
- Prisma

---

## Related Skills

- workflow-engine
- notifications
- integrations
- nestjs
- prisma
- postgres
- api-design
- ai-collaboration
- documentation
- project-standards
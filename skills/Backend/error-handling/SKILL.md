# Error Handling Skill

## Purpose
Define error architecture, failure classification, recovery strategies, exception handling, async failure management, and operational resilience standards across the application.

This skill standardizes how the system detects, classifies, handles, logs, recovers from, and exposes failures using scalable and maintainable backend architecture.

---

## Error Handling Philosophy

Errors are operational states of the system.

Errors are not unexpected accidents.
They are expected realities of distributed systems.

The system must:
- Detect failures
- Classify failures
- Respond predictably
- Preserve consistency
- Maintain observability
- Support recovery when possible

---

## Core Principles

- Fail predictably
- Preserve operational visibility
- Centralize error handling
- Protect workflow consistency
- Support recovery strategies
- Distinguish error types
- Avoid silent failures
- AI-friendly error architecture

---

## Error Architecture

Error handling systems should remain isolated inside:

/errors/

Recommended structure:

/errors/
├── exceptions/
├── filters/
├── handlers/
├── types/
├── utils/
├── recovery/
├── monitoring/
└── errors.module.ts

---

## Error Responsibilities

Error systems are responsible for:
- Failure classification
- Exception handling
- Operational recovery
- Workflow protection
- Failure visibility
- Error logging
- Retry coordination
- Error standardization

Error systems should NOT:
- Replace business logic
- Hide failures
- Become scattered across modules

---

## Error Classification Rules

Errors should be classified clearly.

Recommended categories:
- Validation errors
- Authentication errors
- Authorization errors
- Business logic errors
- Operational errors
- Integration errors
- Infrastructure errors
- Queue errors

Each error category may require different handling strategies.

---

## Validation Error Rules

Validation errors represent:
- Invalid user input
- Schema violations
- Missing fields
- Invalid payloads

Examples:
- Invalid email
- Missing required fields
- Invalid workflow state

Validation errors should:
- Return safe feedback
- Remain predictable
- Avoid exposing internal details

---

## Authentication Error Rules

Authentication errors represent:
- Invalid credentials
- Expired tokens
- Missing authentication

Examples:
- Invalid JWT
- Expired session
- Missing token

Authentication errors should:
- Remain secure
- Avoid sensitive exposure
- Use proper status codes

---

## Authorization Error Rules

Authorization errors represent:
- Insufficient permissions
- Restricted workflows
- Forbidden actions

Examples:
- Unauthorized workflow approval
- Restricted admin operation

Authorization failures must preserve security boundaries.

---

## Business Logic Error Rules

Business logic errors represent:
- Invalid business operations
- Workflow violations
- Domain inconsistencies

Examples:
- Approving an already approved campaign
- Invalid workflow transition

Business errors should:
- Remain explicit
- Preserve workflow consistency
- Support safe feedback

---

## Operational Error Rules

Operational errors represent:
- Temporary system failures
- External provider failures
- Timeout failures
- Queue processing issues

Examples:
- Slack timeout
- Email provider unavailable
- Redis unavailable

Operational errors may support:
- Retries
- Recovery
- Delayed processing

---

## Infrastructure Error Rules

Infrastructure errors represent:
- Database failures
- Queue infrastructure failures
- Storage failures
- System-level failures

Examples:
- PostgreSQL unavailable
- Redis connection failure

Infrastructure failures require:
- Monitoring
- Alerts
- Operational visibility

---

## Global Exception Handling Rules

The system should use centralized exception handling.

Global exception systems should:
- Standardize responses
- Capture unexpected failures
- Preserve observability
- Prevent application crashes

Avoid:
- Scattered try/catch chaos
- Duplicate exception logic

---

## Exception Filter Rules

Exception filters should:
- Remain centralized
- Normalize responses
- Integrate with observability
- Support contextual logging

Examples:
- GlobalExceptionFilter
- ValidationExceptionFilter

---

## Async Error Handling Rules

Async systems must remain failure-safe.

Examples:
- Queue workers
- Notifications
- Integrations
- Workflow handlers

Async failures should:
- Preserve retries
- Remain observable
- Support recovery
- Prevent silent background crashes

---

## Retry-safe Error Rules

Retryable errors should:
- Support retry logic
- Preserve idempotency
- Avoid duplicate execution

Examples:
- Temporary provider timeout
- Network instability

Avoid:
- Retrying unrecoverable errors infinitely

---

## Recoverable vs Unrecoverable Errors

Recoverable errors:
- Temporary API failures
- Queue delays
- Provider timeouts

Unrecoverable errors:
- Corrupted payloads
- Invalid workflow state
- Critical security violations

Recovery strategies should differ accordingly.

---

## Workflow Failure Rules

Workflow failures should:
- Preserve workflow state
- Remain observable
- Support debugging
- Avoid inconsistent transitions

Examples:
- Failed approval workflow
- Notification delivery failure

Workflow consistency is mandatory.

---

## Queue Failure Rules

Queue systems should:
- Track failed jobs
- Preserve retry visibility
- Prevent hidden worker crashes
- Support operational diagnostics

Examples:
- Failed email delivery
- Delayed queue execution

---

## Integration Failure Rules

External integrations should:
- Handle provider instability
- Support retries
- Preserve operational visibility
- Avoid workflow corruption

Examples:
- Slack API timeout
- Webhook processing failure

---

## Error Logging Rules

Errors should log:
- Error type
- Context metadata
- Stack traces when appropriate
- Workflow references
- Processing timestamps

Examples:
- requestId
- workflowId
- queueJobId

Avoid:
- Generic useless logs
- Missing operational context

---

## Observability Integration Rules

Error systems should integrate with:
- Logging
- Monitoring
- Alerts
- Metrics
- Tracing

Failures must remain observable.

---

## User-facing Error Rules

User-facing errors should:
- Remain safe
- Avoid exposing internal infrastructure
- Provide useful feedback
- Preserve security

Avoid:
- Database stack traces
- Internal provider details
- Sensitive operational data

---

## Failure Recovery Rules

The system should support:
- Retry recovery
- Delayed recovery
- Graceful degradation
- Operational fallback strategies

Examples:
- Retry notification delivery
- Fallback provider execution

---

## Graceful Degradation Rules

Critical systems should:
- Continue partially when possible
- Isolate failures
- Avoid total workflow collapse

Examples:
- Analytics failure should not block campaign approval

---

## Error Propagation Rules

Errors should propagate intentionally.

Avoid:
- Hidden failures
- Swallowed exceptions
- Silent operational corruption

Propagation should preserve:
- Traceability
- Monitoring
- Debugging visibility

---

## AI Error Development Rules

AI agents must:
- Use centralized exception handling
- Preserve operational visibility
- Avoid silent failures
- Respect retry-safe architecture
- Maintain workflow consistency
- Follow error classification rules

---

## Security Rules

Error systems must:
- Protect sensitive information
- Avoid leaking infrastructure details
- Sanitize user-facing responses
- Preserve security boundaries

Sensitive secrets must never appear in logs or responses.

---

## Scalability Principles

Error architecture must support:
- Additional workflows
- Additional queues
- Distributed systems
- Future microservices
- Enterprise-scale operations
- Advanced observability systems

---

## Future Expansion Principles

The error system should support future:
- Distributed tracing
- Error aggregation systems
- Incident management
- Automated recovery systems
- AI-assisted diagnostics
- Advanced monitoring platforms

---

## Naming Conventions

### Exceptions
Use PascalCase with Exception suffix.

Examples:
- ValidationException
- WorkflowStateException

---

### Filters
Use PascalCase with Filter suffix.

Examples:
- GlobalExceptionFilter
- AuthExceptionFilter

---

### Error Events
Use contextual naming.

Examples:
- workflow.failed
- queue.retry.failed

---

## Forbidden Practices

- Silent failures
- Empty catch blocks
- Generic catch-all chaos
- Hidden async failures
- Exposing internal stack traces
- Infinite retries
- Missing operational visibility
- Ignoring workflow consistency
- Scattered error handling
- Unclassified failures

---

## Recommended Technologies

- NestJS Exception Filters
- Pino
- Winston
- Sentry
- OpenTelemetry
- BullMQ
- Redis

---

## Related Skills

- observability
- queues
- workflow-engine
- integrations
- notifications
- testing
- nestjs
- api-design
- prisma
- postgres
- ai-collaboration
- documentation
- project-standards
# Observability Skill

## Purpose
Define observability architecture, structured logging, workflow monitoring, tracing systems, health monitoring, metrics collection, and operational visibility standards across the application.

This skill standardizes how the system exposes internal behavior, tracks workflows, monitors failures, and provides operational visibility for scalable and maintainable software systems.

---

## Observability Philosophy

Every important workflow should be observable.

Observability represents:
- System visibility
- Workflow understanding
- Operational awareness
- Failure tracking
- Performance analysis
- Reliability monitoring
- System diagnostics

Observability helps answer:
- What happened?
- Why did it happen?
- Where did it fail?
- How long did it take?
- Which workflow was affected?

---

## Core Principles

- Visibility first
- Structured logging
- Traceable workflows
- Observable async systems
- Centralized monitoring
- Failure transparency
- Operational diagnostics
- AI-friendly observability architecture

---

## Observability Architecture

Observability systems should remain isolated inside:

/observability/

Recommended structure:

/observability/
├── logging/
├── monitoring/
├── tracing/
├── metrics/
├── health/
├── dashboards/
├── alerts/
├── events/
├── utils/
└── observability.module.ts

---

## Observability Responsibilities

Observability is responsible for:
- Workflow visibility
- Error tracking
- Queue monitoring
- API monitoring
- Performance monitoring
- Health monitoring
- Metrics collection
- Operational diagnostics

Observability should NOT:
- Own business logic
- Replace workflows
- Become application logic

---

## Structured Logging Rules

Logs should:
- Remain structured
- Use contextual metadata
- Support traceability
- Remain searchable
- Preserve workflow visibility

Prefer:
- JSON structured logs
- Contextual fields
- Consistent formats

Avoid:
- Random console.log chaos
- Unstructured logging
- Missing operational context

---

## Logging Context Rules

Logs should include:
- timestamp
- workflowId
- requestId
- userId when appropriate
- module name
- event name
- processing duration

Examples:
- campaignId
- notificationId
- queueJobId

---

## Workflow Visibility Rules

Important workflows should expose:
- Workflow state
- Processing status
- Failure states
- Retry attempts
- Execution duration
- Related events

Examples:
- campaign approval workflows
- invitation workflows
- notification delivery workflows

---

## Event Logging Rules

Important events should be logged.

Examples:
- campaign.created
- invitation.sent
- workflow.failed
- queue.retry

Logs should support:
- Monitoring
- Debugging
- Analytics
- Operational visibility

---

## Error Tracking Rules

Errors should:
- Be captured centrally
- Preserve stack traces
- Include contextual metadata
- Support debugging
- Remain observable

Avoid:
- Silent failures
- Hidden exceptions
- Ignored operational errors

---

## Queue Monitoring Rules

Queue systems should expose:
- Active jobs
- Failed jobs
- Retry counts
- Worker health
- Queue throughput
- Delayed jobs

Queue visibility is mandatory.

---

## Worker Monitoring Rules

Workers should expose:
- Processing status
- Job execution metrics
- Failures
- Retry handling
- Execution duration

Examples:
- EmailWorker status
- AnalyticsWorker throughput

---

## API Monitoring Rules

APIs should expose:
- Request duration
- Error rates
- Response times
- Throughput
- Endpoint failures

Monitoring improves:
- Reliability
- Performance
- Operational awareness

---

## Integration Monitoring Rules

Integrations should expose:
- Provider failures
- Timeout tracking
- Retry attempts
- External API latency
- Delivery states

Examples:
- Slack failures
- Email provider delays
- Webhook processing errors

---

## Metrics Collection Rules

The system should collect:
- Request metrics
- Workflow metrics
- Queue metrics
- Failure metrics
- Performance metrics

Examples:
- Average response time
- Queue processing duration
- Workflow success rate

---

## Health Check Rules

The system should expose health checks for:
- API status
- Database connectivity
- Redis connectivity
- Queue health
- External provider health

Examples:
- /health
- /health/database
- /health/queues

Health checks improve operational reliability.

---

## Tracing Rules

Critical workflows should support tracing.

Tracing should expose:
- Workflow path
- Event chains
- Queue execution
- External integrations
- Processing duration

Examples:
- API request
→ workflow
→ queue
→ notification
→ integration

Tracing improves:
- Debugging
- Workflow visibility
- Failure diagnosis

---

## Alerting Rules

Critical failures should trigger alerts.

Examples:
- Queue failures
- Workflow crashes
- Provider outages
- High error rates
- Database connectivity issues

Alerts should:
- Remain actionable
- Avoid excessive noise
- Preserve operational visibility

---

## Performance Monitoring Rules

Performance systems should track:
- Slow queries
- Slow APIs
- Queue delays
- Workflow bottlenecks
- Integration latency

Avoid:
- Hidden performance degradation
- Unmonitored bottlenecks

---

## Operational Dashboard Rules

Operational dashboards should expose:
- Workflow health
- Queue health
- API health
- Error tracking
- System metrics
- Worker activity

Dashboards improve:
- Visibility
- Reliability
- Incident response

---

## Retry Visibility Rules

Retries should remain observable.

Examples:
- Notification retries
- Queue retries
- Integration retries

Track:
- Retry count
- Retry reason
- Retry timestamps

Avoid:
- Hidden retry loops
- Invisible background failures

---

## Failure Transparency Rules

Failures should:
- Remain visible
- Preserve debugging information
- Support incident tracking
- Support operational analysis

Avoid:
- Silent workflow failures
- Hidden infrastructure issues

---

## Monitoring Granularity Rules

Important workflows should expose:
- High-level monitoring
- Detailed execution logs
- Contextual metadata
- Operational traces

Granularity improves:
- Debugging
- Diagnostics
- Incident response

---

## AI Observability Development Rules

AI agents must:
- Add structured logs
- Preserve workflow traceability
- Maintain monitoring consistency
- Avoid silent failures
- Reuse observability patterns
- Preserve operational visibility

---

## Security Rules

Logs and monitoring systems must:
- Avoid exposing secrets
- Protect sensitive user data
- Sanitize logs
- Restrict observability access

Sensitive information should never appear in logs.

---

## Logging Performance Rules

Logging systems should:
- Remain efficient
- Avoid excessive payloads
- Prevent logging bottlenecks
- Support scalable monitoring

Avoid:
- Massive log spam
- Uncontrolled debug logging in production

---

## Scalability Principles

Observability architecture must support:
- Additional services
- Additional workers
- Distributed systems
- Future microservices
- Enterprise monitoring
- Large-scale workflows

---

## Future Expansion Principles

The observability architecture should support future:
- OpenTelemetry
- Prometheus
- Grafana
- Sentry
- Datadog
- ELK Stack
- Distributed tracing
- AI-assisted monitoring

---

## Naming Conventions

### Logs
Use contextual event naming.

Examples:
- workflow.started
- queue.retry
- notification.failed

---

### Metrics
Use descriptive metric names.

Examples:
- api.response.time
- queue.processing.duration
- workflow.failure.rate

---

### Alerts
Use operational naming.

Examples:
- QueueFailureAlert
- DatabaseConnectionAlert

---

## Forbidden Practices

- Random console.log usage
- Silent failures
- Hidden workflow errors
- Missing monitoring
- Missing health checks
- Unstructured logging
- Missing retry visibility
- Ignored performance issues
- Hidden background failures
- Exposing secrets in logs

---

## Recommended Technologies

- NestJS Logger
- Pino
- Winston
- OpenTelemetry
- Prometheus
- Grafana
- Sentry
- BullMQ
- Redis

---

## Related Skills

- queues
- workflow-engine
- notifications
- integrations
- nestjs
- api-design
- prisma
- postgres
- ai-collaboration
- documentation
- project-standards
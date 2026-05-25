# Testing Skill

## Purpose
Define testing architecture, testing strategies, workflow validation, integration verification, async system testing, and reliability standards across the application.

This skill standardizes how the system verifies correctness, protects workflows, prevents regressions, and maintains long-term stability using scalable and maintainable testing practices.

---

## Testing Philosophy

The system must be verifiable.

Testing represents:
- System reliability
- Workflow protection
- Regression prevention
- Architectural validation
- Operational confidence
- Safe refactoring
- Long-term maintainability

Testing should validate:
- Behavior
- Workflows
- Contracts
- System boundaries
- Critical business operations

Testing should NOT focus only on implementation details.

---

## Core Principles

- Reliability first
- Test behavior, not implementation
- Protect workflows
- Preserve architecture stability
- Maintain isolated tests
- Prefer deterministic testing
- Test critical paths first
- AI-friendly testing architecture

---

## Testing Architecture

Testing systems should remain organized inside:

/tests/

Recommended structure:

/tests/
├── unit/
├── integration/
├── e2e/
├── workflows/
├── queues/
├── fixtures/
├── mocks/
├── factories/
├── helpers/
└── setup/

---

## Testing Responsibilities

Testing is responsible for:
- Validating workflows
- Protecting APIs
- Verifying permissions
- Validating integrations
- Ensuring queue reliability
- Preventing regressions
- Maintaining architecture stability

Testing should NOT:
- Replace observability
- Depend on unstable implementation details
- Become tightly coupled to internal code structure

---

## Testing Types

The system should support:
- Unit testing
- Integration testing
- End-to-end testing
- Workflow testing
- Queue testing
- API testing
- Authorization testing

Each testing type serves a different architectural purpose.

---

## Unit Testing Rules

Unit tests should:
- Validate isolated logic
- Remain fast
- Remain deterministic
- Avoid external dependencies

Good candidates:
- Services
- Utilities
- Validators
- Domain logic

Avoid:
- Database-heavy unit tests
- External provider dependency
- Full workflow simulation

---

## Integration Testing Rules

Integration tests should validate:
- Module collaboration
- Database interaction
- API integration
- Queue integration
- Workflow coordination

Examples:
- Prisma integration
- Notification integration
- Queue processing integration

Integration tests protect system boundaries.

---

## End-to-End Testing Rules

E2E tests should validate:
- Full user workflows
- Critical business operations
- Authentication flows
- API behavior
- Workflow orchestration

Examples:
- Login workflow
- Campaign approval workflow
- Invitation workflow

Avoid:
- Excessive E2E duplication
- Testing every tiny scenario end-to-end

---

## Workflow Testing Rules

Critical workflows must be testable.

Examples:
- campaign.approved
- invitation.sent
- workflow.failed

Workflow tests should validate:
- State transitions
- Event emission
- Queue creation
- Notification triggering
- Integration execution

Workflow testing is mandatory for event-driven systems.

---

## Queue Testing Rules

Queue systems should support:
- Job validation
- Retry testing
- Worker testing
- Delayed job testing
- Failure handling validation

Examples:
- Email retries
- Slack timeout recovery
- Failed job handling

Avoid:
- Untestable async workflows
- Hidden queue logic

---

## API Testing Rules

APIs should validate:
- Request validation
- Authentication
- Authorization
- Response structure
- Error handling
- Pagination
- Filtering

Examples:
- Unauthorized access
- Invalid DTO payloads
- Workflow execution endpoints

---

## Authentication Testing Rules

Auth systems should validate:
- JWT validation
- Role permissions
- Protected routes
- Token expiration
- Unauthorized access handling

Critical authorization paths must always be tested.

---

## Validation Testing Rules

Validation tests should ensure:
- DTO validation works correctly
- Invalid input is rejected
- Sanitization behaves correctly
- Schema rules remain protected

Examples:
- Missing required fields
- Invalid email formats
- Invalid workflow states

---

## Error Handling Testing Rules

Error scenarios should be testable.

Examples:
- Provider failures
- Queue failures
- Database failures
- Validation failures

The system should fail predictably.

Avoid:
- Hidden failure paths
- Untested error scenarios

---

## Mocking Strategy Rules

Mocks should:
- Remain minimal
- Simulate external dependencies
- Avoid excessive implementation coupling
- Support isolated testing

Good mock candidates:
- External APIs
- Email providers
- Slack providers
- Queue systems

Avoid:
- Mocking everything unnecessarily
- Mock-heavy fragile tests

---

## Test Isolation Rules

Tests should:
- Remain independent
- Avoid shared state
- Reset data between executions
- Support repeatable execution

Avoid:
- Test interdependency
- Hidden test coupling

---

## Test Data Rules

Test data should:
- Remain predictable
- Use factories when possible
- Avoid hardcoded chaos
- Support maintainability

Examples:
- CampaignFactory
- UserFactory
- WorkflowEventFactory

---

## Database Testing Rules

Database tests should:
- Use isolated environments
- Reset state between tests
- Avoid production dependencies
- Support deterministic execution

Avoid:
- Shared persistent test data
- Uncontrolled database state

---

## Async Testing Rules

Async workflows should support:
- Queue processing validation
- Retry validation
- Delayed execution testing
- Workflow orchestration testing

Async systems must remain observable and testable.

---

## Retry Testing Rules

Retries should validate:
- Retry count
- Failure recovery
- Timeout handling
- Idempotent execution

Examples:
- Email retry success
- Temporary provider recovery

---

## Performance Testing Principles

Critical systems should eventually support:
- Load testing
- Queue throughput testing
- API performance validation
- Workflow scalability testing

Performance testing improves operational reliability.

---

## Contract Testing Rules

Important contracts should remain stable.

Examples:
- API responses
- Event payloads
- Queue payloads
- Integration payloads

Contract testing prevents breaking integrations.

---

## Observability Testing Rules

Critical workflows should validate:
- Logging behavior
- Error tracking
- Monitoring integration
- Workflow traceability

Observability itself should remain testable.

---

## CI/CD Testing Rules

Testing pipelines should:
- Run automatically
- Prevent unstable deployments
- Validate critical workflows
- Protect production stability

Testing should integrate into deployment workflows.

---

## AI Testing Development Rules

AI agents must:
- Create tests for critical workflows
- Preserve test consistency
- Avoid fragile tests
- Protect architecture boundaries
- Maintain isolated tests
- Reuse testing patterns

---

## Coverage Philosophy

Coverage should focus on:
- Critical workflows
- Business operations
- Security-sensitive paths
- Async workflows
- Integration boundaries

High coverage alone does not guarantee quality.

---

## Naming Conventions

### Test Files
Use descriptive naming.

Examples:
- auth.service.spec.ts
- campaign-workflow.e2e-spec.ts

---

### Test Cases
Use behavior-oriented naming.

Examples:
- should approve campaign successfully
- should retry failed notification

---

### Factories
Use PascalCase with Factory suffix.

Examples:
- UserFactory
- CampaignFactory

---

## Forbidden Practices

- Fragile tests
- Testing implementation details
- Excessive mocking
- Shared test state
- Hidden async failures
- Untestable workflows
- Massive E2E duplication
- Random hardcoded test data
- Skipping critical workflow testing
- Ignoring failure scenarios

---

## Recommended Technologies

- Jest
- Supertest
- NestJS Testing Module
- Prisma Test DB
- BullMQ Testing Utilities

---

## Related Skills

- workflow-engine
- queues
- notifications
- integrations
- observability
- auth
- api-design
- nestjs
- prisma
- postgres
- ai-collaboration
- documentation
- project-standards
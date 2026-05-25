# Validation Skill

## Purpose
Define validation architecture, sanitization pipelines, DTO validation, schema consistency, boundary protection, and input integrity standards across the application.

This skill standardizes how the system validates, sanitizes, transforms, and protects incoming data using scalable and maintainable backend architecture.

---

## Validation Philosophy

All external data is untrusted.

Validation protects:
- System integrity
- Workflow consistency
- Database consistency
- Security boundaries
- Operational reliability
- API contracts

Validation is an architectural boundary between:
- Unsafe external input
and
- Trusted internal workflows

---

## Core Principles

- Never trust external input
- Validate before execution
- Sanitize before persistence
- Preserve schema consistency
- Protect workflow integrity
- Centralize validation rules
- Maintain predictable contracts
- AI-friendly validation architecture

---

## Validation Architecture

Validation systems should remain isolated inside:

/validation/

Recommended structure:

/validation/
├── dto/
├── schemas/
├── pipes/
├── sanitizers/
├── transformers/
├── validators/
├── decorators/
├── types/
└── validation.module.ts

---

## Validation Responsibilities

Validation systems are responsible for:
- DTO validation
- Input sanitization
- Payload transformation
- Schema enforcement
- Workflow protection
- API contract validation
- Queue payload validation
- Integration payload validation

Validation systems should NOT:
- Own business logic
- Replace workflows
- Become scattered across modules

---

## Validation Boundary Rules

Validation should occur at:
- API boundaries
- Queue boundaries
- Integration boundaries
- Webhook boundaries
- Workflow entry points

Examples:
- HTTP requests
- Queue jobs
- Webhook payloads
- External provider responses

Everything external is considered unsafe.

---

## DTO Validation Rules

All incoming request payloads should use DTO validation.

DTOs should:
- Define strict schemas
- Validate required fields
- Validate data types
- Validate workflow states
- Remain explicit

Examples:
- CreateCampaignDto
- ApproveCampaignDto
- SendInvitationDto

Avoid:
- Raw untyped payloads
- Inline validation chaos

---

## Schema Consistency Rules

Validation schemas should:
- Remain predictable
- Preserve data integrity
- Support frontend contracts
- Maintain workflow consistency

Avoid:
- Inconsistent payload structures
- Random schema mutations

---

## Input Sanitization Rules

Incoming data should be sanitized before execution.

Sanitization examples:
- Trim whitespace
- Normalize emails
- Remove dangerous payloads
- Sanitize strings
- Remove unexpected fields

Sanitization improves:
- Security
- Consistency
- Reliability

---

## Transformation Rules

Validation systems should support transformation pipelines.

Examples:
- String → number
- String → boolean
- Date parsing
- Payload normalization

Transformation should occur:
- Before workflow execution
- Before persistence
- Before business logic execution

---

## Workflow Validation Rules

Critical workflows should validate:
- Current workflow state
- Allowed transitions
- Required permissions
- Entity consistency

Examples:
- Cannot approve already approved campaign
- Cannot reject completed workflow

Workflow validation protects system consistency.

---

## Queue Payload Validation Rules

Queue payloads must remain validated.

Queue validation should:
- Prevent corrupted jobs
- Protect worker execution
- Preserve retry safety
- Maintain workflow integrity

Examples:
- Notification payload validation
- Analytics job validation

Avoid:
- Blind queue processing
- Unsafe worker execution

---

## Integration Validation Rules

External integrations should validate:
- Incoming payloads
- API responses
- Webhook payloads
- External event schemas

Examples:
- Slack webhook payloads
- Third-party API responses

External systems are never fully trusted.

---

## Webhook Validation Rules

Webhook payloads should:
- Validate signatures
- Validate schemas
- Sanitize incoming data
- Prevent invalid workflow execution

Avoid:
- Blind webhook processing
- Trusting raw external payloads

---

## API Validation Rules

APIs should validate:
- Query parameters
- Path parameters
- Request bodies
- Headers when appropriate

Examples:
- Pagination validation
- Filtering validation
- Workflow action validation

---

## Query Validation Rules

Query parameters should:
- Validate types
- Validate limits
- Prevent invalid filtering
- Protect performance boundaries

Examples:
- page >= 1
- limit <= 100

Avoid:
- Unsafe uncontrolled queries

---

## File Validation Rules

File uploads should validate:
- File type
- File size
- Allowed formats
- Dangerous content

Examples:
- Image validation
- Document validation

Avoid:
- Unrestricted uploads
- Unsafe file execution

---

## Enum Validation Rules

Enums should:
- Restrict invalid states
- Protect workflow consistency
- Maintain domain integrity

Examples:
- CampaignStatus
- NotificationStatus
- WorkflowState

Avoid:
- Free uncontrolled string states

---

## Nested Validation Rules

Complex payloads should validate nested structures.

Examples:
- Nested workflow payloads
- Analytics filters
- Dashboard configuration

Nested validation protects:
- Workflow integrity
- Payload consistency

---

## Validation Reusability Rules

Validation logic should:
- Remain reusable
- Avoid duplication
- Support shared schemas
- Preserve consistency

Avoid:
- Copy-paste validation chaos
- Scattered validation rules

---

## Error Messaging Rules

Validation errors should:
- Remain predictable
- Provide useful feedback
- Avoid exposing internal logic
- Support frontend workflows

Examples:
- "email must be valid"
- "status transition not allowed"

Avoid:
- Internal stack traces
- Confusing validation messages

---

## Validation Performance Rules

Validation should:
- Remain efficient
- Avoid unnecessary heavy processing
- Protect API performance
- Scale predictably

Avoid:
- Excessive deep validation everywhere
- Heavy validation bottlenecks

---

## Security Validation Rules

Validation systems should:
- Prevent injection attacks
- Prevent malformed payloads
- Sanitize dangerous input
- Protect workflow execution

Examples:
- SQL injection prevention
- XSS sanitization
- Unsafe payload filtering

---

## AI Validation Development Rules

AI agents must:
- Validate all external input
- Reuse DTOs
- Preserve validation consistency
- Avoid trusting raw payloads
- Maintain schema integrity
- Protect workflow boundaries

---

## Validation Observability Rules

Validation systems should expose:
- Validation failures
- Invalid payload attempts
- Workflow validation errors
- Rejected external payloads

Validation failures improve:
- Monitoring
- Security visibility
- Debugging

---

## Validation Testing Rules

Validation systems should be testable.

Tests should validate:
- Invalid payload rejection
- Sanitization behavior
- Schema consistency
- Workflow validation logic

Critical validation paths must remain protected.

---

## Scalability Principles

Validation architecture must support:
- Additional workflows
- Additional APIs
- Queue systems
- External integrations
- Distributed systems
- Enterprise-scale contracts

---

## Future Expansion Principles

The validation system should support future:
- Zod schemas
- OpenAPI schema generation
- Advanced sanitization pipelines
- Dynamic validation rules
- AI-assisted validation
- Schema versioning

---

## Naming Conventions

### DTOs
Use PascalCase with Dto suffix.

Examples:
- CreateCampaignDto
- UpdateUserDto

---

### Validators
Use PascalCase with Validator suffix.

Examples:
- WorkflowStateValidator
- EmailValidator

---

### Pipes
Use PascalCase with Pipe suffix.

Examples:
- ValidationPipe
- SanitizationPipe

---

## Forbidden Practices

- Trusting raw input
- Missing sanitization
- Inline validation chaos
- Untyped payloads
- Blind webhook processing
- Unvalidated queue jobs
- Free uncontrolled states
- Duplicate validation logic
- Exposing internal validation details
- Skipping workflow validation

---

## Recommended Technologies

- class-validator
- class-transformer
- NestJS ValidationPipe
- Zod
- Joi

---

## Related Skills

- error-handling
- auth
- api-design
- workflow-engine
- queues
- integrations
- notifications
- testing
- observability
- nestjs
- prisma
- postgres
- ai-collaboration
- documentation
- project-standards
# API Design Skill

## Purpose
Define API architecture, REST conventions, endpoint organization, response standards, workflow-oriented operations, and integration consistency across the backend system.

This skill standardizes how APIs are designed, structured, versioned, documented, and maintained using scalable and maintainable backend practices.

---

## API Philosophy

APIs represent:
- Business workflows
- Domain operations
- System capabilities
- Workflow transitions
- Operational interactions

APIs are contracts between:
- Frontend
- Backend
- Automations
- Integrations
- External systems

Consistency is mandatory.

---

## Core Principles

- Consistency first
- Workflow-oriented APIs
- RESTful conventions
- Predictable responses
- Modular endpoint organization
- Scalable architecture
- Explicit operations
- AI-friendly API structure

---

## API Architecture

APIs should reflect:
- Domain boundaries
- Modular workflows
- Business operations
- Permission structures

Endpoints should remain organized by:
- Modules
- Features
- Workflows

---

## Endpoint Organization

Endpoints should follow module-based organization.

Examples:

/auth
/campaigns
/influencers
/notifications
/workflows

Avoid:
- Random endpoint grouping
- Global unstructured routes
- Mixed domain responsibilities

---

## RESTful Conventions

Use standard REST methods:

GET
→ retrieve data

POST
→ create resources or execute workflow actions

PATCH
→ partial updates

PUT
→ full replacement updates when necessary

DELETE
→ remove resources

---

## Resource Naming Rules

Resources should:
- Use plural naming
- Use kebab-case when necessary
- Remain domain-oriented
- Remain predictable

Examples:
- /campaigns
- /workflow-events
- /influencer-invitations

Avoid:
- Verb-heavy endpoints
- Random naming
- Mixed naming styles

---

## Workflow-Oriented Endpoint Rules

Workflow operations should remain explicit.

Examples:

POST /campaigns/:id/approve
POST /campaigns/:id/reject
POST /campaigns/:id/send-invitations

These endpoints represent:
- Workflow transitions
- Operational actions
- Business processes

---

## Nested Resource Rules

Nested resources should:
- Reflect real ownership relationships
- Remain readable
- Avoid excessive nesting

Examples:
- /campaigns/:id/invitations
- /campaigns/:id/analytics

Avoid:
- Deep nested endpoint chains
- Overcomplicated resource structures

---

## Response Structure Rules

Responses should remain consistent.

Recommended structure:

{
  "success": true,
  "message": "Campaign created successfully",
  "data": {}
}

Error example:

{
  "success": false,
  "message": "Unauthorized access",
  "errors": []
}

---

## Success Response Rules

Success responses should:
- Remain predictable
- Return meaningful data
- Support frontend workflows
- Support dashboard operations

Avoid:
- Inconsistent payloads
- Unclear success responses

---

## Error Handling Rules

Errors should:
- Use proper HTTP status codes
- Remain standardized
- Avoid exposing internal logic
- Provide useful feedback

Examples:
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error

Avoid:
- Generic unclear errors
- Hidden failures
- Random error structures

---

## Pagination Rules

Large collections must support:
- Pagination
- Filtering
- Sorting
- Search

Recommended query params:
- ?page=1
- ?limit=10
- ?search=campaign
- ?status=approved

---

## Filtering Rules

Filtering should:
- Remain scalable
- Use query parameters
- Support dashboard workflows
- Remain predictable

Examples:
- ?status=pending
- ?role=manager
- ?createdAfter=2026-01-01

Avoid:
- Hardcoded filters
- Random filter structures

---

## Sorting Rules

Sorting should:
- Use query parameters
- Remain explicit
- Support analytics workflows

Examples:
- ?sortBy=createdAt
- ?order=desc

---

## Search Rules

Search endpoints should:
- Remain lightweight
- Support filtering
- Avoid excessive payloads
- Remain performance-friendly

---

## Versioning Principles

APIs should support future versioning.

Recommended:
- /api/v1/

Architecture should remain extensible for:
- Future workflows
- External integrations
- Mobile clients
- Public APIs

---

## Authentication Rules

Protected endpoints must:
- Require authentication
- Validate permissions
- Respect RBAC rules
- Protect workflow execution

Examples:
- Admin-only routes
- Manager approval routes
- Workflow-sensitive operations

---

## Authorization Rules

Authorization should:
- Use guards
- Use decorators
- Remain centralized
- Avoid inline permission chaos

Avoid:
- Manual permission checks everywhere
- Scattered authorization logic

---

## DTO Validation Rules

All request data must:
- Use DTO validation
- Remain strongly typed
- Validate before execution

Use:
- class-validator
- class-transformer

Never trust raw request input.

---

## API Documentation Rules

APIs should remain:
- Self-documenting
- Predictable
- Consistent

Future support may include:
- Swagger
- OpenAPI

Documentation should match:
- Workflows
- Permissions
- Response structures

---

## Workflow API Rules

Workflow APIs should:
- Represent operational actions
- Trigger workflows safely
- Preserve state consistency
- Support auditability

Examples:
- approval workflows
- invitation workflows
- notification workflows

---

## Analytics API Rules

Analytics endpoints should:
- Support dashboards
- Support filtering
- Support aggregation
- Remain optimized

Avoid:
- Massive unoptimized analytics responses
- Overfetching

---

## Integration API Rules

External-facing APIs should:
- Remain stable
- Validate inputs strictly
- Protect sensitive operations
- Support retries when needed

---

## Idempotency Principles

Critical workflow endpoints should support:
- Safe retries
- Duplicate prevention
- Consistent execution

Examples:
- Payment-like workflows
- Invitation sending
- Automation triggers

---

## AI API Development Rules

AI agents must:
- Preserve REST conventions
- Reuse response patterns
- Respect module boundaries
- Avoid duplicated endpoints
- Maintain workflow consistency
- Follow naming conventions

---

## Performance Rules

Prefer:
- Lightweight responses
- Efficient pagination
- Optimized queries
- Modular payloads

Avoid:
- Massive payload responses
- Overfetching
- Unnecessary nested relations

---

## Security Rules

APIs must:
- Validate all input
- Protect sensitive routes
- Avoid exposing internal errors
- Prevent unauthorized workflow execution

Sensitive workflows require strict protection.

---

## Monitoring Principles

APIs should support:
- Request logging
- Error monitoring
- Workflow visibility
- Analytics tracking
- Performance monitoring

---

## Scalability Principles

API architecture must support:
- Additional modules
- Future integrations
- Mobile clients
- External systems
- Workflow expansion
- Automation systems

---

## Naming Conventions

### Controllers
Use PascalCase with Controller suffix.

Examples:
- CampaignController
- AuthController

---

### Routes
Use plural REST naming.

Examples:
- /campaigns
- /notifications
- /workflow-events

---

### Query Parameters
Use camelCase.

Examples:
- ?createdAfter=
- ?sortBy=
- ?workflowStatus=

---

## Forbidden Practices

- Random endpoint naming
- Verb-heavy REST routes
- Inconsistent responses
- Massive payloads
- Missing pagination
- Unstructured filtering
- Workflow logic inside controllers
- Exposed internal errors
- Inline authorization chaos
- Unvalidated request input

---

## Recommended Technologies

- NestJS
- Swagger
- OpenAPI
- JWT
- Prisma
- PostgreSQL

---

## Related Skills

- nestjs
- auth
- workflow-engine
- prisma
- postgres
- documentation
- ai-collaboration
- project-standards
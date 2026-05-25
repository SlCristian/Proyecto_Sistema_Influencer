# NestJS Skill

## Purpose
Define backend architecture, modular organization, API structure, business logic separation, validation strategy, and implementation standards for the NestJS application.

This skill standardizes how backend modules, services, controllers, workflows, and integrations are built using a scalable Modular Monolith Architecture.

---

## Backend Architecture

The backend follows a Modular Monolith Architecture.

Each module must encapsulate:
- Controllers
- Services
- DTOs
- Entities
- Schemas
- Validation
- Business workflows
- Integrations

Modules must remain isolated and maintain clear boundaries.

---

## Core Principles

- Modularity first
- Separation of concerns
- Reusability over duplication
- Scalable architecture
- Clear domain boundaries
- Maintainable business logic
- AI-friendly backend structure
- Feature-oriented organization

---

## Backend Structure

The backend should follow:

/src
├── modules/
├── common/
├── config/
├── database/
├── integrations/
├── shared/
└── main.ts

---

## Module Structure

Each module should follow:

/modules
└── module-name/
    ├── controllers/
    ├── services/
    ├── dto/
    ├── entities/
    ├── schemas/
    ├── types/
    ├── utils/
    ├── guards/
    ├── decorators/
    ├── interfaces/
    └── module-name.module.ts

---

## Module Responsibilities

Modules are responsible for:
- Managing domain logic
- Handling workflows
- Processing requests
- Validating data
- Managing integrations related to the module
- Exposing APIs

Modules should NOT:
- Access unrelated domain logic
- Mix responsibilities
- Become tightly coupled
- Handle unrelated workflows

---

## Controller Rules

Controllers should:
- Remain lightweight
- Handle request/response logic only
- Delegate business logic to services
- Use DTO validation
- Return standardized responses

Avoid:
- Heavy business logic
- Complex workflows
- Direct database manipulation

---

## Service Rules

Services are responsible for:
- Business logic
- Workflow orchestration
- Validation coordination
- Integration handling
- Domain operations

Services should:
- Remain modular
- Be reusable
- Be maintainable
- Avoid excessive complexity

Avoid:
- Massive services
- Cross-domain logic
- Tight coupling
- Repeated business logic

---

## DTO Rules

DTOs must:
- Validate request data
- Remain focused
- Use class-validator
- Use clear field naming
- Support maintainable validation

Avoid:
- Massive DTOs
- Repeated validation logic
- Business logic inside DTOs

---

## Validation Strategy

Validation must occur:
1. Client-side
2. DTO validation
3. Business-level validation

Use:
- class-validator
- class-transformer

Validation should remain centralized and reusable.

---

## Business Logic Rules

Business logic must:
- Live inside services
- Remain modular
- Be reusable
- Follow domain boundaries

Avoid:
- Business logic in controllers
- Business logic in decorators
- Business logic in DTOs

---

## Shared Resources Rules

Reusable backend resources should live inside:

/common
/shared

Examples:
- Exception filters
- Interceptors
- Pipes
- Utilities
- Shared decorators
- Shared guards

Avoid duplicating shared backend logic.

---

## Integration Rules

External integrations should remain isolated.

Examples:
- Slack integration
- Email services
- Notification providers
- External APIs

Integrations should:
- Be modular
- Be reusable
- Handle retries
- Handle failures gracefully

---

## Error Handling Rules

Use:
- Global exception filters
- Standardized error responses
- Proper HTTP status codes
- Meaningful error messages

Avoid:
- Silent failures
- Generic unclear errors
- Inconsistent responses

---

## Response Structure Rules

Responses should:
- Remain consistent
- Use predictable formats
- Include meaningful messages when necessary

Avoid:
- Inconsistent payloads
- Random response structures
- Unclear response naming

---

## Authentication Rules

Authentication logic should:
- Remain isolated
- Use guards
- Use decorators
- Use JWT-based authentication
- Support role-based authorization

Avoid:
- Scattered auth logic
- Hardcoded permissions
- Mixed authorization responsibilities

---

## Authorization Rules

Authorization should:
- Be role-based
- Support scalability
- Remain centralized
- Use reusable guards and decorators

---

## Database Access Rules

Database access should:
- Remain inside services
- Use repositories or Prisma services
- Avoid direct controller queries
- Remain modular

Avoid:
- Scattered queries
- Raw queries without reason
- Duplicated database logic

---

## Workflow Rules

Backend workflows should:
- Remain modular
- Support automation
- Handle asynchronous processing
- Support notifications
- Support future integrations

Examples:
- Campaign invitation flow
- Influencer approval flow
- Email automation flow
- Slack notification flow

---

## Event-Oriented Principles

The backend should support:
- Event-driven workflows
- Future queue systems
- Notification triggers
- Automation pipelines

Design modules with future extensibility in mind.

---

## Scalability Principles

Backend architecture must support:
- New modules
- Future integrations
- Workflow expansion
- Automation systems
- Dashboard analytics
- Notification systems

---

## AI Backend Development Rules

AI agents must:
- Respect module boundaries
- Reuse shared utilities
- Preserve architecture consistency
- Avoid cross-module chaos
- Maintain modular workflows
- Follow existing backend patterns

---

## Naming Conventions

### Modules
Use kebab-case.

Examples:
- campaign-management
- influencer-workflows

### Services
Use PascalCase with Service suffix.

Examples:
- CampaignService
- NotificationService

### Controllers
Use PascalCase with Controller suffix.

Examples:
- CampaignController
- AuthController

### DTOs
Use PascalCase with DTO suffix.

Examples:
- CreateCampaignDTO
- UpdateInfluencerDTO

---

## Security Rules

The backend must:
- Validate all input
- Protect sensitive routes
- Sanitize user input
- Avoid exposing internal errors
- Protect secrets using environment variables

Never trust client-side validation alone.

---

## Performance Rules

Prefer:
- Modular queries
- Efficient database access
- Async workflows
- Reusable services

Avoid:
- Heavy synchronous processing
- Massive services
- Overfetching
- Unnecessary complexity

---

## Testing Principles

Modules should support:
- Unit testing
- Integration testing
- Workflow testing

Business logic should remain testable and isolated.

---

## Forbidden Practices

- Massive controllers
- Massive services
- Business logic inside controllers
- Cross-module chaos
- Tight coupling
- Duplicated workflows
- Hardcoded secrets
- Direct database access from controllers
- Mixed responsibilities
- Unstructured backend folders

---

## Recommended Stack

- NestJS
- TypeScript
- PostgreSQL
- Prisma
- JWT
- class-validator
- class-transformer

---

## Related Skills

- project-standards
- ai-collaboration
- documentation
- postgres
- prisma
- auth
- workflow-engine
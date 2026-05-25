# Authentication & Authorization Skill

## Purpose
Define authentication architecture, authorization systems, permission handling, access control standards, session management, and security workflows across the entire application.

This skill standardizes how users, roles, permissions, protected workflows, and secure operations are implemented using scalable backend security practices.

---

## Authentication Philosophy

Authentication is not just login.

Authentication represents:
- Identity verification
- Access control
- Workflow protection
- Operational security
- User trust
- System integrity

Authorization defines:
- What users can access
- What workflows users can execute
- What operations users can perform

---

## Core Principles

- Security first
- Authorization before execution
- Role-based architecture
- Centralized auth logic
- Protected workflows
- Explicit permissions
- Reusable guards and decorators
- AI-friendly auth structure

---

## Authentication Architecture

Authentication should remain isolated inside:

/modules/auth/

Recommended structure:

/modules/auth/
├── controllers/
├── services/
├── guards/
├── decorators/
├── strategies/
├── dto/
├── interfaces/
├── utils/
├── types/
└── auth.module.ts

---

## Authentication Responsibilities

Authentication is responsible for:
- Identity verification
- Session validation
- JWT management
- Password security
- Access protection
- User session workflows

Authorization is responsible for:
- Permission validation
- Role access control
- Workflow restrictions
- Protected operations

---

## Authentication Flow

Recommended authentication flow:

1. User submits credentials
2. Validate credentials
3. Generate JWT
4. Store secure session data
5. Return authenticated response
6. Protect future requests using guards

---

## JWT Rules

JWT should:
- Remain secure
- Use expiration
- Avoid storing sensitive information
- Be validated centrally
- Support scalable authorization

JWT payloads should remain minimal.

Avoid:
- Sensitive user data inside tokens
- Massive token payloads
- Weak secret management

---

## Session Rules

Sessions should:
- Support expiration
- Support invalidation
- Remain secure
- Protect workflow execution

Future support may include:
- Refresh tokens
- Session revocation
- Multi-device sessions

---

## Password Rules

Passwords must:
- Be hashed
- Never be stored in plain text
- Use secure hashing algorithms
- Support validation rules

Use:
- bcrypt or equivalent secure hashing

Avoid:
- Weak password handling
- Reversible encryption
- Plain-text credentials

---

## Authorization Philosophy

Authorization defines:
- Operational boundaries
- Workflow permissions
- Module access
- Business restrictions

Authorization should remain:
- Explicit
- Centralized
- Reusable
- Scalable

---

## Role-Based Access Control (RBAC)

The system should use RBAC.

Examples:
- admin
- manager
- volunteer
- influencer

Roles define:
- Accessible workflows
- Dashboard visibility
- Allowed operations
- Module permissions

---

## Permission Rules

Permissions should:
- Remain explicit
- Be reusable
- Support scalability
- Avoid hardcoded checks

Prefer:
- Centralized permission handling
- Role decorators
- Guard-based protection

Avoid:
- Scattered permission logic
- Inline authorization chaos
- Mixed workflow permissions

---

## Guard Rules

Guards should:
- Protect routes
- Validate permissions
- Remain reusable
- Support modular workflows

Examples:
- JwtAuthGuard
- RolesGuard
- WorkflowPermissionGuard

Avoid:
- Auth logic inside controllers
- Repeated authorization checks

---

## Decorator Rules

Decorators should:
- Simplify authorization
- Remain reusable
- Improve readability
- Support scalability

Examples:
- @CurrentUser()
- @Roles()
- @Public()

---

## Protected Workflow Rules

Critical workflows must:
- Validate authentication
- Validate permissions
- Validate workflow ownership when necessary
- Prevent unauthorized execution

Examples:
- Campaign approval
- Invitation management
- Workflow administration
- Dashboard access

---

## Authentication Service Rules

Auth services should:
- Handle authentication logic
- Manage token generation
- Validate credentials
- Coordinate session workflows

Avoid:
- Massive auth services
- Cross-domain auth logic
- Mixed unrelated responsibilities

---

## User Entity Rules

Users should support:
- Roles
- Permissions
- Status tracking
- Auditability
- Workflow ownership

Examples:
- active
- suspended
- pending
- deactivated

---

## Security Validation Rules

Protected operations must validate:
- Authentication
- Authorization
- Workflow ownership
- State restrictions

Never trust:
- Client-side permissions
- Client-side workflow access

---

## Error Handling Rules

Authentication errors should:
- Remain secure
- Avoid exposing sensitive details
- Use proper HTTP status codes
- Return predictable responses

Examples:
- UnauthorizedException
- ForbiddenException

Avoid:
- Leaking internal auth logic
- Detailed credential failure messages

---

## Refresh Token Principles

Future authentication systems may support:
- Refresh tokens
- Session renewal
- Token rotation
- Device management

Architecture should remain extensible.

---

## Auditability Rules

Authentication systems should track:
- Login attempts
- Session creation
- Permission-sensitive operations
- Critical workflow access

Auditability improves:
- Security
- Monitoring
- Incident tracking

---

## Workflow Authorization Rules

Workflow execution should validate:
- User role
- Workflow permissions
- Ownership when necessary
- State access restrictions

Examples:
- Only managers approve campaigns
- Only admins manage users
- Influencers manage their own profiles

---

## AI Authentication Development Rules

AI agents must:
- Reuse guards
- Reuse decorators
- Preserve RBAC consistency
- Avoid duplicated auth logic
- Respect protected workflows
- Maintain secure authorization boundaries

---

## Security Principles

The system must:
- Protect sensitive routes
- Protect secrets using environment variables
- Validate all tokens
- Sanitize authentication flows
- Prevent unauthorized access

Security is mandatory.

---

## Environment Variable Rules

Sensitive values must use environment variables.

Examples:
- JWT_SECRET
- DATABASE_URL
- AUTH_EXPIRATION

Never hardcode secrets.

---

## Scalability Principles

Authentication architecture must support:
- Additional roles
- Permission expansion
- Workflow security growth
- Future integrations
- Enterprise access control

---

## Monitoring Principles

Authentication systems should support:
- Login monitoring
- Suspicious activity tracking
- Permission auditability
- Workflow access visibility

---

## Future Expansion Principles

The auth architecture should support future:
- OAuth
- Social login
- Multi-factor authentication
- Session revocation
- Enterprise SSO
- API key systems

---

## Naming Conventions

### Guards
Use PascalCase with Guard suffix.

Examples:
- JwtAuthGuard
- RolesGuard

---

### Decorators
Use descriptive naming.

Examples:
- @Roles()
- @CurrentUser()
- @Public()

---

### DTOs
Use PascalCase with DTO suffix.

Examples:
- LoginDTO
- RegisterUserDTO

---

## Forbidden Practices

- Hardcoded permissions
- Auth logic inside controllers
- Plain-text passwords
- Exposed secrets
- Weak JWT handling
- Duplicated authorization logic
- Inline permission chaos
- Missing route protection
- Client-side trust for permissions

---

## Recommended Stack

- NestJS
- JWT
- bcrypt
- Passport
- PostgreSQL
- Prisma

---

## Related Skills

- nestjs
- workflow-engine
- prisma
- postgres
- ai-collaboration
- documentation
- project-standards
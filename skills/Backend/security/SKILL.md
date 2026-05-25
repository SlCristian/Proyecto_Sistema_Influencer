# Security Skill

## Purpose

Provide standards, patterns, architectural guidance, and operational protection strategies for authentication, authorization, workflow security, API protection, secret management, session security, validation, and secure infrastructure design across the entire platform.

This skill ensures that security systems remain:
- scalable,
- observable,
- maintainable,
- workflow-aware,
- operationally safe.

---

# Security Philosophy

Security is NOT:
- only login systems,
- isolated middleware,
- optional validation.

Security IS:
- workflow protection,
- authorization consistency,
- operational trust,
- layered defensive architecture.

The platform must preserve:
- authorization boundaries,
- workflow integrity,
- operational safety,
- auditability.

---

# Core Security Principles

The system follows:
- defense in depth,
- least privilege,
- explicit authorization,
- secure workflow validation,
- centralized authentication.

Avoid:
- implicit trust,
- insecure defaults,
- scattered security logic.

---

# Security Architecture Structure

Recommended structure:

```text
security/
├── auth/
├── guards/
├── permissions/
├── roles/
├── middleware/
├── interceptors/
├── decorators/
├── validators/
├── policies/
├── strategies/
└── audit/
```

---

# Authentication Rules

Authentication systems should:
- remain centralized,
- remain observable,
- support scalability,
- support session validation.

Examples:
- institutional login
- volunteer authentication
- admin authentication

Authentication should:
- validate credentials securely,
- issue secure sessions,
- support expiration,
- support revocation.

Avoid:
- plaintext passwords
- custom insecure auth logic
- shared accounts

---

# Authorization Rules

Authorization should:
- remain explicit,
- validate permissions,
- protect workflows,
- support role boundaries.

Examples:
- admin-only volunteer creation
- protected analytics access
- scheduling permission validation

Avoid:
- implicit access
- frontend-only authorization

---

# RBAC Rules

The platform should support:
- admin roles
- volunteer roles
- future role expansion

Example:

```text
ADMIN
→ full operational control

VOLUNTEER
→ influencer workflows
→ scheduling workflows
→ limited analytics
```

Permissions should:
- remain centralized,
- remain auditable,
- avoid duplication.

Avoid:
- hardcoded permission logic

---

# JWT Rules

JWT systems should:
- remain short-lived,
- support validation,
- support expiration,
- preserve integrity.

JWT payloads should remain minimal.

Examples:
- userId
- role
- sessionId

Avoid:
- sensitive payload data
- oversized tokens

---

# Session Security Rules

Sessions should:
- support expiration,
- support invalidation,
- remain traceable,
- prevent reuse abuse.

Examples:
- logout invalidation
- refresh token rotation

Avoid:
- infinite sessions
- insecure cookie handling

---

# Password Security Rules

Passwords must:
- remain hashed,
- use strong algorithms,
- avoid reversible encryption.

Recommended:
- bcrypt
- Argon2

Avoid:
- plaintext passwords
- SHA1
- MD5

---

# API Security Rules

APIs should:
- validate authentication,
- validate authorization,
- validate payloads,
- prevent abuse.

Examples:
- protected dashboard APIs
- scheduling APIs
- admin APIs

Avoid:
- unrestricted operational endpoints

---

# Validation Rules

All external input must:
- remain validated,
- remain sanitized,
- preserve workflow integrity.

Examples:
- email validation
- prompt validation
- webhook validation
- scheduling validation

Avoid:
- trusting external payloads blindly

---

# Workflow Security Rules

Critical workflows should:
- validate permissions,
- preserve state integrity,
- prevent unauthorized transitions.

Examples:
- invitation workflows
- meeting scheduling
- volunteer management

Avoid:
- unsafe workflow mutations

---

# AI Security Rules

AI workflows should:
- validate prompts,
- validate outputs,
- prevent prompt injection,
- avoid unsafe automation.

Examples:
- influencer generation validation
- duplicate detection
- unsafe AI output filtering

Avoid:
- blind AI trust
- unvalidated AI execution

---

# Secret Management Rules

Secrets should:
- remain centralized,
- remain isolated by environment,
- support rotation.

Examples:
- Gemini API keys
- Slack tokens
- email provider credentials

Use:
- environment variables
- secret managers

Avoid:
- hardcoded secrets
- public credentials

---

# Webhook Security Rules

Webhooks should:
- validate signatures,
- validate providers,
- support replay protection,
- remain observable.

Examples:
- Slack webhooks
- provider callbacks

Avoid:
- unauthenticated webhook execution

---

# Rate Limiting Rules

Critical systems should support:
- rate limiting,
- abuse prevention,
- brute-force protection.

Examples:
- login attempts
- AI prompt generation
- scheduling requests

Avoid:
- unlimited public execution

---

# Audit Rules

Critical actions should remain auditable.

Examples:
- volunteer creation
- permission changes
- scheduling changes
- admin operations

Audit logs should include:
- actor
- action
- timestamp
- workflow context

Avoid:
- invisible operational changes

---

# Logging Security Rules

Security logs should expose:
- failed authentication
- suspicious activity
- unauthorized access attempts
- validation failures

Avoid:
- leaking secrets into logs

---

# Frontend Security Rules

Frontend systems should:
- protect routes,
- respect authorization boundaries,
- avoid exposing secrets.

Examples:
- protected dashboards
- role-aware UI rendering

Avoid:
- relying only on frontend validation

---

# Database Security Rules

Database systems should:
- protect sensitive data,
- support secure relations,
- preserve auditability.

Examples:
- indexed sessions
- role-based queries
- workflow ownership validation

Avoid:
- unrestricted sensitive queries

---

# Infrastructure Security Rules

Infrastructure systems should:
- isolate environments,
- protect databases,
- protect Redis,
- secure deployments.

Examples:
- secure environment configs
- production isolation
- protected admin tooling

Avoid:
- public infrastructure exposure

---

# Scheduling Security Rules

Scheduling workflows should:
- validate ownership,
- prevent unauthorized booking,
- preserve operational consistency.

Examples:
- secure invitation links
- validated availability access

Avoid:
- unrestricted scheduling mutations

---

# Notification Security Rules

Notification systems should:
- validate destinations,
- preserve provider isolation,
- prevent abuse.

Examples:
- validated email sending
- protected Slack integrations

Avoid:
- unrestricted notification execution

---

# Security Observability

Security systems should expose:
- authentication failures
- authorization failures
- suspicious workflow activity
- API abuse
- webhook validation failures

Observability improves:
- threat detection
- debugging
- operational trust

Avoid:
- invisible security incidents

---

# Error Handling Rules

Errors should:
- avoid leaking internals,
- preserve operational visibility,
- remain safe for users.

Avoid:
- public stack traces
- infrastructure leakage

---

# Naming Conventions

Security naming should remain explicit.

Examples:

```text
RequireAdmin
JwtAuthGuard
RolePermission
AuditEvent
```

Avoid:
- ambiguous security naming

---

# Scalability Principles

Security systems should support:
- additional roles,
- future MFA,
- OAuth providers,
- enterprise authorization,
- larger workflow volume.

Avoid:
- hardcoded role assumptions

---

# Future Expansion

The security architecture should support future:
- MFA authentication
- OAuth providers
- SSO
- advanced RBAC
- threat analytics
- enterprise compliance

---

# Recommended Stack

- JWT
- bcrypt
- Argon2
- Passport
- Redis
- Helmet
- Zod
- class-validator

---

# Related Skills

- auth
- validation
- observability
- workflow-engine
- integrations
- backend-architecture
- prisma
- notifications
- documentation
```
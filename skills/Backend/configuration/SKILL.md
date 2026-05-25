# Configuration Skill

## Purpose
Define configuration architecture, environment management, secret handling, runtime configuration, typed configuration systems, and operational consistency standards across the application.

This skill standardizes how the system manages environments, secrets, provider configuration, infrastructure settings, and deployment consistency using scalable and maintainable backend architecture.

---

## Configuration Philosophy

Configuration is part of the architecture.

Configuration represents:
- Environment behavior
- Infrastructure settings
- Provider setup
- Runtime control
- Deployment consistency
- Operational reliability

Configuration should:
- Remain centralized
- Remain validated
- Remain secure
- Remain observable
- Remain environment-aware

---

## Core Principles

- Centralized configuration
- Environment isolation
- Typed configuration
- Validate configuration early
- Protect secrets
- Avoid hardcoded values
- Preserve deployment consistency
- AI-friendly configuration architecture

---

## Configuration Architecture

Configuration systems should remain isolated inside:

/config/

Recommended structure:

/config/
├── environments/
├── providers/
├── validation/
├── feature-flags/
├── runtime/
├── types/
├── utils/
└── configuration.module.ts

---

## Configuration Responsibilities

Configuration systems are responsible for:
- Environment management
- Secret management
- Provider configuration
- Runtime settings
- Feature flags
- Infrastructure configuration
- Deployment consistency
- Config validation

Configuration systems should NOT:
- Own business logic
- Replace workflows
- Become scattered across modules

---

## Environment Management Rules

The system should support multiple environments.

Examples:
- development
- testing
- staging
- production

Each environment should:
- Remain isolated
- Use independent configuration
- Preserve operational consistency

Avoid:
- Shared production/test credentials
- Mixed environment behavior

---

## Environment Variable Rules

Sensitive configuration must use environment variables.

Examples:
- DATABASE_URL
- JWT_SECRET
- REDIS_HOST
- EMAIL_PROVIDER_KEY
- SLACK_WEBHOOK_URL

Never hardcode secrets inside source code.

---

## Secret Management Rules

Secrets should:
- Remain protected
- Remain externalized
- Never be committed to git
- Support rotation
- Support environment isolation

Examples:
- API keys
- Database passwords
- JWT secrets
- Provider credentials

Avoid:
- Hardcoded credentials
- Shared insecure secrets
- Exposed secrets in logs

---

## Typed Configuration Rules

Configuration should remain strongly typed.

Examples:
- DatabaseConfig
- RedisConfig
- AuthConfig

Typed configuration improves:
- Reliability
- Maintainability
- Validation safety
- Developer experience

Avoid:
- Free uncontrolled config access
- Random string-based config usage

---

## Config Validation Rules

Configuration should validate during application startup.

Validation should:
- Prevent invalid startup
- Detect missing variables
- Detect invalid values
- Preserve operational consistency

Examples:
- Missing DATABASE_URL
- Invalid JWT expiration
- Invalid Redis configuration

Fail fast on invalid critical configuration.

---

## Startup Validation Rules

Critical configuration errors should:
- Prevent application startup
- Remain observable
- Preserve operational safety

Examples:
- Missing production secrets
- Invalid infrastructure settings

Avoid:
- Running with broken configuration
- Silent invalid environments

---

## Provider Configuration Rules

External providers should:
- Use isolated configuration
- Support validation
- Remain replaceable
- Remain environment-aware

Examples:
- Slack configuration
- Email provider configuration
- Analytics provider configuration

Avoid:
- Provider config duplication
- Scattered provider setup

---

## Runtime Configuration Rules

The system should support runtime-safe configuration.

Examples:
- Feature toggles
- Queue limits
- Retry limits
- API rate limits

Runtime configuration should:
- Remain observable
- Preserve system stability
- Avoid unsafe mutations

---

## Feature Flag Rules

Feature flags should:
- Support gradual rollout
- Support workflow experimentation
- Support operational control
- Remain centralized

Examples:
- enableNewDashboard
- enableWorkflowAutomation
- enableRealtimeNotifications

Avoid:
- Random feature condition chaos
- Hardcoded experimental logic

---

## Infrastructure Configuration Rules

Infrastructure settings should remain centralized.

Examples:
- PostgreSQL config
- Redis config
- Queue config
- Cache config
- Observability config

Infrastructure consistency improves:
- Deployments
- Reliability
- Scalability

---

## Queue Configuration Rules

Queue systems should support configurable:
- Retry limits
- Delays
- Concurrency
- Timeouts
- Worker limits

Examples:
- EMAIL_QUEUE_CONCURRENCY
- MAX_RETRY_ATTEMPTS

Avoid:
- Hardcoded operational values

---

## API Configuration Rules

API systems should support:
- Rate limits
- CORS configuration
- Request limits
- Timeout settings

Examples:
- API_TIMEOUT
- MAX_REQUEST_SIZE

---

## Observability Configuration Rules

Observability systems should support:
- Log levels
- Monitoring providers
- Alert thresholds
- Tracing configuration

Examples:
- LOG_LEVEL
- ENABLE_TRACING

Avoid:
- Excessive production debug logging

---

## Security Configuration Rules

Security-sensitive settings should:
- Remain validated
- Remain isolated
- Use secure defaults
- Support rotation

Examples:
- JWT expiration
- Password hashing settings
- API security config

---

## Deployment Configuration Rules

Deployments should:
- Remain environment-aware
- Validate startup configuration
- Preserve consistency across environments
- Support operational monitoring

Avoid:
- Environment drift
- Manual deployment configuration chaos

---

## Configuration Modularity Rules

Each module should:
- Expose its own config safely
- Avoid global config chaos
- Preserve module isolation

Examples:
- AuthModule config
- QueueModule config
- NotificationModule config

---

## Configuration Reusability Rules

Shared configuration logic should:
- Remain reusable
- Avoid duplication
- Preserve consistency

Examples:
- Shared Redis config
- Shared retry config

---

## Validation & Observability Rules

Configuration systems should expose:
- Invalid startup configuration
- Missing environment variables
- Runtime config failures
- Unsafe environment behavior

Configuration visibility improves:
- Reliability
- Debugging
- Operational safety

---

## AI Configuration Development Rules

AI agents must:
- Centralize configuration
- Avoid hardcoded secrets
- Validate environment variables
- Preserve environment isolation
- Use typed configuration
- Maintain deployment consistency

---

## Security Principles

Configuration systems must:
- Protect secrets
- Avoid credential leaks
- Prevent unsafe defaults
- Sanitize sensitive logs

Sensitive values should never appear:
- In logs
- In exceptions
- In monitoring outputs

---

## Scalability Principles

Configuration architecture must support:
- Additional providers
- Additional environments
- Distributed systems
- Future microservices
- Enterprise deployments
- Runtime operational control

---

## Future Expansion Principles

The configuration system should support future:
- Secret managers
- Vault systems
- Dynamic runtime config
- Remote feature flags
- Cloud provider configuration
- Multi-region deployments

---

## Naming Conventions

### Config Files
Use descriptive naming.

Examples:
- database.config.ts
- auth.config.ts
- queue.config.ts

---

### Environment Variables
Use uppercase snake_case.

Examples:
- DATABASE_URL
- JWT_SECRET
- REDIS_HOST

---

### Feature Flags
Use camelCase.

Examples:
- enableWorkflowAutomation
- enableRealtimeDashboard

---

## Forbidden Practices

- Hardcoded secrets
- Scattered env usage
- Missing config validation
- Unsafe defaults
- Shared production credentials
- Exposing secrets in logs
- Runtime config chaos
- Unvalidated startup configuration
- Duplicate provider configuration
- Environment inconsistency

---

## Recommended Technologies

- NestJS ConfigModule
- dotenv
- Zod
- Joi
- Vault
- AWS Secrets Manager

---

## Related Skills

- validation
- error-handling
- observability
- integrations
- queues
- notifications
- auth
- nestjs
- api-design
- prisma
- postgres
- ai-collaboration
- documentation
- project-standards
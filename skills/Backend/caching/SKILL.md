# Caching Skill

## Purpose
Define caching architecture, cache strategies, invalidation systems, Redis usage, performance optimization, and cache consistency standards across the application.

This skill standardizes how the system improves performance, reduces infrastructure load, protects scalability, and accelerates workflows using maintainable caching architecture.

---

## Caching Philosophy

Caching is performance architecture.

Caching represents:
- Performance optimization
- Infrastructure protection
- Scalability improvement
- Faster workflows
- Reduced database load
- Better user experience

Caching should:
- Remain intentional
- Remain observable
- Preserve consistency
- Protect workflows
- Support scalability

Not all data should be cached.

---

## Core Principles

- Cache intentionally
- Protect consistency
- Use cache boundaries
- Prefer predictable invalidation
- Avoid stale critical data
- Preserve workflow integrity
- Observe cache behavior
- AI-friendly caching architecture

---

## Caching Architecture

Caching systems should remain isolated inside:

/cache/

Recommended structure:

/cache/
├── redis/
├── strategies/
├── invalidation/
├── keys/
├── ttl/
├── metrics/
├── decorators/
├── utils/
└── cache.module.ts

---

## Caching Responsibilities

Caching systems are responsible for:
- Response caching
- Query caching
- Analytics caching
- Dashboard caching
- Performance optimization
- Infrastructure load reduction
- Cache invalidation
- Cache consistency

Caching systems should NOT:
- Replace databases
- Own business logic
- Store unsafe critical state permanently

---

## Cache Strategy Rules

Different data requires different strategies.

Recommended strategies:
- Cache-aside
- Read-through caching
- Write-through caching
- TTL-based caching
- Event-driven invalidation

Strategy selection depends on:
- Data volatility
- Consistency requirements
- Performance goals

---

## Cache Boundary Rules

Caching should occur at:
- API boundaries
- Dashboard boundaries
- Analytics boundaries
- Query-heavy workflows
- External integration boundaries

Examples:
- Dashboard analytics
- Public metrics
- Heavy aggregation queries

Avoid:
- Random uncontrolled caching

---

## Cache-safe Data Rules

Good cache candidates:
- Dashboard metrics
- Analytics
- Public content
- Aggregated statistics
- Search results
- Expensive read queries

Avoid caching:
- Highly volatile sensitive state
- Security-critical session logic
- Rapidly mutating workflow state

---

## TTL Rules

All caches should define intentional TTL behavior.

Examples:
- Analytics cache → 5 minutes
- Dashboard metrics → 30 seconds
- Public statistics → 1 hour

TTL selection depends on:
- Data volatility
- Freshness requirements
- Workflow sensitivity

Avoid:
- Infinite uncontrolled cache persistence

---

## Cache Invalidation Rules

Cache invalidation must remain predictable.

Invalidation should occur:
- After workflow mutations
- After critical state changes
- After analytics updates
- After dashboard-impacting operations

Examples:
- campaign.updated
→ invalidate dashboard cache

Avoid:
- Hidden stale cache
- Missing invalidation logic

---

## Event-driven Invalidation Rules

Prefer event-driven invalidation.

Examples:
- workflow.completed
- analytics.generated
- notification.sent

Events improve:
- Consistency
- Scalability
- Workflow coordination

---

## Redis Usage Rules

Redis should remain:
- Centralized
- Observable
- Environment-aware
- Properly configured

Redis responsibilities:
- Cache storage
- Queue support
- Temporary distributed state

Avoid:
- Random direct Redis usage everywhere

---

## Distributed Cache Rules

Distributed systems should:
- Share cache safely
- Preserve consistency
- Avoid node-specific cache assumptions

Distributed caching improves:
- Scalability
- Horizontal scaling
- Operational consistency

---

## API Caching Rules

APIs may cache:
- Read-heavy endpoints
- Aggregated responses
- Public analytics
- Expensive queries

Examples:
- /dashboard/analytics
- /public/stats

Avoid caching:
- Unsafe personalized sensitive data

---

## Dashboard Caching Rules

Dashboards should:
- Cache expensive metrics
- Cache aggregations
- Avoid excessive live recalculation

Examples:
- Influencer statistics
- Campaign metrics
- Analytics summaries

---

## Analytics Caching Rules

Analytics systems should:
- Cache expensive computations
- Preserve reporting performance
- Support scheduled invalidation

Examples:
- Conversion metrics
- Campaign performance summaries

---

## Query Caching Rules

Heavy database queries may use caching.

Examples:
- Aggregations
- Leaderboards
- Search systems
- Reporting endpoints

Avoid:
- Blindly caching all database queries

---

## Workflow Caching Rules

Workflow systems should:
- Avoid stale critical transitions
- Preserve workflow consistency
- Invalidate state-sensitive caches

Examples:
- Workflow status dashboards
- Async workflow summaries

---

## Queue-related Caching Rules

Queue systems may cache:
- Worker metrics
- Queue statistics
- Operational dashboards

Avoid:
- Caching active queue state unsafely

---

## User-specific Cache Rules

User-specific caching should:
- Respect authorization
- Remain isolated
- Prevent data leakage

Examples:
- Personalized dashboards
- User analytics

Avoid:
- Shared unsafe user cache

---

## Cache Key Rules

Cache keys should:
- Remain predictable
- Remain namespaced
- Support invalidation patterns

Examples:
- dashboard:user:123
- analytics:campaign:456

Avoid:
- Random inconsistent cache keys

---

## Cache Namespacing Rules

Use namespaced cache keys.

Examples:
- dashboard:
- analytics:
- notifications:
- workflows:

Namespacing improves:
- Organization
- Invalidation safety
- Scalability

---

## Cache Consistency Rules

Critical workflows should prioritize consistency over speed.

Examples:
- Authorization systems
- Financial operations
- Critical workflow state

Avoid:
- Serving stale critical data

---

## Performance Monitoring Rules

Caching systems should expose:
- Cache hits
- Cache misses
- Invalidation events
- TTL behavior
- Redis health

Cache observability improves:
- Performance tuning
- Operational visibility
- Scalability analysis

---

## Cache Failure Rules

The system should:
- Gracefully handle cache failures
- Fallback safely to database queries
- Preserve workflow integrity

Cache failure should NOT:
- Break the application

---

## Cache Warmup Rules

Critical systems may support:
- Cache preloading
- Startup warmup
- Scheduled refresh strategies

Examples:
- Dashboard preload
- Analytics warmup

---

## Security Rules

Caching systems must:
- Protect sensitive data
- Respect authorization boundaries
- Avoid leaking user information
- Sanitize cacheable payloads

Avoid:
- Caching secrets
- Shared unsafe personalized data

---

## AI Cache Development Rules

AI agents must:
- Cache intentionally
- Preserve invalidation consistency
- Avoid stale workflow state
- Use namespaced cache keys
- Respect TTL architecture
- Maintain cache observability

---

## Validation & Testing Rules

Caching systems should support:
- Cache testing
- Invalidation testing
- TTL validation
- Fallback validation

Critical cache behavior must remain testable.

---

## Scalability Principles

Caching architecture must support:
- Additional services
- Additional dashboards
- Distributed systems
- Horizontal scaling
- Enterprise workloads
- Large analytics systems

---

## Future Expansion Principles

The caching system should support future:
- Distributed Redis clusters
- Multi-region caching
- CDN integration
- Edge caching
- Advanced invalidation systems
- AI-assisted cache optimization

---

## Naming Conventions

### Cache Keys
Use colon-separated namespaces.

Examples:
- dashboard:user:123
- analytics:campaign:456

---

### Cache Services
Use PascalCase with Cache suffix.

Examples:
- DashboardCache
- AnalyticsCache

---

### Cache Events
Use contextual naming.

Examples:
- cache.invalidated
- dashboard.cache.refreshed

---

## Forbidden Practices

- Cache everything
- Missing invalidation
- Infinite stale cache
- Random Redis usage
- Shared unsafe user cache
- Hardcoded cache keys
- Caching sensitive secrets
- Blind query caching
- Ignoring cache consistency
- Hidden cache failures

---

## Recommended Technologies

- Redis
- ioredis
- NestJS CacheModule
- BullMQ
- Keyv

---

## Related Skills

- observability
- queues
- workflow-engine
- analytics
- dashboard
- integrations
- testing
- validation
- configuration
- error-handling
- nestjs
- prisma
- postgres
- ai-collaboration
- documentation
- project-standards
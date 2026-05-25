# Analytics Skill

## Purpose

Provide standards, patterns, architectural guidance, and implementation consistency for analytics systems, KPI generation, operational metrics, dashboards, aggregation pipelines, reporting workflows, and business intelligence features across the platform.

This skill ensures that analytics remain:
- scalable,
- observable,
- performant,
- reusable,
- operationally meaningful.

---

# Analytics Philosophy

Analytics systems are:
- operational intelligence systems,
- workflow-aware reporting systems,
- KPI generation pipelines,
- business visibility layers.

Analytics are NOT:
- random charts,
- disconnected dashboard queries,
- unstructured metrics,
- frontend-only calculations.

---

# Core Analytics Principles

Analytics should:
- originate from workflows,
- remain event-driven,
- support observability,
- preserve consistency,
- support scalability,
- avoid duplicate calculations.

Every important workflow should expose measurable metrics.

Examples:
- influencer generation
- validation success
- invitation conversion
- meeting scheduling
- volunteer productivity

---

# KPI Architecture Standards

KPIs should:
- remain explicit,
- remain reproducible,
- remain measurable,
- support operational decisions.

Good KPIs:
- meetings scheduled
- invitations accepted
- influencers validated
- volunteer productivity
- AI generation success rate

Avoid:
- vanity metrics
- ambiguous calculations
- inconsistent definitions

---

# Analytics Structure

Recommended structure:

```text
analytics/
├── dto/
├── services/
├── repositories/
├── queries/
├── metrics/
├── aggregations/
├── reports/
├── events/
└── constants/
```

---

# Metrics Design Rules

Metrics should:
- remain centralized,
- avoid duplication,
- support aggregation,
- support historical tracking.

Example:

```ts
export const KPI_EVENTS = {
  INFLUENCER_GENERATED: "influencer.generated",
  INFLUENCER_VALIDATED: "influencer.validated",
  MEETING_SCHEDULED: "meeting.scheduled",
};
```

Avoid:
- scattered metric names
- hardcoded dashboard calculations

---

# Event-driven Analytics

Analytics should react to workflows.

Examples:

```text
influencer.generated
→ analytics.updated

meeting.scheduled
→ volunteer.metrics.updated

invitation.sent
→ campaign.metrics.updated
```

Avoid:
- manually updating metrics everywhere
- hidden analytics mutations

---

# Aggregation Rules

Aggregation systems should:
- remain optimized,
- support scalability,
- avoid blocking workflows.

Examples:
- daily summaries
- weekly reports
- volunteer rankings
- campaign analytics

Avoid:
- realtime recalculation of everything

---

# Query Optimization Rules

Analytics queries should:
- remain indexed,
- support pagination,
- avoid N+1 queries,
- avoid full-table scans.

Examples:
- aggregate queries
- grouped analytics
- cached summaries

Avoid:
- massive dashboard queries
- unbounded analytics requests

---

# Dashboard Data Rules

Dashboard APIs should:
- return frontend-ready data,
- support filtering,
- support pagination,
- remain predictable.

Good response example:

```ts
{
  totalInfluencers: 120,
  validatedInfluencers: 90,
  meetingsScheduled: 45,
  conversionRate: 37.5
}
```

Avoid:
- frontend-heavy transformations
- deeply nested inconsistent responses

---

# Analytics API Standards

Analytics endpoints should:
- remain read-oriented,
- support filters,
- support date ranges,
- preserve performance.

Example routes:

```text
GET /analytics/dashboard
GET /analytics/volunteers
GET /analytics/campaigns
GET /analytics/scheduling
```

Avoid:
- giant overloaded analytics endpoints

---

# Historical Analytics Rules

Analytics systems should preserve:
- historical metrics,
- workflow history,
- reporting continuity,
- operational evolution.

Examples:
- monthly volunteer trends
- campaign history
- scheduling trends

Avoid:
- destructive metric overwrites

---

# Volunteer Analytics Rules

Volunteer analytics may include:
- invitations sent
- influencers validated
- meetings coordinated
- scheduling success rate
- productivity ranking

Avoid:
- metrics without operational value

---

# AI Analytics Rules

AI workflows should expose:
- prompt performance
- generation volume
- validation success
- duplicate detection metrics
- AI provider latency

Examples:
- best-performing prompts
- prompt conversion rate
- AI workflow success rate

Avoid:
- invisible AI operations

---

# Scheduling Analytics Rules

Scheduling analytics should support:
- slot utilization
- meeting frequency
- availability coverage
- volunteer availability metrics

Examples:
- most-used time slots
- scheduling conversion rate
- average scheduling delay

Avoid:
- hidden scheduling inefficiencies

---

# Reporting Rules

Reports should:
- remain reproducible,
- support exports,
- preserve metric consistency,
- support operational analysis.

Examples:
- campaign reports
- volunteer reports
- AI reports
- scheduling reports

Avoid:
- duplicated report logic

---

# Caching Rules

Frequently accessed analytics should support caching.

Examples:
- dashboard summaries
- rankings
- KPI totals

Caching systems should:
- preserve consistency,
- support invalidation.

Avoid:
- stale critical operational metrics

---

# Analytics Observability

Analytics systems should expose:
- query duration
- aggregation duration
- report generation failures
- dashboard latency

Examples:
- slow query tracking
- failed report generation
- cache miss monitoring

Avoid:
- invisible analytics bottlenecks

---

# Frontend Analytics Integration

Frontend dashboards should:
- consume normalized analytics APIs,
- avoid recalculating KPIs,
- support loading states,
- support empty states.

Avoid:
- frontend-generated business logic

---

# Database Analytics Rules

Analytics databases should:
- use indexes,
- optimize aggregates,
- support historical querying.

Examples:
- indexed timestamps
- indexed workflow events
- indexed volunteer relations

Avoid:
- analytics without indexing strategy

---

# Security Rules

Analytics systems must:
- respect authorization boundaries,
- protect sensitive operational data,
- support role-based visibility.

Examples:
- admin-only dashboards
- volunteer-scoped analytics

Avoid:
- unrestricted analytics access

---

# Naming Conventions

Analytics naming should remain consistent.

Examples:

```text
meetingConversionRate
volunteerPerformance
monthlyCampaignMetrics
```

Avoid:
- inconsistent KPI naming

---

# Scalability Principles

Analytics systems should support:
- additional KPIs,
- larger workflow volume,
- future BI systems,
- enterprise reporting.

Avoid:
- hardcoded analytics assumptions

---

# Future Expansion

The analytics architecture should support future:
- predictive analytics
- AI-assisted reporting
- realtime dashboards
- operational intelligence systems
- advanced BI integrations

---

# Recommended Stack

- PostgreSQL
- Prisma
- Redis
- Recharts
- TanStack Table
- BullMQ

---

# Related Skills

- dashboard
- observability
- workflow-engine
- prisma
- postgres
- backend-architecture
- integrations
- caching
- documentation
```
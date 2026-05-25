# Recharts Skill

## Purpose

Provide standards, patterns, architectural guidance, and UI consistency rules for building analytics dashboards, KPI visualizations, charts, operational metrics, and data-driven interfaces using Recharts across the frontend application.

This skill ensures that charts and dashboards remain:
- reusable,
- performant,
- readable,
- scalable,
- operationally meaningful.

---

# Visualization Philosophy

Charts are NOT:
- decorative UI,
- random graphs,
- overloaded dashboards.

Charts ARE:
- operational visibility systems,
- workflow intelligence tools,
- decision-support interfaces.

Every visualization should help users:
- understand workflows,
- monitor operations,
- detect problems,
- evaluate performance.

---

# Core Principles

Dashboard systems should:
- prioritize clarity,
- support scalability,
- remain responsive,
- support loading states,
- preserve consistency.

Avoid:
- visual clutter,
- inconsistent charts,
- duplicated chart logic.

---

# Recommended Structure

```text
features/
└── analytics/
    ├── components/
    │   ├── charts/
    │   ├── cards/
    │   ├── tables/
    │   └── dashboard/
    ├── hooks/
    ├── services/
    ├── schemas/
    ├── types/
    └── constants/
```

---

# Chart Component Rules

Charts should:
- remain reusable,
- receive normalized props,
- avoid embedded business logic.

Good example:

```tsx id="vjlwmn"
<MeetingsChart
  data={monthlyMeetings}
  loading={isLoading}
/>
```

Avoid:
- inline giant chart implementations
- duplicated chart configuration

---

# Supported Chart Types

Recommended chart usage:

| Chart | Usage |
|---|---|
| LineChart | trends over time |
| BarChart | comparisons |
| PieChart | distributions |
| AreaChart | progression visualization |
| RadialBarChart | KPI summaries |
| ComposedChart | advanced analytics |

Avoid:
- unnecessary complex visualizations

---

# KPI Card Rules

KPI cards should:
- remain concise,
- expose operational value,
- prioritize readability.

Good examples:
- Meetings Scheduled
- Invitations Sent
- Influencers Validated
- Conversion Rate
- Volunteer Productivity

Avoid:
- vanity metrics
- overloaded cards

---

# Dashboard Architecture Rules

Dashboards should:
- separate widgets,
- separate charts,
- separate filters,
- support modular composition.

Recommended:

```tsx id="bdkslb"
<DashboardLayout>
  <KpiSection />
  <CampaignAnalytics />
  <VolunteerAnalytics />
  <SchedulingAnalytics />
</DashboardLayout>
```

Avoid:
- giant dashboard pages
- deeply nested chart logic

---

# Data Normalization Rules

Chart data should:
- arrive frontend-ready,
- remain normalized,
- avoid frontend-heavy transformations.

Good example:

```ts id="mychxq"
[
  {
    month: "Jan",
    meetings: 24,
    invitations: 50
  }
]
```

Avoid:
- inconsistent response formats
- nested backend-heavy payloads

---

# Loading State Rules

Charts should support:
- loading states,
- skeletons,
- empty states,
- error states.

Examples:
- dashboard skeletons
- empty analytics placeholders

Avoid:
- blank charts during loading

---

# Empty State Rules

Empty states should:
- explain missing data,
- remain user-friendly,
- preserve layout consistency.

Example:

```tsx id="kvlpmk"
<EmptyAnalyticsState
  title="No campaign data available"
/>
```

Avoid:
- broken dashboard layouts

---

# Responsiveness Rules

Dashboards should:
- support mobile layouts,
- support tablet layouts,
- preserve chart readability.

Use:
- ResponsiveContainer

Example:

```tsx id="9wkzsn"
<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    ...
  </LineChart>
</ResponsiveContainer>
```

Avoid:
- fixed-width charts

---

# Reusability Rules

Chart systems should:
- centralize configuration,
- centralize tooltip behavior,
- centralize legends,
- centralize formatting utilities.

Examples:
- shared tooltip component
- shared KPI formatter
- shared chart wrapper

Avoid:
- duplicated chart utilities

---

# Color System Rules

Charts should:
- use design system colors,
- remain visually consistent,
- preserve accessibility.

Recommended:
- Tailwind design tokens
- semantic chart colors

Avoid:
- random inline colors
- inconsistent palettes

---

# Accessibility Rules

Charts should:
- remain readable,
- support labels,
- support accessible contrast,
- support keyboard navigation when possible.

Avoid:
- unreadable visualizations
- inaccessible color combinations

---

# Performance Rules

Analytics pages should:
- lazy load heavy charts,
- avoid unnecessary rerenders,
- memoize expensive calculations.

Use:
- React.memo
- useMemo

Avoid:
- rendering massive datasets directly

---

# Filtering Rules

Dashboards should support:
- date filters,
- campaign filters,
- volunteer filters,
- analytics segmentation.

Recommended:

```tsx id="9lkv9x"
<AnalyticsFilters
  selectedCampaign={campaignId}
  selectedRange={dateRange}
/>
```

Avoid:
- hardcoded analytics views

---

# Animation Rules

Animations should:
- remain subtle,
- improve readability,
- avoid distracting users.

Recommended:
- default Recharts animations
- lightweight transitions

Avoid:
- excessive motion

---

# Volunteer Analytics Rules

Volunteer dashboards may include:
- invitations sent
- meetings coordinated
- validation success
- productivity trends

Avoid:
- overloaded volunteer metrics

---

# Campaign Analytics Rules

Campaign dashboards may include:
- outreach performance
- conversion rates
- scheduling metrics
- campaign effectiveness

Avoid:
- disconnected campaign KPIs

---

# AI Analytics Visualization Rules

AI dashboards may include:
- prompt performance
- generation volume
- duplicate detection
- validation success

Avoid:
- invisible AI workflow metrics

---

# Scheduling Analytics Rules

Scheduling dashboards may include:
- slot utilization
- availability coverage
- meeting frequency
- volunteer scheduling activity

Avoid:
- hidden scheduling bottlenecks

---

# Observability Integration Rules

Dashboards should expose:
- loading failures,
- analytics fetch failures,
- empty states,
- stale analytics detection.

Avoid:
- silent dashboard failures

---

# Naming Conventions

Chart naming should remain explicit.

Examples:

```text id="fj4yqv"
MeetingsChart
VolunteerPerformanceChart
CampaignAnalyticsCard
SchedulingTrendChart
```

Avoid:
- generic component names

---

# Scalability Principles

Dashboard systems should support:
- additional KPIs,
- additional widgets,
- realtime analytics,
- future BI integrations.

Avoid:
- tightly coupled dashboards

---

# Future Expansion

The visualization architecture should support future:
- realtime charts
- streaming analytics
- advanced filtering
- export systems
- AI-assisted analytics

---

# Recommended Stack

- Recharts
- Tailwind CSS
- shadcn/ui
- TanStack Table
- React Query
- Framer Motion

---

# Related Skills

- dashboard
- analytics
- ui-system
- frontend-architecture
- forms
- observability
- workflow-engine
- documentation
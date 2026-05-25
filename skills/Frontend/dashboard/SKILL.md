# Dashboard Skill

## Purpose
Define architecture, layout strategy, analytics organization, reusable dashboard patterns, and implementation standards for all dashboards across the application.

This skill standardizes how dashboards, analytics views, metrics systems, tables, widgets, filters, and reporting interfaces are designed and implemented.

---

## Dashboard Principles

- Readability first
- Modular dashboard architecture
- Reusable analytics components
- Clear visual hierarchy
- Scalable widget system
- Performance-friendly rendering
- Consistent dashboard UX
- AI-friendly dashboard structure

---

## Dashboard Architecture

Dashboards must follow a modular structure.

Each dashboard feature should contain:

/features/dashboard/
├── components/
├── widgets/
├── charts/
├── tables/
├── filters/
├── hooks/
├── services/
├── actions/
├── schemas/
└── types/

---

## Dashboard Responsibilities

Dashboards are responsible for:
- Displaying metrics
- Visualizing analytics
- Managing filters
- Showing activity states
- Supporting monitoring workflows
- Presenting reports
- Tracking campaign performance

Dashboards should NOT contain:
- Heavy business logic
- Direct database logic
- Unrelated workflows
- Massive monolithic components

---

## Layout Rules

Dashboards should:
- Use responsive grid layouts
- Support modular widgets
- Maintain visual balance
- Prioritize important metrics
- Keep navigation predictable

Prefer:
- Card-based layouts
- Grid organization
- Flexible responsive sections

Avoid:
- Deep nested layouts
- Cluttered screens
- Random positioning
- Inconsistent spacing

---

## Dashboard Widget Rules

Widgets must:
- Have a single responsibility
- Remain reusable
- Support isolated updates
- Maintain consistent styling
- Be independently maintainable

Examples:
- Metrics cards
- Recent activity widgets
- Campaign summary widgets
- Status overview widgets

---

## Metrics Card Rules

Metrics cards should:
- Display clear values
- Include labels
- Support trend indicators
- Remain visually lightweight
- Prioritize readability

Avoid:
- Excessive information
- Visual clutter
- Inconsistent sizing

---

## Chart Rules

Charts should:
- Communicate data clearly
- Use consistent formatting
- Support responsive layouts
- Remain accessible
- Prioritize readability over decoration

Prefer:
- Simple visualizations
- Clear labels
- Consistent chart spacing

Avoid:
- Overly complex charts
- Excessive visual effects
- Unclear legends

---

## Table Rules

Dashboard tables should:
- Support filtering
- Support sorting
- Support pagination
- Maintain responsive behavior
- Keep actions organized

Tables must remain:
- Readable
- Scannable
- Performance-friendly

---

## Filter Rules

Filters should:
- Be reusable
- Support scalability
- Remain predictable
- Provide immediate feedback
- Avoid unnecessary complexity

Examples:
- Date filters
- Campaign filters
- Status filters
- User filters

---

## Activity Feed Rules

Activity sections should:
- Display chronological events
- Maintain readability
- Support status visibility
- Include timestamps when relevant

Avoid:
- Excessive event noise
- Unstructured activity displays

---

## Dashboard State Rules

Dashboards must support:

### Loading States
- Skeleton loaders
- Partial loading support
- Widget-level loading

### Empty States
- Helpful empty messaging
- Suggested next actions

### Error States
- Clear error feedback
- Recovery guidance when possible

---

## Performance Rules

Dashboards should prioritize:
- Server-side rendering
- Efficient data fetching
- Lazy loading when necessary
- Modular rendering
- Minimal client-side overhead

Avoid:
- Massive client-side rendering
- Overfetching
- Heavy unnecessary charts
- Large dashboard bundles

---

## Data Fetching Rules

Prefer:
1. Server Components
2. Server Actions
3. Cached server-side fetching

Avoid:
- Excessive client-side fetching
- Repeated duplicate requests
- Large unoptimized queries

---

## Responsive Design Rules

Dashboards must support:
- Desktop
- Tablet
- Mobile

Prefer:
- Flexible grids
- Collapsible sections
- Responsive cards
- Mobile-friendly tables

Avoid:
- Fixed-width dashboards
- Horizontal overflow-heavy layouts
- Desktop-only designs

---

## Reusability Rules

Before creating new dashboard UI:
- Check reusable widgets
- Check reusable tables
- Check reusable chart patterns
- Check reusable filters
- Reuse existing layout structures

Avoid duplicated analytics UI.

---

## AI Dashboard Generation Rules

AI agents must:
- Reuse dashboard widgets
- Preserve visual consistency
- Maintain dashboard modularity
- Reuse filter patterns
- Keep dashboards scalable
- Avoid generating isolated dashboard styles

---

## Accessibility Rules

Dashboard components must:
- Use semantic structure
- Support keyboard navigation
- Maintain readable contrast
- Include accessible labels
- Preserve readable chart information

Accessibility is mandatory.

---

## Scalability Principles

Dashboard architecture must support:
- Additional metrics
- New widgets
- New reporting systems
- Workflow expansion
- Future analytics features
- Additional integrations

---

## Naming Conventions

### Dashboard Components
Use PascalCase.

Examples:
- CampaignMetricsCard.tsx
- InfluencerAnalyticsTable.tsx
- DashboardOverviewWidget.tsx

### Dashboard Hooks
Use camelCase with "use" prefix.

Examples:
- useCampaignMetrics
- useDashboardFilters

### Dashboard Feature Folders
Use kebab-case.

Examples:
- campaign-dashboard
- analytics-overview

---

## Recommended Libraries

- recharts
- shadcn/ui
- Tailwind CSS
- react-hook-form
- zod

---

## Forbidden Practices

- Giant dashboard pages
- Duplicated widgets
- Unstructured analytics layouts
- Excessive chart complexity
- Massive client-side rendering
- Inconsistent dashboard UI
- Hardcoded metrics
- Cluttered visualizations
- Mixed unrelated dashboard responsibilities

---

## Dashboard Workflow Philosophy

Dashboards should:
- Help decision-making
- Improve workflow visibility
- Simplify monitoring
- Surface important information clearly
- Support operational efficiency

Dashboards are operational systems, not decorative pages.

---

## Related Skills

- nextjs
- ui-system
- forms
- workflow-engine
- project-standards
- ai-collaboration
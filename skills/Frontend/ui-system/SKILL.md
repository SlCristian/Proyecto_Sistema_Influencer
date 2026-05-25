# UI System Skill

## Purpose
Define the visual system, UI architecture, reusable component strategy, layout rules, and design consistency standards for the frontend application.

This skill standardizes how user interfaces are designed and implemented across the entire project to ensure scalability, maintainability, consistency, and AI-friendly UI generation.

---

## UI System Principles

- Consistency first
- Reusability over duplication
- Scalable design system
- Accessibility by default
- Maintainable UI architecture
- Feature-friendly UI organization
- Modular component structure
- Dashboard-oriented design

---

## UI Stack

The frontend UI system uses:

- Tailwind CSS
- shadcn/ui
- Lucide Icons
- Responsive layouts
- Reusable UI primitives

---

## UI Architecture

UI components are divided into:

### Shared UI Components
Reusable global UI elements used across multiple features.

Location:
/shared/ui

Examples:
- Button
- Card
- Dialog
- Table
- Input
- Badge
- Dropdown
- Sidebar

---

### Feature Components

Feature-specific components that belong only to a specific feature.

Location:
/features/feature-name/components

Examples:
- CampaignStatsCard
- InfluencerTable
- CampaignFilters

---

## Component Design Rules

Components must:
- Have a single responsibility
- Remain reusable
- Be composable
- Be maintainable
- Avoid excessive complexity
- Avoid duplicated UI logic

Prefer:
- Composition over inheritance
- Small focused components
- Reusable primitives
- Shared UI patterns

---

## Layout Rules

Use:
- Responsive layouts
- Grid-based organization
- Consistent spacing
- Flexible containers
- Reusable layout structures

Avoid:
- Random spacing
- Deep nested layouts
- Inconsistent alignment
- Unstructured containers

---

## Dashboard UI Rules

Dashboards should:
- Prioritize readability
- Use reusable cards
- Use consistent metrics layouts
- Support responsive grids
- Keep visual hierarchy clear

Dashboards must remain:
- Modular
- Expandable
- Easy to scan
- Performance-friendly

---

## Table Design Rules

Tables should:
- Support pagination
- Support filtering
- Support sorting
- Remain responsive
- Use reusable table components

Tables must:
- Maintain readability
- Avoid visual clutter
- Keep actions organized

---

## Form UI Rules

Forms should:
- Use reusable inputs
- Display validation clearly
- Maintain consistent spacing
- Group related fields logically
- Use accessible labels

Form layouts must remain:
- Clear
- Predictable
- User-friendly

---

## Feedback State Rules

All important UI flows should include:

### Loading States
- Skeleton loaders
- Loading indicators
- Disabled actions during requests

### Empty States
- Helpful empty messages
- Clear next actions

### Error States
- User-friendly messages
- Recovery guidance when possible

### Success States
- Clear confirmation feedback
- Non-intrusive notifications

---

## Modal and Dialog Rules

Dialogs should:
- Remain focused
- Avoid excessive content
- Use clear actions
- Include proper close behavior

Avoid:
- Giant modals
- Multi-purpose dialogs
- Complex nested dialogs

---

## Navigation Rules

Navigation should:
- Remain simple
- Be predictable
- Support scalability
- Maintain consistent hierarchy

Use:
- Sidebar navigation
- Grouped sections
- Clear labels
- Active states

---

## Spacing Rules

Maintain a consistent spacing system using Tailwind utilities.

Prefer:
- Consistent padding
- Consistent margins
- Reusable spacing patterns

Avoid:
- Arbitrary spacing values
- Inconsistent gaps
- Random layout spacing

---

## Typography Rules

Typography should:
- Maintain hierarchy
- Be readable
- Use consistent sizing
- Support dashboard readability

Avoid:
- Excessive font variations
- Inconsistent heading structures
- Overly decorative typography

---

## Color Usage Rules

Colors should:
- Remain consistent
- Support accessibility
- Communicate status clearly
- Follow semantic meaning

Examples:
- Success
- Warning
- Error
- Info

Avoid:
- Random color usage
- Excessive accent colors
- Inconsistent status colors

---

## Accessibility Rules

UI components must:
- Use semantic HTML
- Support keyboard navigation
- Include accessible labels
- Maintain sufficient contrast
- Provide accessible interaction feedback

Accessibility should not be optional.

---

## Responsive Design Rules

The UI system must support:
- Desktop layouts
- Tablet layouts
- Mobile layouts

Prefer:
- Mobile-friendly structures
- Flexible grids
- Responsive containers

Avoid:
- Fixed-width layouts
- Overflow-heavy designs
- Desktop-only implementations

---

## Reusability Rules

Before creating new UI:
- Search for existing shared components
- Reuse existing layout patterns
- Reuse existing interaction patterns
- Maintain visual consistency

Avoid duplicated UI implementations.

---

## AI UI Generation Rules

AI agents must:
- Reuse existing UI components
- Follow existing design patterns
- Maintain spacing consistency
- Preserve layout consistency
- Avoid generating isolated visual styles
- Keep UI modular and scalable

---

## Performance Rules

Prefer:
- Lightweight components
- Lazy loading when necessary
- Efficient rendering
- Minimal unnecessary client-side rendering

Avoid:
- Heavy UI components
- Unnecessary animations
- Excessive DOM complexity

---

## Animation Rules

Animations should:
- Be subtle
- Improve UX
- Support interaction clarity

Avoid:
- Excessive animations
- Distracting transitions
- Performance-heavy effects

---

## Forbidden Practices

- Inline styles
- Random spacing systems
- Duplicated UI components
- Massive components
- Unstructured layouts
- Inconsistent design patterns
- Hardcoded visual values
- Deep nested component trees
- Accessibility violations
- Visual clutter

---

## Scalability Principles

The UI system must support:
- New modules
- Dashboard expansion
- Future workflows
- New integrations
- Shared reusable patterns
- Long-term maintainability

---

## Recommended Libraries

- Tailwind CSS
- shadcn/ui
- Lucide React
- clsx
- tailwind-merge

---

## Related Skills

- nextjs
- forms
- dashboard
- project-standards
- ai-collaboration
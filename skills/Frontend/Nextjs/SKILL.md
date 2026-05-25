# Next.js Skill

## Purpose
Define frontend architecture, development standards, folder organization, rendering strategy, and implementation rules for the Next.js application.

This skill standardizes how the frontend is built using Next.js App Router with a scalable, modular, and AI-friendly architecture.

---

## Frontend Architecture

The frontend follows a Feature-Based Architecture.

Each feature must encapsulate:
- Components
- Hooks
- Actions
- Schemas
- Services
- Types
- UI logic

Features must remain isolated and modular.

---

## Core Principles

- Modularity first
- Reusability over duplication
- Feature encapsulation
- Clear separation of concerns
- Scalable folder organization
- Maintainable components
- AI-friendly architecture
- Consistent project structure

---

## Routing Strategy

- Use App Router only
- Do not use Pages Router
- Organize routes clearly
- Keep route hierarchy simple
- Use nested layouts when necessary

---

## Rendering Strategy

### Default Rule
Use Server Components by default.

### Use Client Components Only When Necessary

Client Components should only be used for:
- Interactivity
- Browser APIs
- useState
- useEffect
- Event listeners
- Complex client-side behavior

---

## Folder Structure

Frontend structure should follow:

/app
/features
/shared
/styles
/public

---

## Feature Structure

Each feature should follow this structure:

/features
└── feature-name/
    ├── components/
    ├── hooks/
    ├── actions/
    ├── services/
    ├── schemas/
    ├── types/
    ├── utils/
    └── constants/

---

## Shared Folder Rules

The shared folder contains reusable global resources.

### Shared Components
Reusable UI components used across multiple features.

### Shared Hooks
Reusable hooks shared between features.

### Shared Utils
Generic utility functions.

### Shared Types
Global reusable types.

### Shared Lib
Global libraries and configurations.

---

## Component Rules

Components must:
- Have a single responsibility
- Remain reusable
- Be small and maintainable
- Avoid excessive props
- Separate UI from business logic

### Prefer:
- Composition over large components
- Reusable UI patterns
- Clear naming

---

## Page Rules

Pages should:
- Be lightweight
- Delegate logic to features
- Avoid large implementations
- Focus on composition and layout

Pages should not contain:
- Heavy business logic
- Large reusable UI blocks
- Complex validation logic

---

## Data Fetching Rules

Prefer server-side data fetching.

### Priorities

1. Server Components
2. Server Actions
3. Route Handlers
4. Client fetching only when necessary

---

## Server Actions Rules

Use Server Actions for:
- Forms
- Mutations
- Simple backend interactions
- Secure operations
- Every Server Action must be wrapped in a try/catch block and return a consistent response object (e.g., { success: boolean, data?: any, error?: string })
Avoid unnecessary API layers when Server Actions are sufficient.

---

## Forms Strategy

Forms should use:
- react-hook-form
- zod validation

Validation logic must remain centralized and reusable.

---

## State Management Rules

Prefer:
- Local state first
- Server state when possible
- Minimal global state

Avoid unnecessary complexity in state management.

---

## Styling Rules

Use:
- Tailwind CSS
- Consistent spacing
- Reusable design patterns
- Shared UI primitives

Avoid:
- Inline styles
- Inconsistent spacing systems
- Repeated styling patterns

---

## UI Consistency Rules

Maintain:
- Consistent spacing
- Consistent typography
- Consistent component behavior
- Consistent interaction patterns

Reuse existing UI patterns before creating new ones.

---

## Error Handling Rules

Use:
- error.tsx
- loading.tsx
- Proper fallback states
- Graceful error handling

Provide user-friendly error feedback.

---

## Performance Rules

Prefer:
- Server rendering
- Lazy loading when necessary
- Component splitting
- Minimal client-side JavaScript

Avoid:
- Unnecessary re-renders
- Large client bundles
- Excessive client-side fetching

---

## Accessibility Rules

Components must:
- Use semantic HTML
- Include accessible labels
- Support keyboard navigation
- Maintain accessible interaction patterns

---

## Naming Conventions

### Components
Use PascalCase.

Examples:
- CampaignCard.tsx
- DashboardTable.tsx

### Hooks
Use camelCase with "use" prefix.

Examples:
- useCampaignFilters
- useInfluencerData

### Feature Folders
Use kebab-case.

Examples:
- influencer-management
- campaign-dashboard

---

## Reusability Rules

Before creating new components:
- Search for existing reusable patterns
- Reuse shared components when possible
- Avoid duplicated UI implementations

---

## AI Development Rules

AI agents must:
- Follow feature boundaries
- Avoid modifying unrelated features
- Reuse existing patterns
- Preserve architecture consistency
- Prefer modular implementations
- Keep components maintainable

---

## Scalability Principles

Frontend architecture must support:
- New features
- Reusable modules
- Shared UI systems
- Future integrations
- Dashboard expansion
- Workflow growth

---

## Forbidden Practices

- Giant pages
- Massive components
- Prop drilling
- Business logic inside UI
- Duplicated components
- Excessive global state
- Mixing unrelated responsibilities
- Direct backend logic inside components
- Unstructured folders
- Inconsistent naming

---

## Recommended Stack

- Next.js
- TypeScript
- Tailwind CSS
- react-hook-form
- zod
- shadcn/ui

---

## Related Skills

- project-standards
- ai-collaboration
- documentation
- ui-system
- forms
# Login Page

## Purpose

Institutional authentication page for volunteers and administrators.

This page is the entry point to the operational platform.

---

# Requirements

- Use Next.js App Router
- Use Tailwind CSS
- Use shadcn/ui components
- Follow feature-based frontend architecture
- Follow AGENTS.md conventions
- Maintain responsive design
- Prioritize accessibility
- Keep modern clean UI
- Reuse shared components whenever possible

---

# Functional Requirements

- Login using institutional email
- Password input
- Form validation
- Loading states
- Error states
- Disabled submit while loading
- Responsive layout

---

# UX Requirements

- Modern minimal design
- Professional operational platform appearance
- Clean spacing
- Strong visual hierarchy
- Smooth interactions
- Mobile-friendly

---

# Architecture Requirements

The implementation should:

- create reusable auth components
- avoid giant page files
- separate form logic from UI
- use feature-based structure

Expected feature structure:

```text
features/auth/
├── components/
├── hooks/
├── schemas/
├── services/
├── actions/
└── types/
```

---

# Technical Requirements

- Use react-hook-form
- Use zod validation
- Use shadcn form components
- Use server actions if appropriate
- Avoid hardcoded styles
- Avoid inline business logic

---

# Design Notes

- The page should match the provided design image
- Respect spacing and layout proportions
- Preserve responsive behavior
- Maintain consistency with future dashboard views

---

# Output Expectations

The implementation should:
- be production-ready
- follow reusable architecture
- maintain clean code
- preserve scalability
- align with existing skills and agents
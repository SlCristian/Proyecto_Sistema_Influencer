# Project Standards Skill

## Purpose
Define global development standards, architecture principles, naming conventions, and AI collaboration rules for the entire project.

This skill acts as the global authority for:
- Code consistency
- Architecture decisions
- Folder organization
- Naming conventions
- AI agent behavior
- Reusability standards
---

## Global Principles
- Modularity first
- Reusability over duplication
- Feature-based architecture
- Maintainable code
- AI-friendly structure
- Clear separation of responsibilities
- Readability over cleverness
- Consistency over personal preference
- Simplicity before abstraction

---

# Decision Priority

When multiple solutions are possible, prioritize:

1. Maintain architecture consistency
2. Reuse existing patterns
3. Prefer readability
4. Keep responsibilities separated
5. Optimize only when necessary

---

## Naming Conventions

### Folders
- Use kebab-case
- Example:
  - influencer-campaign/
  - email-service/

### React Components
- Use PascalCase
- Example:
  - CampaignCard.tsx
  - DashboardTable.tsx

### Variables
- Use camelCase

### Constants
- Use UPPER_SNAKE_CASE

---

## Folder Organization
- Organize by features
- Avoid giant shared folders
- Keep related logic together

---

## Code Standards
- Prefer small reusable functions
- Separate UI from business logic
- Avoid duplicated logic
- Use descriptive names

---
## Reusability Rules
- Reuse existing patterns when possible
- Create abstractions only when reused multiple times
- Avoid unnecessary file creation

---


## AI Rules
- Reuse existing components before creating new ones
- Avoid modifying unrelated files
- Keep architecture consistency
- Explain major architectural decisions

---

## Forbidden Practices
- Giant files
- Massive components
- Duplicated code
- Mixed responsibilities
- Hardcoded secrets
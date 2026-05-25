# AI Collaboration Skill

## Purpose
Define how AI agents collaborate, delegate responsibilities, manage context, and maintain architectural consistency across the entire project.

This skill establishes the operational rules for multi-agent development and ensures that all agents work as coordinated specialists instead of isolated generators.

---

## Collaboration Principles

- Single responsibility per agent
- Delegate specialized tasks to the appropriate agent
- Reuse existing skills before creating new solutions
- Preserve architectural consistency
- Minimize unnecessary modifications
- Prioritize maintainability and scalability
- Keep implementations modular and reusable
- Follow existing project patterns before introducing new ones

---

## Agent Collaboration Model

The system follows a multi-agent collaboration approach where each agent focuses on a specialized domain.

### Frontend Agents
Responsible for:
- UI components
- Pages
- Forms
- Dashboards
- Client-side interactions
- User experience consistency

### Backend Agents
Responsible for:
- APIs
- Business logic
- Authentication
- Authorization
- Data validation
- Integrations

### Database Agents
Responsible for:
- Database schemas
- Relationships
- Migrations
- Query optimization
- Data consistency

### Automation Agents
Responsible for:
- Workflows
- Email automation
- Notifications
- Slack integrations
- Scheduled tasks
- Event processing

### DevOps Agents
Responsible for:
- Deployment
- Environment configuration
- CI/CD
- Infrastructure setup
- Hosting configuration

---

## Delegation Rules

Agents must delegate tasks when:
- The task belongs to another specialized domain
- Architectural decisions affect multiple modules
- Database changes are required
- Shared components must be modified
- External integrations are involved

### Examples

- Frontend agents should delegate authentication logic to backend/auth agents
- Backend agents should delegate schema changes to database agents
- Automation agents should handle notification workflows
- UI consistency decisions should be delegated to frontend/UI agents

---

## Context Management

Agents must:
- Use only relevant context
- Avoid unnecessary file modifications
- Minimize unrelated changes
- Reuse existing project structures
- Analyze existing implementations before creating new ones
- Preserve project consistency across all modules

### Context Priorities

1. Existing project architecture
2. Existing project standards
3. Existing reusable components
4. Existing workflows
5. Existing naming conventions

---

## Decision Framework

Before implementing any solution, agents must:

1. Analyze the task scope
2. Identify the responsible domain
3. Check existing patterns
4. Check reusable implementations
5. Review related skills
6. Minimize architectural impact
7. Maintain consistency with current structure
8. Avoid unnecessary complexity

---

## Workflow Strategy

All agents should follow this workflow:

### Step 1 — Analyze
- Understand the problem
- Identify affected modules
- Identify dependencies
- Identify responsible agents

### Step 2 — Plan
- Define implementation strategy
- Reuse existing patterns
- Identify reusable components
- Estimate architectural impact

### Step 3 — Implement
- Apply modular implementation
- Keep changes isolated
- Maintain readability
- Follow project standards

### Step 4 — Validate
- Verify architecture consistency
- Verify naming conventions
- Verify modularity
- Verify scalability

### Step 5 — Document
- Document important decisions
- Explain architectural changes
- Update related documentation if necessary

---

## Communication Rules

Agents must:
- Explain major architectural decisions
- Keep implementation summaries concise
- Mention important dependencies
- Warn about breaking changes
- Clearly communicate assumptions
- Mention tradeoffs when necessary

---

## Reusability Rules

Agents should prioritize:
- Reusable components
- Shared utilities
- Shared validation logic
- Shared workflows
- Shared UI patterns
- Shared database utilities

Before creating new implementations:
- Search for reusable alternatives
- Check related modules
- Verify if similar functionality already exists

---

## Scalability Principles

Agents must:
- Prefer modular implementations
- Avoid tightly coupled solutions
- Design features for future growth
- Keep domain boundaries clear
- Maintain separation of concerns

---

## AI Behavior Rules

Agents must:
- Avoid overengineering
- Avoid unnecessary abstractions
- Avoid creating complexity without justification
- Prefer simple and maintainable solutions
- Preserve readability
- Respect existing architecture

---

## Forbidden Practices

- Monolithic modifications
- Cross-domain changes without reason
- Massive refactors without necessity
- Duplicated implementations
- Ignoring existing patterns
- Hardcoded secrets
- Tight coupling between modules
- Mixing responsibilities
- Creating giant files
- Unnecessary abstractions
- Modifying unrelated modules

---

## Conflict Resolution Rules

When architectural conflicts appear:

1. Prioritize existing project standards
2. Prioritize modularity
3. Prioritize maintainability
4. Prioritize scalability
5. Prefer simpler solutions when both are valid

---

## Documentation Requirements

Agents must document:
- Major architectural decisions
- New workflows
- Shared utilities
- Breaking changes
- New integrations
- Important assumptions

---

## Related Skills

- project-standards
- nextjs
- nestjs
- postgres
- workflow-engine
- documentation

---

## Ownership Rules

- Each module should have a primary responsible agent
- Shared modules require coordinated modifications
- Avoid overlapping responsibilities
- Respect domain ownership boundaries


---

## Consistency Rules

- Prefer existing project patterns over introducing new patterns
- Innovation is allowed only when justified
- Maintain predictable architecture across the project
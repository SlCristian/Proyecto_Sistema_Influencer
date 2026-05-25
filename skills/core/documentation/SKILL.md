# Documentation Skill

## Purpose
Define documentation standards, structure, and maintenance rules for the entire project.

This skill ensures that all technical decisions, workflows, modules, integrations, and architectural changes are clearly documented to improve collaboration, maintainability, onboarding, and AI context consistency.

---

## Documentation Principles

- Documentation is part of the architecture
- Keep documentation clear and concise
- Prioritize maintainability over excessive detail
- Document decisions, not obvious code
- Keep documentation synchronized with implementation
- Prefer structured documentation over scattered notes
- Documentation should help both humans and AI agents

---

## Documentation Responsibilities

Documentation should cover:

- Architecture decisions
- Project structure
- Workflows
- API contracts
- Database relationships
- Integrations
- Environment setup
- Deployment processes
- Shared utilities
- Important business logic
- Reusable patterns

---

## Documentation Structure

Project documentation should follow this structure:

/docs
├── architecture/
├── workflows/
├── api/
├── database/
├── deployment/
├── integrations/
├── modules/
└── decisions/

---

## Required Documentation Files

### Root Documentation

- README.md
- architecture.md
- workflows.md
- agents.md

### Module Documentation

Each important module should include:
- Purpose
- Responsibilities
- Dependencies
- Workflows
- Integration points

---

## README Standards

Each README should contain:

1. Purpose
2. Responsibilities
3. Setup instructions
4. Folder structure
5. Important workflows
6. Dependencies
7. Related modules

---

## Architecture Documentation Rules

Architecture documentation must include:

- System overview
- Main modules
- Communication flow
- Architectural decisions
- Technology stack
- Scalability considerations
- Integration boundaries

---

## Workflow Documentation Rules

Each workflow should include:

- Trigger
- Input
- Process steps
- Output
- Error handling
- Related modules
- External integrations

### Example Workflow Structure

1. Event Trigger
2. Validation
3. Processing
4. Notifications
5. Logging
6. Final State

---

## API Documentation Rules

API documentation should include:

- Endpoint purpose
- Request structure
- Response structure
- Validation rules
- Error responses
- Authentication requirements
- Permissions

---

## Database Documentation Rules

Database documentation should include:

- Entity relationships
- Table responsibilities
- Naming conventions
- Important constraints
- Migration notes
- Indexing decisions

---

## AI Documentation Rules

AI-generated implementations must:

- Explain major architectural decisions
- Document reusable patterns
- Mention dependencies
- Mention important assumptions
- Update related documentation when necessary

---

## Documentation Update Rules

Documentation must be updated when:

- New modules are added
- Workflows change
- APIs change
- Database schemas change
- Integrations change
- Architectural decisions change
- Deployment process changes

---

## Naming Conventions

Documentation files should use:

- kebab-case
- descriptive names
- consistent terminology

### Examples

- campaign-workflow.md
- slack-integration.md
- authentication-flow.md

---

## Decision Documentation Rules

Important technical decisions should include:

- Problem
- Proposed solution
- Tradeoffs
- Alternatives considered
- Final decision
- Impacted modules

---

## Integration Documentation Rules

External integrations must document:

- Service purpose
- Authentication method
- Events
- Payload structures
- Retry strategy
- Error handling
- Rate limits

---

## Scalability Documentation Rules

Scalability documentation should explain:

- Module boundaries
- Performance considerations
- Future extensibility
- Potential bottlenecks
- Expansion strategy

---

## Forbidden Practices

- Outdated documentation
- Duplicate documentation
- Scattered undocumented decisions
- Missing workflow explanations
- Missing setup instructions
- Ambiguous terminology
- Massive unstructured documents
- Mixing unrelated concepts in the same file

---

## Documentation Quality Rules

Documentation should be:

- Clear
- Structured
- Maintainable
- Searchable
- Reusable
- Consistent
- Easy to update

---

## Related Skills

- project-standards
- ai-collaboration
- nextjs
- nestjs
- workflow-engine
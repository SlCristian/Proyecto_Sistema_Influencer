# Forms Skill

## Purpose
Define architecture, validation strategy, form workflows, reusable patterns, and implementation standards for all forms across the frontend application.

This skill standardizes how forms are created, validated, submitted, and maintained using modern Next.js patterns with scalable and reusable form architecture.

---

## Forms Principles

- Forms are workflows
- Validation must be centralized
- Reusability over duplication
- User experience first
- Consistent form behavior
- Clear feedback states
- Maintainable form architecture
- AI-friendly form structure

---

## Recommended Stack

Forms should use:

- react-hook-form
- zod
- Server Actions
- shadcn/ui form components

---

## Form Architecture

Each feature should organize forms using:

/features/feature-name/
├── components/
├── forms/
├── schemas/
├── actions/
├── types/
└── utils/

---

## Form Responsibilities

Forms are responsible for:
- Capturing user input
- Validation
- Submission handling
- UX feedback
- Workflow transitions
- Error display
- Loading states

Forms should NOT contain:
- Heavy business logic
- Direct database logic
- Complex unrelated workflows

---

## Validation Strategy

Validation must use:
- zod schemas
- Centralized validation rules
- Reusable schemas when possible

Validation should exist outside UI components.

---

## Zod Rules

Schemas should:
- Be reusable
- Remain modular
- Use descriptive field names
- Include clear validation messages

Avoid:
- Giant schemas
- Inline validation logic
- Duplicated validation rules

---

## React Hook Form Rules

Forms should:
- Use react-hook-form
- Use controlled reusable inputs
- Keep form state isolated
- Avoid unnecessary re-renders

Prefer:
- FormProvider when needed
- Modular field components
- Shared validation handling

---

## Server Actions Integration

Forms should integrate with Server Actions for:
- Mutations
- Secure submissions
- Backend communication
- Workflow execution

Prefer:
- Server Actions over unnecessary API routes
- Centralized server-side validation

---

## Submission Workflow

Each form should follow:

1. Input collection
2. Client validation
3. Server validation
4. Submission
5. Success/Error handling
6. UI feedback
7. Workflow continuation

---

## Form UI Rules

Forms should:
- Use consistent spacing
- Group related fields logically
- Use clear labels
- Display validation clearly
- Support accessibility

Avoid:
- Crowded layouts
- Unclear labels
- Excessive form complexity

---

## Input Rules

Inputs must:
- Use reusable UI primitives
- Support validation states
- Include labels
- Include placeholders when useful
- Remain accessible

Avoid:
- Custom inconsistent inputs
- Duplicated input logic
- Inconsistent field styling

---

## Error Handling Rules

Forms must:
- Display user-friendly errors
- Handle server errors gracefully
- Highlight invalid fields
- Prevent silent failures

Avoid:
- Generic unclear errors
- Missing validation feedback
- Hidden submission failures

---

## Loading State Rules

During submission:
- Disable submit actions
- Show loading indicators
- Prevent duplicate submissions
- Maintain responsive feedback

---

## Success State Rules

After successful submission:
- Display confirmation feedback
- Reset forms only when appropriate
- Support workflow continuation
- Preserve important context when necessary

---

## Multi-Step Form Rules

Multi-step forms should:
- Keep step logic modular
- Persist intermediate state
- Validate per step
- Allow navigation safely

Avoid:
- Giant single-page forms
- Mixed unrelated steps
- Excessive complexity

---

## Form Reusability Rules

Before creating new forms:
- Check reusable field components
- Check reusable schemas
- Check reusable validation logic
- Check reusable layouts

Reuse existing patterns whenever possible.

---

## Shared Form Components

Reusable form elements should exist inside:

/shared/ui
/shared/forms

Examples:
- FormField
- FormInput
- FormSelect
- FormTextarea
- FormDatePicker

---

## Accessibility Rules

Forms must:
- Use semantic labels
- Support keyboard navigation
- Include accessible validation feedback
- Maintain readable error states

Accessibility is mandatory.

---

## AI Form Generation Rules

AI agents must:
- Reuse existing schemas
- Reuse shared inputs
- Preserve form consistency
- Follow existing validation patterns
- Avoid duplicated workflows
- Keep forms modular and maintainable

---

## Workflow-Oriented Forms

Forms should support:
- Workflow transitions
- Notifications
- Status changes
- Automation triggers
- Server-side processing

Forms are part of larger business workflows.

---

## Performance Rules

Prefer:
- Lightweight form components
- Minimal unnecessary re-renders
- Isolated form state
- Efficient validation

Avoid:
- Massive uncontrolled forms
- Deep unnecessary nesting
- Heavy client-side logic

---

## Security Rules

Forms must:
- Validate on both client and server
- Sanitize sensitive input
- Prevent invalid submissions
- Protect sensitive workflows

Never trust client-side validation alone.

---

## Naming Conventions

### Form Components
Use PascalCase.

Examples:
- CampaignForm.tsx
- InfluencerRegistrationForm.tsx

### Validation Schemas
Use descriptive camelCase.

Examples:
- campaignSchema
- influencerFormSchema

### Server Actions
Use descriptive action naming.

Examples:
- createCampaignAction
- updateInfluencerStatusAction

---

## Forbidden Practices

- Inline validation chaos
- Giant forms
- Mixed responsibilities
- Duplicated schemas
- Duplicated validation logic
- Hardcoded form states
- Unstructured form files
- Massive form components
- Missing server validation
- Inconsistent UX feedback

---

## Scalability Principles

Forms architecture must support:
- New workflows
- Additional validations
- Multi-step flows
- Automation integrations
- Dashboard interactions
- Future expansion

---

## Related Skills

- nextjs
- ui-system
- workflow-engine
- project-standards
- ai-collaboration
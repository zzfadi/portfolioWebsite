# Content Management System

This directory contains the type-safe data files powering the portfolio website. All content is strictly typed and validated through TypeScript interfaces.

## Data Structure

- `personal.ts`: Personal information (Name, title, bio, contact)
- `projects.ts`: Project details with routing IDs
- `experience.ts`: Work history with technical details
- `education.ts`: Academic background
- `skills.ts`: Categorized technical skills
- `navigation.ts`: Site navigation structure
- `index.ts`: Centralized type-safe exports

## Type Safety Guidelines

- All data files export TypeScript interfaces
- Default exports are used for data collections
- Type imports should come from `@/data`
- Avoid circular dependencies through explicit imports

## Update Workflow

1. Edit the relevant data file
2. Verify type consistency using `tsc --noEmit`
3. Import updated types through `@/data`
4. Refresh development server to see changes

## Best Practices

- Keep data files focused on content only
- Use JSDoc comments for complex fields
- Maintain strict null checks
- Validate external URLs
- Keep arrays sorted chronologically
- Use descriptive enum values

```typescript
// Example type-safe import
import type { Experience } from '@/data';

interface ExperienceProps {
  experience: Experience;
}
```
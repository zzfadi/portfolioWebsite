# Content Management System

This directory contains the data files that power the portfolio website. The content is separated from the components to make it easier to update and maintain the site.

## Directory Structure

- `personal.ts` - Personal information (name, title, bio, contact info)
- `projects.ts` - Project details
- `experience.ts` - Work history
- `education.ts` - Educational background
- `skills.ts` - Technical skills
- `navigation.ts` - Site navigation links
- `index.ts` - Central export point for all data

## How to Update Content

### Update Personal Information

Edit `personal.ts` to update your name, title, bio, and contact information:

```typescript
const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio goes here...",
  // ...other fields
};
```

### Add/Update Projects

Edit `projects.ts` to add or update your portfolio projects:

```typescript
const projects: Project[] = [
  {
    id: "unique-id",
    title: "Project Title",
    description: "Short project description",
    // ...other fields
    featured: true, // Set to true to display on homepage
  },
  // Add more projects here
];
```

### Update Skills

Edit `skills.ts` to update your technical skills:

```typescript
const skills: SkillCategory[] = [
  {
    name: "Category Name",
    skills: [
      { name: "Skill Name", level: 90 },
      // Add more skills here
    ],
  },
  // Add more categories here
];
```

### Update Navigation

Edit `navigation.ts` to update the site navigation:

```typescript
const navigation: NavItem[] = [
  { href: '/path', label: 'Label' },
  // Add more navigation items here
];
```

## Importing Data in Components

Import data in your components using the central index file:

```typescript
import { personalInfo, projects, skills } from '@/data';

// Use the data in your component
const MyComponent = () => {
  return (
    <h1>{personalInfo.name}</h1>
    // ... other component code
  );
};
```

## Adding New Data Types

1. Create a new file in the `data` directory (e.g., `certificates.ts`)
2. Define the TypeScript interface for the new data type
3. Export the data as a default export
4. Add the export to `index.ts`
5. Import and use the data in your components

## Best Practices

- Keep data files organized and focused on a specific type of content
- Use TypeScript interfaces to ensure type safety
- Document the structure with comments
- Use the central `index.ts` file for all imports
- Keep components focused on presentation, not content 
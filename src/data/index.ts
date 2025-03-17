// Export all data with their default exports
export { personalInfo } from './personal';
export { default as projects } from './projects';
export { default as experiences } from './experience';
export { default as education } from './education';
export { default as skills } from './skills';
export { allSkills } from './skills';
export { default as navigation, footerNavigation, socialNavigation } from './navigation';

// Export interfaces for type safety
export type { PersonalInfo } from './personal';
export type { SocialLink } from './social';
export type { Project } from './projects';
export type { Experience } from './experience';
export type { Education } from './education';
export type { Skill, SkillCategory } from './skills';
export type { NavItem } from './navigation';
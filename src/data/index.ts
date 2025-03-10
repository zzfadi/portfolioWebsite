/**
 * Data Index File
 * 
 * Central export point for all data files.
 * Use this file to import data into components:
 * 
 * import { personalInfo, projects, skills } from '@/data';
 */

// Export all data with their default exports
export { default as personalInfo } from './personal';
export { default as projects } from './projects';
export { default as experiences } from './experience';
export { default as education } from './education';
export { default as skills, allSkills } from './skills';
export { default as navigation, footerNavigation, socialNavigation } from './navigation';

// Export interfaces for type safety
export type { PersonalInfo, SocialLink } from './personal';
export type { Project } from './projects';
export type { Experience } from './experience';
export type { Education } from './education';
export type { Skill, SkillCategory } from './skills';
export type { NavItem } from './navigation'; 
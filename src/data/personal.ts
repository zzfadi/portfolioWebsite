/**
 * Personal information data file
 * Contains basic information about the site owner
 */

import { SocialLink } from './social';

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  shortBio?: string;
  contactEmail?: string;
  location?: string;
  socialLinks?: SocialLink[]; // Imported from social.ts
}

const personalInfo: PersonalInfo = {
  name: "Fadi Al Zuabi",
  title: "Firmware Engineer / Senior Firmware Engineer",
  bio: "A passionate firmware engineer specializing in Embedded Software development. I build modern, responsive, and user-friendly applications.",
  shortBio: "Innovative Embedded Software Engineer with 5+ years of experience developing firmware and embedded software for safety-critical systems.",
  contactEmail: "fadi.b.zuabi@gmail.com",
  location: "Roseville, California",
  // Social links are now imported from social.ts through navigation.ts
  // This avoids duplication of social media information
};

export { personalInfo };
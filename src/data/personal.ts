/**
 * Personal information data file
 * Contains basic information about the site owner
 */

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  shortBio?: string;
  contactEmail?: string;
  location?: string;
  socialLinks?: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

const personalInfo: PersonalInfo = {
  name: "Fadi Al Zuabi",
  title: "Software Engineer",
  bio: "A passionate firmware engineer specializing in Embedded Software development. I build modern, responsive, and user-friendly applications.",
  shortBio: "Software engineer with a passion for creating elegant solutions to complex problems.",
  contactEmail: "fadi.b.zuabi@gmail.com",
  location: "Roseville, CA",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/zzfadi",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "linkedin"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "twitter"
    }
  ]
};

export default personalInfo; 
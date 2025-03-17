/**
 * Social media links data file
 * Contains all social media and external links
 */

export interface SocialLink {
  href: string;
  label: string;
  platform?: string;
  icon?: string;
  url?: string;
  isExternal?: boolean;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/zzfadi',
    label: 'GitHub',
    platform: 'GitHub',
    icon: 'github',
    isExternal: true
  },
  {
    href: 'https://linkedin.com/in/fadi-zuabi',
    label: 'LinkedIn',
    platform: 'LinkedIn',
    icon: 'linkedin',
    isExternal: true
  },
  {
    href: 'https://www.zuabi.dev',
    label: 'Website',
    platform: 'Website',
    icon: 'website',
    isExternal: true
  },
  {
    href: 'URL_ADDRESS.instagram.com/zzfadi',
    label: 'Instagram',
    platform: 'Instagram',
    icon: 'Instagram',
    isExternal: true
  }
];

export default socialLinks;
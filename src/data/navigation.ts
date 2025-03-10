/**
 * Navigation data file
 * Contains site navigation links
 */

import socialLinks from './social';

export interface NavItem {
  href: string;
  label: string;
  icon?: string;
  children?: NavItem;
  isExternal?: boolean;
}

const navigation: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
];

// Convert socialLinks to NavItem type
export const socialNavigation: NavItem[] = socialLinks.map(link => ({
  href: link.href,
  label: link.label,
  icon: link.icon,
  isExternal: link.isExternal
}));

export const footerNavigation = {
  main: navigation,
  social: socialNavigation,
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' }
  ]
};

export default navigation;
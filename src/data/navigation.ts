/**
 * Navigation data file
 * Contains site navigation links
 */

export interface NavItem {
  href: string;
  label: string;
  icon?: string;
  children?: NavItem[];
  isExternal?: boolean;
}

const navigation: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
];

export const socialNavigation: NavItem[] = [
  { 
    href: 'https://github.com/yourusername', 
    label: 'GitHub', 
    icon: 'github',
    isExternal: true
  },
  { 
    href: 'https://linkedin.com/in/yourusername', 
    label: 'LinkedIn', 
    icon: 'linkedin',
    isExternal: true
  },
  { 
    href: 'https://twitter.com/yourusername', 
    label: 'Twitter', 
    icon: 'twitter',
    isExternal: true
  }
];

export const footerNavigation = {
  main: navigation,
  social: socialNavigation,
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' }
  ]
};

export default navigation; 
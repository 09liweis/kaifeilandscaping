export type MenuItem = {
  label: string;
  href: string;
  cta?: boolean;
};

export const menus: MenuItem[] = [
  { label: 'Our Services', href: '/services' },
  { label: 'Project Pictures', href: '/gallery' },
  { label: 'Find a project close to you', href: '/projects' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Get Free Quote', href: '/free-quote', cta: true },
];

export default menus;

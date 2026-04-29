export type MenuItem = {
  label: string;
  href: string;
  cta?: boolean;
};

export const menus: MenuItem[] = [
  { label: 'Our Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get Free Quote', href: '/free-quote', cta: true },
];

export default menus;

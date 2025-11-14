export type MenuItem = {
  label: string;
  href: string;
  cta?: boolean;
};

export const menus: MenuItem[] = [
  { label: 'About', href: 'about' },
  { label: 'Gallery', href: 'gallery' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact-us' },
  { label: 'Get Free Quote', href: 'free-quote', cta: true },
];

export default menus;

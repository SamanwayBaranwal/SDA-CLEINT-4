
import { LucideIcon } from 'lucide-react';

export interface SubNavItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  subItems?: SubNavItem[];
}

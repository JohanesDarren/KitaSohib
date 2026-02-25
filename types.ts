import { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export interface FAQItemData {
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface LinkCard {
  id: string;
  title: string;
  description: string;
  badge?: string;
  ctaText: string;
  image: string;
  fallbackImage?: string;
  imagePosition?: string;
  modalImagePosition?: string;
  whatsappMessage: string;
  tag?: string;
  checkoutUrl?: string;
  targetAudience?: string[];
  howItWorks?: string[];
  purpose?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

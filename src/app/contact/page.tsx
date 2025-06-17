'use client';

import { useEffect } from 'react';
import ContactSection from '@/components/contact/ContactSection';

export default function ContactPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ChannelIO) {
      window.ChannelIO('showMessenger');
    }
  }, []);

  return <ContactSection />;
} 
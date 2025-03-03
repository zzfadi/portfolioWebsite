'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function ClientRouter() {
  const router = useRouter();

  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return;

    // Check if we have a path in the URL query params
    const params = new URLSearchParams(window.location.search);
    const path = params.get('path');

    if (path) {
      // Clean up the URL
      const newUrl = window.location.pathname;
      window.history.replaceState(null, '', newUrl);
      
      // Navigate to the correct route
      router.push(path);
    }
  }, [router]);

  return null;
} 
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function ClientRouter() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const path = params.get('path');
    const isRedirecting = params.get('redirecting');

    // Handle redirect cleanup first
    if (isRedirecting === 'true') {
      const cleanParams = new URLSearchParams();
      if (params.get('path')) cleanParams.set('path', params.get('path')!);
      window.history.replaceState(null, '', `${window.location.pathname}?${cleanParams}`);
      return;
    }

    // Validate and navigate
    if (path) {
      const validPaths = ['/', '/about', '/projects', '/contact', '/contact/thank-you'];
      const cleanPath = validPaths.includes(path) ? path : '/';
      
      window.history.replaceState(null, '', window.location.pathname);
      router.push(cleanPath);
    }
  }, [router]);

  return null;
}
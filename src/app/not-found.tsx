'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    const { pathname, search } = window.location;
    const basePath = '/portfolioWebsite';
    const params = new URLSearchParams(search);

    if (pathname === basePath || pathname === `${basePath}/`) {
      setIsRedirecting(false);
      return;
    }

    if (!params.has('redirecting')) {
      window.location.href = `${basePath}/?redirecting=true&path=${encodeURIComponent(pathname)}`;
    } else {
      setIsRedirecting(false);
      window.history.replaceState(null, '', basePath);
    }
  }, []);

  if (isRedirecting) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="mb-8">Redirecting you to the homepage...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-8">Sorry, the page you are looking for doesn't exist.</p>
      <Link 
        href="/"
        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
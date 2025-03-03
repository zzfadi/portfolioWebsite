import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Client-side only code
    const path = window.location.pathname;
    const basePath = '/portfolioWebsite';
    
    // If we're on a GitHub Pages 404 page, redirect to the correct route
    if (path.startsWith(basePath)) {
      const route = path.substring(basePath.length);
      window.location.href = `${basePath}${route}`;
    } else {
      // If we're already in the app, just redirect to home
      window.location.href = basePath;
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-8">Redirecting you to the homepage...</p>
    </div>
  );
} 
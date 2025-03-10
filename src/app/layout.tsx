import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SkipToContent } from "@/components/ui/Accessibility";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MobileNav } from "@/components/MobileNav";
import { ClientRouter } from "@/components/ClientRouter";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description: "Software Engineer Portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <ClientRouter />
          <SkipToContent contentId="main-content" />
          
          <header>
            <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50" role="navigation" aria-label="Main Navigation">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex items-center">
                    <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Go to homepage">
                      <span className="text-xl font-bold text-gray-900 dark:text-white">Portfolio</span>
                    </Link>
                  </div>
                  
                  {/* Desktop Navigation */}
                  <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                    {[
                      { href: '/', label: 'Home' },
                      { href: '/about', label: 'About' },
                      { href: '/projects', label: 'Projects' },
                      { href: '/contact', label: 'Contact' }
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="px-4 py-2 text-sm font-medium transition-colors text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
                        aria-current={item.href === '/' ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    ))}
                    
                    {/* Theme Toggle removed */}
                  </div>
                  
                  {/* Mobile Navigation */}
                  <MobileNav />
                </div>
              </div>
            </nav>
          </header>
          
          <main id="main-content" className="flex-grow" tabIndex={-1}>
            {children}
          </main>
          
          <footer className="bg-gray-100 dark:bg-gray-900 mt-auto" role="contentinfo">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div>
                  <Link href="/" className="inline-flex items-center" aria-label="Go to homepage">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">Portfolio</span>
                  </Link>
                  <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xs">
                    A showcase of my projects and professional skills as a software engineer.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                    Quick Links
                  </h3>
                  <ul className="mt-4 space-y-2" role="list">
                    {[
                      { href: '/', label: 'Home' },
                      { href: '/about', label: 'About' },
                      { href: '/projects', label: 'Projects' },
                      { href: '/contact', label: 'Contact' }
                    ].map((item) => (
                      <li key={item.href}>
                        <Link 
                          href={item.href}
                          className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
                          aria-current={item.href === '/' ? 'page' : undefined}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                    Connect
                  </h3>
                  <ul className="mt-4 space-y-2" role="list">
                    {[
                      { platform: 'GitHub', url: 'https://github.com' },
                      { platform: 'LinkedIn', url: 'https://linkedin.com' },
                      { platform: 'Twitter', url: 'https://twitter.com' }
                    ].map((item) => (
                      <li key={item.platform}>
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
                          aria-label={`Visit my ${item.platform} profile`}
                        >
                          {item.platform}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Copyright and Theme Toggle */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
                {/* Theme Toggle removed */}
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

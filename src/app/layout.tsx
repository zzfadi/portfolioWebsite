import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SkipToContent } from "@/components/ui/Accessibility";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { MobileNav } from "@/components/MobileNav";
import { ClientRouter } from "@/components/ClientRouter";
import Link from "next/link";
import { navigation } from "@/data";

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
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Mobile Navigation */}
                  <MobileNav />
                </div>
              </div>
            </nav>
          </header>
          
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          
          <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="md:flex md:items-center md:justify-between">
                <div className="text-center md:text-left">
                  <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                </div>
                
                <div className="mt-4 md:mt-0 flex items-center justify-center md:justify-end space-x-6">
                  {/* Footer Navigation */}
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

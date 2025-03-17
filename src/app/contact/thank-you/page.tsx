import { AnimatedElement } from "@/components/ui/Motion";
import Link from "next/link";

export const metadata = {
  title: 'Thank You',
};

export default function ThankYouPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedElement variant="slideUp">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900">
              <svg 
                className="h-10 w-10 text-green-600 dark:text-green-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            
            <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
              Thank You!
            </h1>
            
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Your message has been successfully sent. I'll get back to you as soon as possible.
            </p>
            
            <div className="mt-8">
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
import { AnimatedElement, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { FiMail, FiPhone, FiMapPin, FiCalendar } from "react-icons/fi";
import { personalInfo, socialNavigation } from "@/data";

export const metadata = {
  title: 'Contact Me',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variant="slideUp">
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">Get In Touch</h1>
            <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Cards */}
            <AnimatedElement variant="slideInLeft" delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-orange-600 dark:text-orange-300">
                      <FiMail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        <a href={`mailto:${personalInfo.contactEmail}`} className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                          {personalInfo.contactEmail}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-300">
                      <FiMapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                      <FiCalendar className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Availability</h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">Monday - Friday, 9AM - 5PM PST</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    {socialNavigation.map((item) => (
                      <a 
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-orange-100 hover:text-orange-600 dark:hover:bg-orange-900 dark:hover:text-orange-300 transition-colors"
                        aria-label={`Visit my ${item.label} profile`}
                      >
                        <span className="sr-only">{item.label}</span>
                        {/* Placeholder for icon - would need actual social icons */}
                        <span className="text-sm font-bold">{item.label.charAt(0)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            {/* Contact Form */}
            <AnimatedElement variant="slideInRight" delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h2>
                
                <form 
                  className="space-y-6"
                  action="https://formsubmit.co/fadi.b.zuabi@gmail.com" // Hardcode your email temporarily
                  method="POST"
                >
                  <input type="hidden" name="_next" value={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact/thank-you`} />
                  <input type="hidden" name="_captcha" value="false"/>
                  <input type="hidden" name="_next" value="http://localhost:3000/portfolioWebsite/contact/thank-you" />
                  <input type="hidden" name="_subject" value="New message from portfolio" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
}
import { AnimatedElement, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { FiMail, FiPhone, FiMapPin, FiCalendar } from "react-icons/fi";

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

      {/* Contact Form and Info */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedElement variant="slideInLeft" delay={0.2}>
              <h2 className="text-2xl font-bold mb-6" id="contact-form">Send Me a Message</h2>
              <form className="space-y-6" aria-labelledby="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:text-white"
                    placeholder="Your name"
                    aria-required="true"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:text-white"
                    placeholder="your.email@example.com"
                    aria-required="true"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:text-white"
                    placeholder="What is this regarding?"
                    aria-required="true"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:text-white"
                    placeholder="Your message here..."
                    aria-required="true"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                  aria-label="Send your message"
                >
                  Send Message
                </button>
              </form>
            </AnimatedElement>
            
            {/* Contact Information */}
            <AnimatedElement variant="slideInRight" delay={0.3}>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <StaggerContainer className="space-y-6">
                <StaggerItem className="flex items-start group">
                  <div className="flex-shrink-0 mt-1 p-2 bg-orange-100 dark:bg-orange-900 rounded-full group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                    <FiMail className="h-6 w-6 text-orange-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      <a 
                        href="mailto:contact@example.com" 
                        className="hover:text-orange-500 dark:hover:text-orange-400 focus:outline-none focus:underline"
                        aria-label="Send an email to contact@example.com"
                      >
                        contact@example.com
                      </a>
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem className="flex items-start group">
                  <div className="flex-shrink-0 mt-1 p-2 bg-orange-100 dark:bg-orange-900 rounded-full group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                    <FiPhone className="h-6 w-6 text-orange-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      <a 
                        href="tel:+1234567890" 
                        className="hover:text-orange-500 dark:hover:text-orange-400 focus:outline-none focus:underline"
                        aria-label="Call +1 (234) 567-890"
                      >
                        +1 (234) 567-890
                      </a>
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem className="flex items-start group">
                  <div className="flex-shrink-0 mt-1 p-2 bg-orange-100 dark:bg-orange-900 rounded-full group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                    <FiMapPin className="h-6 w-6 text-orange-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      San Francisco, California
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem className="flex items-start group">
                  <div className="flex-shrink-0 mt-1 p-2 bg-orange-100 dark:bg-orange-900 rounded-full group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                    <FiCalendar className="h-6 w-6 text-orange-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Schedule a Meeting</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      Prefer to talk directly? Schedule a video call using the button below.
                    </p>
                    <button
                      className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all"
                      aria-label="Schedule a video call"
                    >
                      Schedule a Call
                    </button>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
} 
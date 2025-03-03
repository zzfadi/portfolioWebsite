import { AnimatedElement, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:pr-12">
              <AnimatedElement variant="slideInLeft" delay={0.2}>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block">Hi, I'm </span>
                  <span className="block text-orange-500">Fadi Al Zuabi</span>
                </h1>
              </AnimatedElement>
              
              <AnimatedElement variant="slideInLeft" delay={0.4}>
                <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                  A passionate software engineer specializing in full-stack web development. 
                  I build modern, responsive, and user-friendly applications.
                </p>
              </AnimatedElement>
              
              <AnimatedElement variant="fadeIn" delay={0.6}>
                <div className="mt-10 flex gap-4">
                  <a 
                    href="/projects" 
                    className="inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 py-2 px-4 text-base"
                    aria-label="View my portfolio projects"
                  >
                    View Projects
                  </a>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-current bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 py-2 px-4 text-base"
                    aria-label="Get in touch with me"
                  >
                    Get In Touch
                  </a>
                </div>
              </AnimatedElement>
            </div>
            
            <AnimatedElement variant="slideInRight" delay={0.4} className="mt-12 md:mt-0 md:w-1/2">
              {/* Placeholder for hero image or illustration */}
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-500 dark:text-gray-400 text-lg">Profile Image</span>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variant="slideUp" className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4" id="featured-projects">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Some of my recent work</p>
          </AnimatedElement>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards */}
            <StaggerItem className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Project One</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Short description of the project goes here.</p>
                <div className="mt-4 flex gap-2">
                  <span className="inline-flex items-center rounded-full font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs px-2.5 py-0.5">
                    React
                  </span>
                  <span className="inline-flex items-center rounded-full font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs px-2.5 py-0.5">
                    Node.js
                  </span>
                </div>
              </div>
            </StaggerItem>
            
            <StaggerItem className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Project Two</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Short description of the project goes here.</p>
                <div className="mt-4 flex gap-2">
                  <span className="inline-flex items-center rounded-full font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 text-xs px-2.5 py-0.5">
                    Next.js
                  </span>
                  <span className="inline-flex items-center rounded-full font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 text-xs px-2.5 py-0.5">
                    TypeScript
                  </span>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
          
          <AnimatedElement variant="fadeIn" delay={0.4} className="mt-12 text-center">
            <a 
              href="/projects" 
              className="inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500 py-2 px-4 text-base"
              aria-label="View all projects in my portfolio"
            >
              View All Projects
            </a>
          </AnimatedElement>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variant="slideUp" className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4" id="skills">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Technologies I work with</p>
          </AnimatedElement>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'SQL'].map((skill) => (
              <StaggerItem 
                key={skill} 
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm text-center transform transition-transform hover:scale-105 duration-300"
              >
                <div className="text-4xl mb-4 text-orange-500">
                  {/* Placeholder for icon */}
                  <div className="inline-block w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                    <span className="text-base">{skill.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="font-medium">{skill}</h3>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}

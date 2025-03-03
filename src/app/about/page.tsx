import { AnimatedElement, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

export const metadata = {
  title: 'About Me',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variant="slideUp">
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">About Me</h1>
            <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Software engineer with a passion for creating elegant solutions to complex problems.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variant="fadeIn" className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4" id="about-journey">My Journey</h2>
          </AnimatedElement>
          <AnimatedElement variant="slideUp" delay={0.2} className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            </p>
            <p>
              Suspendisse in orci enim. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variant="slideUp" className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4" id="skills-expertise">Skills & Expertise</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedElement variant="slideInLeft" delay={0.3}>
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <div className="space-y-4">
                {['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML/CSS', 'Tailwind CSS'].map((skill, index) => (
                  <div key={skill} className="flex items-center" role="presentation">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-orange-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                        style={{ 
                          width: '85%',
                          transitionDelay: `${index * 100}ms` 
                        }}
                        aria-hidden="true"
                      ></div>
                    </div>
                    <span className="ml-4 min-w-[100px]">{skill}</span>
                  </div>
                ))}
              </div>
            </AnimatedElement>
            <AnimatedElement variant="slideInRight" delay={0.3}>
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <div className="space-y-4">
                {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'].map((skill, index) => (
                  <div key={skill} className="flex items-center" role="presentation">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                        style={{ 
                          width: '80%',
                          transitionDelay: `${index * 100}ms` 
                        }}
                        aria-hidden="true"
                      ></div>
                    </div>
                    <span className="ml-4 min-w-[100px]">{skill}</span>
                  </div>
                ))}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variant="slideUp" className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4" id="experience">Work Experience</h2>
          </AnimatedElement>
          <StaggerContainer className="space-y-12">
            <StaggerItem className="border-l-4 border-orange-500 pl-4 md:pl-6 transform transition-all duration-300 hover:translate-x-2">
              <h3 className="text-xl font-bold">Senior Software Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400">Company Name • 2020 - Present</p>
              <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>Led development of key features for the company's flagship product</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Implemented CI/CD pipelines to improve deployment efficiency</li>
              </ul>
            </StaggerItem>
            
            <StaggerItem className="border-l-4 border-orange-500 pl-4 md:pl-6 transform transition-all duration-300 hover:translate-x-2">
              <h3 className="text-xl font-bold">Software Developer</h3>
              <p className="text-gray-600 dark:text-gray-400">Previous Company • 2018 - 2020</p>
              <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>Developed and maintained web applications using React and Node.js</li>
                <li>Collaborated with design team to implement responsive UI components</li>
                <li>Optimized database queries to improve application performance</li>
              </ul>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variant="slideUp" className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4" id="education">Education</h2>
          </AnimatedElement>
          <AnimatedElement variant="slideInLeft" delay={0.3} className="border-l-4 border-teal-500 pl-4 md:pl-6 transform transition-all duration-300 hover:translate-x-2">
            <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600 dark:text-gray-400">University Name • 2014 - 2018</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Graduated with honors. Specialized in software engineering and web development.
            </p>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
} 
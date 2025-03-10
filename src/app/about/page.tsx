import { AnimatedElement, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { personalInfo, experiences, education, skills } from "@/data";

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
              {personalInfo.shortBio}
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
              {personalInfo.bio}
            </p>
            <p>
              Based in {personalInfo.location}, I focus on delivering high-quality solutions that meet client needs and exceed expectations.
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
            {skills.slice(0, 2).map((category, index) => (
              <AnimatedElement key={category.name} variant={index === 0 ? "slideInLeft" : "slideInRight"} delay={0.3}>
                <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="flex items-center" role="presentation">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className={`bg-${category.colorClass || 'orange-500'} h-2.5 rounded-full transition-all duration-1000 ease-out`} 
                          style={{ 
                            width: `${skill.level || 80}%`,
                            transitionDelay: `${skillIndex * 100}ms` 
                          }}
                          aria-hidden="true"
                        ></div>
                      </div>
                      <span className="ml-4 min-w-[100px]">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </AnimatedElement>
            ))}
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
            {experiences.map((experience, index) => (
              <StaggerItem key={`${experience.company}-${index}`} className="border-l-4 border-orange-500 pl-4 md:pl-6 transform transition-all duration-300 hover:translate-x-2">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{experience.company} • {experience.startDate} - {experience.endDate || 'Present'}</p>
                <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-400">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variant="slideUp" className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4" id="education">Education</h2>
          </AnimatedElement>
          {education.map((edu, index) => (
            <AnimatedElement key={`${edu.institution}-${index}`} variant="slideInLeft" delay={0.3 * index} className="border-l-4 border-teal-500 pl-4 md:pl-6 transform transition-all duration-300 hover:translate-x-2 mb-8">
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-400">{edu.institution} • {edu.startYear} - {edu.endYear}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {edu.description}
              </p>
              {edu.achievements && edu.achievements.length > 0 && (
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                  {edu.achievements.map((achievement, achieveIndex) => (
                    <li key={achieveIndex}>{achievement}</li>
                  ))}
                </ul>
              )}
            </AnimatedElement>
          ))}
        </div>
      </section>
    </>
  );
} 
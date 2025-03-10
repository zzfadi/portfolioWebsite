import { AnimatedElement, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { projects } from "@/data";
import Link from "next/link";

export const metadata = {
  title: 'Projects',
};

export default function ProjectsPage() {
  // Sort projects by date, newest first
  const sortedProjects = [...projects].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variant="slideUp">
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">My Projects</h1>
            <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work, personal projects, and contributions.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project) => (
              <StaggerItem 
                key={project.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg duration-300"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  {project.imageUrl ? (
                    <img 
                      src={project.imageUrl} 
                      alt={`${project.title} screenshot`} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
                    {project.featured && (
                      <span className="inline-flex items-center rounded-full bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100 text-xs px-2.5 py-0.5">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{project.description}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={`${project.id}-${tech}`} 
                        className="inline-flex items-center rounded-full font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs px-2.5 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400"
                      >
                        View Code
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement variant="fadeIn">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Interested in working together?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            >
              Get In Touch
            </Link>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
} 
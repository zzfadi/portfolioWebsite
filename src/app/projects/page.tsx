import { AnimatedElement, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export const metadata = {
  title: 'Projects',
};

export default function ProjectsPage() {
  // Mock project data
  const projects = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: '/placeholder.jpg',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team workspaces.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      imageUrl: '/placeholder.jpg',
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data from multiple sources.',
      technologies: ['React', 'Redux', 'Chart.js', 'Weather API'],
      imageUrl: '/placeholder.jpg',
    },
    {
      id: '4',
      title: 'Personal Finance Tracker',
      description: 'An application to track personal finances, including expenses, income, and investment performance.',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      imageUrl: '/placeholder.jpg',
    },
    {
      id: '5',
      title: 'Recipe Sharing Platform',
      description: 'A platform for users to share, discover, and save recipes with social features.',
      technologies: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
      imageUrl: '/placeholder.jpg',
    },
    {
      id: '6',
      title: 'Fitness Tracking App',
      description: 'A mobile-first application for tracking workouts, nutrition, and fitness progress.',
      technologies: ['React Native', 'Redux', 'Firebase'],
      imageUrl: '/placeholder.jpg',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variant="slideUp">
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">My Projects</h1>
            <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of my recent work and personal projects.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <StaggerItem 
                key={project.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="inline-flex items-center rounded-full font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 text-xs px-2.5 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-between">
                    <button 
                      className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded px-2 py-1"
                      aria-label={`View details for ${project.title}`}
                    >
                      View Details
                    </button>
                    <button 
                      className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded px-2 py-1"
                      aria-label={`Open live demo of ${project.title}`}
                    >
                      Live Demo
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variant="slideUp" className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Project Categories</h2>
          </AnimatedElement>
          <AnimatedElement variant="fadeIn" delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4" role="group" aria-label="Project categories">
              {['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Backend', 'Open Source'].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    category === 'All'
                      ? 'bg-orange-500 text-white focus:ring-orange-500'
                      : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-500'
                  }`}
                  aria-pressed={category === 'All'}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
} 
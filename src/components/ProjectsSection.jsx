import { ArrowRight, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Dashboard Fully Responsive',
    description: 'A full Dashborad using shadcn elements.',
    image: '/dash.png',
    tags: ['Typescript', 'TailwindCSS'],
    demoUrl: 'https://dash-project-lime.vercel.app/',
    githubUrl: 'https://github.com/x-239/dashboard',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform and payment processing.',
    image: '/ecopho.png',
    tags: ['Typescript', 'Node.js', 'Stripe'],
    demoUrl: 'https://eco-lek7.vercel.app',
    githubUrl: 'https://github.com/x-239/ecommerce-ui',
  },
  {
    id: 3,
    title: 'Waslh',
    description:
      'A website for foreign medical services with and Active Contact foarm.',
    image: '/waslhImage.png',
    tags: ['Next.Js', 'Typescript', 'Tailwind'],
    demoUrl: 'https://mmm-smoky-six.vercel.app/',
    githubUrl: 'https://github.com/x-239/MMM.git',
  },
  {
    id: 4,
    title: 'BlossomCandy store',
    description:
      'Blossom candy is a full-stack website,fully responsive ready to work!',
    image: '/mycandystore.png',
    tags: ['Next.Js', 'Typescript', 'Tailwind'],
    demoUrl: 'https://blossom-vkle.vercel.app/',
    githubUrl: 'https://github.com/x-239/blossom.git',
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs cursor-pointer"
              onClick={() => window.open(project.demoUrl, '_blank')}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/x-239"
          >
            Check My Github <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

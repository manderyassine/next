export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Cutting-edge portfolio showcasing modern web development techniques",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "#",
      angle: "-skew-x-6",
      background: "bg-gradient-to-br from-[#0077FF] to-[#00FF66]"
    },
    {
      title: "Online Shop",
      description: "Full-stack e-commerce platform with seamless user experience",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      angle: "skew-x-6",
      background: "bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4]"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
      <h1 
        className="text-6xl font-bold mb-16 text-center glitch-text" 
        data-text="My Projects"
      >
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`
              relative transform ${project.angle} 
              transition-all duration-500 
              hover:scale-105 hover:rotate-0
              shadow-2xl
            `}
          >
            <div className={`
              absolute inset-0 opacity-50 blur-2xl ${project.background}
            `}></div>
            
            <div className={`
              relative z-10 p-8 bg-[#1A1A1A] 
              border border-opacity-20 border-[var(--color-primary)]
              rounded-xl overflow-hidden
            `}>
              <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">
                {project.title}
              </h2>
              <p className="text-[var(--color-text-light)] mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-[#2A2A2A] text-[var(--color-text-muted)] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                className="
                  block text-center 
                  bg-[var(--color-primary)] 
                  text-[var(--color-background)] 
                  py-3 rounded-lg
                  hover:bg-opacity-80 
                  transition-all
                "
              >
                Explore Project
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="section-divider my-16"></div>
    </div>
  )
}

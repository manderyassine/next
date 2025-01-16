export default function About() {
  const skills = [
    "TypeScript", "React", "Next.js", 
    "Tailwind CSS", "Node.js", "MongoDB",
    
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Animated Header */}
        <h1 
          className="
            text-4xl md:text-6xl lg:text-7xl 
            font-bold text-center 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
            animate-gradient-x
            mb-12
          "
        >
          About Me
        </h1>

        {/* Profile Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Digital Craftsman Card */}
          <div 
            className="
              bg-[#1E1E1E] 
              border border-[#2A2A2A] 
              rounded-2xl 
              p-8 
              transform transition-all 
              duration-500 
              hover:scale-105 
              hover:shadow-2xl 
              hover:border-[#6EE7B7]
              group
            "
          >
            <h2 
              className="
                text-2xl md:text-3xl 
                font-bold 
                mb-6 
                text-[#6EE7B7] 
                group-hover:text-white 
                transition-colors
              "
            >
              Digital Craftsman
            </h2>
            <p className="text-gray-300 space-y-4">
              <span className="block mb-2">
                I transform complex challenges into elegant digital solutions with a blend of technical precision and creative vision.
              </span>
              <span className="block">
                My passion lies in crafting web experiences that are not just functional, but truly transformative.
              </span>
            </p>
          </div>

          {/* Skills Card */}
          <div 
            className="
              bg-[#1E1E1E] 
              border border-[#2A2A2A] 
              rounded-2xl 
              p-8 
              transform transition-all 
              duration-500 
              hover:scale-105 
              hover:shadow-2xl 
              hover:border-[#3B82F6]
              group
            "
          >
            <h2 
              className="
                text-2xl md:text-3xl 
                font-bold 
                mb-6 
                text-[#3B82F6] 
                group-hover:text-white 
                transition-colors
              "
            >
              Tech Arsenal
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="
                    px-4 py-2 
                    bg-[#2A2A2A] 
                    text-gray-300 
                    rounded-full 
                    text-sm 
                    hover:bg-[#3B82F6] 
                    hover:text-white 
                    transition-all 
                    transform 
                    hover:-translate-y-1
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Details Section */}
        <div 
          className="
            bg-[#1E1E1E] 
            border border-[#2A2A2A] 
            rounded-2xl 
            p-8 
            md:p-12 
            space-y-6 
            hover:border-[#9333EA] 
            transition-all 
            duration-500
          "
        >
          <h3 
            className="
              text-2xl md:text-3xl 
              font-bold 
              text-[#9333EA] 
              mb-6
            "
          >
            Journey & Vision
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <p className="text-gray-300 leading-relaxed">
              Driven by an insatiable curiosity, I navigate the ever-evolving landscape of web technologies with enthusiasm and strategic thinking.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My goal is to create scalable, intuitive solutions that not only solve problems but also inspire and delight users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
      <h1 
        className="text-6xl font-bold mb-16 text-center glitch-text" 
        data-text="Get In Touch"
      >
        Get In Touch
      </h1>

      <div className="max-w-2xl mx-auto">
        <div 
          className="
            bg-[#1A1A1A] 
            border border-opacity-20 border-[var(--color-primary)]
            rounded-xl 
            p-10 
            shadow-2xl
            transform 
            transition-all 
            duration-500 
            hover:scale-105
          "
        >
          <form className="space-y-6">
            <div className="relative">
              <input 
                type="text" 
                id="name" 
                placeholder="Your Name" 
                className="
                  w-full 
                  bg-[#2A2A2A] 
                  text-[var(--color-text-light)] 
                  px-4 py-3 
                  rounded-lg 
                  border border-transparent 
                  focus:border-[var(--color-primary)] 
                  focus:outline-none
                "
              />
            </div>
            
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                placeholder="your.email@example.com" 
                className="
                  w-full 
                  bg-[#2A2A2A] 
                  text-[var(--color-text-light)] 
                  px-4 py-3 
                  rounded-lg 
                  border border-transparent 
                  focus:border-[var(--color-primary)] 
                  focus:outline-none
                "
              />
            </div>
            
            <div className="relative">
              <textarea 
                id="message" 
                rows={4} 
                placeholder="Your message..." 
                className="
                  w-full 
                  bg-[#2A2A2A] 
                  text-[var(--color-text-light)] 
                  px-4 py-3 
                  rounded-lg 
                  border border-transparent 
                  focus:border-[var(--color-primary)] 
                  focus:outline-none
                "
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="
                w-full 
                bg-[var(--color-primary)] 
                text-[var(--color-background)] 
                py-4 
                rounded-lg 
                hover:bg-opacity-80 
                transition-all
              "
            >
              Send Transmission
            </button>
          </form>
        </div>

        <div className="text-center mt-8">
          <p className="text-[var(--color-text-muted)]">
            Or connect through the digital realm:{' '}
            <a 
              href="mailto:your.email@example.com" 
              className="
                text-[var(--color-secondary)] 
                hover:underline 
                hover:text-opacity-80
              "
            >
              your.email@example.com
            </a>
          </p>
        </div>
      </div>

      <div className="section-divider my-16"></div>
    </div>
  )
}

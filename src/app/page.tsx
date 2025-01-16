import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
      </div>
      
      <div className="relative flex place-items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full"
          src="/profile-pic.png"
          alt="Profile Picture"
          width={300}
          height={300}
          priority
        />
      </div>
      
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p className="text-lg">
        I'm a dedicated developer who crafts innovative solutions and creates stunning web experiences.
        </p>
      </div>
    </main>
  )
}

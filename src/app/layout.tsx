import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio showcasing projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="text-2xl font-bold">My Portfolio</div>
              <div className="space-x-4">
                <Link href="/" className="hover:text-blue-500">Home</Link>
                <Link href="/about" className="hover:text-blue-500">About</Link>
                <Link href="/projects" className="hover:text-blue-500">Projects</Link>
                <Link href="/contact" className="hover:text-blue-500">Contact</Link>
              </div>
            </nav>
          </header>
          
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          
          <footer className="bg-white shadow-md py-4 text-center">
            <p>&copy; 2025 My Portfolio.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}

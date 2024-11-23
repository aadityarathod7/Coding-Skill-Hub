import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Coding Skill Hub Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <span className="text-2xl font-bold text-gray-800">Coding Skill Hub</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600">About Us</Link>
            <Link href="/courses" className="text-gray-800 hover:text-blue-600">Courses</Link>
            <Link href="/placement-stories" className="text-gray-800 hover:text-blue-600">Placement Stories</Link>
            <Link href="/why-join-us" className="text-gray-800 hover:text-blue-600">Why Join Us</Link>
            <Link href="/blog" className="text-gray-800 hover:text-blue-600">Blog</Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
          </div>


          <Button 
                  size="lg" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/courses">Enroll Now</Link>
                </Button>
          
        </div>
      </nav>
    </header>
  )
}


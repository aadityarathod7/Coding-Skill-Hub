import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Coding Skill Hub</h2>
            <p>Empowering careers through cutting-edge IT training.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400">Courses</Link></li>
              <li><Link href="/placement-stories" className="hover:text-blue-400">Placement Stories</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul>
              <li><Link href="/policies/terms" className="hover:text-blue-400">Terms & Conditions</Link></li>
              <li><Link href="/policies/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/policies/refund" className="hover:text-blue-400">Refund Policy</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p>Follow us on social media for updates and tech news.</p>
            {/* Add social media icons here */}
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2023 Coding Skill Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


import Link from 'next/link'

export default function AdminSidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/admin" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/admin/courses" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/admin/placement-stories" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Placement Stories
            </Link>
          </li>
          <li>
            <Link href="/admin/blog" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/admin/testimonials" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="/admin/inquiries" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Inquiries
            </Link>
          </li>
          <li>
            <Link href="/admin/seo" className="block py-2 px-4 hover:bg-gray-700 rounded">
              SEO
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

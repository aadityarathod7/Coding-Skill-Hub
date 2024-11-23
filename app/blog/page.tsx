import Image from 'next/image'
import Link from 'next/link'

// This would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch',
    excerpt: 'Explore the latest trends shaping the future of web development, from serverless architectures to AI-powered interfaces.',
    image: '/future.jpeg?height=200&width=400',
    date: '2023-08-15',
  },
  {
    id: 2,
    title: 'Mastering Data Structures and Algorithms',
    excerpt: 'Learn why mastering data structures and algorithms is crucial for becoming a proficient programmer and acing technical interviews.',
    image: '/future2.png?height=200&width=400',
    date: '2023-08-10',
  },
  {
    id: 3,
    title: 'The Rise of Low-Code and No-Code Platforms',
    excerpt: 'Discover how low-code and no-code platforms are revolutionizing app development and empowering non-technical users.',
    image: '/future3.jpg?height=200&width=400',
    date: '2023-08-05',
  },
  // Add more blog posts...
]

export default function Blog() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Coding Skill Hub Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import Image from 'next/image'

// This would typically come from a database or API
const stories = [
  {
    id: 1,
    name: 'John Doe',
    company: 'Tech Giant Inc.',
    image: '/team-sarah-johnson.jpeg?height=300&width=300',
    testimonial: 'Coding Skill Hub helped me land my dream job at a top tech company. The practical projects and interview preparation were invaluable.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    company: 'Innovative Startups Ltd.',
    image: '/team-michael-rodriguez.jpeg?height=300&width=300',
    testimonial: 'Thanks to the skills I learned at Coding Skill Hub, I was able to transition into a rewarding career in software development.',
  },
  // Add more stories...
]

export default function PlacementStories() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Placement Success Stories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <div key={story.id} className="bg-white rounded-lg shadow-md p-6">
            <Image
              src={story.image}
              alt={story.name}
              width={300}
              height={300}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
            <p className="text-gray-600 mb-4">{story.company}</p>
            <p className="italic">&ldquo;{story.testimonial}&rdquo;</p>
          </div>
        ))}
      </div>
      
      {/* Video Testimonials Section */}
      <h2 className="text-3xl font-bold mt-16 mb-8 text-center">Video Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Replace with actual video embeds */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export default function WhyJoinUs() {
  const reasons = [
    'Industry-relevant curriculum',
    'Experienced instructors',
    'Hands-on projects',
    'Career support and placement assistance',
    'Flexible learning options',
    'State-of-the-art online learning platform',
  ]

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Why Join Coding Skill Hub?</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Unlock Your Potential</h2>
          <p className="mb-4">
            At Coding Skill Hub, we're committed to helping you achieve your career goals in the 
            fast-paced world of technology. Our comprehensive programs and supportive learning 
            environment are designed to give you the skills and confidence you need to succeed.
          </p>
          <ul className="space-y-2">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image
            src="/student-learning.png?height=400&width=600"
            alt="Students learning"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Replace with actual testimonial data */}
        {[1, 2, 3].map((testimonial) => (
          <div key={testimonial} className="bg-white rounded-lg shadow-md p-6">
            <p className="italic mb-4">&ldquo;Coding Skill Hub transformed my career. The skills I learned here helped me land my dream job.&rdquo;</p>
            <p className="font-semibold">- John Doe, Software Engineer</p>
          </div>
        ))}
      </div>
      
      <h2 className="text-3xl font-bold mb-8 text-center">Our Success Stories</h2>
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

import { Button } from '@/components/ui/button'

// This would typically come from a database or API
const getCourse = (id: string) => ({
  id,
  title: 'Full Stack Web Development',
  description: 'Learn to build modern web applications from front to back.',
  duration: '12 weeks',
  mode: 'Online / Offline',
  price: '$999',
  syllabus: [
    'HTML, CSS, and JavaScript fundamentals',
    'React.js for frontend development',
    'Node.js and Express for backend development',
    'Database design with MongoDB',
    'RESTful API development',
    'Authentication and Authorization',
    'Deployment and DevOps basics',
  ],
})

export default function Course({ params }: { params: { id: string } }) {
  const course = getCourse(params.id)

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">{course.title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Course Description</h2>
          <p className="mb-6">{course.description}</p>
          
          <h2 className="text-2xl font-semibold mb-4">Syllabus</h2>
          <ul className="list-disc pl-6 mb-6">
            {course.syllabus.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Course Details</h3>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Mode:</strong> {course.mode}</p>
            <p><strong>Price:</strong> {course.price}</p>
          </div>
          
          <Button size="lg" className="w-full mb-4">Enroll Now</Button>
          <Button variant="outline" size="lg" className="w-full">Request Demo</Button>
        </div>
      </div>
    </div>
  )
}


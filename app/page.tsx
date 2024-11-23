import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TestimonialSlider } from '@/components/TestimonialSlider'

const featuredCourses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Master both front-end and back-end technologies to become a versatile web developer.",
    image: "/course-1.jpg"
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    description: "Learn the essentials of data analysis, machine learning, and statistical modeling.",
    image: "/course-2.jpeg"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Create cross-platform mobile apps using React Native and modern app development practices.",
    image: "/course-3.jpeg"
  }
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Unlock Your Coding Potential
              </h1>
              <p className="text-xl mb-6">
                Join Coding Skill Hub and transform your career in tech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/courses">Explore Courses</Link>
                </Button>
                {/* <Button 
                  size="lg" 
                  className="bg-white hover:bg-gray-100 text-blue-600 font-bold text-lg px-8 py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/enroll">Enroll Now</Link>
                </Button> */}
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/hero-image.jpg"
                alt="Students coding"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Button asChild>
                    <Link href={`/courses/${course.id}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Placement Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Placement Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/success-story-1.jpg"
                alt="John Doe"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">John Doe</h3>
              <p className="text-center mb-4">Hired as Senior Developer at Tech Giant Inc.</p>
              <p>"After completing the Full Stack course, I landed my dream job at a leading tech company. The skills I learned were exactly what employers were looking for."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/success-story-2.jpeg"
                alt="Jane Smith"
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">Jane Smith</h3>
              <p className="text-center mb-4">Founded successful AI startup</p>
              <p>"The Data Science course gave me the confidence to start my own AI company. Now, we're revolutionizing the industry with cutting-edge machine learning solutions."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">5000+</h3>
              <p>Students Trained</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">95%</h3>
              <p>Placement Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p>Industry Partners</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">4.8/5</h3>
              <p>Student Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


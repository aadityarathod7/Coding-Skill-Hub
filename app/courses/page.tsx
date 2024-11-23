'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

// This would typically come from a database or API
const courses = [
  { id: 1, title: 'Full Stack Web Development', category: 'Web Development', image: '/course-1.jpg' },
  { id: 2, title: 'Data Science Fundamentals', category: 'Data Science', image: '/course-2.jpeg' },
  { id: 3, title: 'Mobile App Development with React Native', category: 'Mobile Development', image: '/course-3.jpeg' },
  { id: 4, title: 'Machine Learning Essentials', category: 'Data Science', image: '/course-4.jpg' },
  { id: 5, title: 'Cloud Computing with AWS', category: 'Cloud Computing', image: '/course-5.png' },
  { id: 6, title: 'Cybersecurity Fundamentals', category: 'Cybersecurity', image: '/course-6.png' },
]

const categories = ['All', 'Web Development', 'Data Science', 'Mobile Development', 'Cloud Computing', 'Cybersecurity']

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory)

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>
      
      {/* Filter Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
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
              <p className="text-gray-600 mb-4">{course.category}</p>
              <Button asChild>
                <Link href={`/courses/${course.id}`}>View Course</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <p className="text-center text-gray-600 mt-8">No courses found in this category.</p>
      )}
    </div>
  )
}


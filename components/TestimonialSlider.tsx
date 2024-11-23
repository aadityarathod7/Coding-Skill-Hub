'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    content: "The Full Stack Web Development course was incredibly comprehensive. I went from a beginner to landing a job as a junior developer!",
    author: "Sarah J., Web Developer"
  },
  {
    id: 2,
    content: "Data Science Fundamentals gave me the skills I needed to transition into a data analyst role. The instructors were knowledgeable and supportive.",
    author: "Mike T., Data Analyst"
  },
  {
    id: 3,
    content: "I loved the Mobile App Development course. It was hands-on and I was able to build my own app by the end of it!",
    author: "Emily R., Mobile App Developer"
  },
  {
    id: 4,
    content: "The Cybersecurity course was eye-opening. It prepared me for real-world challenges in the field.",
    author: "Alex K., Security Specialist"
  }
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="px-6 py-8">
          <p className="text-lg mb-4">"{testimonials[currentIndex].content}"</p>
          <p className="font-semibold">- {testimonials[currentIndex].author}</p>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Previous testimonial">
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Next testimonial">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}


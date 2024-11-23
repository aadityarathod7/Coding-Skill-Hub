'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { WhatsAppButton } from '@/components/WhatsAppButton'
import Link from 'next/link'

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    // Here you would typically send the data to your server
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API call
    setIsSubmitting(false)
    toast({
      title: "Form submitted!",
      description: "We'll get back to you soon.",
    })
    reset() // Reset the form after successful submission
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input id="name" {...register("name")} className="mt-1" />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input id="email" type="email" {...register("email")} className="mt-1" />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" {...register("message")} className="mt-1" rows={4} />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98731668505367!3d40.74844097932822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729807!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Quick Connect</h2>
          <WhatsAppButton phoneNumber="+1234567890" message="Hi, I'm interested in your courses!" />

          <h2 className="text-2xl font-semibold mt-8 mb-4">Policies and FAQs</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/policies/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/policies/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/policies/refund" className="text-blue-600 hover:underline">Refund Policy</Link>
            </li>
            <li>
              <Link href="/faq" className="text-blue-600 hover:underline">Frequently Asked Questions</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


import Image from 'next/image'

const teamMembers = [
  {
    name: "Dr. Emily Chen",
    position: "Founder & CEO",
    image: "/team-emily-chen.jpg"
  },
  {
    name: "Michael Rodriguez",
    position: "Lead Instructor",
    image: "/team-michael-rodriguez.jpeg"
  },
  {
    name: "Sarah Johnson",
    position: "Curriculum Director",
    image: "/team-sarah-johnson.jpeg"
  }
]

export default function AboutUs() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Coding Skill Hub</h1>
      
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/about-us.jpg"
            alt="Coding Skill Hub Office"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            At Coding Skill Hub, our mission is to empower individuals with the skills and knowledge 
            needed to excel in the ever-evolving world of technology. We are committed to providing 
            high-quality, industry-relevant training that prepares our students for successful careers 
            in IT and software development.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p>
            We envision a future where technology education is accessible, engaging, and aligned with 
            industry needs. Coding Skill Hub aims to be at the forefront of this transformation, 
            continually adapting our curriculum and teaching methods to meet the demands of the 
            tech industry.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
          <p>We embrace cutting-edge technologies and teaching methods to provide the best learning experience.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Excellence</h3>
          <p>We strive for excellence in everything we do, from curriculum design to student support.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p>We foster a supportive community of learners, instructors, and industry professionals.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


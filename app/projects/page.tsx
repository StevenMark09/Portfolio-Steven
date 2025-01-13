import Link from 'next/link'

const projects = [
  { id: 1, title: 'A Web and Mobile App-Based Fire Emergency Response and Coordination System for CDRRMO - Pasig City', description: 'The "Fire Emergency Response and Coordination System" for CDRRMO - Pasig City is a platform that enhances fire emergency management through real-time communication, incident reporting, live tracking, and coordination among responders, authorities, and residents, improving safety and response efficiency.' },
  { id: 2, title: "A Web-Based Event Management System with Venue Locator and Email Notification for Abram's Event Catering Service", description: 'The "Web-Based Event Management System" for Abrams Event Catering Service simplifies event planning by enabling venue booking, managing event details, and sending email notifications for updates, ensuring smooth coordination and communication.' },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 flex items-center">
        <span className="text-sky-400">My</span>
        <span className="text-white ml-2"> Projects </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-slate-800 p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
            style={{ boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)' }} 
          >
            <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <Link href={`/projects/${project.id}`} className="text-sky-400 hover:underline">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

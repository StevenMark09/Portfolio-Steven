import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 flex flex-col md:flex-row items-start">
        <span className="text-sky-400">Welcome</span>
        <span className="text-white ml-2"> To My Portfolio </span>
      </h1>
      <p className="text-slate-400 mb-8">
      I'm a passionate web developer and recent graduate, eager to create exceptional digital experiences. 
      With a strong foundation in web technologies, I focus on building responsive, user-friendly websites that make an impact.
      </p>
      <Link href="/projects" className="bg-sky-400 text-white px-6 py-2 rounded hover:bg-sky-500 transition-colors">
        View My Projects
      </Link>
    </div>
  )
}


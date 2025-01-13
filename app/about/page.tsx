import { BookOpen, School, GraduationCap, Award } from 'lucide-react';  // Added Award icon import
import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 flex items-center">
        <span className="text-sky-400">About</span>
        <span className="text-white ml-2"> Me </span>
      </h1>

      <div className="flex flex-col md:flex-row md:gap-12">
        <div className="flex-1 mb-8 md:mb-0 overflow-hidden">
          <section className="mb-8 flex flex-col md:flex-row gap-12">
            <div className="flex-none w-full md:w-1/2 h-full mb-0 md:flex-none">
              <div className="w-full h-full bg-slate-700 border border-slate-500 p-2 flex justify-center items-center">
                <Image width={1000} height={1000}
                  src="/Profile.jpg" 
                  alt="Profile Picture" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 md:text-xl'>
              <h2 className="text-2xl font-semibold text-white mb-4">Personal Information</h2>
              <ul className="text-slate-400">
                <li className="mb-4"><strong>Full Name:</strong> Steven Mark Catalan</li>
                <li className="mb-4"><strong>Date of Birth:</strong> November 9, 2002</li>
                <li className="mb-4"><strong>Address:</strong> Block 4 Lot 5 Angelina Santos Compound, Tanguile St. Fortune Marikina City</li>
                <li className="mb-4"><strong>Zip Code:</strong> 1800</li>
                <li className="mb-4"><strong>Email:</strong> stevenmarkcatalan@gmail.com</li>
                <li className="mb-4"><strong>Phone:</strong> (+63) 962 275 6231</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Skills</h2>
            <div className="overflow-x-scroll scrollbar py-4 w-full">
              <div className="flex gap-6 px-0 w-fit">
                {[ 
                  { skill: 'React', image: '/ReactJS.svg' },
                  { skill: 'Next.js', image: '/NextJS.jpeg' },
                  { skill: 'TypeScript', image: '/TypeScript.png' },
                  { skill: 'Node.js', image: '/NodeJs.jpg' },
                  { skill: 'Tailwind CSS', image: '/TailwindCSS.png' },
                  { skill: 'HTML', image: '/Html.png' },
                  { skill: 'CSS', image: '/Css.png' },
                  { skill: 'PHP', image: '/Php.png' },
                  { skill: 'JavaScript', image: '/JavaScript.png' },
                  { skill: 'MySQL', image: '/MySql.png' }
                ].map((item) => (
                  <div
                    key={item.skill}
                    className="w-60 h-60 flex justify-center items-center bg-slate-700 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:bg-sky-400"
                  >
                    <Image
                      height={1000}
                      width={1000}
                      src={item.image}
                      alt={item.skill}
                      className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Educational Background Section */}
      <section className="mt-7 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-sky-400" /> Educational Background
        </h2>

        {/* Flexbox to display sections side by side */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-12">
            {/* PRIMARY EDUCATION */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <div className="flex items-center justify-center bg-sky-400 text-white rounded-full p-3">
                  <School className="h-6 w-6" />
                </div>
                Primary
              </h3>
              <hr className="border-t-1 border-slate-400 mb-4 sm:hidden" /> {/* Horizontal line for mobile */}
              {[ 
                { years: "2009 - 2013", school: "NIYUGAN ELEMENTARY SCHOOL", address: "8VFV+G5C, Jaen, Nueva Ecija" },
                { years: "2013 - 2015", school: "PARANG ELEMENTARY SCHOOL", address: "84 P. Paterno St. Parang, Marikina City" }
              ].map((edu, index) => (
                <div key={index} className="flex gap-6 mb-4 text-slate-400">
                  <div className="flex-none w-28 text-lg font-semibold">{edu.years}</div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">{edu.school}</div>
                    <div className="text-sm">{edu.address}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* SECONDARY EDUCATION */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <div className="flex items-center justify-center bg-sky-400 text-white rounded-full p-3">
                  <GraduationCap className="h-6 w-6" />
                </div>
                Secondary
              </h3>
              <hr className="border-t-1 border-slate-400 mb-4 sm:hidden" /> {/* Horizontal line for mobile */}
              {[ 
                { years: "2015 - 2018", school: "PARANG HIGH SCHOOL", address: "Tandang Sora St. Parang, Marikina City" },
                { years: "2019 - 2021", school: "NATIONAL CHRISTIAN LIFE COLLEGE", address: "7 1st Paliparan Subd, Sto. Niño, Marikina, 1800 Metro Manila" }
              ].map((edu, index) => (
                <div key={index} className="flex gap-6 mb-4 text-slate-400">
                  <div className="flex-none w-28 text-lg font-semibold">{edu.years}</div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">{edu.school}</div>
                    <div className="text-sm">{edu.address}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* TERTIARY EDUCATION */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <div className="flex items-center justify-center bg-sky-400 text-white rounded-full p-3">
                  <GraduationCap className="h-6 w-6" />
                </div>
                Tertiary
              </h3>
              <hr className="border-t-1 border-slate-400 mb-4 sm:hidden" /> {/* Horizontal line for mobile */}
              <div className="flex gap-6 text-slate-400">
                <div className="flex-none w-28 text-lg font-semibold">2021 - 2025</div>
                <div className="flex-1">
                  <div className="text-white font-semibold">OUR LADY OF FATIMA UNIVERSITY</div>
                  <div className="text-sm">Bachelor of Science in Information Technology</div>
                  <div className="text-sm">Km. 23 Sumulong Hwy, Antipolo, 1870 Rizal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="mt-7 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
          <Award className="h-6 w-6 text-sky-400" /> Awards
        </h2>
        <hr className="border-t-1 border-slate-400 mb-4 sm:hidden" /> {/* Horizontal line for mobile */}

        <div className="space-y-6">
          {[ 
            { year: "2024", description: "Actively Participating as a proponent", image: "/CapstoneAward.png" },
            { year: "2024", description: "Being a Remarkable Speaker of the Webinar in AI", image: "/SpeakerAward.png" }
          ].map((award, index) => (
            <div key={index} className="text-slate-400">
              <div className="flex items-start gap-4 mb-6">
                {/* Date and Certificate Title */}
                <div className="flex-none w-32">
                  <div className="text-lg text-slate-400 font-semibold">{award.year}</div>
                </div>
                {/* Certificate Description */}
                <div className="flex md:flex-row flex-col justify-between w-1/2">
                  <div className="text-sm text-white">{award.description}</div>
                  <Image 
                    src={award.image}
                    width={300}
                    alt=''
                    height={300}
                    className="object-cover rounded-lg md:mt-0 mt-3"
                  />
                </div>
              </div>
              {/* Award Image (optional) */}
              <div className="flex justify-center ml-28 md:ml-0">
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

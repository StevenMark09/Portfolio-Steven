'use client'

import { MapPin, Phone, Mail, Linkedin, Github} from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 flex items-center">
        <span className="text-sky-400">Contact</span>
        <span className="text-white ml-2"> Me</span>
      </h1>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {/* Address Box */}
        <div className="bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300" style={{ boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)' }}>
          <div className="flex items-center space-x-4">
            <div className="bg-sky-400 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Address</h3>
              <p className="text-slate-400">Parang, Marikina City</p>
            </div>
          </div>
        </div>

        {/* Contact Number Box */}
        <div className="bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300" style={{ boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)' }}>
          <div className="flex items-center space-x-4">
            <div className="bg-sky-400 p-3 rounded-full">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Contact Number</h3>
              <p className="text-slate-400">(+63) 962 275 6231</p>
            </div>
          </div>
        </div>

        {/* Email Address Box */}
        <div className="bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300" style={{ boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)' }}>
          <div className="flex items-center space-x-4">
            <div className="bg-sky-400 p-3 rounded-full">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-white">Email Address</h3>
              <Link href="mailto:stevenmarkcatalan@gmail.com" className="text-sky-400 hover:underline">stevenmarkcatalan@gmail.com</Link>
            </div>
          </div>
        </div>

        {/* LinkedIn Box */}
        <div className="bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300" style={{ boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)' }}>
          <div className="flex items-center space-x-4">
            <div className="bg-sky-400 p-3 rounded-full">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/steven-mark-catalan-341b7b345/" className="text-sky-400 hover:underline">Steven's LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Github Box */}
        <div className="bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300" style={{ boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)' }}>
          <div className="flex items-center space-x-4">
            <div className="bg-sky-400 p-3 rounded-full">
              <Github className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Github</h3>
              <a href="https://github.com/StevenMark09" className="text-sky-400 hover:underline"> Steven's Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

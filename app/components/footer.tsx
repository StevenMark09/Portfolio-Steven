import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 flex flex-col justify-center items-center gap-10">
      <div className="container flex mx-auto px-4 justify-between md:flex-row flex-col">
        {/* About Section */}
        <div className="mb-6 flex items-start flex-col gap-4">
          <h1 className='text-xl font-bold'> About </h1>
          <p className="text-md text-slate-400">
            A technology specialist who has experience in web and mobile development. <br />
            Loves to learn new technology.
          </p>
        </div>

        {/* Have a Questions Section with Icons */}
        <div className="mb-6 flex items-start flex-col gap-4">
          <h1 className='text-xl font-bold'> Have a Questions? </h1>
          <div className="flex space-x-2">
            <MapPin className="text-sky-400" />
            <p className='text-slate-400'>Block 4 Lot 5 Angelina Santos Compound </p>
          </div>
          <div className="flex space-x-2">
            <Phone className="text-sky-400" />
            <p className='text-slate-400'>(+63) 962 275 6231</p>
          </div>
          <div className="flex space-x-2">
            <Mail className="text-sky-400" />
            <p className='text-slate-400'>stevenmarkcatalan@gmail.com</p>
          </div>
        </div>
      </div>
        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

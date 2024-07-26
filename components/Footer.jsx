import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const myCopyrightStyle = {
      color: "#e6021d",
      hover: "#03fc4e"
    }

  return (
    // <!-- Footer -->
    <footer className="bg-gray-200 py-4 mt-48">
      <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
      >
        <div className="mb-4 md:mb-0">
          <Image src={ logo } alt="Logo" className="h-8 w-auto" />
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; {currentYear} All rights reserved || Powered by: <span className='crlogo' style={myCopyrightStyle}><Link href="https://www.mojowebsitedesignanddevelopment.com/">MOJOWEBSITEDESIGNANDDEVELOPMENT</Link></span>
          </p>
        </div>
        <div
          className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0"
        >
          <ul className="flex space-x-4">
            {/* create terms component */}
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import footerimg from '../../src/assets/images/footerimg.png'
import footerlogo from '../../src/assets/images/footerlogo.png'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'



const Footer = () => {
  return (
    <div
      className="text-white w-full h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${footerimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Logo */}
      <div className="w-[374px] h-[174px] flex items-center justify-center">
        <img src={footerlogo} 
        alt="SAS Logo" 
        className="w-full h-full object-contain" />
      </div>

      {/* Paragraph */}
      <p className="text-[#FFFFFFDE] text-center text-[24px] pt-5">
        Logistics delivery with a variety of the best <br /> services ready to serve you with pleasure
      </p>

      {/* Social Media Links */}
      <div className="flex gap-3 pt-5">
        <a 
        href="#" 
        className="p-3 bg-[#8ECAE6] rounded-full" 
        aria-label="Follow us on Instagram">
          <BsInstagram className="w-6 h-6 text-[#023047]" />
        </a>
        <a 
        href="#" 
        className="p-3 bg-[#8ECAE6] rounded-full" 
        aria-label="Follow us on Twitter">
          <BsTwitter className="w-6 h-6 text-[#023047]" />
        </a>
        <a 
        href="#" 
        className="p-3 bg-[#8ECAE6] rounded-full" 
        aria-label="Follow us on Facebook">
          <FaFacebook className="w-6 h-6 text-[#023047]" />
        </a>
      </div>
    </div>
  )
}

export default Footer

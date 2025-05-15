import React from 'react'
import logo from "../logo.png";
import HeroBg from '../assets/images/HeroBg.png'

const Header = () => {
  return (
    <div className="relative w-full flex flex-col items-center pt-5 px-10" 
    style={{
      backgroundImage: `url(${HeroBg})`,
        backgroundPosition: "top",    }}
    >
      <div className="w-full flex justify-between items-center">
        <span className="text-[#878787] text-sm">SERVICES</span>
        <img src={logo} alt="Logo" className="h-12" />
        <button className="border-2 border-[#023047] px-5 py-2 rounded-full hover:bg-black hover:text-white transition">
          CONTACT
        </button>
      </div>
    </div>
  );
}

export default Header
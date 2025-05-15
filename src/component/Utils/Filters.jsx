import React, { useState } from "react";
import { CiCalculator1 } from "react-icons/ci";
import { CiMap } from "react-icons/ci";
import { RiMenuFill } from "react-icons/ri";
import { MdLocationOn } from 'react-icons/md';

const Filters = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  return (
    <div className="bg-[#023047] text-white rounded-3xl p-6 mt-10 shadow-lg w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center gap-3 py-1 bg-[#8ECAE6] px-2 rounded-4xl mt-4 mb-4">
        <button className="flex items-center justify-center gap-1 bg-[#023047]  text-white px-2 py-2 rounded-full w-4xl transition-all duration-300 hover:bg-[#023047] hover:text-white">
          <CiCalculator1 /> Quote
        </button>
        <button className="flex items-center justify-center gap-1 bg-[#8ECAE6] text-[#023047] px-2 py-2 rounded-full w-4xl transition-all duration-300 hover:bg-[#023047] hover:text-white">
          <CiMap /> Track
        </button>
        <button className="flex items-center justify-center gap-1 bg-[#8ECAE6] text-[#023047] px-2 py-2 rounded-full w-4xl transition-all duration-300 hover:bg-[#023047] hover:text-white">
          <RiMenuFill /> Services
        </button>
        <button className="flex items-center justify-center gap-1 bg-[#8ECAE6] text-[#023047] px-2 py-2 rounded-full w-3xl transition-all duration-300 hover:bg-[#023047] hover:text-white">
          <MdLocationOn /> Location
        </button>
      </div>


      {/* Search Bar */}
      <div className="flex justify-between items-center bg-[#8ECAE6] px-4 py-2 rounded-4xl mt-4">
        <input
          type="text"
          className="bg-transparent font-semibold text-[#023047] w-full outline-none px-2"
          placeholder="Search by tracking number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button className="bg-[#023047] px-6 py-2 rounded-full w-[100px] flex justify-center items-center hover:bg-black">
          Find
        </button>

      </div>
    </div>
  );
}

export default Filters
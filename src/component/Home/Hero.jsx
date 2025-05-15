import React, { useState } from "react";
import Filters from '../Utils/Filters';
import truckImage from '../../assets/images/truck.png';
import HeroBg from '../../assets/images/HeroBg.png'


const Hero = () => {
    return (
        <div className="w-full flex flex-col items-center px-10"
        style={{
            backgroundImage: `url(${HeroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
            <div className="flex flex-col items-center text-center pt-[60px] px-6">

                <h1 className="text-8xl md:text-6xl font-bold text-[#1E1E1E] leading-tight">
                    COMPLETE CONTROL <br /> OF YOUR{" "}
                    <span className="text-[#4BA0C8]">SHIPMENTS</span>
                </h1>

                <p className="text-gray-600 text-lg mt-4 max-w-3xl">
                    With our comprehensive solution, you can streamline your logistics
                    processes, enhance efficiency, and ensure seamless deliveries every step
                    of the way.
                </p>

                <div className="relative w-full">
                    <Filters />
                </div>


                <img 
                    src={truckImage} 
                    alt="Truck" 
                    className="w-[100%] max-w-[1300px]  h-auto -mt-28"
                />
            </div>
        </div>
    );
}

export default Hero
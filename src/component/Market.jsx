import React from 'react';
import marketbg from '../../src/assets/images/marketbg.png';
import truckmarket from '../../src/assets/images/truckmarket.png';

const Market = () => {
    return (
        <div className="relative text-white w-full flex flex-col items-center px-10 pt-[90px]"
            style={{
                backgroundImage: `url(${marketbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="inline-block px-4 py-2 mb-6 rounded-full bg-[#1B4559]">
                    <span className="text-sm font-medium">MARKET INSIGHTS</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-[80px] font-semibold">
                    A LEADER IN GARTNER'S MAGIC QUADRANT FOR 3PL
                    <span className="text-[#8ECAE6]"> LOGISTICS <br /> IN 2023</span>
                </h2>

                {/* Content Section */}
                <div className="flex flex-row items-start mt-11">
                    <div className="flex-1 pr-10">
                        <p className="text-[20px] leading-relaxed text-gray-300">
                            Yet again, we have sustained and even improved our position in <br />
                            Gartner’s Magic Quadrant for Third Party Logistics, Worldwide, <br /> 2023.
                            This year, while maintaining our previous year’s position <br /> as one of
                            the most visionary leaders, we topped the list of those <br /> with the
                            ability to execute.
                        </p>

                        <button className="mt-15 px-6 py-3 bg-[#8ECAE6] text-[#023047] rounded-full font-medium">
                            Read full story
                        </button>
                    </div>

                    {/* Truck Image */}
                    <div className="flex-1 mb-[220px]">
                        <img
                            src={truckmarket}
                            alt="Truck"
                            className="w-[663px] h-[489px] object-cover rounded-2xl relative z-10"
                        />

                        <img
                            src={truckmarket}
                            alt="Truck Back"
                            className="w-[663px] h-[489px] mb-[116px] absolute -bottom-10 -right-0 object-cover rounded-2xl z-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Market;
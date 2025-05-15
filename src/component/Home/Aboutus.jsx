import React from 'react'

const Aboutus = () => {
    return (
        <div className="relative bg-[#023047] text-white pt-[90px] p-8 md:p-12 lg:p-16 before:absolute before:top-[20px] before:left-0 before:w-full before:h-40 before:from-white before:to-[#023047] before:opacity-60 before:blur-3xl">

            <div className="max-w-7xl mx-auto">
                <div className="inline-block px-4 py-2 mb-6 rounded-full bg-[#1B4559]">
                    <span className="text-sm font-medium">ABOUT US</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                    <div>
                        <h2 className="text-[80px] font-bold leading-tight">
                            <span className="text-[#8ECAE6]">UNLEASHING</span>
                            <br />
                            <span className="text-[#8ECAE6]">THE </span>
                            <span className="text-white">POWER OF</span>
                            <br />
                            LOGISTICS
                        </h2>

                        <div className="flex flex-wrap gap-8 md:gap-12 mt-12">
                            <div className="flex-1 min-w-[120px]">
                                <p className="text-6xl md:text-4xl font-bold text-white">980
                                    <span className="text-[#8ECAE6]">+</span>

                                </p>
                                <p className="text-xs mt-2 text-[#8ECAE6]">PROJECT DONE</p>
                            </div>
                            <div className="flex-1 min-w-[120px]">
                                <p className="text-6xl md:text-4xl font-bold text-white">435
                                    <span className="text-[#8ECAE6]">+</span>

                                </p>
                                <p className="text-xs mt-2 text-[#8ECAE6]">PRODUCT CREATED</p>
                            </div>
                            <div className="flex-1 min-w-[120px]">
                                <p className="text-6xl md:text-4xl font-bold text-white">1200
                                    <span className="text-[#8ECAE6]">+</span>

                                </p>
                                <p className="text-xs mt-2 text-[#8ECAE6]">HAPPY CUSTOMERS</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-[18px] flex flex-col justify-center text-lg text-right space-y-6 ">
                        <p className="line-clamp-5 overflow-hidden">
                            Welcome to SAS Logistics, where we embark on a relentless journey to unleash the true potential of
                            logistics and revolutionize global trade. Our story is one of innovation, unwavering commitment to
                            delivering excellence in every aspect of our operations.
                        </p>

                        <p className="line-clamp-5 overflow-hidden">
                        One of the pillars that underpin our success is our team of passionate and experienced professionals.
                        <span className="text-[#8ECAE6]">They are the heart and soul of our company, working tirelessly to orchestrate intricate logistics operations with precision and care.</span>
                        </p>

                        <p className="line-clamp-5 overflow-hidden">
                        <span className="text-[#8ECAE6]">As a responsible corporate citizen, we are committed to sustainability and environmental stewardship.
                            Embracing eco-friendly practices and optimizing routes, we strive to minimize our carbon footprint and
                            contribute positively to the communities we serve.</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Aboutus
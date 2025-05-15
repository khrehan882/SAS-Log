import React from 'react';
import ServiceItems from '../component/ServiceItems'
import servicesData from '../component/Utils/ServicesData';

const OurServices = () => {


  return (
    <div className="bg-[#023047] text-white py-22 px-5 pt-[90px]">
      <div className='max-w-7xl mx-auto'>
        <div className="text-center mb-5">
          <div className="inline-block bg-white/10 px-5 py-2 rounded-full text-sm">OUR SERVICES</div>
        </div>

        {/* Main Headline */}
        <div className="text-center mx-auto mb-7">
          <h1 className="md:text-5xl font-semibold lg:text-[80px]">
            EFFICIENT LOGISTICS <br />
            SOLUTIONS FOR <span className="text-[#8ECAE6]">SEAMLESS <br /> SUPPLY</span> CHAINS
          </h1>
        </div>

        {/* Mapping Services */}
        <div className="space-y-10">
          {servicesData.map((service, index) => (
            <div key={service.id}>
              <ServiceItems
                title={service.title}
                title2={service.title2}
                description={service.description}
                image={service.image}
                btnText={service.btnText}
              />

              {index !== servicesData.length + 1 && (
                <div className="h-px bg-white/10 my-20 w-[1320px] mx-auto"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurServices;
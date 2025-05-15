import React from 'react';

const ServiceItem = ({ title, title2, description, image, btnText }) => {
  return (
    <>

      <div className="flex  justify-between items-center gap-3.5 pt-16">
        <h2 className=" flex-3/5 md:text-3xl font-semibold lg:text-6xl">
          <span className="text-start text-6xl text-[#8ECAE6]">{title}
          </span>
          <br />
          <span dangerouslySetInnerHTML={{ __html: title2 }} />
        </h2>

        {/* Image Section */}
        <div className="rounded-xl flex-1/5">
          <img src={image} alt="Service" />
        </div>

        {/* Description & Button */}
        <div className="flex-1/5 text-[20px] text-sm text-[#FFFFFF99] ">
          {description}
          <div className="mt-7">
            <button className="bg-transparent border border-[#8ECAE6] text-[#8ECAE6] px-4 py-2 rounded-full text-sm">
              {btnText}
            </button>
          </div>
        </div>



      </div>


    </>



  );
};

export default ServiceItem;

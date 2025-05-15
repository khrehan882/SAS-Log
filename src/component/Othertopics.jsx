import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react";
import othertruck1 from "../../src/assets/images/othertruck1.png";
import othertruck2 from "../../src/assets/images/othertruck2.png";

export default function LogisticsSlide() {
  const topics = [
    {
      title: "WAREHOUSING AND DISTRIBUTION SERVICES",
      description:
        "We handle your industry-specific storage and distribution needs with care and efficiency in a cost-friendly way with our Contract Logistics offering.",
      images: {
        img1: othertruck1,
        img2: othertruck2,
      },
    },
    {
      title: "EFFICIENT WAREHOUSING & DISTRIBUTION SOLUTIONS",
      description:
        "We provide tailored storage and distribution solutions, ensuring efficiency, cost-effectiveness, and seamless logistics for your business",
      images: {
        img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLNaEBq4VgkXNraw-n6_ODmyTyCNJiHSNKA&s",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6uEyJWraxthQeimrR0QQvKy4VHLlRUVFK_A&s",
      },
    },
    {
      title: "RELIABLE WAREHOUSING & DISTRIBUTION SOLUTIONS",
      description:
        "We expertly manage your storage and distribution needs with precision, efficiency, and cost-effective contract logistics solutions.",
      images: {
        img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKNBL7nm6cDgx_1Qw7s_86nVsP-r0Dj2ZFQ&s",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYYn28nmoTrxqbEq0wcfDFcT6fCFz6NoD0Q&s",
      },
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === topics.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#023047] text-white pt-[90px]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1B4559] inline-block px-4 py-2 rounded-full mb-7">
          <span className="text-sm font-medium">OTHER TOPICS</span>
        </div>

        <h1 className="lg:text-[80px] text-start md:text-5xl font-semibold">
          <span className="text-[#8ECAE6]">OTHER TOPICS </span>
          THAT MIGHT <br /> INTEREST YOU
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 pt-[84px] pb-[92px]">
          
          {/* Left Text content */}
          <div className="flex-1">
            <h2 className="lg:text-[60px] md:text-4xl font-bold leading-tight">
              {topics[currentIndex].title}
            </h2>
            <p className="lg:text-[20px] pt-[28px] md:text-lg max-w-xl">
              {topics[currentIndex].description}
            </p>

            {/* Navigation */}
            <div className="flex items-center pt-[94px]">
              <div className="text-xl font-semibold flex items-center gap-1">
                {currentIndex + 1}
                <span className="text-white/50 text-lg">/{topics.length}</span>
              </div>
              <div className="flex gap-3 ml-[344px]">
                <button
                  onClick={prevSlide}
                  className="w-16 h-12 rounded-full border border-white/30 flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-16 h-12 rounded-full border border-white/30 flex items-center justify-center cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 grid grid-cols-2 gap-[200px] items-center">
            <div className="w-[402px] h-[472] rounded-lg">
              <img
                src={topics[currentIndex].images.img1}
                alt="truck1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[352px] h-[412px] overflow-hidden rounded-lg">
              <img
                src={topics[currentIndex].images.img2}
                alt="truck2"
                className="w-full h-full object-cover pr-15"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
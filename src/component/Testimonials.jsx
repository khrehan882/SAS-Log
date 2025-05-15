import React from 'react'
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Vector from '../../src/assets/images/Vector.png'


const testimonials = [
    {
        id: 1,
        name: "Mark Zubreng",
        role: "Founder",
        company: "Futuristik",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote:
            "Working with this logistics provider was a game-changer for our business! Their exceptional services ensured our products reached customers faster than ever before. Highly recommended!",
    },
    {
        id: 2,
        name: "Darsono Mulyo",
        role: "Founder",
        company: "Catalist",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        quote:
            "Impressed by the professionalism of this logistics team. They handled our cargo with utmost care and everything arrived on time with no issues. Excellent experience!",
    },
    {
        id: 3,
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechVision",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        quote:
            "The level of service we received was outstanding. Their team went above and beyond to ensure our shipments were delivered on schedule, even during peak seasons.",
    },
    {
        id: 4,
        name: "James Wilson",
        role: "Operations Director",
        company: "Global Traders",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        quote:
            "After switching to this logistics provider, our delivery complaints dropped by 75%. Their tracking system and communication are simply unmatched in the industry.",
    },
    {
        id: 5,
        name: "Elena Rodriguez",
        role: "Supply Chain Manager",
        company: "Innovate Inc",
        image: "https://randomuser.me/api/portraits/women/63.jpg",
        quote:
            "We've worked with many logistics companies over the years, but none have provided the consistency and reliability we've experienced with this team. Truly exceptional service.",
    },
]






export default function TestimonialsSlider() {
    const [currentIndex, setCurrentIndex] = useState(null)
    const [visibleTestimonials, setVisibleTestimonials] = useState([])
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768)
        }

        // Set initial value
        handleResize()

        // Add event listener
        window.addEventListener("resize", handleResize)

        // Clean up
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    
    // Update visible testimonials when currentIndex or screen size changes
    useEffect(() => {
        const itemsToShow = isSmallScreen ? 1 : 2
        const visibleItems = []

        for (let i = 0; i < itemsToShow; i++) {
            const index = (currentIndex + i) % testimonials.length
            visibleItems.push(testimonials[index])
        }

        setVisibleTestimonials(visibleItems)
    }, [currentIndex, isSmallScreen])

    // Navigation functions
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    return (
        <div className="bg-[#023047] text-white pt-[90px]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-row justify-between items-start">
                    <div className="space-y-6">
                        <div className="bg-[#1B4559] inline-block px-4 py-2 rounded-full mb-7">
                            <span className="text-sm font-medium">TESTIMONIALS</span>
                        </div>
                        <h1 className="lg:text-[80px] text-start md:text-5xl font-semibold">
                            <span className="text-[#8ECAE6]">HEAR THEIR</span> SUCCESS
                            <br />
                            STORIES
                        </h1>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex space-x-4 pt-44">
                        <button
                            onClick={goToPrevious}
                            className="w-16 h-12 rounded-full border border-white/30 flex items-center justify-center cursor-pointer"

                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="w-16 h-12 rounded-full border border-white/30 flex items-center justify-center cursor-pointer"

                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Testimonials Container */}
                <div className="relative overflow-hidden w-full pt-[80px] pb-[90px]">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 50}%)`,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="min-w-[50%] flex space-x-[40px] p-4">
                                <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="mb-3">
                                        <img src={Vector} alt="Quote Icon" className="w-[48px] h-[35px]" />
                                    </div>
                                    <p className="text-lg md:text-xl mb-7 italic">{testimonial.quote}</p>
                                    <div>
                                        <h4 className="text-xl font-bold">{testimonial.name}</h4>
                                        <p className="text-[#8ECAE6]">
                                            {testimonial.role} {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
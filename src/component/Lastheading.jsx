import { ArrowUpRight } from "lucide-react"
import headingimg from '../../src/assets/images/headingimg.png'

const Lastheading = () => {
    return (
        <div
            className="text-white w-full h-screen flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url(${headingimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Content */}
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-[100px] font-bold mb-4">
                    <span className="text-[#023047]">SEND YOUR <br /> LOGISTICS</span>
                    <span className="text-[#8ECAE6]"> EASILY <br /> FROM NOW ON</span>
                </h1>

                {/* Arrow Button */}
                <div className="flex justify-center -mt-18">
                    <button
                        className="bg-[#8ECAE6] w-[150px] h-[150px] rounded-full flex items-center justify-center"
                    >
                        <ArrowUpRight className="w-[80px] h-[80px] text-[#023047]" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Lastheading
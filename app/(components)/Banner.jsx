import Image from "next/image";
import BannerImg from "../../public/image/banner.png";

const Banner = () => {
    return (
        <div className="md:max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-5">
            {/* Text Content */}
            <div className="md:w-[50%] md:mt-[180px]">
                <h1 className="text-4xl md:text-[70px] font-bold text-[#07222C] leading-tight">
                    Getting Quality Education is Now Easier
                </h1>
                <p className="text-lg md:text-[22px] font-medium py-5 text-gray-600">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout.
                </p>
                <div className="space-x-5">
                    <button className="w-[154px] h-[52px] border hover:bg-[#F5C362] text-[#190D30] font-bold rounded-xl">
                        Get Started
                    </button>
                    <button className="w-[154px] h-[52px] border hover:bg-[#F5C362] text-[#190D30] font-bold rounded-xl">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="md:w-[50%] md:mt-[97px]">
                <Image
                    src={BannerImg}
                    alt="A banner promoting quality education"
                    className="w-full mx-auto"
                    priority
                />
            </div>
        </div>
    );
};

export default Banner;

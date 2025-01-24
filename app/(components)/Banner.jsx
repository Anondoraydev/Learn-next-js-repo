import Image from "next/image";
import BannerImg from '../../public/image/banner.png'
const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <div className="flex gap-20">
                <div className="w-[50%] mt-[180px] px-5 ">
                    <h1 className="text-[70px] font-bold text-[#07222C]">Getting Quality Education is now more Easy </h1>
                    <p className="text-[22px] font-medium py-5 ">t is a long established fact that a reader will be distracted by the readable content of a
                        page when looking  </p>
                    <div className="space-x-5">
                        <button className="w-[154px] h-[52px] border hover:bg-[#F5C362] text-[#190D30] font-bold rounded-xl">
                            Get Started
                        </button>
                        <button className="w-[154px] h-[52px] border hover:bg-[#F5C362] text-[#190D30] font-bold rounded-xl">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="w-[50%] mt-[97px] ">
                    <Image src={BannerImg} alt='Banner'/>
                </div>
            </div>
        </div>
    );
};

export default Banner;
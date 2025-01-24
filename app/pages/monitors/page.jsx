import React from 'react';
import Image from 'next/image';
import Education1 from '../../../public/image/education1.png'
import Education2 from '../../../public/image/education2.png'
import Education3 from '../../../public/image/education3.png'
import Education4 from '../../../public/image/education4.png'
const page = () => {
    return (
        <div className='max-w-7xl mx-auto mt-16'>
            <div className='text-center'>
                <h2 className='text-[50px] text-[#07222C] font-bold mt-8 '>Benefits of online Education  </h2>
                <p className='px-[303px] text-[#565A5B] text-[22px]  '>It is a long established fact that a reader will be distracted by
                    the readable content of a page when looking  </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 '>
                <div className="max-w-26 rounded-lg overflow-hidden shadow-lg bg-white">
                    <Image src={Education1} alt="education1" />
                    <div class="p-6">
                        <h4 className="text-[#07222C] font-bold text-xl">One-on-One Monitoring</h4>
                        <p className="text-[#565A5B] text-xl mt-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
                <div className="max-w-26 rounded-lg overflow-hidden shadow-lg bg-white">
                    <Image src={Education2} alt="education1" />
                    <div class="p-6">
                        <h4 className="text-[#07222C] font-bold text-xl">24/7 Mentor </h4>
                        <p className="text-[#565A5B] text-xl mt-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
                <div className="max-w-26 rounded-lg overflow-hidden shadow-lg bg-white">
                    <Image src={Education3} alt="education1" />
                    <div class="p-6">
                        <h4 className="text-[#07222C] font-bold text-xl"> Whiteboard</h4>
                        <p className="text-[#565A5B] text-xl mt-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>
                <div className="max-w-26 rounded-lg overflow-hidden shadow-lg bg-white">
                    <Image src={Education4} alt="education4" />
                    <div class="p-6">
                        <h4 className="text-[#07222C] font-bold text-xl">Affordable Price</h4>
                        <p className="text-[#565A5B] text-xl mt-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default page;
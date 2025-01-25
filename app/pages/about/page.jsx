import React from 'react';
import Image from 'next/image';
import { RiSingleQuotesL } from "react-icons/ri";
import Icone1 from '../../../public/image/icone.png';
import Icone2 from '../../../public/image/icone3.png';
import Icone3 from '../../../public/image/icone2.png';

const page = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center'>
                <h2 className='text-[50px] text-[#07222C] font-bold mt-8'>What our Students say</h2>
                <p className='text-[#565A5B] text-[18px]'>There are many variations of passages of Lorem Ipsum available,</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mt-20'>
                    <div className="card w-full sm:w-96 shadow-xl p-8">
                        <div className="">
                            <h2 className="card-title">Great Platform</h2>
                            <RiSingleQuotesL className='text-4xl text-start' />
                            <p className='text-start pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
                        </div>
                        <hr />
                        <div className={'flex gap-5 mt-5'}>
                            <Image src={Icone1} alt={'icone'} width={40} height={40} />
                            <div className='text-start items-center'>
                                <p className='text-[#534D5E]'>Beth Luna</p>
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" />
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" defaultChecked />
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" />
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" />
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full sm:w-96 shadow-xl p-8">
                        <div className="">
                            <h2 className="card-title">Great Platform</h2>
                            <RiSingleQuotesL className='text-4xl text-start' />
                            <p className='text-start pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
                        </div>
                        <hr />
                        <div className={'flex gap-5 mt-5'}>
                            <Image src={Icone2} alt={'icone'} width={40} height={40} />
                            <div className='text-start items-center'>
                                <p className='text-[#534D5E]'>Beth Luna</p>
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" />
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" defaultChecked />
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" />
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" />
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full sm:w-96 shadow-xl p-8">
                        <div className="">
                            <h2 className="card-title">Great Platform</h2>
                            <RiSingleQuotesL className='text-4xl text-start' />
                            <p className='text-start pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </p>
                        </div>
                        <hr />
                        <div className={'flex gap-5 mt-5'}>
                            <Image src={Icone3} alt={'icone'} width={40} height={40} />
                            <div className='text-start items-center'>
                                <p className='text-[#534D5E]'>Beth Luna</p>
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" />
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" defaultChecked />
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" />
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" />
                                    <input type="radio" name="rating-1" className="mask mask-star w-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;

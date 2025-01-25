import React from 'react';
import Image from 'next/image';
import Image1 from '../../../public/image/image1.png'
import Image2 from '../../../public/image/image2.png'
import Image3 from '../../../public/image/image3.png'
import Image4 from '../../../public/image/image4.png'
import Image5 from '../../../public/image/image5.png'
import Image6 from '../../../public/image/image6.png'

const page = () => {
    return (
        <div className='max-w-7xl mx-auto pb-14 px-4'>
            <div className='text-center'>
                <h2 className='text-[50px] text-[#07222C] font-bold mt-8'>Our Popular Course</h2>
                <p className='mx-auto text-[#565A5B] text-[22px] sm:px-10'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th
                </p>
                <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7'>
                    {/* Card 1 */}
                    <div className="card card-compact bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
                        <figure>
                            <Image src={Image1} alt='image' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Web Design Basic to Advance</h2>
                            <div className="rating space-x-1 py-5">
                                {[...Array(5)].map((_, i) => (
                                    <input key={i} type="radio" name="rating-1" className="mask mask-star-2 bg-[#F1C40F] w-5 h-5" />
                                ))}
                                <p>5.0 (2 rating)</p>
                            </div>
                            <div className="card-actions">
                                <button className="btn hover:btn-primary border border-solid-2 border-[#309DC1] w-full rounded-l-xl rounded-tr-none">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card card-compact bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
                        <figure>
                            <Image src={Image2} alt='image' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Web Development Basic to Advance</h2>
                            <div className="rating space-x-1 py-5">
                                {[...Array(5)].map((_, i) => (
                                    <input key={i} type="radio" name="rating-2" className="mask mask-star-2 bg-[#F1C40F] w-5 h-5" />
                                ))}
                                <p>5.0 (2 rating)</p>
                            </div>
                            <div className="card-actions">
                                <button className="btn hover:btn-primary border border-solid-2 border-[#309DC1] w-full rounded-l-xl rounded-tr-none">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card card-compact bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
                        <figure>
                            <Image src={Image3} alt='image' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Digital Marketing Basic to Advance</h2>
                            <div className="rating space-x-1 py-5">
                                {[...Array(5)].map((_, i) => (
                                    <input key={i} type="radio" name="rating-3" className="mask mask-star-2 bg-[#F1C40F] w-5 h-5" />
                                ))}
                                <p>5.0 (2 rating)</p>
                            </div>
                            <div className="card-actions">
                                <button className="btn hover:btn-primary border border-solid-2 border-[#309DC1] w-full rounded-l-xl rounded-tr-none">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="card card-compact bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
                        <figure>
                            <Image src={Image4} alt='image' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">App Design Basic to Advance</h2>
                            <div className="rating space-x-1 py-5">
                                {[...Array(5)].map((_, i) => (
                                    <input key={i} type="radio" name="rating-4" className="mask mask-star-2 bg-[#F1C40F] w-5 h-5" />
                                ))}
                                <p>5.0 (2 rating)</p>
                            </div>
                            <div className="card-actions">
                                <button className="btn hover:btn-primary border border-solid-2 border-[#309DC1] w-full rounded-l-xl rounded-tr-none">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="card card-compact bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
                        <figure>
                            <Image src={Image5} alt='image' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Mobile Design Basic to Advance</h2>
                            <div className="rating space-x-1 py-5">
                                {[...Array(5)].map((_, i) => (
                                    <input key={i} type="radio" name="rating-5" className="mask mask-star-2 bg-[#F1C40F] w-5 h-5" />
                                ))}
                                <p>5.0 (2 rating)</p>
                            </div>
                            <div className="card-actions">
                                <button className="btn hover:btn-primary border border-solid-2 border-[#309DC1] w-full rounded-l-xl rounded-tr-none">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="card card-compact bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
                        <figure>
                            <Image src={Image6} alt='image' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Graphics Design Basic to Advance</h2>
                            <div className="rating space-x-1 py-5">
                                {[...Array(5)].map((_, i) => (
                                    <input key={i} type="radio" name="rating-6" className="mask mask-star-2 bg-[#F1C40F] w-5 h-5" />
                                ))}
                                <p>5.0 (2 rating)</p>
                            </div>
                            <div className="card-actions">
                                <button className="btn hover:btn-primary border border-solid-2 border-[#309DC1] w-full rounded-l-xl rounded-tr-none">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;

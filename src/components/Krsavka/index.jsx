import { FaQuoteLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import React from 'react'

import KRR from "../../images/single-product-01.jpg"
import KRR2 from "../../images/single-product-02.jpg"
import Counter from "../Count";


function Krsavka() {
    return (
        <div className="xl:mx-[200px]">
            {/* <iframe className='w-[90%] md:h-[600px] h-[200px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6351.968189470963!2d-80.12286257675737!3d25.93050139017239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2z0J_QsNGA0Log0J_QuNGA!5e1!3m2!1sru!2s!4v1704780245485!5m2!1sru!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}


            <div className='xl:flex lg:flex lg:px-[50px] md:px-[40px] px-3'>
                <div className="xl:w-[70%] lg:w-full ">
                    <div className="w-full">
                        <img src={KRR} alt="" />
                    </div>
                    <div className='xl:mt-[30px] lg:mt-[30px] w-full md:mt-[30px] mt-[20px]'>
                        <img src={KRR2} alt="" />
                    </div>
                </div>
                <div className="lg:ml-[30px] xl:w-[40%] mt-[20px]  w-full">
                    <div class="down-content">
                        <div>
                            <div class="xl:flex xl:items-center lg:flex lg:items-center md:flex md:items-center md:justify-between flex items-center justify-between xl:justify-between">
                                <div>
                                    <h4>New Green Jacket</h4><br />

                                </div>

                                <div className="xl:flex xl:ml-[70px] xl:mt-[-10px] lg:flex lg:ml-[55px] lg:mt-[-10px] mt-[-10px]  md:flex md:mt-[-10px] flex">
                                    <p><AiFillStar /></p>
                                    <p><AiFillStar /></p>
                                    <p><AiFillStar /></p>
                                    <p><AiFillStar /></p>
                                    <p><AiFillStar /></p>

                                </div>
                            </div>

                        </div>
                        <div className='mt-[-20px]'>
                            <span>$120.00</span>

                        </div>

                    </div>
                    <hr />
                    <div>
                        <p className="text-[16px] text-gray-500 font-sans">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod kon tempor <br /> incididunt ut labore.</p>
                    </div>
                    <div className="flex items-center gap-6 mt-3">
                        <div>
                            <FaQuoteLeft size={'28px'} />
                        </div>
                        <div>
                            <i className="font-bold">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiuski smod.</i>
                        </div>
                    </div>

                    <hr className="mt-6" />
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-[25px] font-extrabold text-[#A9A9A9]" >No. of Orders</p>

                        </div>
                        <div>
                            <Counter />
                        </div>
                    </div>
                    <hr className="mt-6" />
                    <div className="flex justify-between items-center mt-5">
                        <div>
                            <p className="text-[25px] font-extrabold text-[#A9A9A9]" >Total: $210.00
</p>

                        </div>
                        <div>
                            <button className="p-2 px-4 border-[2px] border-black font-semibold">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Krsavka
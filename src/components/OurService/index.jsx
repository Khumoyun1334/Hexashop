import React from 'react'

import AB from "../../images/about-left-image.jpg"

function OurService() {
    return (
        <div>
            <div class="section-heading text-center py-24">
                <h2 className='text-center'>Our Services</h2>
                <span className='text-center'>Details to details is what makes Hexashop different from the other themes.</span>
            </div>
            <div className='grid grid-cols-3 px-[200px] gap-[30px]'>
                <div className='vvv py-[30px] px-[30px] '>
                    <div className=''>
                        <p className='text-[30px] font-bold text-center'>Synther Vaporware</p>
                        <p className='text-[16px] text-center pt-2'>Lorem ipsum dolor sit amet, <br /> consecteturti adipiscing elit, sed do <br /> eiusmod temp incididunt ut labore, et <br /> dolore quis ipsum suspend.</p>
                    </div>
                    <div className='mt-4'>
                        <img src={AB} alt="" />
                    </div>
                </div>
                <div className='vvv py-[30px] px-[30px] '>
                    <div className=''>
                        <p className='text-[30px] font-bold text-center'>Synther Vaporware</p>
                        <p className='text-[16px] text-center pt-2'>Lorem ipsum dolor sit amet, <br /> consecteturti adipiscing elit, sed do <br /> eiusmod temp incididunt ut labore, et <br /> dolore quis ipsum suspend.</p>
                    </div>
                    <div className='mt-4'>
                        <img src={AB} alt="" />
                    </div>
                </div>
                <div className='vvv py-[30px] px-[30px] '>
                    <div className=''>
                        <p className='text-[30px] font-bold text-center'>Synther Vaporware</p>
                        <p className='text-[16px] text-center pt-2'>Lorem ipsum dolor sit amet, <br /> consecteturti adipiscing elit, sed do <br /> eiusmod temp incididunt ut labore, et <br /> dolore quis ipsum suspend.</p>
                    </div>
                    <div className='mt-4'>
                        <img src={AB} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurService
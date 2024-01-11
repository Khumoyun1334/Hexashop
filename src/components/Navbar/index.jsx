import { BiChevronDown } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import React, { useState } from 'react'
import "../../App.css"
import Logo from "../../images/logo.png"
import { FaTimes } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Navbar() {

    const [open, setOpen] = useState(false)
    const [menu, setMenu] = useState(false)

    const navigate = useNavigate(false)

    const handleNext = () => {
        navigate('/about')
    }

    const handleNext2 = () => {
        navigate('/products')
    }


    const handleNext3 = () => {
        navigate('/singleproducts')
    }

    const handleNext4 = () => {
        navigate('/contactus')
    }

    return (
        <div className=" ">
            <div className= ' z-50 w-full fixed flex justify-between lg:px-[100px]  md:py-5 xl:px-[200px] xl:bg-white lg:bg-white md:bg-white  items-center bg-[#F7F7F7]'>
                <div>
                    <img className="ml-4 xl:ml-0 lg:ml-0 md:ml-0ч   " src={Logo} alt="" />
                </div>
                <div className='md:flex hidden  gap-[10px] xl:gap-[40px] lg:gap-[30px] md:gap-6 items-center' >
                    <Link to={'/'} className='text-[20px ] text-black mt-[-18px] font-bold font-sans' >Home</Link>
                    <p className='text-[20px ] font-bold font-sans' >Men's</p>
                    <p className='text-[20px ] font-bold font-sans' >Women's</p>
                    <p className='text-[20px ] font-bold font-sans' >Kid's</p>
                    <div className="flex items-center gap-1">
                        <div class="dropdown mt-[-16px]">
                            <button class="dropbtn font-bold">Page's</button>
                            <div class="dropdown-content">
                                <a onClick={() => handleNext()} href="#">About Us</a>
                                <a onClick={() => handleNext2()} href="#">Products</a>
                                <a onClick={() => handleNext3()} href="#">Single Products</a>
                                <a onClick={() => handleNext4()} href="#">Contact Us</a>

                            </div>

                        </div>

                        <p><BiChevronDown /></p>

                    </div>
                    <p className='text-[20px ] font-bold font-sans md:mr-6 mt-0 xl:mt-0 lg:mt-0' >Explore</p>

                </div>
                <div className='md:hidden flex '>
                    <div className="p-5" onClick={() => {
                        setOpen(!open)
                        setMenu(!menu)
                    }}>{menu ? <button><FaTimes color="black" fontSize={'30px'} /> </button> : <button onClick={() => { setMenu(false) }}><AiOutlineMenu color="black" fontSize={'30px'} /></button>}</div>
                </div>
                <div className={`w-full ${open ? 'h-[200px]' : "h-0"} overflow-hidden mt-[330px]  bg-[#F7F7F7] absolute duration-300 transition-all flex flex-col items-center gap-5 `}>
                <Link to={'/'} className='text-[20px ] text-black  font-bold font-sans' >Home</Link>
                    <p className='text-[20px ] font-bold font-sans' >Men's</p>
                    <p className='text-[20px ] font-bold font-sans' >Women's</p>
                    <p className='text-[20px ] font-bold font-sans' >Kid's</p>
                    <p className='text-[20px ] font-bold font-sans' >Explore</p>
                </div>
            </div>
            <div className='bbgbf w-full h-0'>

            </div>
        </div>
    )
}

export default Navbar
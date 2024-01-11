import { AiOutlineBehance } from "react-icons/ai"; 
import { FaLinkedinIn } from "react-icons/fa"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { CgFacebook } from "react-icons/cg"; 
import React from 'react'

import AB from "../../images/about-left-image.jpg"

function BGC() {
    return (
        <div>
            <div class="about-us">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-image">
                                <img src={AB} alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <h4>About Us &amp; Our Skills</h4>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
                                <div class="quote">
                                    <i class="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod kon tempor incididunt ut labore.</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                <ul>
                                    <li><a className="pt-[13px] pl-[15px]" href="#"><CgFacebook /></a></li>
                                    <li><a className="pt-[13px] pl-[15px]" href="#"><AiOutlineTwitter /></a></li>
                                    <li><a className="pt-[13px] pl-[15px]" href="#"><FaLinkedinIn /></a></li>
                                    <li><a className="pt-[13px] pl-[15px]" href="#"><AiOutlineBehance /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BGC
import React from 'react'

import RRR from "../../images/team-member-01.jpg"
import RRR2 from "../../images/team-member-02.jpg"
import RRR3 from "../../images/team-member-03.jpg"

import { AiOutlineBehance } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";



function Amazing() {
    return (
        <div>
            <section class="our-team">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading">
                                <h2>Our Amazing Team</h2>
                                <span>Details to details is what makes Hexashop different from the other themes.</span>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-item">
                                <div class="thumb">
                                    <div class="hover-effect">
                                        <div class="inner-content">
                                            <ul>
                                                <li><a className="pt-[13px] pl-[15px]" href="#"><CgFacebook /></a></li>
                                                <li><a className="pt-[13px] pl-[15px]" href="#"><AiOutlineTwitter /></a></li>
                                                <li><a className="pt-[13px] pl-[15px]" href="#"><FaLinkedinIn /></a></li>
                                                <li><a className="pt-[13px] pl-[15px]" href="#"><AiOutlineBehance /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <img src={RRR} alt="" />
                                </div>
                                <div class="down-content">
                                    <h4>Ragnar Lodbrok</h4>
                                    <span>Product Caretaker</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-item">
                                <div class="thumb">
                                    <div class="hover-effect">
                                        <div class="inner-content">
                                            <ul>
                                                <li><a className="pt-[13px] pl-[15px]" href="#"><CgFacebook /></a></li>
                                                <li><a className="pt-[13px] pl-[15px]" href="#"><AiOutlineTwitter /></a></li>
                                                <li><a className="pt-[13px] pl-[15px]" href="#"><FaLinkedinIn /></a></li>
                                                <li><a className="pt-[13px] pl-[15px]" href="#"><AiOutlineBehance /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <img src={RRR2} alt="" />

                                </div>
                                <div class="down-content">
                                    <h4>Ragnar Lodbrok</h4>
                                    <span>Product Caretaker</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-item">
                                <div class="thumb">
                                    <div class="hover-effect">
                                        <div class="inner-content">
                                            <ul>
                                                <li><a className="pt-[13px] pl-[15px]" href="#"><CgFacebook /></a></li>
                                                <li><a className="pt-[13px] pl-[15px]" href="#"><AiOutlineTwitter /></a></li>
                                                <li><a className="pt-[13px] pl-[15px]" href="#"><FaLinkedinIn /></a></li>
                                                <li><a className="pt-[13px] pl-[15px]" href="#"><AiOutlineBehance /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <img src={RRR3} alt="" />

                                </div>
                                <div class="down-content">
                                    <h4>Ragnar Lodbrok</h4>
                                    <span>Product Caretaker</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Amazing
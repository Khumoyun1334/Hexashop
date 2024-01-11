import { AiOutlineInstagram } from "react-icons/ai";
import React from "react";

import Imge from "../../images/instagram-01.jpg";
import Imge2 from "../../images/instagram-02.jpg";
import Imge3 from "../../images/instagram-03.jpg";
import Imge4 from "../../images/instagram-04.jpg";
import Imge5 from "../../images/instagram-05.jpg";
import Imge6 from "../../images/instagram-06.jpg";

function SocialMedia() {
  return (
    <div>
      <section className="section" id="social">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Social Media</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row images">
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Fashion</h6>
                    <p className="mt-[160px] ml-3">
                      <AiOutlineInstagram color="white" size={"20px"} />
                    </p>
                  </a>
                </div>
                <img src={Imge} alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>New</h6>
                    <p className="mt-[160px] ml-3">
                      <AiOutlineInstagram color="white" size={"20px"} />
                    </p>
                  </a>
                </div>
                <img src={Imge2} alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Brand</h6>
                    <p className="mt-[160px] ml-3">
                      <AiOutlineInstagram color="white" size={"20px"} />
                    </p>
                  </a>
                </div>
                <img src={Imge3} alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Makeup</h6>
                    <p className="mt-[160px] ml-3">
                      <AiOutlineInstagram color="white" size={"20px"} />
                    </p>
                  </a>
                </div>
                <img src={Imge4} alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Leather</h6>
                    <p className="mt-[160px] ml-3">
                      <AiOutlineInstagram color="white" size={"20px"} />
                    </p>
                  </a>
                </div>
                <img src={Imge5} alt="" />
              </div>
            </div>
            <div className="col-2">
              <div className="thumb">
                <div className="icon">
                  <a href="http://instagram.com">
                    <h6>Bag</h6>
                    <p className="mt-[160px] ml-3">
                      <AiOutlineInstagram color="white" size={"20px"} />
                    </p>
                  </a>
                </div>
                <img src={Imge6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SocialMedia;

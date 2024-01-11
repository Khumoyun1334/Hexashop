import React from "react";
import Ass from "../../images/men-01.jpg";

function Suv() {
  return (
    <div className="mx-10 ">
      <div style={{ width: "100%" }}>
        <div>
          <section class="section mx-" id="products">
            <div class="" style={{ width: "" }}>
              <div class="">
                <div class="">
                  <div class="item">
                    <div class="thumb">
                      <div class="hover-content">
                        <ul>
                          <li>
                            <a href="/singleproducts">
                              <i class="fa fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/singleproducts">
                              <i class="fa fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/singleproducts">
                              <i class="fa fa-shopping-cart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <img src={Ass} alt="" />
                    </div>
                    <div class="down-content">
                      <h4>Classic Spring</h4>
                      <span>$120.00</span>
                      <ul class="stars">
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Suv;

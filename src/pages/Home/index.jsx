import React from "react";
import Navbar from "../../components/Navbar";
import Cart from "../../components/Cart";
import Carusel from "../../components/Carusel";
import Exployer from "../../components/Exployer";
import SocialMedia from "../../components/SocialMediya";
import Buy from "../../components/Buy";

function Home() {
  return (
    <div>
      <Cart />
      <div className="px-[]">
        <div class="py-16 xl:px-[175px] md:px-0 sm:px-0 lg:px-0 md:ml-[60px]">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2>Our Latest Products</h2>
                <span>Check out all of our products.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <Carusel />
        </div>
        <div class="py-16 xl:px-[175px] md:px-0 sm:px-0 lg:px-0 md:ml-[60px]">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2>Our Latest Products</h2>
                <span>Check out all of our products.</span>
              </div>
            </div>
          </div>
        </div>
        <Carusel />
        <div class="py-16 xl:px-[175px] md:px-0 sm:px-0 lg:px-0 md:ml-[60px]">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2>Our Latest Products</h2>
                <span>Check out all of our products.</span>
              </div>
            </div>
          </div>
        </div>
        <Carusel />
      </div>

      <Exployer />

      <SocialMedia />
      <Buy />
    </div>
  );
}

export default Home;

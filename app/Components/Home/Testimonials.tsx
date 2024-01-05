"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Navigation } from "swiper/modules";

function Testimonials() {
  return (
    <div className="mx-auto w-full px-4 md:px-6 lg:px-6 xl:px-12">
      <div className="bg-light_blue px-4 py-10 md:py-12 md:px-12">
        <div className="border-y-2 border-dark_blue">
          <div className="mt-4 mb-2">
            <h3 className="font-semibold capitalize text-2xl italic leading-tight">
              Happy Homeowners
            </h3>
          </div>
          <div className="relative mb-4 lg:mb-0 w-full flex flex-col md:flex-row md:py-9 lg:py-6">
            <div className="relative items-center justify-center content-center md:w-auto md:mx-auto">
              <BiSolidQuoteAltLeft className="text-7xl text-dark_dark_blue text-center" />
            </div>
            <div className="md:mx-auto md:max-w-[90%]">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <blockquote>
                    <p className="italic font-light text-lg line-clamp-7 text-black">
                      At Chatfield Farms, an exclusive, 55+ community in New
                      Haven County, CT, “lifestyle” means so much more than a
                      daily routine. It means being surrounded by everything you
                      love when you open your front door — from our
                      10,000-square-foot clubhouse, The Fieldstone Club, to
                      scenic, winding nature trails
                    </p>
                    <div className="text-lg pt-4 font-bold text-dark_dark_blue capitalize">
                      <span>Jack & Jill Doe</span>
                    </div>
                  </blockquote>
                </SwiperSlide>

                <SwiperSlide>
                  <blockquote>
                    <p>
                      At Chatfield Farms, an exclusive, 55+ community in New
                      Haven County, CT, “lifestyle” means so much more than a
                      daily routine. It means being surrounded by everything you
                      love when you open your front door — from our
                      10,000-square-foot clubhouse, The Fieldstone Club, to
                      scenic, winding nature trails
                    </p>
                    <div className="text-lg pt-4 font-bold text-dark_dark_blue capitalize">
                      <span>Jack & Jill Doe</span>
                    </div>
                  </blockquote>
                </SwiperSlide>

                <SwiperSlide>
                  <blockquote>
                    <p>
                      At Chatfield Farms, an exclusive, 55+ community in New
                      Haven County, CT, “lifestyle” means so much more than a
                      daily routine. It means being surrounded by everything you
                      love when you open your front door — from our
                      10,000-square-foot clubhouse, The Fieldstone Club, to
                      scenic, winding nature trails
                    </p>
                    <div className="text-lg pt-4 font-bold text-dark_dark_blue capitalize">
                      <span>Jack & Jill Doe</span>
                    </div>
                  </blockquote>
                </SwiperSlide>

                <SwiperSlide>
                  <blockquote>
                    <p>
                      At Chatfield Farms, an exclusive, 55+ community in New
                      Haven County, CT, “lifestyle” means so much more than a
                      daily routine. It means being surrounded by everything you
                      love when you open your front door — from our
                      10,000-square-foot clubhouse, The Fieldstone Club, to
                      scenic, winding nature trails
                    </p>
                    <div className="text-lg pt-4 font-bold text-dark_dark_blue capitalize">
                      <span>Jack & Jill Doe</span>
                    </div>
                  </blockquote>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

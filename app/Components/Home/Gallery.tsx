"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import BgImage from "../../../public/bg-hero.jpg";
import Image from "next/image";
import Link from "next/link";

function Gallery() {
  return (
    <div className="w-full py-10 mt-5 pl-4 lg:pl-6 xl:pl-12">
      <div className="mb-4">
        <div className="">
          <span className="uppercase text-dark_dark_blue font-semibold text-sm inline-block">
            Get Inspired
          </span>
          <h3 className="text-dark_dark_blue font-bold capitalize text-3xl font-merriweather tracking-tighter">
            Explore The Gallery
          </h3>
        </div>
      </div>
      <div className="ml-20">
        {" "}
        <Swiper
          // slidesPerView={3}
          // spaceBetween={4}
          pagination={false}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          modules={[Pagination]}
          className="homeGallery"
        >
          <SwiperSlide>
            <Image src={BgImage} width={450} height={445000} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={BgImage} width={450} height={450} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={BgImage} width={450} height={450} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={BgImage} width={450} height={44500} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={BgImage} width={450} height={450} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={BgImage} width={450} height={450} alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mt-5 md:mt-10 ml-20">
        <div className="flex flex-row w-full justify-between items-center">
          <hr className="bg-dark_dark_blue border-2 border-dark_blue w-[50%] md:w-[75%] xl:w-[75%]" />

          <div className=" mr-2 md:mr-32 xl:mr-24">
            <Link
              href="/"
              className="bg-dark_blue px-8 py-3 text-white font-semibold uppercase leading-tight hover:bg-light_blue transition block"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

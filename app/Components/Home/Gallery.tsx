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

function Gallery() {
  return (
    <div className="w-full py-10 pl-4 lg:pl-6 xl:pl-12">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={BgImage} width={400} height={400} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={BgImage} width={400} height={400} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={BgImage} width={400} height={400} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={BgImage} width={400} height={400} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={BgImage} width={400} height={400} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={BgImage} width={400} height={400} alt="img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Gallery;

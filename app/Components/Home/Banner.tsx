import React, { Suspense } from "react";
import BgImage from "../../../public/bg-hero.jpg";
import Logo from "../../../public/logo.svg";

import Image from "next/image";
import Link from "next/link";

interface BannerProp {
  bgImage: string;
  bannerTitle: string;
  bannerLink: {
    target?: string;
    title: string;
    url: string;
  };
}

function Banner({ bgImage, bannerTitle, bannerLink }: BannerProp) {
  return (
    <div
      className="relative isolate mt-14 xl:mt-20 bg-cover bg-center object-cover w-full py-40 md:py-48 lg:py-56 xl:py-72 bg-no-repeat transform-gpu items-center justify-center bg-blend-multiply"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute top-0 w-full h-full right-0 bottom-00 left-0 bg-black content-[''] opacity-40"></div>
      <div className="relative text-center text-white mx-auto max-w-2xl z-1">
        <div>
          <h2 className="font-merriweather capitalize text-4xl italic mb-7 md:text-5xl lg:text-6xl xl:text-7xl md:mb-8 lg:mb-12 xl:mb-14">
            {bannerTitle}
          </h2>
          <Link
            href={bannerLink.url}
            className="bg-dark_blue px-4 py-3 text-white font-semibold uppercase leading-tight hover:bg-light_blue transition"
          >
            {bannerLink.title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;

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
    <Suspense
      fallback={
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
        >
          <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      }
    >
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
    </Suspense>
  );
}

export default Banner;

import Link from "next/link";
import React from "react";

function VipList() {
  return (
    <div className="py-10 px-4 md:px-6 lg:px-6 xl:px-12 lg:py-8">
      <div className="flex flex-col justify-center w-full items-center border-b-2 border-b-white/50 pb-5 lg:flex-row lg:justify-between">
        <div className="text-center items-center lg:flex lg:flex-row lg:w-[70%] lg:justify-start lg:m-0 lg:text-left lg:items-start">
          <div className="grow">
            <span className="inline-block leading-10 font-semibold text-2xl">
              Join the VIP List
            </span>
          </div>
          <div className="mt-3 lg:mt-0 lg:w-[70%]">
            <p>
              Be among the first to know when new homes are available and keep
              up with new opportunities. Join our VIP List to ensure you get the
              latest updates.
            </p>
          </div>
        </div>
        <div>
          <Link
            href="/"
            className="inline-block mt-4 bg-light_blue px-10 py-2 text-dark_dark_blue font-semibold"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VipList;

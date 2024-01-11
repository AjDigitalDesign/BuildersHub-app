import React from "react";
import CtaImage from "../../../public/bg-cta.svg";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BiComment } from "react-icons/bi";

function ReadyCta() {
  return (
    <div className="mx-auto w-full px-4 md:px-6 lg:px-6 xl:px-12 lg:mt-20 lg:mb-20">
      <div className="bg-ready_pattern bg-[#0E6BA8] flex flex-col items-center relative justify-center px-4">
        <div className="items-center justify-center content-center mb-2">
          <Image
            src={CtaImage}
            width={100}
            height={100}
            alt="cta"
            className="border-10 border-[#0e6ba8] rounded-full -mt-10"
          />
        </div>
        <div className="items-center mt-6 mb-10">
          <div className="justify-center items-center text-center">
            <h3 className="text-center text-white text-2xl capitalize font-semibold tracking-wide">
              Ready to get started?
            </h3>
            <p className="text-white/75 text-sm font-normal leading-10">
              We’re here to answer questions, give you advice, and help you find
              your dream home!
            </p>
          </div>
          <div className="mt-5 items-center justify-center text-center md:flex md-flex-row md:mt-6">
            <div className="flex flex-col justify-around items-center w-full">
              <Link
                href="tel:5555555555"
                className="flex border-2 border-white px-7 py-2 text-white hover:bg-dark_blue hover:border-dark_blue"
              >
                <Phone width={20} className="mr-2" /> (555) 555-5555
              </Link>
            </div>

            <div className="flex flex-col justify-around items-center w-full mt-7 md:mt-0">
              <Link
                href="#"
                className="flex  bg-dark_blue px-6 py-3 text-white hover:bg-light_blue hover:border-dark_blue"
              >
                <BiComment className="mr-2" /> SEND MESSAGE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyCta;

import React from "react";
import Logo from "../../../public/logo.svg";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function SocialMedia() {
  return (
    <div className=" px-4 md:px-6 lg:px-6 xl:px-12 flex flex-col justify-center items-center space-y-4 w-full pb-5 lg:flex-row lg:justify-between lg:space-y-0">
      <div className="flex flex-col items-center space-y-3 lg:flex-row lg:spac-y-0 lg:space-x-4">
        <div>
          <Link href="/">
            <Image src={Logo} alt="logo" width={200} height={200} priority />
          </Link>
        </div>
        <div className="text-center lg:text-left">
          <ul className="text-white/90 text-sm font-light">
            <li>12345 Anyplace Road</li>
            <li>City, State 00000</li>
          </ul>
        </div>
      </div>

      <div className="text-center items-center spac-y-3">
        <span className="inline-block mb-2">Follow US</span>
        <ul className="grid grid-cols-3 space-x-2 items-center">
          <li>
            <Facebook size={30} />
          </li>
          <li>
            <Instagram size={30} />
          </li>
          <li>
            <Youtube size={30} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SocialMedia;

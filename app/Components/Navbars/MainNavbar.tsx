import React from "react";
import Logo from "../../../public/logo.svg";
import CtaImage from "../../../public/bg-cta.svg";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileNavbar from "./MobileNavbar";
import { Button } from "@/components/ui/button";

interface MainNavbarProps {
  id: string;
  name: string;
  href: string;
}

const menuLinks = [
  { id: "01", name: "Find Your Home", href: "/communities" },
  { id: "02", name: "Our Process", href: "/process" },
  { id: "03", name: "Gallery", href: "/gallery" },
  { id: "04", name: "About", href: "/about" },
  { id: "05", name: "Contact", href: "/contact" },
];

function MainNavbar() {
  return (
    <div className="fixed top-0 w-full border-red-300 text-black  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-50">
      <div className="flex flex-row justify-between items-center w-full  px-4 py-2 lg:py-0 lg:px-2 xl:px-12 overflow-hidden">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src={Logo} alt="logo" width={200} height={200} priority />
          </Link>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex">
          <ul className="flex flex-row space-x-3 xl:space-x-6">
            {menuLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="font-semibold uppercase text-black"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex bg-medium_blue flex-row justify-start items-center space-x-1">
          {/** CTA IMAGR */}
          <div>
            <Image
              src={CtaImage}
              alt="cta"
              className="w-full h-16 object-cover"
            />
          </div>

          {/** CTA CONTENT */}
          <div className="flex flex-col justify-start pr-4">
            <span className="inline-block capitalize font-semibold leading-tight text-left text-sm">
              Connect with Leah
            </span>
            <Link href="tel:2158928154" className="font-normal mt-1">
              215-892-8154
            </Link>
          </div>
        </div>

        {/** MOBILE MENU */}
        <div className="lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;

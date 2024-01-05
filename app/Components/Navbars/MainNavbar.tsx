import React, { FC } from "react";
import Logo from "../../../public/logo.svg";
import CtaImage from "../../../public/bg-cta.svg";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import processImg from "../../../public/communities.jpg";
import aboutImg from "../../../public/plans.jpg";
import homeImg from "../../../public/qmi.jpg";
import galleryImg from "../../../public/qmi.jpg";
import ImageURL from "../../../public/novel-home.png";

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
import DesktopMenu from "./DesktopMenu";
import MenuItems from "./MenuItems";
import {
  NavigationMenuProps,
  MenuItem as MenuItemType,
} from "@/lib/interfaces";

const MainNavbar: FC<NavigationMenuProps> = () => {
  const menuItems: MenuItemType[] = [
    {
      label: "Find Your Home",
      url: "#",
      megaMenu: true,
      featuredImg: homeImg,
      cta: "Find Your Dream Home",

      children: [
        {
          label: "Communities",
          url: "/Communities",
          desc: "Re-usable components built using Radix UI and Tailwind CSS.",
        },
        {
          label: "Floorplans",
          url: "/plans",
          desc: "Re-usable components built using Radix UI and Tailwind CSS.",
        },
        {
          label: "Available Homes",
          url: "homes",
          desc: "Re-usable components built using Radix UI and Tailwind CSS.",
        },
      ],
    },
    {
      label: "Our Process",
      url: "#",
      megaMenu: true,
      featuredImg: processImg,
      children: [
        {
          label: "Design Center",
          url: "#",
          desc: "Re-usable components built using Radix UI and Tailwind CSS.",
        },
        {
          label: "Our Process",
          url: "#",
          desc: "Re-usable components built using Radix UI and Tailwind CSS.",
        },
        {
          label: "Construction Process",
          url: "#",
          desc: "Re-usable components built using Radix UI and Tailwind CSS.",
        },
      ],
    },
    {
      label: "Gallery",
      url: "#",
      megaMenu: true,
      featuredImg: aboutImg,
      children: [
        {
          label: "Photos",
          url: "#",
          desc: "Re-usable components built using Radix UI and Tailwind CSS.",
        },
        {
          label: "Videos",
          url: "#",
          desc: "Re-usable components built using Radix UI and Tailwind CSS.",
        },
        {
          label: "Virtual Tours",
          url: "#",
          desc: "Re-usable components built using Radix UI and Tailwind CSS.",
        },
      ],
    },

    {
      label: "About",
      url: "#",
      megaMenu: true,
      featuredImg: aboutImg,
      children: [
        {
          label: "About Us",
          url: "#",
          desc: "Re-usable components built using Radix UI and Tailwind CSS.",
        },
        {
          label: "Meet The Team",
          url: "#",
          desc: "Re-usable components built using Radix UI and Tailwind CSS.",
        },
        {
          label: "Blog",
          url: "#",
          desc: "Re-usable components built using Radix UI and Tailwind CSS.",
        },
      ],
    },
    { label: "Contact", url: "#" },
  ];
  return (
    <div className="fixed  items-center justify-center  top-0 w-full border-red-300 text-black  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-50 xl:h-20">
      <div className="flex flex-row justify-between items-center w-full  px-4 py-2 lg:py-0 lg:px-2 xl:px-12">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src={Logo} alt="logo" width={200} height={200} priority />
          </Link>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex">
          <ul className="flex flex-row space-x-3 xl:space-x-6">
            {menuItems.map((item, index) => (
              <MenuItems key={index} item={item} />
            ))}
          </ul>
          {/* <DesktopMenu /> */}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex bg-light_blue flex-row justify-start items-center space-x-1 xl:h-20">
          {/** CTA IMAGR */}
          <div>
            <Image
              src={CtaImage}
              alt="cta"
              width="0"
              height="0"
              className="w-full h-20 object-cover bg-cover"
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
};

export default MainNavbar;

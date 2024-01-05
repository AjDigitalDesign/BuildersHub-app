import React from "react";
import communitiesBg from "../../../public/communities.jpg";
import qmi from "../../../public/qmi.jpg";
import plans from "../../../public/plans.jpg";
import Image from "next/image";
import Link from "next/link";
import { UrlObject } from "url";
import { ChevronsRight } from "lucide-react";

interface FindYourHomeProps {
  quickLinks: {
    url: string;
    fyhButton: {
      url: string;
      title: string;
    };
    fyhImage: {
      mediaItemUrl: string;
      altText: string;
    };
  }[];
}

const qLinks = [
  {
    name: "Communities",
    href: "/communities",
    imgUrl: communitiesBg,
  },
  {
    name: "Quick Move-Ins",
    href: "/homes",
    imgUrl: qmi,
  },
  {
    name: "Floorplans",
    href: "/plans",
    imgUrl: plans,
  },
];

function FindYourHome({ quickLinks }: FindYourHomeProps) {
  // console.log(quickLinks);

  return (
    <div className="px-4 my-10 md:my-12 lg:my-24 xl:mt-36 max-w-7xl mx-auto lg-px-2 lg:px-6 xl:px-12">
      <div className="mb-5">
        <span className="text-black uppercase font-bold text-sm leading-tight tracking-tight">
          You are in Control
        </span>
        <h2 className="font-semibold capitalize text-dark_dark_blue text-2xl tracking-tight antialiased">
          Choose Your Way Home
        </h2>
      </div>

      <div className="grid grid-cols-1 space-y-10 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:gap-y-10 items-center justify-center flex-wrap">
        {quickLinks.map((qlink) => (
          <div key={qlink.fyhButton.title} className="shadow-xl">
            <div>
              <Image
                src={qlink.fyhImage.mediaItemUrl}
                alt={qlink.fyhImage.altText}
                width={400}
                height={400}
                sizes="100%"
                className="object-cover w-full"
              />
            </div>
            <div className="py-5 flex items-center justify-center">
              <h3 className="capitalize text-lg font-semibold antialiased text-dark_dark_blue tracking-tight">
                <Link
                  href={qlink.fyhButton.url}
                  className="flex items-center text-dark_dark_blue antialiased text-lg hover:text-light_blue transition-all duration-75"
                >
                  {qlink.fyhButton.title} <ChevronsRight />
                </Link>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindYourHome;

import Link from "next/link";
import React from "react";
import ImageURL from "../../../public/novel-home.png";
import Image from "next/image";

interface NovelHomesProps {
  title: string;
  subtitle: string;
  imageUrl: {
    altText?: string;
    mediaItemUrl: string;
  };
  content: string;
  button: {
    url: string;
    title: string;
    target?: string;
  };
}

function NovelHomes({
  title,
  subtitle,
  imageUrl,
  button,
  content,
}: NovelHomesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
      {/** Content */}
      <div className="my-10 px-4 lg:px-6 xl:px-12">
        <span className="uppercase text-black text-sm font-semibold inline-block">
          {subtitle}
        </span>
        <h1 className="capitalize font-semibold text-3xl leading-tight mb-2">
          {title}
        </h1>
        <div className="mb-6">
          <p>{content}</p>
        </div>
        <Link
          href={button.url}
          className="bg-dark_blue px-5 py-3 text-white font-semibold uppercase leading-tight hover:bg-light_blue transition"
        >
          {button.title}
        </Link>
      </div>

      {/**Image */}
      <div>
        <Image
          src={imageUrl.mediaItemUrl}
          alt="image"
          width={900}
          height={700}
        />
      </div>
    </div>
  );
}

export default NovelHomes;

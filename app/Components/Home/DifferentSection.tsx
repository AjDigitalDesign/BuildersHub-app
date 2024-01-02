import Image from "next/image";
import ImageURL from "../../../public/secTwoBg.jpg";
import Link from "next/link";

interface DifferentSectionProps {
  title: string;
  subTitle: string;
  imageurl: {
    altText: string;
    mediaItemUrl: string;
  };
  link: {
    url: string;
    title: string;
    target?: string;
  };
  content: string;
}

function DifferentSection({
  title,
  subTitle,
  imageurl,
  link,
  content,
}: DifferentSectionProps) {
  return (
    <div className="relative w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center bg-dark_dark_blue lg:h-[450px] px-3">
      <div className="relative order-1 md:order-0 lg:flex lg:justify-center lg:items-center">
        <Image
          src={imageurl.mediaItemUrl}
          alt="img"
          width={600}
          height={600}
          priority
          className="h-[350px] sm:h-[auto] object-cover bg-cover lg:absolute lg:-top-[260px] xl:-top-[280px] lg:h-[500px] xl:h-[600px] lg:mx-auto lg:max-w-[480px] xl:max-w-[580px]"
        />
      </div>
      <div className="order-0 md:order-1 text-white py-12 sm:py-20">
        <div className="md:pl-4 px-4">
          <span className="inline-block text-light_blue uppercase font-bold text-sm">
            {subTitle}
          </span>
          <h2 className="font-semibold text-3xl capitalize text-white md:mr-28 lg:mr-60  xl:mr-72 mb-3">
            {title}
          </h2>
          <p>{content}</p>
          <div className="mt-8">
            <Link
              href={link.url}
              target={link.target ? link.target : ""}
              className="bg-light_blue px-5 py-3 text-dark_dark_blue font-semibold uppercase leading-tight hover:bg-light_blue transition"
            >
              {link.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DifferentSection;

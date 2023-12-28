import Link from "next/link";
import React from "react";
import ImageURL from "../../../public/novel-home.png";
import Image from "next/image";

function NovelHomes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
      {/** Content */}
      <div className="my-10 px-4 lg:px-6 xl:px-12">
        <span className="uppercase text-black text-sm font-semibold inline-block">
          START YOUR NEXT CHAPTER WITH
        </span>
        <h1 className="capitalize font-semibold text-3xl leading-tight mb-2">
          Novel HOMES
        </h1>
        <div className="mb-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat
            vivamus at augue eget arcu dictum varius. Dis parturient montes
            nascetur ridiculus mus mauris vitae. Fermentum leo vel orci porta
            non pulvinar neque laoreet. Egestas tellus rutrum tellus
            pellentesque eu tincidunt tortor aliquam. Sed turpis tincidunt id
            aliquet risus feugiat. Lacinia at quis risus sed vulputate odio ut.
            Ac felis donec et odio pellentesque diam volutpat commodo sed.
            Integer malesuada nunc vel risus commodo viverra.
          </p>
        </div>
        <Link
          href="/"
          className="bg-dark_blue px-5 py-3 text-white font-semibold uppercase leading-tight hover:bg-light_blue transition"
        >
          About Us
        </Link>
      </div>

      {/**Image */}
      <div>
        <Image src={ImageURL} alt="image" />
      </div>
    </div>
  );
}

export default NovelHomes;

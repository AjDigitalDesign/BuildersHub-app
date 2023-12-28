import Image from "next/image";
import ImageURL from "../../../public/secTwoBg.jpg";
import Link from "next/link";

function DifferentSection() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 items-center">
      <div className=" relative order-1 md:order-0">
        <Image src={ImageURL} alt="img" />
      </div>
      <div className="order-0 md:order-1 text-white py-12 md:py-12 lg:py-20 bg-dark_dark_blue">
        <div className="md:pl-4 px-4">
          <span className="inline-block text-light_blue uppercase font-bold text-sm">
            WHAT MAKES US DIFFERENT
          </span>
          <h2 className="font-semibold text-3xl capitalize text-white md:mr-28 lg:mr-60  xl:mr-72 mb-3">
            Obsessed with The details
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat
            vivamus at augue eget arcu dictum varius. Dis parturient montes
            nascetur ridiculus mus mauris vitae. Fermentum leo vel.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="bg-light_blue px-5 py-3 text-dark_dark_blue font-semibold uppercase leading-tight hover:bg-light_blue transition"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DifferentSection;

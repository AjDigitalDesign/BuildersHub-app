import { getClient } from "@/lib/client";
import { getFeaturedCommunity } from "@/lib/queries/getFeaturedCommunity";
import Image from "next/image";
import Link from "next/link";

async function FeaturedCommunity() {
  const { data } = await getClient().query({ query: getFeaturedCommunity });

  const firstFeaturedCommunity = data.communities.nodes.find(
    (item: {
      home: {
        featuredCommunity: string;
      };
    }) => item.home.featuredCommunity
  );

  // console.log(firstFeaturedCommunity);
  const USDollarCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <div className="px-4 lg:px-6 xl:px-12 w-full py-10 bg-light_blue text-black">
      {firstFeaturedCommunity && (
        <div className="md:pt-6">
          <div className="flex flex-col mb-6">
            <span className="mb-1 font-semibold uppercase text-sm tracking-tight">
              Featured Community
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-3xl capitalize leading-6 font-semibold tracking-tight">
              {firstFeaturedCommunity.title}
            </h2>
          </div>
          <div>
            <Image
              src={firstFeaturedCommunity.home.gallery[0].mediaItemUrl}
              width={900}
              height={300}
              priority
              alt={
                firstFeaturedCommunity.home.gallery[0].altText
                  ? firstFeaturedCommunity.home.gallery[0].mediaItemUrl
                  : ""
              }
              className="w-full sm:max-h-[400px] md:max-h[450px] lg:max-h-[450px] xl:max-h-[500px] object-over bg-cover"
            />
          </div>

          <div className="py-4">
            <div className="">
              <span className="text-sm font-normal uppercase">
                {firstFeaturedCommunity.home.commCity}
              </span>
              <span className="text-sm font-normal uppercase">
                {firstFeaturedCommunity.home.commState
                  ? ", " + firstFeaturedCommunity.home.commState
                  : ""}
              </span>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-lg tracking-tight text-[#00072d]">
                {firstFeaturedCommunity.home.commPrice.commMinPrice
                  ? `Starting at ${USDollarCurrency.format(
                      firstFeaturedCommunity.home.commPrice.commMinPrice
                    )} `
                  : "Call For Pricing"}
              </span>
            </div>
            <div
              className="line-clamp-3 lg:line-clamp-2 mb-5 lg:mb-7 font-normal"
              dangerouslySetInnerHTML={{
                __html:
                  firstFeaturedCommunity.home.commDescriptionGroup
                    .commDescription,
              }}
            ></div>
            <Link
              href={firstFeaturedCommunity.slug}
              className="bg-dark_blue px-5 py-3 text-white font-semibold uppercase leading-tight hover:brightness-75 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeaturedCommunity;

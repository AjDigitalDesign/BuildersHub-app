import { getClient } from "@/lib/client";
import { getHomes } from "@/lib/queries/getHomes";
import {
  BathIcon,
  Bed,
  BedIcon,
  BedSingle,
  BedSingleIcon,
  Ruler,
  Slice,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function Homes() {
  const { data } = await getClient().query({ query: getHomes });

  const USDollarCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const featuredHomes = data.homes.nodes
    .filter(
      (item: { qmi_acf_fields: { featuredHome: string } }) =>
        item.qmi_acf_fields.featuredHome
    )
    .slice(0, 3);

  console.log(featuredHomes);

  return (
    <div className="px-4 lg:px-6 xl:px-12 w-full py-10">
      <div className="">
        <div className="my-5">
          <h2 className="text-[#00072d] text-2xl md:text-3xl lg:text-3xl capitalize leading-6 font-semibold tracking-tight">
            Featured Quick Move-Ins
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-5 xl:gap-6">
        {featuredHomes.map((home) => (
          <div key={home.id} className="shadow-md mb-8 relative">
            <div className="relative">
              <Image
                src={home.qmi_acf_fields.photos[0].mediaItemUrl}
                width={400}
                height={400}
                alt="test"
                priority
                className="bg-cover w-full object-cover"
              />
              <div className="relative">
                {home.qmi_acf_fields.homeAnnouncementsGroup
                  .homeAnnouncementsToggle ? (
                  <div className="absolute bottom-0 bg-dark_blue text-white w-full py-1 px-3">
                    <span className="font-semibold uppercase tracking-tight">
                      {
                        home.qmi_acf_fields.homeAnnouncementsTextGroup
                          .homeCustomAnnouncements
                      }
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="border-b-[1px] border-[#d0cbc9] px-3 py-2">
              <div className="">
                <h4 className="font-semibold text-sm tracking-wide">
                  <Link
                    href={home.uri}
                    className="text-black hover:text-light_blue"
                  >
                    {home.qmi_acf_fields.homeAddress}
                  </Link>
                </h4>
                <div>
                  <span className="tracking-normal text-xs">
                    {home.qmi_acf_fields.homeCity}
                  </span>
                  <span className="tracking-normal text-sm">
                    {home.qmi_acf_fields.homeState
                      ? ", " + home.qmi_acf_fields.homeState
                      : ""}
                  </span>
                </div>
              </div>
            </div>

            {/* Relationships */}
            <div className="w-full border-b-[1px] border-[#d0cbc9] px-3 py-2 grid grid-cols-2 gap-x-14">
              <div>
                {" "}
                {home.qmi_acf_fields.homeCommunity ? (
                  <div className="grid grid-cols-1">
                    {" "}
                    <span className="font-semibold uppercase text-sm">
                      Community
                    </span>
                    <Link
                      href={home.qmi_acf_fields.homeCommunity[0].uri}
                      className="text-sm hover:text-light_blue transition line-clamp-1"
                    >
                      {home.qmi_acf_fields.homeCommunity[0].title}
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                {" "}
                {home.qmi_acf_fields.homeFloorplan ? (
                  <div className="grid grid-cols-1">
                    {" "}
                    <span className="font-semibold uppercase text-sm">
                      Floorplans
                    </span>
                    <Link
                      href={home.qmi_acf_fields.homeFloorplan[0].uri}
                      className="text-sm hover:text-light_blue transition"
                    >
                      {
                        home.qmi_acf_fields.homeFloorplan[0].plans_acf_fields
                          .planName
                      }
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="w-full border-b-[1px] border-[#d0cbc9] px-3 py-2 grid grid-cols-3 gap-x-5 items-center">
              <div className="flex flex-row items-center">
                <BedSingleIcon
                  className="text-dark_blue font-bold mr-2"
                  height={20}
                  width={20}
                />
                <span className="text-sm">
                  {home.qmi_acf_fields.homeBeds
                    ? home.qmi_acf_fields.homeBeds + " Beds"
                    : ""}
                </span>
              </div>

              <div className="flex flex-row items-center">
                <BathIcon
                  className="text-dark_blue font-bold mr-2"
                  height={20}
                  width={20}
                />
                <span className="text-sm">
                  {home.qmi_acf_fields.homeBaths
                    ? home.qmi_acf_fields.homeBaths + " Baths"
                    : ""}
                </span>
              </div>

              <div className="flex flex-row items-center">
                <Ruler
                  className="text-dark_blue font-bold mr-2"
                  height={20}
                  width={20}
                />
                <span className="text-sm">
                  {home.qmi_acf_fields.homeSqft
                    ? home.qmi_acf_fields.homeSqft + " Sqft"
                    : ""}
                </span>
              </div>
            </div>
            <div className="px-3 py-2 font-semibold">
              {home.qmi_acf_fields.homePrice ? (
                "Priced at " +
                USDollarCurrency.format(home.qmi_acf_fields.homePrice)
              ) : (
                <Link href="">Call for Price</Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homes;

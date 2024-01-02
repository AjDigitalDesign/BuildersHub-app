import { getClient } from "@/lib/client";

import Image from "next/image";
import Banner from "./Components/Home/Banner";
import NovelHomes from "./Components/Home/NovelHomes";
import DifferentSection from "./Components/Home/DifferentSection";
import FindYourHome from "./Components/Home/FindYourHome";
import { getHomePage } from "@/lib/queries/getHomePage";
import FeaturedCommunity from "./Components/Home/FeaturedCommunity";
import Homes from "./Components/Home/Homes";

// async function getData() {
//   const query = `
//   `;

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
//       query
//     )}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       next: {
//         revalidate: 0,
//       },
//     }
//   );

//   const { data } = await res.json();

//   return data.page;
// }

export default async function Home() {
  const { data } = await getClient().query({ query: getHomePage });

  return (
    <div>
      <Banner
        bgImage={data.page.homepage_acf.backgroundImage.mediaItemUrl}
        bannerTitle={data.page.homepage_acf.bannerTitle}
        bannerLink={data.page.homepage_acf.bannerButton}
      />
      <NovelHomes
        title={data.page.homepage_acf.nextchapterTitle}
        subtitle={data.page.homepage_acf.subtitle}
        imageUrl={data.page.homepage_acf.ncImage}
        content={data.page.homepage_acf.ncContent}
        button={data.page.homepage_acf.nhButton}
      />
      <DifferentSection
        title={data.page.homepage_acf.mdTitle}
        subTitle={data.page.homepage_acf.mdSubtitle}
        content={data.page.homepage_acf.mdContent}
        imageurl={data.page.homepage_acf.mdSectionImage}
        link={data.page.homepage_acf.mdLearnMore}
      />
      <FindYourHome findYourHome={data.page.homepage_acf.findYourHome} />
      <FeaturedCommunity />
      <Homes />
    </div>
  );
}

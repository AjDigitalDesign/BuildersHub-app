import Image from "next/image";
import Banner from "./Components/Home/Banner";
import NovelHomes from "./Components/Home/NovelHomes";
import DifferentSection from "./Components/Home/DifferentSection";

export default function Home() {
  return (
    <div>
      <Banner />
      <NovelHomes />
      <DifferentSection />
    </div>
  );
}

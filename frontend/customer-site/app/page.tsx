import { getAllCoffees } from "./_actions/coffee";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "leaflet/dist/leaflet.css";

import LatestBlogPost from "./_components/LatestBlogPost";
import TopCategories from "./_components/TopCategories";
import TopMilkShake from "./_components/TopMilkShake";
import Image from "next/image";

export default async function Page() {
  const coffees = await getAllCoffees();
  const sliceCoffee = coffees.slice(0, 7);
  return (
    <>
      <Header />
      <main className="px-1 flex-1 pt-[55px] backdrop-blur-md bg-white/10 bg-cover]">
        <div className="h-[300px] md:h-[400px] bg-[url('/header.jpg')] bg-cover bg-center [clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)]">
          <h1 className="text-white text-2xl lg:text-4xl font-bold text-center pt-40">
            پخش و فروش بهترین کافی در ایران
          </h1>
        </div>
        <div className=" mt-5 gap-10 flex justify-center items-center">
          <div className="flex gap-10 bg-white justify-center items-center py-3 w-[400px] rounded-lg ">
            <div className="flex flex-col gap-2 items-center justify-center">
              <Image src="/cake.png" width={50} height={50} alt="cup-coffee" />
              <span className="text-md">چیز کیک</span>
            </div>

            <div className="flex flex-col gap-2 items-center justify-center">
              {" "}
              <Image src="/tea-cup.png" width={50} height={50} alt="tea-cup" />
              <span className="text-md">کاپ کافی</span>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <Image
                src="/iced-coffee.png"
                width={50}
                height={50}
                alt="ice-coffee"
              />
              <span className="text-md">آیس کافی</span>
            </div>
          </div>
        </div>
        <TopCategories />
        <TopMilkShake coffees={sliceCoffee} />
        <LatestBlogPost />
      </main>
      <Footer />
    </>
  );
}

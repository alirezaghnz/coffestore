import { getAllCoffees } from "./_actions/coffee";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

import LatestBlogPost from "./_components/LatestBlogPost";
import TopCategories from "./_components/TopCategories";
import TopMilkShake from "./_components/TopMilkShake";

export const revalidate = 60;
export default async function Page() {
  const coffees = await getAllCoffees();
  const sliceCoffee = coffees.slice(0, 4);
  return (
    <>
      <Header />
      <main className="px-7 flex-1 pt-[100px]">
        <div className="h-[400px] bg-[url('/header.jpg')] bg-cover bg-center [clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)]">
          <h1 className="text-white text-1xl lg:text-4xl font-bold text-center pt-40">
            پخش و فروش بهترین کافی در ایران
          </h1>
         
        </div>
        <TopCategories />
        <TopMilkShake coffees={sliceCoffee} />
        <LatestBlogPost />
      </main>
      <Footer />
    </>
  );
}

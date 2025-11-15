import { CoffeeProps } from "../_types/CoffeeTypes";
import CoffeeHome from "./CoffeeHome";

export default async function TopMilkShake({
  coffees,
}: {
  coffees: CoffeeProps[];
}) {
  return (
    <section className="mt-10 max-w-7xl mx-auto  p-8">
      <h1 className="text-3xl text-center">پر فروش ترین های میلک شیک</h1>
      <p className="text-gray-600 mt-6 text-center">
        پرفروش ترین میلک شیک های چند وقت اخیر ما را تجربه کنید
      </p>
      <div className="mt-6 grid grid-cols-4 items-start gap-4  h-[500px] px-7 py-7">
        <CoffeeHome coffees={coffees} />
      </div>
    </section>
  );
}

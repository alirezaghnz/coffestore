import { getAllCoffees } from "../_actions/coffee";
import CoffeeMenu from "../_components/CoffeeMenu";

export const revalidate = 3600;
export default async function Page() {
  const coffees = await getAllCoffees();

  return (
    <>
      <CoffeeMenu coffees={coffees} />
    </>
  );
}

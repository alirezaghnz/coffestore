import CoffeeMenu from "../_components/CoffeeMenu";
import { getCoffees } from "../_services/getCoffees";

export default async function Page() {
  const { data: coffees } = await getCoffees();

  return (
    <>
      <CoffeeMenu coffees={coffees} />
    </>
  );
}

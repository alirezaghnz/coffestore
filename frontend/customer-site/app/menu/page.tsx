"use client";
import CoffeeMenu from "../_components/CoffeeMenu";
import { useCoffees } from "./_hooks/useCoffees";

export default function Page() {
  const { data: coffees = [] } = useCoffees();

  return (
    <>
      <CoffeeMenu coffees={coffees} />
    </>
  );
}

import CoffeeHomeItems from "./CoffeeHomeItems";

interface CoffeeHomeProps {
  coffees: {
    name: string;
    price: number;
    id: number;
  }[];
}
export default async function CoffeeHome({ coffees }: CoffeeHomeProps) {
  return (
    <>
      {coffees.map((item) => (
        <div
          className="border rounded-md px-2 py-6 flex flex-col justify-between"
          key={item.id}
        >
          <CoffeeHomeItems item={item} />
        </div>
      ))}
    </>
  );
}

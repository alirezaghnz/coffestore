import CoffeeHomeItems from "./CoffeeHomeItems";

interface CoffeeHomeProps {
  coffees: {
    name: string;
    price: number;
    id: number;
    image: string;
  }[];
}
export default async function CoffeeHome({ coffees }: CoffeeHomeProps) {
  return (
    <>
      {coffees.map((item) => (
        <div
          className="border border-coffee-300 rounded-md px-2 py-2 flex flex-col justify-between"
          key={item.id}
        >
          <CoffeeHomeItems item={item} />
        </div>
      ))}
    </>
  );
}

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
          className="border border-gray-200 shadow-lg rounded-md px-6 py-5 flex flex-col justify-between"
          key={item.id}
        >
          <CoffeeHomeItems item={item} />
        </div>
      ))}
    </>
  );
}

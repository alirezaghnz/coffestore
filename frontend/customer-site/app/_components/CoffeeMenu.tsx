"use client";
import Image from "next/image";
import { useCartStore } from "../_store/useCartStore";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import CoffeeFilters from "./CoffeeFilters";

type Coffee = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
};

export default function CoffeeMenu({ coffees }: { coffees: Coffee[] }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const [filter, setFilter] = useState({
    price: 200000,
    category: "",
  });

  // filter coffees based on filter state
  const filteredCoffees = coffees.filter((c) => {
    const priceCheck = Number(c.price) <= filter.price;
    const categoryCheck = filter.category
      ? c.category === filter.category
      : true;
    return priceCheck && categoryCheck;
  });

  return (
    <main className="px-8 py-10">
      <CoffeeFilters onFilter={setFilter} />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCoffees.map((coffee, index) => (
          <motion.div
            key={coffee.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="bg-[#FAF4EF] border border-[#E8DDD2] rounded-2xl shadow-md hover:shadow-xl 
            transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={coffee.image}
                alt={coffee.name}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col flex-grow p-5">
              <h3 className="text-xl font-semibold text-[#4B3A29]">
                {coffee.name}
              </h3>

              <p className="text-[#6A5444] text-sm mt-2 line-clamp-3 leading-relaxed">
                {coffee.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-5">
                <span className="text-lg font-bold text-[#8B5E3C]">
                  {Number(coffee.price).toLocaleString("fa-IR")} تومان
                </span>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(coffee)}
                  className="flex w-[320px] lg:w-[200px] justify-center items-center 
                    rounded-full py-3 gap-3 px-8 
                    text-white text-base font-semibold 
                    bg-gradient-to-r from-[#8B5E3C] to-[#A97452]
                    shadow-md hover:shadow-xl transition-all duration-300"
                >
                  خرید
                  <ShoppingCart size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}

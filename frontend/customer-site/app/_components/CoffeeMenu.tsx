"use client";
import Image from "next/image";
import { useCartStore } from "../_store/useCartStore";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function CoffeeMenu({ coffees }) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <main className="flex flex-col lg:grid lg:grid-cols-5 gap-4 px-8">
      {coffees.map((coffee) => (
        <motion.div
          className="flex justify-center items-center py-5 border-l rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-#E6D5C3 border"
          key={coffee.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: coffee.id * 0.1 }}
        >
          <div className="flex flex-col items-center gap-3 px-2">
            <Image
              src={coffee.image}
              alt={coffee.name}
              width={300}
              height={300}
              className="rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <span className="mt-2 text-xl">{coffee.name}</span>
            <p className="text-#5B4636 mt-2 mb-2 text-sm items-center">
              {coffee.description}
            </p>
            <div className="grid lg:flex gap-[30px] lg:gap-[70px] mt-4">
              <span className="flex text-coffee-700 items-center justify-center">
                {" "}
                {coffee.price} تومان
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => addToCart(coffee)}
                className="flex w-[300px] lg:w-auto justify-center items-center rounded-md lg:rounded-full py-2 gap-2 px-6 text-white text-sm bg-[#8B5E3C]"
              >
                خرید
                <ShoppingCart size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </main>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, XCircle, CheckCircle, Clock } from "lucide-react";

export default function OrderCard({ order, cancelOrder }: any) {
  const [open, setOpen] = useState(false);

  const statusText =
    order.status === "PAID"
      ? "پرداخت شده"
      : order.status === "PENDING"
        ? "در انتظار پرداخت"
        : order.status === "CANCELLED"
          ? "لغو شده"
          : order.status;

  const statusColor =
    order.status === "PAID"
      ? "text-green-500"
      : order.status === "PENDING"
        ? "text-orange-400"
        : "text-red-500";

  const statusIcon =
    order.status === "PAID" ? (
      <CheckCircle className="w-5 h-5 text-green-500" />
    ) : order.status === "PENDING" ? (
      <Clock className="w-5 h-5 text-orange-400" />
    ) : (
      <XCircle className="w-4 md:w-5 h-4 md:h-5 text-red-500" />
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="
        bg-white/30 backdrop-blur-md border border-white/20 
        rounded-2xl p-5 shadow-lg relative overflow-hidden
      "
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-25"
        style={{
          background:
            "radial-gradient(circle at top right, #7dd3fc55, transparent), radial-gradient(circle at bottom left, #fda4af55, transparent)",
        }}
      />

      <div className="relative flex justify-between">
        <div>
          <p className="font-semibold text-sm md:text-lg text-gray-800">
            سفارش #{order.orderNumber}
          </p>

          <p className="text-sm text-gray-600 mt-1">
            {new Date(order.createdAt).toLocaleDateString("fa-IR")}
          </p>

          <p className="text-sm mt-2 flex items-center gap-2">
            وضعیت: <span className={statusColor}>{statusText}</span>
            {statusIcon}
          </p>
        </div>

        <p className="font-bold text-sm md:text-2xl text-gray-900">
          {Number(order.totalAmout).toLocaleString("fa-IR")}{" "}
          <span className="text-base text-gray-600">تومان</span>
        </p>
      </div>

      {order.status === "PENDING" && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="
            mt-4 px-2 md:px-4 py-1 md:py-2 rounded-xl 
            border border-red-300 text-red-600 
            bg-red-50 hover:bg-red-100
            transition font-medium
          "
          onClick={() => cancelOrder(order.id)}
        >
          لغو سفارش
        </motion.button>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-full mt-4 flex justify-between items-center text-gray-800"
      >
        <span className="font-medium">جزئیات سفارش</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="overflow-hidden mt-4 space-y-3"
          >
            {order.orderItems.map((item: any) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="
                  flex justify-between items-center 
                  bg-white/50 backdrop-blur-sm p-3 rounded-xl
                  border border-white/20 shadow-sm
                "
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {item.coffee.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    تعداد: {item.quantity}
                  </p>
                </div>

                <p className="font-bold text-gray-800">
                  {(Number(item.price) * item.quantity).toLocaleString("fa-IR")}{" "}
                  تومان
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

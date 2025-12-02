"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import OrderCard from "./_ui/OrderCard";

type OrderItem = {
  id: string;
  quantity: number;
  price: string;
  coffee: {
    name: string;
  };
};

type OrderStatus =
  | "ALL"
  | "PENDING"
  | "PAID"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

type Order = {
  id: string;
  orderNumber: string;
  createdAt: string;
  status: Exclude<OrderStatus, "ALL">;
  totalAmout: string;
  orderItems: OrderItem[];
};

export default function UserOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<OrderStatus>("ALL");

  const load = async () => {
    const res = await axios.get("/api/order");
    setOrders(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const filteredOrders =
    filter === "ALL" ? orders : orders.filter((o) => o.status === filter);

  async function cancelOrder(orderId: string) {
    try {
      // if user order cencelled api call and update db status with patch method
      const res = await fetch(`/api/order/${orderId}/cancel`, {
        method: "PATCH",
      });

      if (!res.ok) {
        const error = await res.json();
        toast.error(error.error || "مشکلی پیش آمد");
        return;
      }
      toast.success("سفارش با موفقیت لغو شد");
      // update order status in UI
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: "CANCELLED" } : o))
      );
    } catch (err: any) {
      console.error(err);
    }
  }

  // tabs for order status filtering
  const tabs: { label: string; value: OrderStatus }[] = [
    { label: "همه", value: "ALL" },
    { label: "در انتظار تأیید", value: "PENDING" },
    { label: "پرداخت شده", value: "PAID" },
    { label: "در حال پردازش", value: "PROCESSING" },
    { label: "ارسال شده", value: "SHIPPED" },
    { label: "تحویل شده", value: "DELIVERED" },
    { label: "لغو شده", value: "CANCELLED" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-6">سفارش‌های من</h1>

      <div className="flex gap-1 scrollbar-hide overflow-y-auto mb-6 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            className={`
              whitespace-nowrap rounded-md px-4 py-2 text-sm 
              transition-all duration-200
              ${
                filter === tab.value
                  ? "bg-[#8B5E3C] text-white border-[#8B5E3C]"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <p className="text-gray-500 text-center">هنوز سفارشی ثبت نکرده‌اید.</p>
      )}

      <div className="space-y-4">
        {filteredOrders.map((order: any) => (
          <OrderCard key={order.id} order={order} cancelOrder={cancelOrder} />
        ))}
      </div>
    </div>
  );
}

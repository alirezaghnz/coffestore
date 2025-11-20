"use client";

import Header from "@/app/_components/Header";
import { useCartStore } from "@/app/_store/useCartStore";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CheckoutPage() {
  const { cartItems } = useCartStore();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [newAddress, setNewAddress] = useState({
    fullName: "",
    phone: "",
    province: "",
    address: "",
    postalCode: "",
  });

  const handleAddressChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  //Get user address
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const res = await axios.get("/api/address");
        setAddresses(res.data);

        const def = res.data.find((a) => a.isDefault);
        if (def) setSelectedAddress(def.id);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAddresses();
  }, []);

 
  const handleAddAddress = async () => {
    try {
      const res = await axios.post("/api/address", newAddress);
      setAddresses((prev) => [...prev, res.data]);
      setSelectedAddress(res.data.id);
      toast.success("آدرس جدید اضافه شد");
    } catch (err) {
      toast.error("خطا در افزودن آدرس");
      console.error(err);
    }
  };


  const handleSubmitOrder = async () => {
    if (!selectedAddress) {
      return toast.error("لطفاً یک آدرس انتخاب کنید");
    }

    try {
      const res = await axios.post("/api/order", {
        cartItems,
        addressId: selectedAddress,
      });

      
    const orderId = res.data.orderId;

   
    window.location.href = `/checkout/order/${orderId}`;
    } catch (err) {
      toast.error("خطایی رخ داد");
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 mt-20">
        <h1 className="text-2xl font-bold mb-6">تکمیل سفارش</h1>

        <div className="grid md:grid-cols-3 gap-6">
       
          <div className="md:col-span-2 space-y-6">

            <div className="bg-white p-6 shadow rounded-xl">
              <h2 className="text-xl font-semibold mb-3">انتخاب آدرس</h2>

              {addresses.length === 0 && (
                <p className="text-gray-500 text-sm">هیچ آدرسی ثبت نشده است.</p>
              )}

              <div className="space-y-3">
                {addresses.map((addr) => (
                  <label
                    key={addr.id}
                    className="flex items-start p-3 border rounded-lg cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="selectedAddress"
                      value={addr.id}
                      checked={selectedAddress === addr.id}
                      onChange={(e) => setSelectedAddress(e.target.value)}
                      className="mt-1"
                    />

                    <div className="mr-3">
                      <p className="font-medium">{addr.fullName} - {addr.phone}</p>
                      <p className="text-sm text-gray-600">{addr.address}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 shadow rounded-xl">
              <h2 className="text-xl font-semibold mb-3">افزودن آدرس جدید</h2>

              <div className="grid grid-cols-2 gap-4">
                <input name="fullName" placeholder="نام کامل" className="p-2 border rounded"
                  onChange={handleAddressChange}
                />
                <input name="phone" placeholder="شماره تماس" className="p-2 border rounded"
                  onChange={handleAddressChange}
                />
                <input name="province" placeholder="استان" className="p-2 border rounded"
                  onChange={handleAddressChange}
                />
                <input name="postalCode" placeholder="کد پستی" className="p-2 border rounded"
                  onChange={handleAddressChange}
                />
                <textarea
                  name="address"
                  placeholder="آدرس کامل"
                  rows={4}
                  className="col-span-2 p-2 border rounded"
                  onChange={handleAddressChange}
                ></textarea>
              </div>

              <button
                onClick={handleAddAddress}
                className="w-full bg-coffee-400 text-white p-3 rounded mt-4"
              >
                ذخیره آدرس
              </button>
            </div>
          </div>

        
          <div className="bg-white shadow p-6 rounded-xl h-fit">
            <h2 className="text-xl font-semibold mb-4">خلاصه سفارش</h2>

            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between py-2">
                <span>{item.name} × {item.quantity}</span>
                <span>{item.price * item.quantity} تومان</span>
              </div>
            ))}

            <hr className="my-4" />

            <div className="flex justify-between font-semibold text-lg">
              <span>مجموع کل</span>
              <span>{totalPrice} تومان</span>
            </div>

            <button
              onClick={handleSubmitOrder}
              className="w-full bg-black text-white p-3 rounded-lg mt-4 hover:bg-gray-800"
            >
              ثبت سفارش
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

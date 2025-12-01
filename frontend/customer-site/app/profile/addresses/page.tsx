"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";

import { PlusCircle } from "lucide-react";
import AddressCard from "./_ui/AddressCart";
import AddressModal from "./_ui/AddressModal";
import AddAddressForm from "./_ui/AddressForm";
import useClickOutside from "@/app/hooks/useClickOutside";

export default function AddressesPage() {
  const [addresses, setAddresses] = useState([]);
  const [selected, setSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    const res = await axios.get("/api/address");
    setAddresses(res.data);
  };

  return (
    <div className="max-w-4xl mx-auto mt-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg md:text-3xl font-bold">آدرس‌های من</h1>

        <button
          onClick={() => setOpenAdd(true)}
          className="flex items-center gap-2 text-xs md:text-lg bg-black text-white px-2 md:px-4 py-1 md:py-2 rounded-xl"
        >
          <PlusCircle className="w-4 md:w-8" />
          افزودن آدرس جدید
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((addr) => (
          <AddressCard
            key={addr.id}
            address={addr}
            onClick={() => {
              setSelected(addr);
              setOpenModal(true);
            }}
          />
        ))}
      </div>

      {openModal && selected && (
        <AddressModal
          address={selected}
          close={() => setOpenModal(false)}
          refresh={fetchAddresses}
        />
      )}

      {openAdd && (
        <AddAddressForm
          close={() => setOpenAdd(false)}
          refresh={fetchAddresses}
        />
      )}
    </div>
  );
}

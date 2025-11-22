"use client";

import { X, MapPin } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import MapModal from "./MapModal";


export default function AddAddressForm({
  close,
  refresh,
}: {
  close: () => void;
  refresh: () => void;
}) {
  const [showMap, setShowMap] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    province: "",
    address: "",
    postalCode: "",
    lat: "",
    lng: "",
  });

  const fields = [
    { name: "fullName", label: "نام و نام خانوادگی" },
    { name: "phone", label: "شماره تلفن" },
    { name: "province", label: "استان / شهر" },
    { name: "address", label: "آدرس کامل" },
    { name: "postalCode", label: "کد پستی" },
  ];

  const handleSubmit = async () => {
    await axios.post("/api/address", form);
    refresh();
    close();
  };

  return (
    <>
    
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-2xl w-[450px] shadow-xl relative">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">افزودن آدرس جدید</h2>
            <X className="cursor-pointer" onClick={close} />
          </div>

          <div className="space-y-3">
            {fields.map((f) => (
              <input
                key={f.name}
                placeholder={f.label}
                className="w-full border p-2 rounded-xl text-right"
                value={form[f.name as keyof typeof form]}
                onChange={(e) =>
                  setForm({ ...form, [f.name]: e.target.value })
                }
              />
            ))}

        
            <button
              onClick={() => setShowMap(true)}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl"
            >
              <MapPin /> 
            </button>

          
            {form.lat && (
              <p className="text-sm text-gray-600 text-right">
                مختصات انتخاب شده:  
                <b>{form.lat}</b> , <b>{form.lng}</b>
              </p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-black text-white py-3 rounded-xl"
          >
            ذخیره
          </button>
        </div>
      </div>

     
      {showMap && (
        <MapModal
          close={() => setShowMap(false)}
          onSelectLocation={(lat, lng, fullAddress) => {
            setForm({
              ...form,
              lat,
              lng,
              address: fullAddress || form.address,
            });
            setShowMap(false);
          }}
        />
      )}
    </>
  );
}

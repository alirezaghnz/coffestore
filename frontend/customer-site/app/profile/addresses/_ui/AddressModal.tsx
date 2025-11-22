"use client";

import { X, Trash2, CheckCircle } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import ConfirmModal from "@/app/_components/ConfirmModal";

export default function AddressModal({
  address,
  close,
  refresh,
}: {
  address: any;
  close: () => void;
  refresh: () => void;
}) {
  const [showConfirm, setShowConfirm] = useState(false);

  const deleteAddress = async () => {
    try {
      await axios.delete(`/api/address/${address.id}`);
      refresh();
      close();
      toast.success("آدرس با موفقیت حذف شد");
    } catch (err: any) {
      const msg =
        "آدرس در حال حاضر در سفارشات شما ثبت شده. بعد از اتمام سفارش امتحان نمایید.";
      toast.error(msg);
    }
  };

  const setDefault = async () => {
    await axios.patch("/api/address", { id: address.id });
    refresh();
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-2xl w-[450px] shadow-xl">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">جزئیات آدرس</h2>
          <X className="cursor-pointer" onClick={close} />
        </div>

        <div className="space-y-2 text-gray-700">
          <p>
            <b>نام:</b> {address.fullName}
          </p>
          <p>
            <b>تلفن:</b> {address.phone}
          </p>
          <p>
            <b>آدرس:</b> {address.address}
          </p>
          <p>
            <b>کد پستی:</b> {address.postalCode}
          </p>
        </div>

        <div className="flex justify-between mt-8">
          {!address.isDefault && (
            <button
              onClick={setDefault}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl"
            >
              <CheckCircle />
              پیش‌فرض
            </button>
          )}

          <button
            onClick={() => setShowConfirm(true)}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl"
          >
            <Trash2 />
            حذف
          </button>
        </div>
      </div>
       <ConfirmModal
        open={showConfirm}
        title="حذف آدرس"
        message="آیا مطمئن هستید که می‌خواهید این آدرس را حذف کنید؟"
        onClose={() => setShowConfirm(false)}
        onConfirm={() => {
          setShowConfirm(false);
          deleteAddress();
        }}
      />
    </div>
  );
}

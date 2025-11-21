import { MapPin } from "lucide-react";

export default function AddressCard({ address, onClick }:{address: any, onClick: ()=> void}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-5 border rounded-xl shadow-sm hover:shadow-lg transition bg-white"
    >
      <div className="flex items-center gap-2 mb-2">
        <MapPin className="text-gray-700" />
        <h3 className="text-lg font-semibold">{address.fullName}</h3>
      </div>

      <p className="text-gray-600">{address.address}</p>

      <div className="mt-3 text-sm text-gray-500">
        <p>تلفن: {address.phone}</p>
        <p>کد پستی: {address.postalCode}</p>
      </div>

      {address.isDefault && (
        <div className="mt-3 px-2 py-1 text-xs bg-black text-white rounded-full w-fit">
          آدرس پیش‌فرض
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { SlidersHorizontal, Filter } from "lucide-react";

export default function CoffeeFilters({
  onFilter: onFilterChange,
}: {
  onFilter: (filter: { price: number; category: string }) => void;
}) {
  const [maxPrice, setMaxPrice] = useState(70000);
  const [category, setCategory] = useState("");

  // handle price change for filter input range
  function changePrice(e: any) {
    const value = Number(e.target.value);
    setMaxPrice(value);
    onFilterChange({ price: value, category });
  }

  function changeCategory(e: any) {
    const value = e.target.value;
    setCategory(value);
    onFilterChange({ price: maxPrice, category: value });
  }

  return (
    <div className="w-full bg-white rounded-2xl p-3 shadow-md border border-gray-200 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter size={18} className="text-orange-600" />
        <h3 className="font-semibold text-lg">فیلتر و مرتب‌سازی</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            دسته‌بندی
          </label>
          <select
            onChange={changeCategory}
            className="border rounded-xl px-4 py-2 bg-gray-50 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">همه</option>
            <option value="coffee">قهوه گرم</option>
            <option value="cold">نوشیدنی سرد</option>
            <option value="special">اسپشیال بار</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            قیمت (حداکثر)
            <SlidersHorizontal size={16} className="text-orange-600" />
          </label>

          <div className="flex justify-between text-xs text-gray-500">
            <span>۱۰,۰۰۰</span>
            <span>۱۰۰,۰۰۰</span>
          </div>

          <input
            type="range"
            min="10000"
            max="100000"
            value={maxPrice}
            onChange={changePrice}
            className="w-full accent-orange-500 cursor-pointer h-2 rounded-lg"
          />

          <div className="text-sm text-orange-600 font-semibold text-left">
            {maxPrice.toLocaleString("fa-IR")} تومان
          </div>
        </div>
      </div>
    </div>
  );
}

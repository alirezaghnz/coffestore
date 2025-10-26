import React from "react";

export default function Input({
  label,
  placeholder,
  ...props
}: {
  label?: string;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div dir="rtl" className="flex ">
      {label && (
        <label className="text-md rounded-lg border-none px-2 py-1 text-gray-600 font-medium">
          {label}
        </label>
      )}
      <input
        className="px-2 py-2 w-[300px] text-md border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

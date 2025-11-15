"use client";

import { useEffect, useState } from "react";
import SpinnerUserProfile from "./SpinnerUserProfile";
import InputUsersInfo from "./InputUsersInfo";

export default function UsersInfoForms() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    province: "",
    address: "",
    postalCode: "",
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  //for get users when he come to profile
  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const res = await fetch("/api/profile");
      const data = await res.json();
      if (res.ok) setForm(data);
      setLoading(false);
    };
    fetchProfile();
  }, []);

  //edit info users
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    const res = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setSaving(false);

    if (res.ok) setMessage("✅ اطلاعات با موفقیت ذخیره شد!");
    else setMessage(data.error || "❌ خطایی رخ داد");
  };

  if (loading) return <SpinnerUserProfile />;

  return (
    <div className="flex w-full min-h-screen">
      <div className="flex-1 bg-white p-8 rounded-xl shadow-md mx-4 mt-6">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <InputUsersInfo
            label="نام کامل"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="نام و نام خانوادگی"
          />

          <InputUsersInfo
            label="شماره تلفن"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="09123456789"
          />

          <InputUsersInfo
            label="استان"
            name="province"
            value={form.province}
            onChange={handleChange}
            placeholder="مازندران"
          />

          <InputUsersInfo
            label="کد پستی"
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            placeholder="1234567890"
          />

          <InputUsersInfo
            label="آدرس"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="خیابان ساری، کوچه نیما،شاهد ۱۲"
            wrapperClassName="col-span-2"
          />

          <InputUsersInfo
            label="ایمیل آدرس"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            wrapperClassName="col-span-2"
          />
          <div className="col-span-2 flex justify-end mt-4">
            <button
              disabled={saving}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {saving ? "در حال ذخیره..." : "ذخیره تغییرات"}
            </button>
          </div>
        </form>

        {message && (
          <p className="text-center mt-4 text-green-600">{message}</p>
        )}
      </div>
    </div>
  );
}

"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Header from "../_components/Header";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function ContactUs() {
  const position: [number, number] = [36.55941, 53.05276];

  return (
    <>
      <Header />
      <section className="max-w-6xl mt-9 mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">تماس با ما</h2>
          <p className="text-gray-600 text-lg">
            اگر سوالی دارید یا می‌خواهید با ما در ارتباط باشید، با کمال میل
            پاسخ‌گوی شما هستیم.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              اطلاعات تماس
            </h3>

            <div className="p-6 bg-gradient-to-r from-amber-200 to-orange-100 rounded-2xl shadow">
              <p className="text-gray-800">
                📍 <span className="font-bold">آدرس:</span>
                مازندران، ساری،خیابان فرهنگ، کافه پمو
              </p>

              <p className="text-gray-800 mt-4">
                📞 <span className="font-bold">شماره تماس:</span>
                011-xxxxx
              </p>

              <p className="text-gray-800 mt-4">
                📧 <span className="font-bold">ایمیل:</span>
                info@coffeeshop.com
              </p>

              <p className="text-gray-800 mt-4">
                🕒 <span className="font-bold">ساعت کاری:</span>
                همه روزه ۹ صبح تا ۱۰ شب
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-md h-64">
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position} icon={markerIcon}>
                  <Popup>موقعیت کافه ما ☕️</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          <form className="bg-white p-8 rounded-3xl shadow-xl space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              فرم ارسال پیام
            </h3>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                نام شما
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
                placeholder="نام خود را وارد کنید"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                ایمیل
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                پیام شما
              </label>
              <textarea
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
                placeholder="متن پیام شما..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl text-lg font-semibold transition-all duration-300 shadow-md"
            >
              ارسال پیام
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

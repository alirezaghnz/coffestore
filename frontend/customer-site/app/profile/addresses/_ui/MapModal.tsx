"use client";

import { X } from "lucide-react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// nominatim open stream map revers geocoding 
const BASE = "https://nominatim.openstreetmap.org/reverse?format=json"

export default function MapModal({
  close,
  onSelectLocation,
}: {
  close: () => void;
  onSelectLocation: (lat: number, lng: number, fullAddress?: string) => void;
}) {
  const [marker, setMarker] = useState<any>(null);

  function LocationSelector() {
    useMapEvents({
      click(e:any) {
        setMarker([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  }
  // for reverse geocoding to get real address 
const reverseGeocode = async (lat: number, lng: number) => {
  const res = await fetch(
    `${BASE}&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=fa`
  );

  const data = await res.json();

  if (!data.address) return "";

  const a = data.address;

  // construct address for different parts
  return [
    a.country,
    a.state,
    a.city || a.town || a.village,
    a.suburb,
    a.road,
    a.neighbourhood,
  ]
    .filter(Boolean)
    .join(" - ");
};

  const select = async () => {
    if (!marker) return;
    const lat = marker[0];
    const lng = marker[1];

    const address = await reverseGeocode(lat, lng);
    onSelectLocation(lat, lng, address);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[60]">
      <div className="bg-white w-[600px] h-[550px] rounded-xl shadow-xl p-4 relative">
        <div className="flex justify-between mb-3">
          <h3 className="text-xl font-bold">انتخاب موقعیت مکانی</h3>
          <X className="cursor-pointer" onClick={close} />
        </div>

        <div className="w-full h-[400px] rounded-xl overflow-hidden">
          <MapContainer
            center={[35.6892, 51.389]} //Tehran Coordinates Defautl 
            zoom={12}
            className="w-full h-full"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationSelector />
            {marker && (
              <Marker position={marker} icon={markerIcon}></Marker>
            )}
          </MapContainer>
        </div>

        <button
          onClick={select}
          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl"
        >
          انتخاب این موقعیت
        </button>
      </div>
    </div>
  );
}

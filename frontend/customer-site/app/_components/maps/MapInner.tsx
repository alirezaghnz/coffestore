"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
export default function MapInner() {
  const [position, setPosition] = useState([35.6892, 51.3890]);

  function LocationPicker() {
    useMapEvents({
      click(e:any) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  }

  return (
    <MapContainer center={position} zoom={13} className="w-[100px] h-[100px]">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} />
      <LocationPicker />
    </MapContainer>
  );
}
"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapInner"), {
  ssr: false,
});

export default MapComponent;
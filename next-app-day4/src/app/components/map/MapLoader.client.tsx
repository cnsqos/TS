"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map.client"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 16,
        width: 420,
      }}
    >
      지도를 불러오는 중이다.
    </div>
  ),
});

export default function MapLoader() {
  return <Map />;
}
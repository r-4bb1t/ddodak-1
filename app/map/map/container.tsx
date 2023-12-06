"use client";

import { useEffect, useState } from "react";
import { Coordinates } from "@/types/map";
import Map from ".";
import Icons from "@/components/icons";

export default function MapContainer() {
  const [loc, setLoc] = useState<Coordinates>();

  const initLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLoc([position.coords.longitude, position.coords.latitude]);
    });
  };

  useEffect(() => {
    initLocation();
  }, []);

  return (
    <div className="relative w-full h-full">
      {loc && <Map loc={loc} />}
      <button
        className="btn btn-circle btn-ghost absolute bottom-4 left-4"
        onClick={() => {
          /* TODO: 현재 위치에서 검색 */
        }}
      >
        <Icons.GPS />
      </button>
    </div>
  );
}

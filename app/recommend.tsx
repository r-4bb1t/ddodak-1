"use client";

import Icons from "@/components/icons";
import CenterList from "@//components/center/list";
import { useSearchStore } from "./store/search-store";

export default function Recommend() {
  const { addr } = useSearchStore();

  return (
    <section className="flex flex-col">
      <div className="flex justify-between pl-7 pr-3">
        <div className="flex flex-col gap-0.5">
          <div className="font-bold text-sm">내 주변 상담 센터</div>
          <div className="flex items-center text-xs font-light gap-2">
            <Icons.GPS className="w-5 h-5 fill-black" />
            {addr}
          </div>
        </div>
        <button className="btn btn-ghost stroke-black">
          <div className="font-light text-[11px]">지도로 보기</div>
          <Icons.Map />
        </button>
      </div>
      <div className="mt-2 overflow-x-auto no-scrollbar">
        <div className="px-7 w-max">
          <CenterList />
        </div>
      </div>
    </section>
  );
}

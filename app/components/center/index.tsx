import { CenterType } from "@/types/center";
import Link from "next/link";

export default function Center({ center }: { center: CenterType }) {
  return (
    <Link href={`/center/${center.id}`} className="flex flex-col">
      <div className="w-28 h-28 rounded bg-gray-500 overflow-hidden">
        <img src={center.profileUrl} className="w-full h-full object-cover" />
      </div>
      <div className="text-xs font-medium mt-1">{center.name}</div>
      <div className="text-[10px] font-light">{center.address}</div>
    </Link>
  );
}

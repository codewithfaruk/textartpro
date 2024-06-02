import { faceData } from "@/libs/faces";
import Link from "next/link";
export default function Facelist() {
  let mergedName: string[] = [];

  mergedName.push(`All Lenny Faces`);

  faceData.forEach((entry) => {
    mergedName = mergedName.concat(entry.name);
  });
  return (
    <div className="flex flex-wrap justify-center gap-3 my-4 !text-neutral-50 overflow-x-scroll hide-scroll">
      {mergedName.map((item) => (
        <Link
          key={item}
          href={
            item === "All Lenny Faces"
              ? "/text-faces"
              : `/text-faces/${item.toLocaleLowerCase()}`
          }
          className={`bg-neutral-50 px-6 py-3 rounded-md capitalize border border-neutral-500 whitespace-nowrap !bg-gradient-to-tl from-[#833AB4] to-[#a838a8]`}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

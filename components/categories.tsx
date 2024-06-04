
import Link from "next/link";
import React from "react";

export default function Categories({
  currentFace,
  arrayData,
  path,
}: {
  currentFace?: string;
  arrayData: any[];
  path: string;
}) {
  let mergedName: string[] = [];

  arrayData.forEach((entry) => {
    mergedName = mergedName.concat(entry.name);
  });

  return (
    <section className="">
      <div className="flex gap-3 py-4 overflow-x-scroll hide-scroll">
        {mergedName.map((item) => (
          <Link
            key={item}
            href={`/${path ? path : ""}${path ? "/" : ""}${item.toLocaleLowerCase()}`}
            className={`bg-neutral-50 px-5 py-2 rounded-xl capitalize border whitespace-nowrap ${
              currentFace !== item
                ? "bg-[#c6d2e2] text-neutral-950"
                : "!bg-[#6758ff] text-[#fff]"
            }`}
          >
            {item.replaceAll("-", " ")}
          </Link>
        ))}
      </div>
    </section>
  );
}

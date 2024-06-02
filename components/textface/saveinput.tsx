"use client";
import { UseArtCollectionContext } from "@/context";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { MdClose } from "react-icons/md";

export default function SaveInput() {
  const { artCollection, setArtCollection } = UseArtCollectionContext();

  const [textAreaValue, setTextAreaValue] = useState("");

  const handleClick = () => {
    toast.success(`${artCollection.length} Face Copied to Clipboard`);

    navigator.clipboard.writeText(artCollection.join(" "));
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };
  return (
    <section className="sticky inset-0 z-10">
      <div className="border-2 border-[#9b389d] rounded-lg shadow-md">
        <div className="flex relative  !text-neutral-50 ">
          <textarea
            className="w-full rounded-xl bg-neutral-50 py-2 px-3 font-extralight text-lg text-neutral-900 rounded-t-lg focus:outline-none relative md:px-3 md:py-3"
            value={artCollection.join(" ")}
            onChange={handleChange}
          />
          <button
            className="bg-[#9a389b] hidden px-5 py-[0.5rem] rounded-lg md:block md:absolute md:right-3 md:bottom-1"
            onClick={() => handleClick()}
          >
            Copy
          </button>

          <button
            className="absolute bg-neutral-700 p-2 rounded-full right-2 top-2 md:right-5 md:top-1 md:p-1"
            onClick={() => setArtCollection([])}
          >
            <MdClose />
          </button>
        </div>
        <button
          className="bg-[#9a389b] px-5 py-[0.65rem] rounded-b w-full md:hidden"
          onClick={() => handleClick()}
        >
          Copy
        </button>
      </div>
    </section>
  );
}

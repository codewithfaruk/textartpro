"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdBookmark, MdClose } from "react-icons/md";

export default function Saveditems() {
  return (
    <section>
      <div className="fixed bottom-8 right-6 ">
        <Dialog.Root>
          <Dialog.Trigger className="text-3xl bg-neutral-50 text-neutral-900 shadow p-4 border rounded-full">
            <MdBookmark />
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-neutral-700/50 !blur-sm z-20" />
            <Dialog.Content className="fixed w-[90%]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <ShareModal />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}

const ShareModal = () => {
  const [textArts, setTextArts] = useState([]);
  const [textFaces, setTextFaces] = useState([]);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("textart");
    const storedFaceData = localStorage.getItem("textface");

    if (storedData) {
      // Parse the stored JSON string back into an array
      const parsedData = JSON.parse(storedData);
      // Sort the array by length in descending order
      parsedData.sort((a: any, b: any) => b.length - a.length);
      setTextArts(parsedData);
    }

    if (storedFaceData) {
      // Parse the stored JSON string back into an array
      const parsedData = JSON.parse(storedFaceData);
      // Sort the array by length in descending order
      parsedData.sort((a: any, b: any) => b.length - a.length);
      setTextFaces(parsedData);
    }
  }, []);

  const handleCopy = (e: React.MouseEvent<HTMLPreElement>) => {
    const textContent = e.currentTarget.textContent;

    if (textContent) {
      toast.success(`Copied to your Clipboard`);

      navigator.clipboard.writeText(textContent);
    }
  };

  const handleClear = () => {
    if (window.confirm("Want to clear all items?")) {
      localStorage.removeItem("textart");
      localStorage.removeItem("textface");
      toast.success("Items removed");
      setTextArts([]);
      setTextFaces([]);
    }
  };

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.2 }}
        exit={{ opacity: 0, y: 100 }}
        className="w-full bg-white rounded-2xl shadow md:max-w-xl md:mx-auto"
      >
        {" "}
        <div className="h-[80vh] overflow-y-scroll hide-scroll">
          <p className="font-semibold text-center my-3">Text Art</p>
          <div className="flex flex-wrap gap-4 p-4">
            {textArts.map((textArt, index) => (
              <div className="border p-3 rounded-xl" key={index}>
                <pre
                  style={{ whiteSpace: "pre-wrap", margin: "10px 0" }}
                  onClick={(e) => handleCopy(e)}
                >
                  {textArt}
                </pre>
              </div>
            ))}
          </div>
          <p className="font-semibold text-center my-3">Text Face</p>
          <div className="flex flex-wrap gap-4 p-4">
            {textFaces.map((textArt, index) => (
              <div className="border  px-6 py-1 rounded-xl" key={index}>
                <pre
                  style={{ whiteSpace: "pre-wrap", margin: "10px 0" }}
                  onClick={(e) => handleCopy(e)}
                >
                  {textArt}
                </pre>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-neutral-50 flex justify-evenly rounded-b-2xl">
          <button
            onClick={handleClear}
            className="text-red-500 btext-xl py-3 cursor-pointer text-center block"
          >
            Clear All
          </button>
          <Dialog.Close>
            <div className=" text-neutral-950 text-xl py-3 cursor-pointer">
              Close
            </div>
          </Dialog.Close>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

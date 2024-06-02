"use client";
import * as Dialog from "@radix-ui/react-dialog";
import Ads from "../ads";
import React, { useEffect, useState } from "react";
import {
  MdAdd,
  MdBookmarkAdd,
  MdBookmarkRemove,
  MdClose,
  MdCopyAll,
  MdMailOutline,
  MdShare,
} from "react-icons/md";
import toast from "react-hot-toast";
import useLocalStorage from "@/hooks/useLocalstorage";
import { UseArtCollectionContext } from "@/context";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion } from "framer-motion";
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FaFacebook,
  FaReddit,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import Share from "../share";
export default function TextFaceContainer({
  TextFaces,
  url,
}: {
  TextFaces: string[];
  url?: string;
}) {

  const [art, setArt] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const textContent = e.currentTarget.textContent;

    if (textContent) {
      setArt(textContent);

      textContent?.length <= 15
        ? toast.success(`${textContent} copied to your Clipboard`)
        : toast.success(`Copied to your Clipboard`);

      navigator.clipboard.writeText(textContent);
    }
  };

  return (
    <section className="mt-4 mb-8 relative !bg-[#eef2ff]" >
      
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {TextFaces.map((item, index) => (
          <div key={index}>
            <Dialog.Root>
              <Dialog.Trigger>
                <span
                  key={item}
                  className="bg-neutral-50 border shadow-sm text-neutral-900 px-5 py-3 rounded-lg inline-block hover:shadow transition hover:shadow-neutral-500"
                  onClick={(e) => handleClick(e)}
                >
                  {item}
                </span>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-neutral-700/50 !blur-sm z-20" />
                <Dialog.Content className="fixed w-[90%]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                  <CopyModal item={art} url={url ? url : "text-art"} />
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        ))}
      </div>
      <Ads />
    </section>
  );
}

const CopyModal = ({ item, url }: { item: string; url: string }) => {
  const [ref, { height }] = useMeasure();
  const [share, setShare] = useState(false);
  const [savedArt, setSaveArt] = useLocalStorage("textface", "");

  const { artCollection, setArtCollection } = UseArtCollectionContext();

  const handleCollectionArt = (art: string) => {
    toast.success("Added to the collection");
    setArtCollection((prevCollection) => [...prevCollection, art]);
  };

  const handleSaveFace = (art: string) => {
    setSaveArt(art);

    art?.length <= 15
      ? toast.success(
          `${art} ${
            savedArt.includes(item) ? "Removed" : "Saved"
          } on your Device`
        )
      : toast.success(
          `${savedArt.includes(item) ? "Removed" : "Saved"} on your Device`
        );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
        className="relative z-50 rounded-xl shadow text-neutral-50 bg-neutral-50 border border-neutral-700 md:max-w-sm md:mx-auto"
      >
        <Dialog.Close>
          <div className="absolute text-neutral-950 bg-neutral-50  border text-2xl p-2 rounded-full -right-5 -top-5 cursor-pointer">
            <MdClose />
          </div>
        </Dialog.Close>
        <motion.section
          initial={{}}
          animate={{ height }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <div ref={ref} className="px-4 pt-3 pb-5">
            <input
              className="block bg-white text-neutral-900 w-full text-center py-4 rounded-lg border-2 shadow-sm text-2xl focus:outline-none"
              value={item}
            />
            <p className="flex items-center justify-center gap-1 text-sm mt-2 text-neutral-900">
              <span className="flex items-center font-semibold gap-[0.125rem] text-green-500 animate-pulse">
                <MdCopyAll /> Copied
              </span>
              {"  "}
              to your clipboard
            </p>
            <div className="my-5 border-b border-neutral-300" />
            <div className="grid grid-cols-3 gap-3">
              <div
                className="cursor-pointer p-4 text-3xl flex justify-center items-start rounded-lg !bg-gradient-to-tl from-[#833AB4] to-[#a838a8]"
                onClick={() => handleCollectionArt(item)}
              >
                <MdAdd />
              </div>
              <div
                className="cursor-pointer p-4 text-3xl flex justify-center items-start rounded-lg !bg-gradient-to-tl from-[#833AB4] to-[#a838a8]"
                onClick={() => handleSaveFace(item)}
              >
                {savedArt.includes(item) ? (
                  <MdBookmarkRemove />
                ) : (
                  <MdBookmarkAdd />
                )}
              </div>
              <div
                className="cursor-pointer p-4 text-3xl flex justify-center items-start rounded-lg !bg-gradient-to-tl from-[#833AB4] to-[#a838a8]"
                onClick={() => setShare(!share)}
              >
                <MdShare />
              </div>
            </div>
            <Ads />
            <AnimatePresence mode="popLayout">
              {share && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="bg-neutral-50 border shadow rounded-lg mt-3 p-3"
                >
                  <motion.div
                    className="flex items-center justify-center gap-3  justify-items-center"
                    key={share ? 1 : 0}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <WhatsappShareButton
                      title={item}
                      //url={process.env.NEXT_PUBLIC_SITE as string}
                      url={" "}
                    >
                      <FaWhatsapp className="text-2xl h-10 w-10 bg-[#25D366] p-2 rounded-lg border border-transparent transition hover:border-neutral-500" />
                    </WhatsappShareButton>
                    <TelegramShareButton
                      title={item}
                      //url={process.env.NEXT_PUBLIC_SITE as string}
                      url={" "}
                    >
                      <FaTelegram className="text-2xl h-10 w-10 bg-[#24A1DE] p-2 rounded-lg border border-transparent transition hover:border-neutral-500" />
                    </TelegramShareButton>
                    <RedditShareButton
                      title={item}
                      //url={process.env.NEXT_PUBLIC_SITE as string}
                      url={" "}
                    >
                      <FaReddit className="text-2xl h-10 w-10 bg-[#FF4500] p-2 rounded-lg border border-transparent transition hover:border-neutral-500" />
                    </RedditShareButton>
                    <FacebookShareButton
                      title={item}
                      //url={process.env.NEXT_PUBLIC_SITE as string}
                      url={" "}
                    >
                      <FaFacebook className="text-2xl h-10 w-10 bg-[#4267B2] p-2 rounded-lg border border-transparent transition hover:border-neutral-500" />
                    </FacebookShareButton>
                    <TwitterShareButton
                      title={item}
                      //url={process.env.NEXT_PUBLIC_SITE as string}
                      url={" "}
                    >
                      <FaXTwitter className="text-2xl h-10 w-10 bg-neutral-950 p-2 rounded-lg border border-transparent transition hover:border-neutral-500" />
                    </TwitterShareButton>
                    <EmailShareButton
                      title={item}
                      //url={process.env.NEXT_PUBLIC_SITE as string}
                      url={" "}
                    >
                      <MdMailOutline className="text-2xl h-10 w-10 bg-neutral-700 p-2 rounded-lg border border-transparent transition hover:border-neutral-500" />
                    </EmailShareButton>
                  </motion.div>

                  <motion.div
                    exit={{ opacity: 0 }}
                    className="bg-neutral-100 mt-2 py-2 px-3 rounded-xl flex items-center gap-5"
                  >
                    <input
                      type="text"
                      defaultValue={`${process.env.NEXT_PUBLIC_SITE}text-faces/${url} `}
                      className="bg-neutral-100 w-full text-sm text-neutral-900 focus:outline-none "
                    />
                    <button
                      className="bg-purple-500 text-white px-3 py-2 rounded-xl"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `${process.env.NEXT_PUBLIC_SITE}text-faces/${url} `
                        );
                        toast.success("Link copied");
                      }}
                    >
                      Copy
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>
      </motion.div>
    </AnimatePresence>
  );
};

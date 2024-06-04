"use client";
import { Pacifico } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["cyrillic"],
});
// { subsets: ["latin"] }
const links = [
  {
    name: "Home",
    slug: "",
  },
  {
    name: "Text Art",
    slug: "text-art",
  },
  {
    name: "Text Faces",
    slug: "text-faces",
  },
  {
    name: "Bold Letters",
    slug: "bold-letters",
  },
  {
    name: "Privacy Policy",
    slug: "privacy-policy",
  },
];

export default function Header() {
  let [activeTab, setActiveTab] = useState(links[0].slug);
  let [open, setOpen] = useState(false);
  let [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (!previous) return;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <header className=" bg-[#833AB4] text-neutral-50 z-50 w-full">
      <div className="flex items-center justify-between py-5 px-8 lg:max-w-[85rem] lg:mx-auto">
        <Link
          href="/"
          className={`${pacifico.className} uppercase gap-2 flex flex-col items-center text-xl font-semibold `}
        >
          {/* <Image
            className="w-10 "
            src="/bigmod.io.svg"
            alt="singlesyntax.com"
            title="singlesyntax.com"
            width={500}
            height={500}
          /> */}
          Textartpro.com
          <span className="font-sans text-xs font-semibold bg-neutral-50 px-4 !py-[0.15rem] rounded-3xl text-neutral-900">'*•.¸♡ BOOKMARKS US ♡¸.•*'</span>
        </Link>
        <nav className="flex justify-center items-center">
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.slug}>
                <Link
                  href={`/${link.slug}`}
                  onClick={(e) => {
                    setActiveTab(link.slug);
                  }}
                  className={`${
                    activeTab === link.slug
                      ? " text-neutral-800"
                      : " hover:text-neutral-50"
                  } relative rounded-full px-3 py-1.5 text-sm font-medium   transition focus-visible:outline-2`}
                >
                  {/* <Link href={`/${link.slug}`}>{link.name}</Link> */}
                  {activeTab === link.slug && (
                    <motion.div
                      initial={false}
                      layoutId="bubble"
                      className="absolute inset-0 bg-white "
                      style={{ borderRadius: 9999 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative ">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:hidden flex items-center gap-5">
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger name="menu button">
                <span className="md:hidden text-xl">
                  <FiMenu />
                </span>
              </Dialog.Trigger>
              <AnimatePresence>
                {open && (
                  <Dialog.Portal forceMount>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50 z-20" />
                    <Dialog.Content
                      asChild
                      className="fixed top-[80px] w-full h-screen bg-gray-50 px-4 py-6 pb-8 rounded-t-2xl z-20"
                    >
                      <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "0" }}
                        exit={{ y: "100%" }}
                        transition={{
                          duration: 0.4,
                          type: "spring",
                          bounce: 0.3,
                          // stiffness: 1000,
                          // damping: 0.2,
                        }}
                      >
                        <div className="flex justify-end pb-4 pr-3 text-blue-500">
                          <Dialog.Close>Close</Dialog.Close>
                        </div>
                        <ul className="bg-white shadow-sm px-4 pt-2 pb-3 rounded-lg divide-y space-y-3 lg:hidden">
                          {links.map((link) => (
                            <li
                              key={link.slug}
                              className="pt-3 !text-neutral-900"
                            >
                              <Link
                                href={`/${link.slug}`}
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </Dialog.Content>
                  </Dialog.Portal>
                )}
              </AnimatePresence>
            </Dialog.Root>
          </div>
        </nav>
      </div>
    </header>
  );
}

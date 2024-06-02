"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { textArtData } from "@/libs/textart";
import {
  MdBookmarkAdd,
  MdBookmarkRemove,
  MdClose,
  MdCopyAll,
  MdMailOutline,
  MdShare,
} from "react-icons/md";
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
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useMeasure from "react-use-measure";
import useLocalStorage from "@/hooks/useLocalstorage";
import { AnimatePresence, motion } from "framer-motion";

import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF, FaRedditAlien } from "react-icons/fa6";
import { notFound } from "next/navigation";
import Infinitescroll from "@/components/infinitescroll";
import Categories from "@/components/categories";
import Image from "next/image";
import Ads from "../ads";
import { useInView } from "react-intersection-observer";

type paramsType = {
  textart: string;
};

export default function TextArtHome() {
  const [displayedData, setDisplayedData] = useState([textArtData[0]]);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      const loadMoreData = () => {
        setDisplayedData((prevData) => {
          const nextIndex = prevData.length;
          if (nextIndex < textArtData.length) {
            return [...prevData, textArtData[nextIndex]];
          }
          return prevData;
        });
      };

      const timeoutId = setTimeout(loadMoreData, 1300); // 2 second delay

      return () => clearTimeout(timeoutId); // Clear timeout if effect dependencies change
    }
  }, [inView]);

  const handleClick = (e: React.MouseEvent<HTMLPreElement>) => {
    const textContent = e.currentTarget.textContent;

    if (textContent) {
      toast.success(`Copied to your Clipboard`);

      navigator.clipboard.writeText(textContent);
    }
  };

  const handleCopy = (item: string) => {
    toast.success(`Copied to your Clipboard`);

    navigator.clipboard.writeText(item);
  };
  return (
    <main className="mx-4 !bg-[#eef2ff]">
      <section className="mx-5 lg:max-w-7xl md:mx-auto">
        <Categories
          arrayData={textArtData}
          currentFace={"love-text-art"}
          path="text-art"
        />
        <Ads/>
        <div >
          {displayedData.map((section, index) => (
          <div key={index}>
              <h2 className="text-xl text-neutral-900 font-bold my-4 text-center capitalize">{section.name.replaceAll("-", " ")}</h2>
            <div className="flex flex-col justify-center gap-6 md:flex-row md:flex-wrap overflow-hidden pb-6 hide-scroll">
            {  section.data.map((item, index) => (
                  <div
                  className="flex flex-col justify-between bg-neutral-50 shadow-md rounded-xl hover:bg-purple-300 transition"
                  key={index}
                            >
                  <Dialog.Root key={index}>
                    <Dialog.Trigger className="flex flex-col justify-center items-center h-full w-full md:px-12">
                      <div className=" rounded-xl text-neutral-900 transition">
                        <pre
                          className="!h-full text-xs py-8"
                          onClick={(e) => handleClick(e)}
                        >
                          {item}
                        </pre>
                      </div>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="fixed inset-0 bg-neutral-700/50 !blur-sm z-20" />
                      <Dialog.Content className="fixed w-[90%]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                        <CopyModal item={item} />
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                  <div className="flex rounded-b-xl border-t border-neutral-300">
                    <div
                      className="flex justify-center cursor-pointer py-3 text-[1.3rem] w-full text-neutral-800"
                      onClick={() => handleCopy(item)}
                    >
                      <MdCopyAll />
                    </div>
                    <div className="border-r border-neutral-300" />
                    <Dialog.Root key={item}>
                      <Dialog.Trigger className=" w-full">
                        <div className="flex justify-center py-3 text-[1.3rem] text-neutral-800">
                          <MdShare />
                        </div>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-neutral-700/50 !blur-sm z-20" />
                        <Dialog.Content className="fixed w-[90%] bg-neutral-50 p-8 rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 md:max-w-xl md:mx-auto">
                          <ShareModal item={item} url="love-text-art" />
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </div>
                            </div>
              ))}
            </div>
          </div>
          ))}
        </div>

        {displayedData.length < textArtData.length && (
        <div ref={ref} className="text-neutral-700 text-center">
        <svg
          className="animate-spin mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          width="50"
          height="50"
          style={{
            shapeRendering: "auto",
            display: "block",
            background: "transparent",
          }}
        >
          <g data-idx="1">
            <circle
              fill="none"
              strokeWidth="10"
              stroke="#fafafa"
              r="30"
              cy="50"
              cx="50"
              data-idx="2"
            ></circle>
            <circle
              fill="none"
              strokeLinecap="round"
              strokeWidth="8"
              stroke="#ba0ce9"
              r="30"
              cy="50"
              cx="50"
              data-idx="3"
              transform="matrix(-0.12535141161279867,-0.9921124047237182,0.9921124047237182,-0.12535141161279867,6.66195034445402,105.87319081682585)"
              strokeDasharray="32.4214px, 156.074px"
            ></circle>
          </g>
          <text
            data-watermark="true"
            textAnchor="middle"
            dominantBaseline="middle"
            strokeOpacity="0.1"
            fill="black"
            fillOpacity="0.1"
            stroke="white"
            strokeWidth="1"
            fontSize="5.0"
            x="50"
            y="50"
            data-idx="7"
            style={{ opacity: 1 }}
          >
            LOADING.IO
          </text>
        </svg>
      </div>
      )}
      </section>
      <Ads/>
 
  <article className="prose bg-neutral-50 px-3 py-4 rounded-xl my-3 md:max-w-7xl md:mx-auto">
   <h1>ASCII Text Art Copy and Paste</h1>
   <p>
     ASCII art is a dynamic and versatile digital art form that uses
     characters from the ASCII character set (American Standard Code for
     Information Interchange) to create simple to complex text art images.
     Because it uses the ASCII format, these text art symbols can be
     inserted almost anywhere. This is why ASCII art generators have become
     such a popular digital art format and are used in various areas like
     social media posts, forum signatures, video games, graphic design
     posts, etc. Text art copy paste characters are used by almost everyone
     who is familiar with the internet. Hence, we can say that text to art
     has a huge significance in our day-to-day life.
   </p>
   <Image  alt="textartpro.com"  title="textartpro.com"
          src="/textartpro.jpg"
          width={400}
          height={200}
          className="w-full max-w-full"
        />
        <h2>What is ASCII Text Art Copy and Paste?</h2>
        <p>
          ASCII is a standard code-based digital art that is easy to copy and
          paste into almost every software. This means you can use text art
          symbols as part of your username, virtual character, personalized
          emojis, personalized cards, and other complex creative purposes. ASCII
          art for Instagram comments and text art for Instagram bios have become
          extremely popular among the younger generation.
        </p>
        {<Ads/>}
        <p>
          ASCII art originated in the 1960s, which easily makes it one of the
          oldest digital art forms to exist. Today, ASCII has developed into a
          much more capable digital tool and is used by almost everyone in the
          industry. You can go to any text art website and choose ASCII art from
          there. Then you can simply copy and paste it to any location.
        </p>
        <h2>Creating ASCII Art - Pro Text Art in The Modern World</h2>
        <p>
          Just like in traditional art, basic characters like lines and dots are
          used in ASCII text art to create simple elements. ASCII art small
          characters can make modern emojis, stickers, and even fancy digital
          letter art.
        </p>
        <p>
          A very popular method of creating text art ASCII is to use a program
          or website which already has a vast store of ASCII text art. These
          websites allow you to click on your desired text art symbol and copy
          it. Then you can paste it anywhere! Our website allows you to browse
          text art emojis, text art greetings, text art callouts, text art
          love-themed graphics, etc., from several different categories. This
          means you can discover and use instant text art using a text art copy
          and paste website. If you are interested in this, you have come to the
          right place!
        </p>
        <p>
          On websites like ours, you can type in ASCII art name and discover
          ready-made text art. For this, go to the top of the homepage. You will
          find several different categories with hundreds of ASCII text art
          graphics under each category. Click on the category of your choice and
          pick the perfect, unique Text art cat, Text art gun, etc. graphics and
          use it wherever you want to!
        </p>
        <h2>Share Exciting ASCII Text Art with Family and Friends!</h2>
        <p>
          On our website, you will find hundreds of ready-made ASCII art that
          you can also share with your friends and family! Sharing these
          attractive and original text art graphics will allow your friends to
          send beautiful messages to you and others almost daily. They will be
          able to follow the latest trends just like you! Become a part of the
          coolest friend group and family group by using the latest birthday
          text art, Christmas text art, love text art, etc., on special
          occasions and make memorable memories!
        </p>
        <h2>
          How to Use Text Art ASCII Generator? Functions of ASCII Text Art
        </h2>
        <p>
          Text art copy paste has many functions. These functions are what have
          made ASCII so popular and widely used by modern users. Even today the
          same principles that are used in ASCII text formation are used by
          other, more complex programming formats. What are the major functions
          of text art ASCII generators?
        </p>
        <ul>
          <li>
            Get hundreds of choices for ASCII text art from various categories
          </li>
          <li>
            Find unique and creative text to art for all occasions on our
            website! Some of the most popular categories on Text Art Pro are
            Love Text Art, Good Morning Text Art, Birthday Text Art, etc. All
            categories are regularly updated so that you can stay on top of
            social media trends and use popular text art without difficulty!
          </li>
          <li>
            Discover ASCII digital art within seconds using ASCII users can
            create surprisingly beautiful social media bio and comments within
            minutes. Finding the correct ASCII text art is now super easy with
            our website! Instead of spending time on exploring and creating
            ASCII text art comment or graphics, you can simply choose from our
            top notch ASCII category text art and copy paste the one that is
            perfect for you! Save on valuable time with our website!
          </li>
          <li>
            Create attractive Instagram and gaming bio You can personally use
            text art small characters and images to create a unique and
            attractive Instagram and gaming bio. Many users create original
            ASCII art for Instagram bio which helps them gain more followers and
            increase their engagement. You can also develop your gaming
            personality by using the right text art in your bio.
          </li>
          <li>
            Make personalized, effortful messages for special occasions there
            are popular ASCII text art creations available for birthday posts
            and celebrations, valentine's day posts and celebrations etc. 'Text
            art heart', 'ASCII art love' etc. are some of the most commonly
            searched phrases by users looking for expressive, instant ASCII text
            art. For example, you can use love text art for a Valentine's Day
            message, and birthday text art for a birthday celebration message!
          </li>
          <li>
            Create eye-catching comments on social media You can also use
            different text art ASCII and combine them together to make
            attractive social media posts! Create delightful social media
            comments to increase social media engagement on Instagram, Facebook,
            Twitter, etc. Text art comments are very popular these days and you
            can use our text art copy paste feature to get free access to text
            to art graphics. The correct text art comment can make you popular
            among both friends and strangers, and even impress your role models!
            You can use text art ASCII comment to launch a successful business
            on Facebook, Instagram, and WhatsApp.
          </li>
        </ul>
        {<Ads/>}
        <h2>Conclusion</h2>
        <p>
          Text art ASCII is an important digital art form used today. Its
          importance spans its versatility as equally as its accessibility.
          Indeed, ASCII text art is accessible to almost anyone. You can use
          this website to find text art symbols and ASCII art emojis for any
          platform. You can use these art specimens in online and offline
          digital projects. It is a graphics tool that has a rich and versatile
          history. It is one of the classics that will never become less
          important than it is.
        </p>
      </article>
     
    </main>
  );
}



const CopyModal = ({ item }: { item: string }) => {
  const [ref, { height }] = useMeasure();
  const [share, setShare] = useState(false);
  const [savedArt, setSaveArt] = useLocalStorage("textart", "");

  const handleCopyFace = (art: string) => {
    navigator.clipboard.writeText(art);
    toast.success("Copied to clipboard");
  };

  const handleSaveFace = (art: string) => {
    setSaveArt(art);

    toast.success(
      `${savedArt.includes(item) ? "Removed" : "Saved"} on your Device`
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.2 }}
        exit={{ opacity: 0, y: 100 }}
        className="relative z-50 rounded-xl px-4 shadow text-neutral-50 bg-neutral-50 border border-neutral-700 md:max-w-sm md:mx-auto"
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
          <div ref={ref} className="pt-3 pb-5">
            {/* <pre
              className="block bg-white text-neutral-900 w-full text-center py-4 rounded-lg border-2 shadow-sm text-[0.75rem] focus:outline-none"
          >
            {item}</pre>   */}

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
                onClick={() => handleCopyFace(item)}
              >
                <MdCopyAll />
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
            <Ads/>
            <AnimatePresence mode="popLayout">
              {share && (
                <motion.section
                  key={item}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0, y: -100 }}
                  // transition={{ duration: 0.2 }}
                >
                  <p className="text-sm text-center mt-3 text-neutral-900 font-semibold pb-4">
                    Please Share (☞ ͡° ͜ʖ ͡°)☞
                  </p>
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex gap-3 justify-items-center items-center p-3 rounded-lg text-neutral-50">
                      <WhatsappShareButton title={item} url={" "}>
                        <FaWhatsapp className="text-xs h-10 w-10 bg-[#25D366] p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
                      </WhatsappShareButton>
                      <TelegramShareButton title={item} url={" "}>
                        <FaTelegramPlane className="text-xs h-10 w-10 bg-[#24A1DE] p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
                      </TelegramShareButton>
                      <RedditShareButton title={item} url={" "}>
                        <FaRedditAlien className="text-xs h-10 w-10 bg-[#FF4500] p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
                      </RedditShareButton>
                      <FacebookShareButton title={item} url={" "}>
                        <FaFacebookF className="text-xs h-10 w-10 bg-[#4267B2] p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
                      </FacebookShareButton>

                      <EmailShareButton title={item} url={" "}>
                        <MdMailOutline className="text-xs h-10 w-10 bg-neutral-700 p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
                      </EmailShareButton>
                    </div>
                  </div>
                  <div className="bg-neutral-100 mt-2 py-2 px-3 rounded-xl flex items-center gap-5">
                    <input
                      type="text"
                      defaultValue={process.env.NEXT_PUBLIC_SITE}
                      className="bg-neutral-100 w-full text-sm text-neutral-900 focus:outline-none "
                    />
                    <button
                      className="bg-purple-500 text-white px-3 py-2 rounded-xl"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          process.env.NEXT_PUBLIC_SITE as string
                        );
                        toast.success("Link copied");
                      }}
                    >
                      Copy
                    </button>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </motion.section>
      </motion.div>
    </AnimatePresence>
  );
};

const ShareModal = ({ item, url }: { item: string; url: string }) => {
  return (
    <AnimatePresence>
      <motion.section
        key={item}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.2 }}
        exit={{ opacity: 0, y: 100 }}
      >
        <p className="text-sm text-center text-neutral-900 font-semibold pb-4">
          Please Share (☞ ͡° ͜ʖ ͡°)☞
        </p>
        <div className="flex justify-center items-center gap-2">
          <div className="flex gap-3 justify-items-center items-center p-3 rounded-lg text-neutral-50">
            <WhatsappShareButton title={item} url={" "}>
              <FaWhatsapp className="text-xs h-10 w-10 bg-[#25D366] p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
            </WhatsappShareButton>
            <TelegramShareButton title={item} url={" "}>
              <FaTelegramPlane className="text-xs h-10 w-10 bg-[#24A1DE] p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
            </TelegramShareButton>
            <RedditShareButton title={item} url={" "}>
              <FaRedditAlien className="text-xs h-10 w-10 bg-[#FF4500] p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
            </RedditShareButton>
            <FacebookShareButton title={item} url={" "}>
              <FaFacebookF className="text-xs h-10 w-10 bg-[#4267B2] p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
            </FacebookShareButton>

            <EmailShareButton title={item} url={" "}>
              <MdMailOutline className="text-xs h-10 w-10 bg-neutral-700 p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
            </EmailShareButton>
          </div>
        </div>
        <div className="bg-neutral-100 mt-2 py-2 px-3 rounded-xl flex items-center gap-5">
          <input
            type="text"
            defaultValue={process.env.NEXT_PUBLIC_SITE + url}
            className="bg-neutral-100 w-full text-sm text-neutral-900 focus:outline-none "
          />
          <button
            className="bg-purple-500 text-white px-3 py-2 rounded-xl"
            onClick={() => {
              navigator.clipboard.writeText(process.env.NEXT_PUBLIC_SITE + url);
              toast.success("Link copied");
            }}
          >
            Copy
          </button>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

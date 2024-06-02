import { UseArtCollectionContext } from "@/context";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF, FaRedditAlien, FaWhatsapp } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";

export default function Share({ text }: { text: string[] }) {
  return (
    <div className="flex justify-center items-center gap-2">
      <p className="text-xs text-neutral-900 font-semibold">
        Please Share ( ͡° ͜ʖ ͡°)
      </p>
      <div className="flex gap-3 justify-items-center items-center p-3 rounded-lg">
        <WhatsappShareButton
          title={text.join(" ")}
          // url={process.env.NEXT_PUBLIC_SITE as string}
          url={" "}
        >
          <FaWhatsapp className="text-xs h-10 w-10 bg-[#25D366] p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
        </WhatsappShareButton>
        <TelegramShareButton
          title={text.join(" ")}
          // url={process.env.NEXT_PUBLIC_SITE as string}
          url={" "}
        >
          <FaTelegramPlane className="text-xs h-10 w-10 bg-[#24A1DE] p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
        </TelegramShareButton>
        <RedditShareButton
          title={text.join(" ")}
          // url={process.env.NEXT_PUBLIC_SITE as string}
          url={" "}
        >
          <FaRedditAlien className="text-xs h-10 w-10 bg-[#FF4500] p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
        </RedditShareButton>
        <FacebookShareButton
          title={text.join(" ")}
          // url={process.env.NEXT_PUBLIC_SITE as string}
          url={" "}
        >
          <FaFacebookF className="text-xs h-10 w-10 bg-[#4267B2] p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
        </FacebookShareButton>

        <EmailShareButton
          title={text.join(" ")}
          // url={process.env.NEXT_PUBLIC_SITE as string}
          url={" "}
        >
          <MdMailOutline className="text-xs h-10 w-10 bg-neutral-700 p-1 rounded-lg border border-transparent transition hover:border-neutral-500" />
        </EmailShareButton>
      </div>
    </div>
  );
}

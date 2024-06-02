"use client"
import { Adsense } from "@ctrl/react-adsense";

export default function Ads() {
  return (
    <section className="text-neutral-500 my-3 w-full mx-auto">
      <div>
        {/* <div className="!w-full h-48 bg-slate-200 rounded-lg border border-neutral-300 flex justify-center items-center">

        ADS
        </div> */}

        <Adsense
        client="ca-pub-1122151430475284"
        slot="7671286437"
        style={{ display: "block" }}
        layout="in-article"
        format="fluid"
      />
      </div>
    </section>
  );
}

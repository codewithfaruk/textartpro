import TextArt from "@/components/textart/textart";
import { textArtData } from "@/libs/textart";
import React from "react";

type paramsType = {
  textart: string;
};

export async function generateMetadata({ params }: { params: paramsType }) {
  const selectedObject = textArtData.find((obj) => obj.name === params.textart);

  return {
    title: `${selectedObject?.name.replaceAll(
      "-",
      " "
    )} Text Art [Copy and Paste] ASCII pictures and Fonts`,
    description: `${selectedObject?.name.replaceAll(
      "-",
      " "
    )} Text Art ASCII pictures and Fonts Copy and Paste, Popular pasteable digital age art form.`,
  };
}

export default function Page({ params }: { params: paramsType }) {
  return <TextArt params={params} />;
}

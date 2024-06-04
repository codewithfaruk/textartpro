
import TextFaceHome from "@/components/textface/textfacehome";

import { faceData } from "@/libs/faces";
import React from "react";

export async function generateMetadata() {
  const selectedObject = faceData.find((obj) => obj.name === "cute");

  return {
    title:
      `${selectedObject?.name} Lenny Faces - ${selectedObject?.data.slice(
        0,
        5
      )}` || "Lenny Face ( ͡° ͜ʖ ͡°) - All Text Faces Copy and Paste [Updated]",
    description: `${
      selectedObject?.name
    } Lenny Faces Copy and Paste ${selectedObject?.data.slice(0, 7)}`,
  };
}

export default function Page() {


  return <TextFaceHome/> 

}

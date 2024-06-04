import { notFound } from "next/navigation";
import { faceData } from "@/libs/faces";

import TextFaceContainer from "@/components/textface/textfacecontainer";

import SaveInput from "@/components/textface/saveinput";
import Categories from "@/components/categories";
import Facelist from "@/components/textface/facelist";
import Ads from "@/components/ads";

type paramsType = {
  textface: string;
};

export async function generateMetadata({ params }: { params: paramsType }) {
  const selectedObject = faceData.find((obj) => obj.name === params.textface);

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

export default function page({ params }: { params: paramsType }) {
  const selectedObject = faceData.find((obj) => obj.name === params.textface);
  if (!selectedObject) {
    notFound();
  }

  return (
    <main className="mx-4 !text-neutral-50 xl:max-w-7xl xl:mx-auto">
      {/* <Facecategories currentName={params.textface} /> */}
      <Categories
        currentFace={params.textface}
        arrayData={faceData}
        path="text-faces"
      />
      <SaveInput />
      <Ads/>
      <TextFaceContainer
        TextFaces={selectedObject.data}
        url={params.textface}
      />
       {/* <Infinitescroll
        currentName={params.textface}
        arrayData={faceData}
        path="text-faces"
      />  */}

{/* <InfinitescrollforTextFace
 currentName={params.textface}
 arrayData={faceData}
 path="text-faces"
/> */}
      <Facelist />
      <Ads />
    </main>
  );
}


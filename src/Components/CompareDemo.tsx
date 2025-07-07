import React from "react";
import { Compare } from "./ui/compare";


export default function CompareDemo({ afterImage, beforeImage }) {
  return (
    <div className=" h-[500px] px-1  flex items-center justify-center ">
      <div className=" border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800  w-full h-full">
        <Compare
          firstImage={beforeImage}
          secondImage={afterImage}
          firstImageClassName="bg-cover bg-center"
          secondImageClassname="bg-cover"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
}

"use client";

import Lottie from "lottie-react";
import animationData from "@/lottieFiles/Stain.json";

export default function CreaitorLoading() {
  return (
    <div className="flex justify-center items-center  ">
      <div className="w-72 h-72 ">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
}

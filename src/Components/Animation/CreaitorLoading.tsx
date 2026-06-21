"use client";

import dynamic from "next/dynamic";
import animationData from "@/lottiefiles/stain.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function CreaitorLoading() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-72 h-72">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
}

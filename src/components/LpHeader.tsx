import React from "react";
import LpNavigationMenu from "./LpNavigationMenu";

export default function LpHeader() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('/background-image.jpg')] filter grayscale bg-cover bg-center bg-no-repeat opacity-80" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <LpNavigationMenu />
      </div>
    </div>
  );
}

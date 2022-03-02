import React from "react";
import Logo from "../icons/Logo.js";

export default function Title() {
  return (
    <div className="w-full flex flex-col items-center justify-center sm:col-span-2 mt-8">
      <div className="flex items-center w-full justify-center pb-2">
        <Logo />
      </div>
      <h3 className="uppercase text-text-transparent font-space text-xs md:text-sm lg:text-md font-bold tracking-widest px-8">
        a covid safe interactive art installation
      </h3>
    </div>
  );
}

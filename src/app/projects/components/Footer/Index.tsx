"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-[45rem] w-full mt-4 rounded-md bg-neutral-950 relative flex flex-col items-center justify-center ">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Let&apos;s work together
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Let me know how i can be of service.
        </p>
        <input
          type="text"
          placeholder="mansurakidah@gmail.com"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}

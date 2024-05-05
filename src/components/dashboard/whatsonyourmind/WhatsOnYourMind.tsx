"use client"
import React from "react";
import { useUserContext } from "@/context";
import Image from "next/image";
export function WhatsOnYourMind() {
    const { user, loading } = useUserContext();
  return (
    <div className="w-full z-10  py-3 px-2 xl:w-[990px]">
      <button
        data-e2e=""
        className="  mx-auto flex  cursor-pointer overflow-auto rounded-2xl bg-white p-4 text-left text-kimberly shadow-md hover:drop-shadow-sm  w-full"
        class-list="bg-mist hover:bg-dust"
      >
        <span className="mr-2 flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
          {loading ? (
            <div className="inline-block size-[38px] rounded-full ring-2 ring-white"></div>
          ) : (
            user && (
              <Image
                className="inline-block size-[38px] rounded-full ring-2 ring-white"
                src={user?.userdp}
                  alt={user?.username}
                  height={200}
                  width={200}
              />
            )
          )}
        </span>
        <span className=" cursor-text top-0 bg-[#F8F7FD] !m-0 flex h-10 flex-grow  flex-row items-center gap-4 !truncate rounded-lg bg-steam px-4 text-kimberly duration-150 group-hover:bg-mist hover:border-dust">
          <span className="relative flex w-full items-center  text-sm truncate  text-[#5C5C66]">
            <span className="mr-2 animate-ping">|</span>Click to Start Creating
            🚀
          </span>
        </span>
      </button>
    </div>
  );
}

export default WhatsOnYourMind;

import Image from 'next/image';
import React from 'react';
import Logo from "@/resources/svg/logo.svg";

export  function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen  gap-4 ease-in-out fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-[#F8F7FD] overflow-hidden scrolltrack">
    <div className="h-fit bg-black rounded-md  w-24 flex animate-fade-from-top items-center justify-center ">
      <Image
        src={Logo}
        width={100}
        height={100}
        alt="logo"
        draggable={false}
      />
    </div>
    <p className=" w-full text-center animate-fade-from-bottom text-dark text-[20px] ">
      Good morning, Prince! <br /> Coffee or tea to start your day?
    </p>
  </div>
  )
}


export default Welcome;
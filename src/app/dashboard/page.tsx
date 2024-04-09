"use client";
import {
  Herosection,
  WhatsOnYourMind,
  DashboardDraggable,
} from "@/components/dashboard";

export default function page() {
  return (
    <div className="h-auto w-full ">
      <Herosection />
      <div className="w-full h-full  lg:px-4  mx-auto  lg:justify-center items-center lg:flex lg:flex-col max-w-[1280px]">
        <WhatsOnYourMind />
        <div className=" w-full h-auto ">
          <DashboardDraggable />
        </div>
      </div>
    </div>
  );
}

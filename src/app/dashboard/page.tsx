"use client";
import {
  Herosection,
  WhatsOnYourMind,
  DashboardDraggable,
} from "@/components/dashboard";
import InviteTeam from "@/components/dummy/InviteTeam";
import Setuporganization from "@/components/dummy/setup-organization";
import Setupteam from "@/components/dummy/Setupteam";
import Teamsize from "@/components/dummy/Teamsize";

export default function page() {
  

 
  return (
    <div className="h-auto w-full ">
      <Herosection />
      <div className="w-full h-full  lg:px-4  mx-auto  lg:justify-center items-center lg:flex lg:flex-col max-w-[1280px]">
        <WhatsOnYourMind />
        <div className=" w-full h-auto ">
          <DashboardDraggable />
          {/* <Setuporganization /> */}
          {/* <Teamsize /> */}
          {/* <Setupteam /> */}
          {/* <InviteTeam /> */}
        </div>
      </div>
    </div>
  );
}

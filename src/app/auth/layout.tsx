"use client";
import React, { useState } from "react";

import Signedhoc from "@/helper/hoc/signedhoc";
import { useUserContext } from "@/context";
export function Layout({ children }: { children: React.ReactNode }) {




  return (
    <div className="z-10">
      <main
       
      >
       

          <div className=" ">{children}</div>
         
      </main>
    </div>
  );
}

const layout = Signedhoc(Layout);
export default layout;

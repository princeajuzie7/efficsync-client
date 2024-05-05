"use client";
import React, { useState } from "react";
import NotSignedhoc from "@/helper/hoc/notSignedhoc";
export  function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="z-10">
      <main
      
      >
       
      
          <div className=" ">{children}</div>
         
       
      </main>
    </div>
  );
}

const layout = NotSignedhoc(Layout);
export default layout;
"use client";
import React, { useState } from "react";
import NotSignedhoc from "@/helper/hoc/notSignedhoc";
  function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="z-10">
      <main
      
      >
       
      
          <div >{children}</div>
         
       
      </main>
    </div>
  );
}

const layout = NotSignedhoc(Layout);
export default layout;
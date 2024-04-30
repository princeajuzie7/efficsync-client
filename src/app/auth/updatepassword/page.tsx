"use client"
import { UpdateComponent } from "@/components/auth";
import React from "react";

import HashLoader from "react-spinners/HashLoader";


export default function Page() {
   
     
         
  return (
    <React.Suspense
      fallback={
        <div>
          <HashLoader
            color="#2563EB"
            size={100}
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      }
    >
      <UpdateComponent />
      
    </React.Suspense>
  );
}

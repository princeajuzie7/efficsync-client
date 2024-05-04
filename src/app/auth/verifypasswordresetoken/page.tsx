"use client"
import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import { VerifyPaasowrdTokenComp } from "@/components/auth";
export default function Page() {
  return (
    <div>
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
        <VerifyPaasowrdTokenComp />
      </React.Suspense>
    </div>
  );
}

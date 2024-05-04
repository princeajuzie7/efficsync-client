"use client"
import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import { VerifyComponent } from '@/components/auth';
/**
 * @description This component is the main page component that uses React Suspense to handle loading states.
 * It renders a HashLoader as a fallback while the VerifyComponent is being loaded.
 * @returns {JSX.Element} A React component that renders a div containing a HashLoader as fallback and a VerifyComponent.
 */
export default function Page(): JSX.Element {
  return (
    <div>
      <React.Suspense fallback={<div><HashLoader color="#2563EB" size={100}  style={{width: "100px", height: "100px"}} /></div>}>
        <VerifyComponent />
      </React.Suspense>
    </div>
  );
}

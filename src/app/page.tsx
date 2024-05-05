"use client";
import Image from "next/image";
import React from "react";
import { redirect } from "next/navigation";
export default function Home() {
  React.useEffect(() => {
    redirect("/dashboard");
  }, []);
  return <></>;
}

import React from "react";
import { redirect } from "next/navigation";
import { useUserContext } from "@/context";

function Signedhoc(Component: React.ComponentType<any>) {
  return function Hoc(props: any) {

    const { user, loading } = useUserContext();
    console.log("Userhoc:", user); // Log the user value

    if (!user) {

      redirect("/auth/signin");
    }

    return <Component {...props} />;
  };
}

export default Signedhoc;

"use client";
import React from "react";
import { apiResponse } from "@/utils";

interface User {
  username: string;
  _id: string;
  email: string;

}

interface AuthenticatedContextInt {
  user: object;
  setuser: React.Dispatch<React.SetStateAction<User>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  SaveUser: (user: User) => void;
}
const AuthenticatedContext = React.createContext<
  AuthenticatedContextInt 
  >({} as AuthenticatedContextInt);


export function AuthenticatedContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setuser] = React.useState<User>({} as User);
  const [loading, setLoading] = React.useState<boolean>(false);
 

  function SaveUser(user: User) {
  return   setuser(user);
  }
  const fetchCurrentUser = async () => {
    try {
      const response = await apiResponse.get("user/getactiveuser", {
        withCredentials: true,
      });
      if (response.status === 200) {
        SaveUser(response.data);
        console.log(response.data);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchCurrentUser();
  },[]);

  if (loading) {
    return <div className="flex text-center text-2xl text-green-500">Loading...</div>;
  }


  return (
    <AuthenticatedContext.Provider
      value={{ user, setuser, loading, setLoading, SaveUser }}
    >
      {children}
    </AuthenticatedContext.Provider>
  );
}


/**
 * 
 * @returns current user for authentication
 * @throws Error if user is not authenticated
 */

export function useUserContext() {
  if (AuthenticatedContext === undefined) {
    throw new Error(
      "Authenticated context cannot be use outside of the application"
    );
  }
  return React.useContext(AuthenticatedContext);
}

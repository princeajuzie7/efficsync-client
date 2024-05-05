"use client";
import React from "react";
import { apiResponse } from "@/utils";
import HashLoader from "react-spinners/HashLoader";
export interface User {
  _id: string;
  username: string;
  email: string;
  userdp: string;
  emailVerified: boolean;
  createdAt: number;
  updatedAt: number;
  __v: number;
}

interface AuthenticatedContextInt {
  user: User | null;
  setuser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthenticatedContext = React.createContext<AuthenticatedContextInt>(
  {} as AuthenticatedContextInt
);

export function AuthenticatedContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setuser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const fetchCurrentUser = async () => {
    setLoading(true);
    try {
      const response = await apiResponse.get("user/getactiveuser", {
        withCredentials: true,
      });
      if (response.status === 200) {
       
        const userdata = response.data?.user
        setuser(userdata);
     
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <HashLoader color="#2563EB" size={50} />
      </div>
    );
  }
  return (
    <AuthenticatedContext.Provider
      value={{ user, setuser, loading, setLoading }}
    >
      {children}
    </AuthenticatedContext.Provider>
  );
}

export function useUserContext() {
  if (AuthenticatedContext === undefined) {
    throw new Error(
      "Authenticated context cannot be use outside of the application"
    );
  }
  return React.useContext(AuthenticatedContext);
}

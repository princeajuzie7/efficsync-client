"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
import { apiResponse } from "@/utils";
import HashLoader from "react-spinners/HashLoader";
import { useRouter } from "next/navigation";
export function VerifyPaasowrdTokenComp() {
  const { get } = useSearchParams();
  const token = get("token");

  const [loading, setLoading] = React.useState(false);
  const [verifymeesage, setverifymessage] = React.useState(false);
  const [error, setError] = React.useState("");
  const router = useRouter();
  React.useEffect(() => {
    const verifyEmail = async () => {
      try {
        setLoading(true);
        const response = await apiResponse.post(
          `auth/verifypasswordresetoken`,
          {
            token: token,
          }
        );

        const data = response.data;

        if (response.status === 200) {
          console.log("data", data);
          setLoading(false);
          setverifymessage(data?.message);
          setTimeout(() => {
            router.push(`/auth/updatepassword?token=${token}`);
          }, 1000);
          return;
        } else {
            setLoading(false);
            router.push('/auth/forgotpassword');
          alert(data.message);
        }
      } catch (error: any) {
        console.log(error);
        setLoading(false);
        setTimeout(() => {
          setError(error?.response?.data.message);
        }, 200);
      }
    };

    verifyEmail();
  }, [token, router]);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center">
          <HashLoader
            color="#2563EB"
            size={50}
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      ) : verifymeesage ? (
        <p className="text-2xl text-green-500 text-center justify-center items-center">
          Verified Successfully. You can now update your password
        </p>
      ) : (
        <p className="text-2xl text-red-600 text-center justify-center items-center">
          {" "}
          {error} please double check your verification link
        </p>
      )}
    </div>
  );
}

export default VerifyPaasowrdTokenComp;

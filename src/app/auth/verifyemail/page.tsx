"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation';
import { redirect } from 'next/navigation';
import { apiResponse } from '@/utils';
import HashLoader from "react-spinners/HashLoader";
import { useRouter } from 'next/navigation';
export default function Page() {
   const { get} = useSearchParams()
  const Emailtoken = get('token')
  const [loading, setLoading] = React.useState(false)
const [verifymeesage, setverifymessage] = React.useState(false)
const [error, setError]  = React.useState("")
const router = useRouter()
  React.useEffect(()=>{
    const verifyEmail = async () => {
    try {
      
      setLoading(true)
      const response = await apiResponse.post(`auth/verifyemail`, JSON.stringify({verificationToken: Emailtoken}))
      
      const data =  response.data
  
      if (Emailtoken) {
        console.log("data", data)
        setLoading(false)
        setverifymessage(data?.isverified)
     setTimeout(() => {
      router.push('/auth/signin')
     }, 1000);
        return
      } else {
        setLoading(false)
        alert(data.message)
      }

    } catch (error: any) {
      console.log(error)
      setLoading(false)
     return setError(error?.response?.data.message)
    }
   }


   verifyEmail()
   
  },[Emailtoken])
  return (
    <div>
{   loading? <div className='flex justify-center items-center'><HashLoader color="#2563EB" size={100}  style={{width: "100px", height: "100px"}} />
</div> : 

    verifymeesage? <p className='text-2xl text-green-500 text-center justify-center items-center'>Email Verified Successfully. You can now login</p>  :
<p className='text-2xl text-red-600 text-center justify-center items-center'> {error}</p>
        }

    </div>
  )
}

"use client"
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export function BottomNav() {
  const bottomItem = [
    {
      name: "Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline-block w-6 h-6 mb-1"
          height="2em"
          width="2em"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      name: "Tasks",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 mb-1"
          height="2em"
          width="2em"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    {
      name: "Chats",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 mb-1"
          height="1em"
          width="1em"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
          />
        </svg>
      ),
    },
    {
      name: "Teamspaces",
      icon: (
        <svg
          className="inline-block w-5 h-6 mb-1"
          height="1em"
          width="1em"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            clipPath="url(#clip0_16371_118949)"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3.752 12.898a6.5 6.5 0 119.075-9.24M14.377 7.725a6.5 6.5 0 01-6.746 6.647" />
            <path d="M2.097 10.848C.808 12.858.308 14.477.936 15.105c1.087 1.088 5.141-1.204 9.055-5.118C13.905 6.074 16.2 2.02 15.11.933c-.626-.626-2.252-.114-4.251 1.163" />
          </g>
          <defs>
            <clipPath id="clip0_16371_118949">
              <path fill="#fff" d="M0 0H16V16H0z" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "more",
      icon: (
        <svg
          className="inline-block w-6 h-6 mb-1"
          height="2em"
          width="2em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#000">
            <circle cx={18} cy={12} r={1.5} transform="rotate(90 18 12)" />
            <circle cx={12} cy={12} r={1.5} transform="rotate(90 12 12)" />
            <circle cx={6} cy={12} r={1.5} transform="rotate(90 6 12)" />
          </g>
        </svg>
      ),
    },
  ];

  const pathname = usePathname();

  return (
    <div>
      {/* <div className=" bg-white shadow-lg  lg:hidden block   w-full   px-12 ">
        <div className="flex items-center justify-center  px-12 ">
          {bottomItem.map((item, idx) => {
            return (
              <div
                className="flex-1 items-center  text-center group justify-center"
                key={idx}
              >
                <a
                  href="#"
                  className="flex  items-center justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
                >
                  <span className="flex flex-col items-center px-1 pt-1 pb-1  text-center text-black justify-center">
                    <div className="far fa-home text-2xl pt-1 mb-1 block items-center text-center">
                      {item.icon}
                    </div>

                    <span className="block text-xs pb-2 text-center">
                      {item.name}
                    </span>
                    <span className="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full" />
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div> */}

      <section className="  block text-gray-800 bg-white w-full fixed inset-x-0 bottom-0 z-40   h-16 lg:h-0 border-t-2 shadow-lg dark:bg-dark backdrop-blur-lg bg-opacity-100  dark:text-gray-400 border-royal/20 lg:hidden">
        <div id="tabs" className="flex justify-between">
            {bottomItem.map((item,idx)=>{
                return (

          <Link
            className={`justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal hover:bg-white text-black   bg-white ${pathname === `/${item.name.toLocaleLowerCase()}` ? "text-red-600" : "text-black"}`}
            href={ item.name === "more" ? "" : `/${item.name.toLocaleLowerCase()}` }
          key={idx}>
           {item.icon}
            <span className="block text-xs text-black tab">{item.name}</span>
          </Link>
                )
            })}
         
        </div>
      </section>
    </div>
  );
}

export default BottomNav;

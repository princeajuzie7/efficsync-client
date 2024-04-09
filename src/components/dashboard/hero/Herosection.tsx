import React from "react";

export function Herosection() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/herobg.png)`, // Linear gradient first, then the image
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "270px",
          width: "100%",
          position: "relative",
          transition: "background-image 0.3s ease-in-out",
        }}
      >
        <div className="absolute top-5 right-10 md:right-18 flex space-x-2 items-center">
          <button className="flex h-8 w-fit flex-row items-center gap-2 rounded-lg border border-dust bg-white px-2 hover:bg-steam">
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-icon w-icon"
            >
              <path
                d="M16.4943 8.70223C16.4983 8.8009 16.5003 8.90023 16.5003 9.00023C16.4991 10.6143 15.9766 12.1849 15.0108 13.4781C14.045 14.7714 12.6873 15.7182 11.14 16.1777C9.59268 16.6371 7.93835 16.5847 6.42324 16.0281C4.90812 15.4715 3.61322 14.4406 2.73124 13.0888C1.84927 11.737 1.42738 10.1365 1.52835 8.52553C1.62933 6.91459 2.24779 5.37931 3.29167 4.14819C4.33555 2.91708 5.74905 2.05594 7.32181 1.69293C7.87554 1.56513 8.43858 1.50148 9.00024 1.50098"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.0325 11C12.6601 11.7515 12.0852 12.384 11.3725 12.8262C10.6599 13.2685 9.83786 13.5028 8.99915 13.5028C8.16045 13.5028 7.33843 13.2685 6.62578 12.8262C5.91313 12.384 5.3382 11.7515 4.96582 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.49957 8.00034C7.39622 7.7078 7.2047 7.45451 6.9514 7.27536C6.6981 7.0962 6.39548 7 6.08523 7C5.77498 7 5.47236 7.0962 5.21906 7.27536C4.96576 7.45451 4.77425 7.7078 4.6709 8.00034"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.333 1.33301V7.33301"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.333 4.33301H16.333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Set status</span>
          </button>
          <span>
            <button
              className="w-full flex items-center"
              type="button"
              aria-expanded="false"
            />
            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-dust bg-white font-bold text-dark transition-colors hover:bg-steam">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={2} cy={8} r={2} fill="currentColor" />
                <circle cx={8} cy={8} r={2} fill="currentColor" />
                <circle cx={14} cy={8} r={2} fill="currentColor" />
              </svg>
            </button>
          </span>
        </div>

        <div className="flex items-center justify-center flex-col my-auto h-full">
          <div className="flex w-full items-center justify-center">
            <h2 className="text-center text-ay-h3  font-bold capitalize text-white [text-shadow:_0_1px_2px_rgba(102_103_128_/_25%)] md:text-left">
              {" "}
              Good afternoon, Prince
            </h2>
          </div>
          <div className="dashboards-ai mt-4">
            <button className="flex w-full origin-center cursor-text items-center space-x-2 rounded-2xl text-[#ACADBF] bg-white p-4 text-kimberly-light transition-transform duration-150 ">
              <svg
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-bounce"
              >
                <path
                  d="M14.4322 2.06872L11.1202 3.09128L8.70947 1.09664C8.65609 1.04791 8.5896 1.0159 8.51821 1.00457C8.44683 0.99324 8.3737 1.00309 8.30785 1.03289C8.24201 1.06269 8.18634 1.11114 8.14775 1.17225C8.10916 1.23336 8.08933 1.30444 8.09071 1.3767L8.18759 4.90843L5.18254 6.56846C5.11969 6.60774 5.06939 6.66418 5.03759 6.73112C5.00578 6.79806 4.99379 6.8727 5.00303 6.94623C5.01228 7.01976 5.04237 7.08912 5.08976 7.1461C5.13715 7.20308 5.19985 7.24531 5.27047 7.26781L8.55641 8.44342L9.73205 11.7293C9.75439 11.7999 9.79651 11.8627 9.85342 11.9101C9.91033 11.9576 9.97965 11.9877 10.0532 11.997C10.1267 12.0062 10.2013 11.9942 10.2682 11.9623C10.3351 11.9305 10.3915 11.8801 10.4306 11.8172L12.0915 8.81223L15.6233 8.90911C15.6956 8.9105 15.7666 8.89066 15.8277 8.85207C15.8889 8.81348 15.9373 8.75782 15.9671 8.69198C15.9969 8.62613 16.0068 8.553 15.9954 8.48162C15.9841 8.41024 15.9521 8.34374 15.9034 8.29037L13.9079 5.87889L14.9304 2.56697C14.9488 2.498 14.9488 2.4254 14.9303 2.35646C14.9118 2.28752 14.8755 2.22466 14.825 2.17418C14.7745 2.12371 14.7116 2.08739 14.6427 2.06888C14.5738 2.05037 14.5012 2.05031 14.4322 2.06872V2.06872Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.75122 9.24854L1.49989 15.4999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 2.5H3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 1.5V3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 13.5H13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 12.5V14.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" ">|</p>
              <span className="text-[#ACADBF] ">
                {" "}
                Chat with AI about your work...
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;

import React from 'react'
import Organization from "@/resources/images/organization.png";
import Image from 'next/image';
export default function    Page() {
  return (
    <div
      data-v-f76dc0ed=""
      className="vision-background flex min-h-screen w-full justify-center bg-white bg-cover bg-center sm:items-center"
    >
      <div
        data-v-f76dc0ed=""
        className="onboarding-setup-organization max-w-screen-md rounded-xl bg-white px-4 py-10 sm:p-10 shadow-lg"
        data-e2e="onboarding-setup-organization"
      >
        <div data-v-f76dc0ed="" className="text-center sm:text-left">
          <span
            data-v-f76dc0ed=""
            className="text-center text-ay-h3 font-bold text-night sm:text-left sm:text-ay-h2"
          >
            Customize organization
          </span>
          <p data-v-f76dc0ed="" className="mt-2 text-ay-p1 text-kimberly">
            {" "}
            Prepare the organization for future members.
          </p>
        </div>
        <div
          data-v-f76dc0ed=""
          className="flex items-center justify-center gap-4 flex-col my-6"
        >
          <div className="group relative flex w-full flex-col items-center p-0.5 transition">
            {/**/}
            <div className="">
              <div className="user-profile-photo group  flex h-20 w-20 overflow-hidden rounded-full bg-dust transition shrink-0 outline-dashed outline-offset-2 outline-dust border-[#D8DDEF]">
                <Image
                  className="object-cover"
                  src={Organization}
                  alt="efficsync"
                  referrerPolicy="no-referrer"
                  height={200}
                                  width={200}
                                  draggable={false}
                />
                {/**/}
                {/**/}
              </div>
            </div>
            <div className="flex w-full items-start justify-center">
              <input
                id="organization-logo"
                accept="image/*"
                className="hidden"
                type="file"
                name="file"
              />
              <div className="mt-4 grid w-full ">
                <button className="flex h-10 w-full flex-grow items-center justify-center rounded-lg border border-dust text-ay-p2 font-bold text-dark hover:bg-mist">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="mr-2 w-4 text-kimberly"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>{" "}
                  Upload logo{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div data-v-f76dc0ed="" className="c-input mb-6">
          <label
            htmlFor="organization-name"
            className="block font-bold text-kimberly text-ay-l1"
          >
            Organization name
          </label>
          <div className="relative mt-2">
            {/**/}
            <input
              id="organization-name"
              autoComplete="off"
              className="border-mist !h-10 !border-2 focus:border-mix flex h-8 w-full items-center rounded-md px-3 text-ay-p2 focus:border-transparent focus:ring-1 focus:ring-mix disabled:cursor-not-allowed disabled:bg-steam mb-6"
              name="organization-name"
              placeholder="Enter your organization name"
              type="text"
            />
            {/**/}
          </div>
          {/**/}
        </div>
        <button
          data-v-f76dc0ed=""
          type="button"
          className=" bg-[#2563EB] border border-mix bg-mix hover:bg-purplerain text-white font-bold px-2 py-1 text-sm flex items-center justify-center rounded-lg transition-all h-10 w-full "
          data-e2e="onboarding-setup-organization-continue"
        >
          {/**/} Continue{" "}
        </button>
      </div>
    </div>
  );
}

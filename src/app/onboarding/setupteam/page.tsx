import React from 'react'

export default function Page() {
  return (
    <div className="h-screen flex item-center justify-center m-auto">
      <div className="flex flex-col justify-center lg:w-[850px] w-full shadow-2xl h-fit my-auto rounded-lg mx-auto  ">
        <div className="flex w-full  flex-col justify-center px-4 py-10 sm:p-5 m-auto items-center">
          <h3 className="text-center text-ay-h3 text-night ">
            {" "}
            <strong> Which solution would you like to start with?</strong>
          </h3>
          <div>
            <button
              className="mr-2 mt-2 rounded-lg border px-3 py-2 text-left text-ay-p2 sm:text-center border-mist text-night"
              data-e2e="team-ceo"
            >
              👑 CEO
            </button>
            <button
              className="mr-2 mt-2 rounded-lg border px-3 py-2 text-left text-ay-p2 sm:text-center border-mist text-night"
              data-e2e="team-sales"
            >
              🚀 Sales
            </button>
            <button
              className="mr-2 mt-2 rounded-lg border px-3 py-2 text-left text-ay-p2 sm:text-center border-mist text-night"
              data-e2e="team-marketing"
            >
              📣 Marketing
            </button>
            <button
              className="mr-2 mt-2 rounded-lg border px-3 py-2 text-left text-ay-p2 sm:text-center border-mist text-night"
              data-e2e="team-tech"
            >
              👨‍💻 Tech
            </button>
            <button
              className="mr-2 mt-2 rounded-lg border px-3 py-2 text-left text-ay-p2 sm:text-center border-mist text-night"
              data-e2e="team-product"
            >
              📦 Product
            </button>
            <button
              className="mr-2 mt-2 rounded-lg border px-3 py-2 text-left text-ay-p2 sm:text-center border-mist text-night"
              data-e2e="team-projects"
            >
              📆 Projects
            </button>
            <button
              className="mr-2 mt-2 rounded-lg border px-3 py-2 text-left text-ay-p2 sm:text-center border-mist text-night"
              data-e2e="team-design"
            >
              🎨 Design
            </button>
            <button
              className="mr-2 mt-2 rounded-lg border px-3 py-2 text-left text-ay-p2 sm:text-center border-mist text-night"
              data-e2e="team-hr"
            >
              👫 HR
            </button>
            <button
              className="mr-2 mt-2 rounded-lg border px-3 py-2 text-left text-ay-p2 sm:text-center border-mist text-night"
              data-e2e="team-ops"
            >
              🧷 Operations
            </button>
            <button
              className="mr-2 mt-2 rounded-lg border px-3 py-2 text-left text-ay-p2 sm:text-center border-mist text-night"
              data-e2e="team-finance"
            >
              💰 Finance
            </button>
            <button
              className="mr-2 mt-2 rounded-lg border px-3 py-2 text-left text-ay-p2 sm:text-center border-mist text-night"
              data-e2e="team-legal"
            >
              👔 Legal
            </button>
            <button
              className="mr-2 mt-2 rounded-lg border px-3 py-2 text-left text-ay-p2 sm:text-center border-mist text-night"
              data-e2e="team-research"
            >
              🧪 Research
            </button>
            <button
              className="mr-2 mt-2 rounded-lg border px-3 py-2 text-left text-ay-p2 sm:text-center border-mist text-night"
              data-e2e="team-education"
            >
              📚 Education
            </button>
            <button
              className="mr-2 mt-2 rounded-lg border px-3 py-2 text-left text-ay-p2 sm:text-center border-mist text-night"
              data-e2e="team-other"
            >
              ❓ Other
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-4 w-fit sm:mt-8  items-center justify-center text-center">
            <button
              type="button"
              disabled
              className="bg-kimberly-light text-white bg-[#ACADBF] font-bold px-2 py-1 text-sm cursor-not-allowed text-opacity-50 flex items-center justify-center rounded-lg transition-all h-10 w-full sm:w-[280px] mt-5"
              data-e2e="onboarding-setup-organization-continue"
            >
              {/**/} Continue{" "}
            </button>
            <div className="flex gap-2 mt-4  sm:mt-8 sm:flex  items-center justify-center text-center">
              <svg
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[10px] w-[10px] text-dust"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </svg>
              <svg
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[10px] w-[10px] text-mix text-[#2563EB]"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </svg>
              <svg
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[10px] w-[10px] text-dust"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </svg>
            </div>
            <p className="text-base w-full text-center whitespace-pre-wrap px-2 text-[#adb3db] mt-8">
              This will help us customize your onboarding experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

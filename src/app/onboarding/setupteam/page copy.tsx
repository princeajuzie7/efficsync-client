import React from 'react'

export default function Page() {
  return (
    <div className=''>
      <main
        className="main relative flex flex-col items-center justify-center bg-white transition-transform"
        style={{ transform: "translateX(0px)" }}
      >
        {/**/}
        {/**/}
        <div id="cover-photo" />
        <div
          className="flex min-h-full w-full flex-col h-screen sm:items-center sm:justify-center"
          data-e2e="onboarding-view"
        >
          <a className="c-circle-button flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg px-3 outline-none transition-colors md:h-8 md:px-2 border border-transparent text-kimberly sm:hover:bg-mist sm:hover:text-dark absolute left-[8px] top-[8px] z-max">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-icon w-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </a>
          <div className="flex h-full w-full flex-col sm:flex-row">
            <div className="flex w-full flex-shrink-0 flex-grow flex-col justify-center px-4 py-10 sm:p-20 md:w-6/12">
              <h3 className="text-center text-ay-h3 text-night sm:text-left sm:text-ay-h2">
                {" "}
                What <strong>team</strong> are you in?{" "}
              </h3>
              <div className="mt-2 flex max-w-full flex-col sm:mt-6 sm:block sm:w-[508px]">
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
              <div className="sticky bottom-0 left-0 mt-4 flex w-full justify-center bg-white py-2 sm:static sm:block sm:py-0">
                <button
                  type="button"
                  disabled
                  className="bg-kimberly-light text-white bg-[#ACADBF] font-bold px-2 py-1 text-sm cursor-not-allowed text-opacity-50 flex items-center justify-center rounded-lg transition-all h-10 w-full sm:w-[280px]"
                  data-e2e="onboarding-setup-organization-continue"
                >
                  {/**/} Continue{" "}
                </button>
                <div className="flex gap-2 mt-4 hidden sm:mt-8 sm:flex">
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
                    className="h-[10px] w-[10px] text-mix"
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
              </div>
            </div>
            <div className="hidden w-full flex-shrink-0 flex-grow items-center justify-end bg-purplerain-900 py-4 pl-4 sm:flex sm:p-0 md:w-6/12">
              <img
                src="https://ayanza.com/assets/teams-placeholder-pmc35cHP.png"
                alt="Multiple teams"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

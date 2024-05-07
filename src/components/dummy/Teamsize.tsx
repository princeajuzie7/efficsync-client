import React from 'react'

export default function Teamsize() {
  return (
    <main
      className="main relative flex flex-col bg-white transition-transform"
      style={{ transform: "translateX(0px)" }}
    >
      {/**/}
      {/**/}
      <div id="cover-photo" />
      <div
        className="flex min-h-full w-full flex-col sm:items-center sm:justify-center"
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
        <div className="w-full flex-col items-center justify-center px-4 py-10 sm:flex md:p-0">
          <h1 className="mb-2 text-center text-ay-h3 text-night sm:text-left sm:text-ay-h2">
            {" "}
            What are you planning to <strong>use Ayanza for?</strong>
          </h1>
          <p className="mb-10 text-center text-ay-p2 text-kimberly sm:text-left">
            {" "}
            Help us setup your account for you.{" "}
          </p>
          <div className="flex w-full max-w-[900px] flex-col items-center gap-6 md:gap-10">
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <button
                className="relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-mist px-4 pb-5 pt-4 transition-colors sm:h-[270px] bg-purplerain-800"
                data-e2e="team-size-individual"
              >
                <div className="absolute right-4 top-4 hidden sm:block">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Button/Radio">
                      <rect
                        id="Outer"
                        width={16}
                        height={16}
                        rx={8}
                        transform="matrix(1 0 0 -1 0 16)"
                        fill="#7E2DFC"
                      />
                      <circle id="Inner" cx={8} cy={8} r={3} fill="white" />
                    </g>
                  </svg>
                </div>
                <div className="flex h-full w-full flex-row-reverse items-center sm:flex-col sm:justify-around">
                  <img
                    className="flex-shrink w-[60px] sm:w-[140px]"
                    alt="Individual"
                    src="	https://ayanza.com/assets/onboarding/individual.png"
                  />
                  <div className="mr-auto mt-[6] flex-shrink-0 text-left sm:w-full sm:text-center">
                    <span className="text-ay-h4 font-bold text-dark">
                      Individual
                    </span>
                    <p className="mt-2 text-ay-p2 leading-relaxed text-kimberly">
                      Only you
                    </p>
                  </div>
                </div>
              </button>
              <button
                className="relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-mist px-4 pb-5 pt-4 transition-colors sm:h-[270px] bg-white"
                data-e2e="team-size-team"
              >
                <div className="absolute right-4 top-4 hidden sm:block">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Button/Radio">
                      <rect
                        id="Rectangle 6"
                        x="0.5"
                        y="-0.5"
                        width={15}
                        height={15}
                        rx="7.5"
                        transform="matrix(1 0 0 -1 0 15)"
                        fill="#EDEEF7"
                        stroke="#D8DDEF"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex h-full w-full flex-row-reverse items-center sm:flex-col sm:justify-around">
                  <img
                    className="flex-shrink w-[100px] sm:w-[200px]"
                    alt="Team"
                    src="https://ayanza.com/assets/onboarding/team.png"
                  />
                  <div className="mr-auto mt-[6] flex-shrink-0 text-left sm:w-full sm:text-center">
                    <span className="text-ay-h4 font-bold text-dark">Team</span>
                    <p className="mt-2 text-ay-p2 leading-relaxed text-kimberly">
                      Single team
                    </p>
                  </div>
                </div>
              </button>
              <button
                className="relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-mist px-4 pb-5 pt-4 transition-colors sm:h-[270px] bg-white"
                data-e2e="team-size-company"
              >
                <div className="absolute right-4 top-4 hidden sm:block">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Button/Radio">
                      <rect
                        id="Rectangle 6"
                        x="0.5"
                        y="-0.5"
                        width={15}
                        height={15}
                        rx="7.5"
                        transform="matrix(1 0 0 -1 0 15)"
                        fill="#EDEEF7"
                        stroke="#D8DDEF"
                      />
                    </g>
                  </svg>
                </div>
                <div className="flex h-full w-full flex-row-reverse items-center sm:flex-col sm:justify-around">
                  <img
                    className="flex-shrink w-[100px] sm:w-[220px]"
                    alt="Company"
                    src="https://ayanza.com/assets/onboarding/company.png"
                  />
                  <div className="mr-auto mt-[6] flex-shrink-0 text-left sm:w-full sm:text-center">
                    <span className="text-ay-h4 font-bold text-dark">
                      Company
                    </span>
                    <p className="mt-2 text-ay-p2 leading-relaxed text-kimberly">
                      Multiple teams
                    </p>
                  </div>
                </div>
              </button>
            </div>
            <button
              type="button"
              className="border border-mix bg-mix hover:bg-purplerain text-white font-bold px-2 py-1 text-sm flex items-center justify-center rounded-lg transition-all h-10 w-full sm:w-[280px] bg-[#6D2DED]"
              data-e2e="onboarding-setup-organization-continue"
            >
              Continue
            </button>
            <div className="flex gap-2 mt-4 hidden sm:mt-8 sm:flex">
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
      </div>
    </main>
  );
}

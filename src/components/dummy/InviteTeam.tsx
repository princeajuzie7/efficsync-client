import React from 'react'

export default function InviteTeam() {
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
        <div
          className="onboarding-setup-step-invite max-w-screen-md"
          data-e2e="onboarding-setup-step-invite"
        >
          <div
            className="sm:block sm:items-end"
            data-e2e="invite-user-to-group-modal"
          >
            <form action="#">
              <div className="h-screen w-screen max-w-full rounded-lg bg-white p-safe sm:h-auto sm:w-auto sm:min-w-[500px] sm:p-0">
                <div className="relative">
                  <button className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white sm:hidden">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-kimberly"
                    >
                      <path
                        d="M2.99805 13L12.9974 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.9987 13L2.99805 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="p-6 text-left">
                    <div className="flex flex-col items-center">
                      <img
                        src="https://ayanza.com/assets/team2-N3yhzLUg.svg"
                        className="w-[250px] max-w-full"
                      />
                      <p className="pt-[9px] text-center text-ay-h2 font-bold text-dark">
                        {" "}
                        Invite your teammates{" "}
                      </p>
                      <p className="pt-2 text-center text-ay-p1 text-kimberly">
                        {" "}
                        Together we can achieve{" "}
                        <span className="line-through">
                          almost
                        </span> anything.{" "}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <label className="block font-bold text-kimberly text-ay-l1">
                        {" "}
                        Send invites{" "}
                      </label>
                      <div className="relative my-2 flex items-center gap-1 !my-0">
                        <div className="w-full">
                          <span>
                            <button
                              className="w-full flex items-center"
                              type="button"
                            />
                            <button
                              className="flex items-center whitespace-nowrap rounded-lg text-ay-l1 font-semibold text-mix hover:underline"
                              data-e2e="create-copy-invitation-link"
                            >
                              <svg
                                width={18}
                                height={17}
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="pr-1"
                              >
                                <path
                                  d="M7.24268 12.8335L6.62135 13.4549C6.05874 14.0175 5.29567 14.3335 4.50002 14.3335C3.70436 14.3335 2.9413 14.0175 2.37869 13.4549C1.81607 12.8922 1.5 12.1292 1.5 11.3335C1.5 10.5379 1.81607 9.7748 2.37869 9.21219L5.56068 6.02952C6.09417 5.49483 6.8097 5.18105 7.56441 5.15084C8.31911 5.12063 9.05744 5.37621 9.63195 5.86654C10.2065 6.35688 10.5749 7.04588 10.6636 7.79596C10.7524 8.54604 10.5549 9.30199 10.1107 9.91285"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10.8788 4.2112L11.3788 3.7112C11.9414 3.14859 12.7045 2.83252 13.5001 2.83252C14.2958 2.83252 15.0588 3.14859 15.6215 3.7112C16.1841 4.27382 16.5001 5.03688 16.5001 5.83254C16.5001 6.62819 16.1841 7.39126 15.6215 7.95387L12.4395 11.1359C11.9059 11.6703 11.1903 11.9839 10.4357 12.0139C9.68107 12.0439 8.94288 11.7882 8.3685 11.2979C7.79413 10.8075 7.42584 10.1185 7.33717 9.36853C7.24849 8.61853 7.44595 7.86267 7.89013 7.25187"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>{" "}
                              Copy invite link{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-icon w-icon"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div
                        data-e2e="invite-user-to-group-input"
                        className="c-mail-input h-[78px] overflow-auto rounded-lg border border-mist"
                      >
                        <div
                          className="tiptap ProseMirror ml-1 my-1 overflow-auto prose rounded-md prose:lg outline-none sm:text-sm disabled:opacity-75 disabled:cursor-not-allowed"
                          contentEditable="true"
                          tabIndex={0}
                          translate="no"
                        >
                          <p
                            data-placeholder="justin.case@acme.com, jane.doe@acme.com"
                            className="ml-1 empty-node before:content-[attr(data-placeholder)] before:text-kimberly before:cursor-text before:absolute"
                          >
                            <br className="ProseMirror-trailingBreak" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 text-xs font-normal text-kimberly">
                      {" "}
                      Separate email addresses with commas or spaces{" "}
                    </div>
                    {/**/}
                    {/**/}
                    <div className="mt-2 flex items-start justify-between gap-2 sm:mt-6 md:flex-row">
                      <button
                        type="submit"
                        className="border border-mix bg-mix hover:bg-purplerain text-white font-bold px-2 py-1 text-sm flex items-center justify-center rounded-lg transition-all grow bg-[#6D2DED]"
                        data-e2e="invite-by-email-button"
                      >
                        {/**/}Continue without invitation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

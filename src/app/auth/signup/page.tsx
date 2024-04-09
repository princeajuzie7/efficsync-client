"use client";
import React, { FormEventHandler } from "react";
import Link from "next/link";
import { AuthInterface, RegexInterface, RegexError } from "@/types";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/utils";
export default function Page() {
  /**
   * a state for form collection specific for auth signup
   * @param FormData a data that will be sent to the server
   *   -emaii: the users email address
   *    -username: the username of the user
   *  -password: the password of the user
   */
  const [FormData, setFormData] = React.useState<AuthInterface>({
    email: "",
    password: "",
    username: "",
  });

  const [fullName, setFullname] = React.useState<string>("");

  const [Errormsg, setErrormsg] = React.useState<RegexError>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") {
      const newusername: string = value.substring(0, value.indexOf("@"));
      setFullname(newusername);
    }

    setFormData({
      ...FormData,
      username: fullName,
      [name]: value,
    });
  };

  /**
   * Validates a form input value against a regular expression pattern and updates error messages accordingly.
   * @param Regexprops An object containing properties for the validation:
   *                   - fieldname: The name of the input field being validated.
   *                   - regex: The regular expression pattern used for validation.
   *                   - value: The value to be validated.
   *                   - errormessage: The error message to be displayed if the validation fails.
   * @returns void
   */

  function SignuValidate(Regexprops: RegexInterface): void {
    // Check if the value matches the regular expression pattern
    if (!Regexprops.regex.test(Regexprops.value)) {
      // If validation fails, update error message for the input field
      setErrormsg((prevs: RegexError) => ({
        ...prevs,
        [Regexprops.fieldname]: Regexprops.errormessage,
      }));
    } else {
      // If validation succeeds, clear error message for the input field
      setErrormsg((prevs: RegexError) => ({
        ...prevs,
        [Regexprops.fieldname]: "",
      }));
    }
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    console.log(FormData);
  };
  return (
    <main className="flex items-center justify-center">
      <section
        className="backdrop-blur-3xl"
        style={{
          backgroundImage: `url(/bgauth.jpg)`, // Set background image
          backgroundSize: "cover", // Make the background image cover the entire element
          backgroundPosition: "center",
          position: "fixed", // Center the background image
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100vw",
          filter: "blur(8px)", // Apply blur effect
        }}
      ></section>
      <div className="w-full max-w-md m-auto p-4  h-screen flex flex-col justify-center">
        <div className=" bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800">
                Sign up
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Experience A Better Way To Manage Teams or personal task today
                using Efficysync 😜.
              </p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  className="w-4 h-auto"
                  width={46}
                  height={47}
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign up with Google
              </button>
              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
                Or
              </div>
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-3 px-4 block w-full border-gray-200 border-[1px] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          handleInputChange(event);
                          const regexProps: RegexInterface = {
                            fieldname: "email",
                            regex: EMAIL_REGEX,
                            value: event.target.value,
                            errormessage:
                              "Please include a valid email address so we can get back to you",
                          };
                          SignuValidate(regexProps);
                        }}
                        // aria-describedby="email-error"
                      />
                      <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                        <svg
                          className="size-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    {Errormsg.email && FormData.email && (
                      <p
                        className=" text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        {Errormsg.email}
                      </p>
                    )}
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div>
                    <label htmlFor="password" className="block text-sm mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="py-3 px-4 block w-full border-gray-200  border-[1px] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        required
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          handleInputChange(event);
                          const regexProps: RegexInterface = {
                            fieldname: "password",
                            regex: PASSWORD_REGEX,
                            value: event.target.value,
                            errormessage:
                              "8+ characters required",
                          };
                          SignuValidate(regexProps);
                        }}
                        // aria-describedby="password-error"
                      />
                      <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                        <svg
                          className="size-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    {Errormsg.password && FormData.password && (
                      <p
                        className=" text-xs text-red-600 mt-2"
                        id="password-error"
                      >
                        {Errormsg.password}
                      </p>
                    )}
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}

                  {/* End Form Group */}
                  {/* Checkbox */}
                  <div className="flex items-center">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                      />
                    </div>
                    <div className="ms-3">
                      <label htmlFor="remember-me" className="text-sm">
                        I accept the{" "}
                        <a
                          className="text-blue-600 decoration-2 hover:underline font-medium"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  {/* End Checkbox */}
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Sign up
                  </button>
                  <div className="text-center">
                    <p className="mt-2 text-sm text-gray-600">
                      Already have an account?
                      <Link
                        className="text-blue-600 decoration-2 hover:underline font-medium"
                        href="/auth/signin"
                      >
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

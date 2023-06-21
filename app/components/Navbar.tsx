"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaSun, FaRegMoon } from "react-icons/fa";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const [isOpenD, setIsOpenD] = useState(true);

  const toggleMenu = () => {
    setIsOpenD(prevIsOpen => !prevIsOpen);
  };
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <header>
          <nav className="relative bg-white shadow dark:border-b-2 dark:bg-black">
            <div className="container mx-auto px-6 py-4 dark:bg-black md:flex md:items-center md:justify-between">
              <div className="flex items-center justify-between dark:bg-black">
                <Link href={"/"} className="text-xl font-bold text-blue-500">
                  FashionsDB
                </Link>
                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
                    aria-label="toggle menu"
                  >
                    {!isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={"M4 8h16M4 16h16"}
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={"M6 18L18 6M6 6l12 12"}
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Menu open: "block", Menu closed: "hidden" */}
              <div
                className={`absolute inset-x-0 z-20 w-full bg-white px-6 py-4 transition-all duration-300 ease-in-out dark:bg-black md:relative md:top-0 md:mt-0 md:flex md:w-auto md:translate-x-0 md:items-center md:bg-transparent md:p-0 md:opacity-100 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                <div className="flex flex-col md:mx-6 md:flex-row">
                  <Link
                    className="my-2 transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="my-2 transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
                    href="/docs"
                  >
                    API Docs
                  </Link>
                  <Link
                    className="my-2 transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
                    href="/database"
                  >
                    Database
                  </Link>
                  <Link
                    className="my-2 transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
                    href="/blogs"
                  >
                    Blog
                  </Link>
                </div>
                {/* <Link href={'/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fsignin'} className="inline-flex items-center  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">{session.user.email}</Link> */}
                <div className="relative inline-block">
                  {/* Dropdown toggle button */}
                  <button
                    onClick={toggleMenu}
                    className="relative z-10 flex items-center rounded-md border  border-transparent bg-gray-100 p-2 text-sm text-gray-600 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:bg-gray-800 dark:text-white dark:focus:ring-blue-400 dark:focus:ring-opacity-40"
                  >
                    <span className="mx-1 text-base">{session.user.name}</span>
                    <svg
                      className="mx-1 h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {isOpenD && (
                    <div
                      onClick={() => setIsOpenD(false)}
                      className="absolute right-0 z-20 mt-2 w-60 origin-top-right overflow-hidden rounded-md bg-white py-2 shadow-xl dark:bg-gray-800"
                    >
                      <span
                        className="-mt-2 flex transform items-center p-3 text-sm text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        <Image width={20} height={20} className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src={session.user?.image} alt="Profile pic"/>

                        <div className="mx-1">
                          <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                            {session.user.name}
                          </h1>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {session.user.email}
                          </p>
                        </div>
                      </span>

                      <hr className="border-gray-200 dark:border-gray-700" />

                      <Link
                      href={'/api/auth/signout?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fsignout'}
                        onClick={() => signOut()}
                        className="mx-auto block w-full text-center transform py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                      
                      >
                        Sign Out
                      </Link>
                    </div>
                  )}
                </div>

                {/* <div className="flex justify-center md:block">
                <button className="block py-2 pl-3 pr-4 rounded transition-all duration-300 ease-in-out dark:text-white text-black hover:text-blue-500 dark:hover:text-blue-400 md:p-0" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  {theme === "dark" ? <FaSun /> : <FaRegMoon />}
                </button>
              </div> */}
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
  return (
    <>
      <header>
        <nav className="relative bg-white shadow dark:border-b-2 dark:bg-black">
          <div className="container mx-auto px-6 py-4 dark:bg-black md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between dark:bg-black">
              <Link href={"/"} className="text-xl font-bold text-blue-500">
                FashionsDB
              </Link>
              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={"M4 8h16M4 16h16"}
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={"M6 18L18 6M6 6l12 12"}
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full bg-white px-6 py-4 transition-all duration-300 ease-in-out dark:bg-black md:relative md:top-0 md:mt-0 md:flex md:w-auto md:translate-x-0 md:items-center md:bg-transparent md:p-0 md:opacity-100 ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <div className="flex flex-col md:mx-6 md:flex-row">
                <Link
                  className="my-2 transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="my-2 transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="/docs"
                >
                  API Docs
                </Link>
                <Link
                  className="my-2 transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="/database"
                >
                  Database
                </Link>
                <Link
                  className="my-2 transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="/blogs"
                >
                  Blog
                </Link>
              </div>
              <Link
                href={
                  "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fsignin"
                }
                className="mt-4 mr-3 inline-flex  items-center rounded-lg border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0"
              >
                Signin
              </Link>
              <Link
                href={
                  "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fsignin"
                }
                className="mt-4 inline-flex  items-center rounded-lg border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0"
              >
                Signup
              </Link>

              {/* <div className="flex justify-center md:block">
                <button className="block py-2 pl-3 pr-4 rounded transition-all duration-300 ease-in-out dark:text-white text-black hover:text-blue-500 dark:hover:text-blue-400 md:p-0" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  {theme === "dark" ? <FaSun /> : <FaRegMoon />}
                </button>
              </div> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

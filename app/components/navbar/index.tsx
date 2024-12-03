"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-red-950 shadow-lg">
      <nav className="bg-red-950 max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between h-16">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <Link href="#home" className="text-2xl font-semibold text-amber-600 hover:text-amber-400 transition">
            <img src="../../logo_asean.png" alt="Logo" className="w-14 my-1" />
          </Link>
        </div>

        {/* Sections */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#vision" className="text-amber-600 hover:text-gray-300 transition">
            The Vision
          </Link>
          <Link href="#activities" className="text-amber-600 hover:text-gray-300 transition">
            Activities
          </Link>
          <Link href="#rundown" className="text-amber-600 hover:text-gray-300 transition">
            Rundown
          </Link>
        </div>

        {/* Sign Up Button */}
        <div className="hidden md:block">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSea2BmtfnynStiuGv9KVEMxDE8y7ZbcIjtreo6VcsWVL1YEOQ/viewform?usp=sf_link"
            className="bg-amber-100 font-semibold text-red-950 px-6 py-2 rounded-lg hover:bg-amber-400 transition duration-200 ease-in-out shadow-md"
          >
            Get Tickets
          </Link>
        </div>

        {/* Burger Icon */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-amber-100 hover:text-amber-600"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-950 shadow-md">
          <div className="px-6 py-4 space-y-4">
            <Link href="#vision" className="block text-amber-100 hover:text-amber-600 transition">
              The Vision
            </Link>
            <Link href="#activities" className="block text-amber-100 hover:text-amber-600 transition">
              Activities
            </Link>
            <Link href="#rundown" className="block text-amber-100 hover:text-amber-600 transition">
              Rundown
            </Link>

            {/* Sign Up Button */}
            <div className="mt-4">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSea2BmtfnynStiuGv9KVEMxDE8y7ZbcIjtreo6VcsWVL1YEOQ/viewform?usp=sf_link">
                <button className="w-full bg-amber-100 text-bold text-red-950 font-semibold py-2 px-6 rounded-lg hover:bg-amber-400 transition duration-200 ease-in-out shadow-md">
                  Get Tickets
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

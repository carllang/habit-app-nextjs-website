"use client";

import Link from "next/link";

export default function Navigation() {
  const toggleMobileMenu = () => {
    const menu = document.getElementById("mobile-menu");
    menu?.classList.toggle("hidden");
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed right-4 top-4 z-[100] block md:hidden">
        <button
          type="button"
          className="rounded-lg bg-[#1a1a1a] p-2 text-stone-300 hover:bg-[#252525] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="fixed inset-0 z-[90] hidden bg-[#121212] bg-opacity-98 backdrop-blur-sm md:hidden"
      >
        <div className="flex h-full flex-col items-center justify-center space-y-8">
          <button
            type="button"
            className="absolute right-4 top-4 rounded-lg bg-[#1a1a1a] p-2 text-stone-300 hover:bg-[#252525] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            href="/"
            className="text-2xl font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:text-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
            onClick={toggleMobileMenu}
          >
            HabitMeister
          </Link>
          <Link
            href="/blog"
            className="text-xl px-4 py-2 rounded-lg transition-all duration-200 hover:text-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
            onClick={toggleMobileMenu}
          >
            Blog
          </Link>
          <Link
            href="/pricing"
            className="text-xl px-4 py-2 rounded-lg transition-all duration-200 hover:text-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
            onClick={toggleMobileMenu}
          >
            Pricing
          </Link>
          <Link
            href="/feature-requests"
            className="text-xl px-4 py-2 rounded-lg transition-all duration-200 hover:text-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
            onClick={toggleMobileMenu}
          >
            Feature requests
          </Link>
          <Link
            href="/privacy-policy"
            className="text-xl px-4 py-2 rounded-lg transition-all duration-200 hover:text-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
            onClick={toggleMobileMenu}
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="fixed left-0 top-0 z-30 hidden w-full bg-[#121212] p-5 shadow-lg transition-shadow duration-300 ease-in-out md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-between space-x-8 lg:space-x-12">
            <li className="flex-shrink-0">
              <Link
                href="/"
                className="text-lg font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:text-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
              >
                HabitMeister
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="px-3 py-2 rounded-lg transition-all duration-200 hover:text-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="px-3 py-2 rounded-lg transition-all duration-200 hover:text-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/feature-requests"
                className="px-3 py-2 rounded-lg transition-all duration-200 hover:text-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
              >
                Feature requests
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="px-3 py-2 rounded-lg transition-all duration-200 hover:text-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)]"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";

const PortfolioItem = ({ portfolio }) => {
  const { title, thumbnail, liveLink, sourceCode } = portfolio;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div class="relative sm:mb-12 shadow-md border border-primary rounded-md ">
      <div class="overflow-hidden h-72 rounded-[10px]">
        <Image
          src={thumbnail}
          width={500}
          height={400}
          alt="portfolio"
          class="w-full h-full object-contain "
        />
      </div>
      <div class="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
        <h3 class="text-dark capitalize text-secondary mb-5 text-xl font-bold">
          {title}
        </h3>
        <div class="flex justify-center gap-3 items-center mt-5">
          <a
            href={liveLink}
            target="_blank"
            class="text-body-color dark:text-dark-6   inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition"
          >
            Live Preview
          </a>

          <div className="relative inline-block text-left">
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-white bg-primary hover:bg-primary/80 hover:text-white duration-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Source Code
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div
                id="dropdown"
                className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href={sourceCode.server}
                      target="_blank"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Server Code
                    </a>
                  </li>
                  <li>
                    <a
                      href={sourceCode.client}
                      target="_blank"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Client Code
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;

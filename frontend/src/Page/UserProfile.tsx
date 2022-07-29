import React, { useState } from "react";

export const UserProfile = () => {
  // const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div className="">
      <section className="w-64  bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">2d ago</span>
          <span className="text-emerald-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </span>
        </div>
        <div className="mt-6 w-fit mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7DaftP9syRV3cHK3vj_NTZAvP6GeYqTwuXHAYT5XcLzvIYCVrv97buMpwb3JY9DN21nc&usqp=CAU"
            className="rounded-full w-28 "
            alt="profile picture"
          />
        </div>

        <div className="mt-8 ">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            Jonathan <br /> Smith
          </h2>
        </div>
        <p className="text-emerald-400 font-semibold mt-2.5 flex justify-between">
          <span className="mt-1">Active</span>
          <span>
            <button
              type="button"
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              Add Friend...
            </button>
          </span>
        </p>

        <div className="h-1 w-full bg-black mt-8 rounded-full">
          <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
        </div>
        <div className="mt-3 text-white text-sm">
          <span className="text-gray-400 font-semibold">Email : </span>
          <span>xyz@gmail.com</span>
        </div>
      </section>
    </div>
  );
};

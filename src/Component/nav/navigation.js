import React from "react";

export default function Navigation() {
  return (
    <nav className="bg-white backdrop-blur-md py-3 px-2 md:px-6">
      <div className="flex flex-row items-center justify-between">
        <div className="">
          <button className=" text-red-600 text-sm md:text-lg border-l-2 pl-3 rounded-full border-red-600">
            Logout
          </button>
        </div>
        <div className="text-center ">
          <h1 className="text-black text-sm md:text-2xl  font-bold text-center">
            TODO LIST
          </h1>
        </div>
        <div className="">
          <button className="text-white text-sm md:text-lg  mx-auto px-2 md:px-4 py-1 rounded-md bg-gradient-to-r from-green-700 via-yellow-500 to-red-700  hover:from-red-700  hover:via-yellow-500  hover:to-green-700">
            Clear all lists
          </button>
        </div>
      </div>
    </nav>
  );
}

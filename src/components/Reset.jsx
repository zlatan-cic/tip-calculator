import React from "react";

function Reset({onReset}) {
  return (
    <div className="ease-in-out duration-300">
      <button
        href="#"
        className="relative inline-flex items-center justify-center px-10 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group my-3"
        onClick={onReset}
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-700 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span className="relative">Reset</span>
      </button>
    </div>
  );
}

export default Reset;

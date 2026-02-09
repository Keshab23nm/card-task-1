"use client";

import  { useState } from "react";

const Counter = () => {
      const [first, setfirst] = useState(0);
    
      function inc() {
        setfirst(first + 1);
      }
    
      function dec() {
        setfirst(first - 1);
      }
      function reset() {
        setfirst(0);
      }
  return (
  
        <div className="h-1/2 w-1/2  p-10 pb-30 bg-amber-50  flex flex-col gap-5 ">
        <h1 className="text-2xl ">Counter Card</h1>
        <h2 className="text-2xl ">value: {first}</h2>
    <div className="flex gap-2">
          <button onClick={() => inc()} className="px-4 py-2 bg-blue-400">
          +
        </button>{" "}
        <button onClick={() => dec()} className="px-4 py-2  bg-pink-700">
          -
        </button>{" "}
        <button onClick={() => reset()} className="px-4 py-2  bg-gray-500">
          Reset
        </button>
    </div>
      </div>
   
  )
}

export default Counter
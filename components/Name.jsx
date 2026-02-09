"use client";

import  { useState } from "react";

const Name = () => {
      const [name, setname] = useState("Keshab");
    
      function cname() {
        setname("React Master 🚀");
      }
  return (
    <div className="h-1/4 w-1/2  p-10 bg-amber-50 flex flex-col gap-5 pb-30">
        <h1 className="text-2xl">Name Card</h1>
        <h1 className="text-2xl">{name}</h1>
    <div className="flex">
          <button
          onClick={() => cname()}
          className="px-4 py-2 bg-emerald-400 text-amber-50"
        >
          Change Name
        </button>
    </div>
      </div>
  )
}

export default Name
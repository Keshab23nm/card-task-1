"use client";

import  { useState } from "react";

const User = () => {
      const [role, setrole] = useState("student");
    
      function roles() {
        setrole("Admin");
      }
  return (
     <div  className="h-1/2 w-1/2  p-10  bg-amber-50  flex flex-col gap-5 pb-24" >
        <h1 className="text-2xl">User Card</h1>
        <h2 className="text-2xl">Name: Keshab</h2>
        <h2 className="text-2xl">Role: {role}</h2>

      <div className="flex ">
          <button
          className="px-4 py-2 bg-emerald-400 text-amber-50"
          onClick={() => roles()}
        >
          Promote Admin
        </button>
      </div>
      </div>
  )
}

export default User
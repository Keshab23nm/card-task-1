"use client";

import  { useState } from "react";

const Vs = () => {
     const [show, setshow] = useState(true);
    
      function shows() {
        if (show) {
          return false;
        } else {
          return true;
        }
      }
  return (
  <div  className="h-1/2 w-1/2  p-10 bg-amber-50  flex flex-col gap-8 pb-30 ">
        <h1 className="text-2xl">Visibility Card</h1>
   <div className="flex">
         <button
          className="px-4 py-2 bg-emerald-400 text-amber-50 "
          onClick={() =>{
            console.log(shows())
            setshow(shows())
          }}>
          {show ? "Hide Messege" : "Show Messege"}
        </button>
   </div>
        {/* <p className={show==true? "block" : "hidden"}> */}
        <p className={show==true? "block bg-red-100 text-red-500 p-4 border-1 border-red-500 rounded-md" : "hidden" } >

          🚀 This message is controlled by useState boolean value.
        </p>
      </div>
  )
}

export default Vs
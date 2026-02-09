"use client";
import Counter from "@/components/Counter";
import Name from "@/components/Name";
import User from "@/components/User";

import Vs from "@/components/Vs";
import React, { useState } from "react";

const page = () => {








  return (
    <div className=" flex  flex-col bg-amber-100 p-5 gap-2">

      <div  className="flex gap-5">
         < Counter />

    <Name/>
      </div>
   

      <div className="flex gap-5">
  <User/>
<Vs/>
      </div>

    
    </div>
  );
};

export default page;

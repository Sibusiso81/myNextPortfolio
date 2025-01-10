"use client";
import React from "react";
import Nav from "./Navbar";


export function layout({ children }: { children: React.ReactNode }) {


  return (
    <div className="flex flex-col w-screen overflow-x-hidden max-h-fit bg-[#1D3557] text-[#e0e9eb]  overflow-y-hidden  space-y-4">
      {/* Navbar Section */}
      
      <Nav/>
      {/* Main Content Section */}
      <div className="flex-1 p-2">{children}</div>
    </div>
  );
}

export default layout;

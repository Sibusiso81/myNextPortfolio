"use client";
import React from "react";
import Navbar from "../Components/Home/Navbar";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

export function layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div className="flex flex-col w-screen max-h-fit bg-[#1D3557] text-[#e0e9eb]  overflow-y-hidden  space-y-4">
      {/* Navbar Section */}
      <div className="w-full h-fit  border-[#eaeaea] flex justify-between items-center  relative z-40 p-2">
        <h1 className="font-bold dark:text-[#eaeaea] text-lg text-black">
          Portfolio®
        </h1>
        <div className="flex flex-row space-x-2 items-center">
          <Menu
            className={`cursor-pointer ${isOpen ? "hidden" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          />
          <X
            className={`cursor-pointer ${isOpen ? "" : "hidden"}`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isOpen ? <Navbar /> : null}
      </AnimatePresence>

      {/* Main Content Section */}
      <div className="flex-1 p-2">{children}</div>
    </div>
  );
}

export default layout;

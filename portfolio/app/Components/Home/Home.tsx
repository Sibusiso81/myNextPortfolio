'use client'
import { AnimatePresence } from 'framer-motion';
import { ArrowDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import Navbar from './Navbar';
import { ModeToggle } from '../mode-toggle';

function Home() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className="w-screen font-dmsans h-fit  p-4 pt-4   dark:bg-neutral-950 text-[#eaeaea] overflow-x-hidden ">
        <div className="w-full p-2 border-[#eaeaea] flex justify-between items-center rounded-md relative z-40 flex-1">
          <h1 className="font-bold text-[#eaeaea] text-lg ">
            Portfolio®
          </h1>
          <div className="flex flex-row space-x-2 items-center">
            
            <ModeToggle />
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
    
        <div className="flex flex-col   pt-10 lg:pt-20 space-x-2 md:pl-4 lg:pl-14 xl:pl-20 ">
          {/* Image & Name  */}
          <div className="flex flex-row  space-x-2 md:space-x- ">
            <Image
              alt="hero-profile-image"
              src="https://i.ibb.co/2sYc7GR/IMG-7451.png"
              width={100}
              height={100}
              style={{
                maxWidth: "30%",
                height: "30%",
              }}
              className="rounded-full object-cover w-14  "
              priority
            />

            <div className="text-lg font-mono  items-end place-self-end space-y-1">
              <h1 className="font-bold">Sibusiso Zulu</h1>
              <div className="flex flex-row  space-x-1 place-self-end">
                <div className="w-fit my-auto place-self-center">
                  <div
                    className={`bg-green-400 rounded-full w-4 h-4 animation-pulse ${
                      isOpen ? "hidden" : ""
                    }`}
                  />
                </div>
                <div className="my-auto place-self-end">
                  <p className="text-sm lg:text-md text-nowrap">
                    Available for new opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Home text */}
          <div className=" font-bold font-mono pt-10 max-w-screen-lg lg:justify-center mx-auto">
            <h1 className="text-xl md:text-3xl ">
             An aspiring Human Resources Managment practitioner
              with a passion for fostering connections and building impactful
              solutions., On my path toward mastering the art of people
              management&#44;I&apos;ve embraced the exciting world of web
              development to enhance my skill set and bring innovative ideas to
              life.
            </h1>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#a1a0a633]  mt-20 md:mt-32 lg:mt-48 xl:mt-72  "></div>
        <div className="flex flex-col md:flex-row justify-between p-2">
          {/* <p>Based on Johannesburg &#44;South Africa</p> */}
          <p>Based in Johannesburg &#44;South Africa</p>
          <div className="flex flex-row space-x-1">
            <p>Scroll for more</p>
            <ArrowDown className="stroke-green-500" />
            
          </div>
        </div>
        
      </section>
  )
}

export default Home
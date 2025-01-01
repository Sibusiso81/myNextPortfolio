'use client'
import {
   
    Code,
    GithubIcon,
    Linkedin,
    Mail,
    
  } from "lucide-react";
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import WordRotate from "@/components/ui/word-rotate";
function Contact() {
    const [time, setTime] = useState<string>();
 

    function getTime() {
      const date = new Date();
      const hours = date.getHours();
      const mins = date.getMinutes();
      
      console.log(
        `current time :${hours % 12 || 12}:${mins < 10 ? "0" : ""}${mins}`
      );
      setTime(
        `${hours % 12 || 12}:${mins < 10 ? "0" : ""}${mins} ${
          hours >= 12 ? "PM" : "AM"
        }`
      );
  
    }
    useEffect(() => {
      getTime();
      const interavalid = setInterval(getTime, 60000);
      return () => clearInterval(interavalid);
    }, []);
   
  return (
    <section className="w-screen h-fit  flex flex-col lg:pace-x-10 p-2 text-black dark:text-white  ">
        <div className="grid grid-cols-2 gap-y-4 lg:p-10">
          <div className="col-span-2 lg:col-span-1 flex lg:items-center   lg:w-fit">
            <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl lg:my-auto font-bold hidden lg:block">
              Let&apos;s <br />
              <WordRotate words={["Work", "Create", "Grow"]} />
              Together.
            </h1>
          </div>
          <div className="w-full col-span-2 lg:col-span-1  grid grid-cols-4 md:gap-x-4  gap-y-6">
            <div className="col-span-4 md:col-span-2 gap-y-4 ">
              <Link href={"/Contact"}>
                <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    Contact
                  </span>
                  <BorderBeam
                    size={200}
                    duration={12}
                    colorFrom="#ececec"
                    colorTo="#0f0f0f00"
                    delay={9}
                    className="bg-neutral-800 p-10 "
                  />
                </div>
              </Link>
            </div>

            <div className="col-span-4 md:col-span-2 text-center text-md border-neutral-800  border-2  spcae-y-6 gap-y-2 md:gap-2 rounded-lg">
              <div className="border-2 lg:border-0 border-neutral-800 rounded-lg font-bold p-10">
                <p>{time}</p>
                <p>Johannesburg&#44;SA</p>
              </div>
              <div className="flex flex-row justify-between  mt-2 ">
                {/* <div className="border-2 lg:border-0border-1 border-neutral-800 rounded-lg p-5">
        <Linkedin />
        </div> */}
                <div className="border-2 lg:border-0 border-neutral-800 rounded-lg p-4   lg:rounded-2xl  ">
                  <Linkedin />
                </div>
                <div className="border-2 lg:border-0 border-neutral-800 rounded-lg p-4   lg:rounded-2xl ">
                  <Mail />
                </div>
                <div className="border-2 lg:border-0 border-neutral-800 rounded-lg p-4   lg:rounded-2xl ">
                  <GithubIcon />
                </div>
                <div className="border-2 lg:border-0 border-neutral-800 rounded-lg p-4">
                  <Code />
                </div>
              </div>
            </div>

            <div className="col-span-6 text-black dark:text-white space-y-3 border-2 border-neutral-800  p-10 rounded-lg">
              <h1 className="text-[#0f0f0f0] font-semibold text-xl text-pretty">
                Check these link before you head Out
              </h1>
              <p className="text-[#0f0f0f0] font-semibold text-md mt-2">
                Index
              </p>
              <ul className=" lg:p-4 w-72 max-w-screen-sm grid grid-cols-2 gap-1 text-sm lg:text-md">
                <li>
                  <a href="#Home">Home</a>
                </li>

                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Skills">Value</a>
                </li>
                <li>
                  <a href="#Contact">Project</a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sanele-ncube-823221236/"
                    target="_blank"
                  >
                    Linkdin
                  </a>
                </li>
                <li>
                  <a href="mailto:masanzawayne@gmail.com?subject=I would like to colleborate or work together">
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-4">
              <div className="col-span-6"></div>
            </div>
          </div>
        </div>
        <Footer />
    
      </section>
  )
}

export default Contact
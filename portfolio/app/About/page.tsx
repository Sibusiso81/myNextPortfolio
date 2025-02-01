'use client'
import Image from "next/image"
import React, { useState } from "react"
import Nextjs from "../Components/Svg/next"
import HTML5 from "../Components/Svg/html"
import SkillProgress from "./skillsProgress"
import JavaScript from "../Components/Svg/javascript"
import TailwindCSS from "../Components/Svg/tailwind"
import Supabase from "../Components/Svg/supabase"
import { AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "../Components/mode-toggle"
import Navbar from "../Components/Home/Navbar"
import Footer from "../Components/Footer/Footer"
import LinkedIn from "../Components/Svg/linkdin"
import Microsoft from "../Components/Svg/microsoft"
import Figma from "../Components/Svg/figma"

function AboutPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const skills = [
    {
      name: "HTML5",
      icon: <HTML5 className="w-16 h-16" />,
      description: "Markup language.",
    },
    {
      name: "Tailwind CSS",
      icon: <TailwindCSS className="w-16 h-16" />,
      description: "Utility-first CSS framework.",
    },
    {
      name: "Figma",
      icon: <Figma className="w-16 h-16" />,
      description: "UI/UX design tool.",
    },
    {
      name: "JavaScript",
      icon: <JavaScript className="w-16 h-16" />,
      description: "Programming Language",
    },
    
    {
      name: "Next.js",
      icon: <Nextjs className="w-16 h-16" />,
      description: "React framework ",
    },
    {
      name: "Supabase",
      icon: <Supabase className="w-16 h-16" />,
      description: "Open-source Firebase alternative.",
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn className="w-16 h-16" />,
      description: "Networking platform.",
    },
    {
      name: "Microsoft Office",
      icon: <Microsoft className="w-16 h-16" />,
      description: "Productivity software suite.",
    },
  ];

  return (
    <div className="min-h-scrIeen  flex flex-col bg-[#a1a0a633] dark:bg-neutral-950 text-[#eaeaea] ">
      <main className="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8 ">
              <div className="w-full p-2 border-[#eaeaea] flex justify-end items-end rounded-md relative z-40 flex-1">
                <div className="flex flex-row space-x-2 items-center">
                  
                  <ModeToggle/>
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
        <section className="mb-16 my-auto">
      
          <h1 className=" text-[28px]  lg:text-[28px] font-bold ">More </h1>
          <h1 className="text-[28px]  lg:text-[28px] font-bold text-[#a1a0a633] mb-4">About me </h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Image
                alt="Profile image"
                src="https://i.ibb.co/TYBwyQ7/IMG-6708.jpg"
                width={400}
                height={400}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
                priority
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-[#ececec]leading-relaxed mb-4">
                I&apos;m a determined and curious individual with a drive to make a meaningful impact through my work. My
                journey combines my human resources background with my self-taught web development skills, allowing me
                to explore creative and practical solutions to real-world problems.
              </p>
              <p className="text-lg text-[#ececec] leading-relaxed mb-4">
                I&apos;m passionate about applying my knowledge to improve lives, whether by building accessible digital
                tools, enhancing education through technology, or supporting the growth of the township economy. I
                thrive at the intersections of ideas, combining innovation and inclusivity to address pressing
                challenges.
              </p>
              <p className="text-lg text-[#ececec] leading-relaxed">
                For me, it&apos;s not just about learning but applying what I know to build solutions that matter. I see
                every project as a chance to grow, innovate, and leave a lasting impact. This is my journey, and I&apos;m
                excited to keep pushing boundaries, one meaningful project at a time.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 pl-2 space-y-3">
          
        <div><h1 className="text-[28px]  lg:text-[28px] font-bold ">Technical </h1>
        <h1 className="text-[28px]  lg:text-[28px] font-bold text-[#a1a0a633]">Skills </h1></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-2 ">
            {skills.map((skill) => (
              <SkillProgress key={skill.name} name={skill.name} icon={skill.icon} description={skill.description}/>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Human Resources Management</h3>
              <p className="text-gray-600 mb-2">University of Johannesburg</p>
              <p className="text-gray-500">In Progress</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">National Senior Certificate</h3>
              <p className="text-gray-600 mb-2">Phoenix College of Johannesburg</p>
              <p className="text-gray-500">Obtained in 2020</p>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

export default AboutPage


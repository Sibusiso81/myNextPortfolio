import Image from "next/image"
import React from "react"
import Nextjs from "../Components/Svg/next"
import HTML5 from "../Components/Svg/html"
import SkillProgress from "./skillsProgress"
import CSS from "../Components/Svg/css"
import JavaScript from "../Components/Svg/javascript"
import TailwindCSS from "../Components/Svg/tailwind"
import Supabase from "../Components/Svg/supabase"

function AboutPage() {
  const skills = [
    { name: "HTML5", icon: <HTML5 className="w-16 h-16" />, level: 90 },
    { name: "CSS", icon: <CSS className="w-16 h-16" />, level: 85 },
    { name: "JavaScript", icon: <JavaScript className="w-16 h-16" />, level: 80 },
    { name: "Tailwind CSS", icon: <TailwindCSS className="w-16 h-16" />, level: 85 },
    { name: "Next.js", icon: <Nextjs className="w-16 h-16" />, level: 75 },
    { name: "Supabase", icon: <Supabase className="w-16 h-16" />, level: 70 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <Image
                alt="Profile image"
                src="https://i.ibb.co/Y23gG4W/IMG-2894.jpg"
                width={400}
                height={400}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
                priority
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I&apos;m a determined and curious individual with a drive to make a meaningful impact through my work. My
                journey combines my human resources background with my self-taught web development skills, allowing me
                to explore creative and practical solutions to real-world problems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I&apos;m passionate about applying my knowledge to improve lives, whether by building accessible digital
                tools, enhancing education through technology, or supporting the growth of the township economy. I
                thrive at the intersections of ideas, combining innovation and inclusivity to address pressing
                challenges.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For me, it&apos;s not just about learning but applying what I know to build solutions that matter. I see
                every project as a chance to grow, innovate, and leave a lasting impact. This is my journey, and I&apos;m
                excited to keep pushing boundaries, one meaningful project at a time.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <SkillProgress key={skill.name} name={skill.name} icon={skill.icon} level={skill.level} />
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

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">© 2024 Sibusiso Zulu</p>
            <p className="text-sm">Made with care and plenty of coffee</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutPage


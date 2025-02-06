import React from 'react'
import { motion } from "framer-motion"
import { GraduationCap } from 'lucide-react'


function Ed() {
  const education = [
    {
      degree: "Bachelor of Human Resources Management",
      institution: "University of Johannesburg",
      period: "- Present",
      status: "In Progress",
    },
    {
      degree: "National Senior Certificate",
      institution: "Phoenix College of Johannesburg",
      period: "2016 - 2020",
      status: "Completed",
    },
  ]
  return (
    <section className="w-full px-4 py-16">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="flex items-center gap-3">
            
            <GraduationCap className="h-6 w-6 text-gray-400" />
            <h2 className="text-2xl font-medium text-white">Education</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative border-l border-gray-800 pl-8 before:absolute before:-left-1 before:top-2 before:h-2 before:w-2 before:rounded-full  before:transition-colors hover:before:bg-green-400"
              >
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-medium text-white transition-colors group-hover:text-green-400">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-400">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{edu.period}</span>
                    <span className="h-1 w-1 rounded-full bg-gray-800" />
                    <span className={edu.status === "In Progress" ? "text-green-400" : ""}>{edu.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Ed
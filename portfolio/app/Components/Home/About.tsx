'use client'
import React from "react";
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowUpRight,
  Code2,
  Users,
  Brain,
  Calculator,
  LineChart,
  Scale,
  Briefcase,
  GraduationCap,
  FileSpreadsheet,
} from "lucide-react"
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

function About() {
  const [activeView, setActiveView] = useState("overview");

  const technicalSkills = [
    { name: "HTML/CSS", icon: Code2 },
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: Code2 },
    { name: "Data Analysis", icon: LineChart },
    { name: "Statistical Analysis", icon: Calculator },
    { name: "Excel & Power BI", icon: FileSpreadsheet },
  ];

  const hrSkills = [
    { name: "HR Management", icon: Users },
    { name: "Labor Law", icon: Scale },
    { name: "Industrial Psychology", icon: Brain },
    { name: "Project Management", icon: Briefcase },
    { name: "Business Management", icon: GraduationCap },
  ];

  const academicBackground = [
    { name: "Business Management & Industrial Psychology", icon: GraduationCap },
    { name: "Labour Law & Project Management", icon: Scale },
    { name: "Mathematics & Statistics", icon: Calculator },
  ];

  return (
    <section className="w-screen h-screen flex flex-col p-3 dark:bg-neutral-950 md:p-20 lg:p-24 lg:pl-44 xl:pl-52 justify-center space-y-4 mt-32">
      <div className="grid grid-cols-2 md:text-lg lg:text-2xl gap-6">
        {/* About header/ image / title text */}
        <div className="flex flex-col text-nowrap lg:space-y-4">
          <h1 className="text-[30px] lg:text-[38px] font-bold">About me</h1>
          <h2 className="text-[28px] lg:text-[28px] font-bold  bg-gradient-to-r from-neutral-400 to-[#a1a0a633]  bg-clip-text text-transparent">
            Your next HR Asset
          </h2>
        </div>
        {/* About text */}
        <div className="col-span-2 lg:col-span-1 lg:p-6 text-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 w-fit h-fit"
          >
            {/* Toggle Group */}
            <ToggleGroup type="single" value={activeView} onValueChange={(value) => value && setActiveView(value)} className="grid grid-cols-2 gap-y-2 xl:gap-x-2 w-fit xl:grid-cols-4">
              <ToggleGroupItem value="overview">Overview</ToggleGroupItem>
              <ToggleGroupItem value="core">Core Competencies</ToggleGroupItem>
              <ToggleGroupItem value="technical">Technical Skills</ToggleGroupItem>
              <ToggleGroupItem value="academic">Academic Background</ToggleGroupItem>
            </ToggleGroup>

            {/* Content based on active view */}
            <AnimatePresence mode="wait">
              {activeView === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I am a forward-thinking HR professional with a strong blend of business acumen and technical expertise. My academic background in Business Management, Industrial Psychology, and Labour Law, combined with analytical skills in Mathematics and Statistics, allows me to take a data-driven approach to human resource management. Eager to apply my knowledge, I am committed to learning from industry leaders and leveraging insights to drive strategic HR solutions.
                  </p>
                </motion.div>
              )}

              {activeView === "core" && (
                <motion.div
                  key="core"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Core Competencies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {hrSkills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm"
                      >
                        <skill.icon className="h-3.5 w-3.5" />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeView === "technical" && (
                <motion.div
                  key="technical"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm"
                      >
                        <skill.icon className="h-3.5 w-3.5" />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeView === "academic" && (
                <motion.div
                  key="academic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Academic Background
                  </h3>
                  <ul className="grid gap-3 text-sm text-muted-foreground">
                    {academicBackground.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA Button */}
            <Button asChild variant="ghost" className="group mt-6 h-auto p-0 text-base hover:bg-transparent text-green-400">
              <a href="/About" className="flex items-center gap-2">
                More about me
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
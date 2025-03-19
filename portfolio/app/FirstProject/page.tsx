'use client'
import { TOCContext, useTOContextValues } from "@/lib/TOCContext";
import TableOfContents from "../Components/TableOfContents";
import TrackedSection from "../Components/TrackedSection";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navbar from "../Components/Home/Navbar";
import '../FirstProject/styles.css'
export default function Page() {
      const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const { values} = useTOContextValues();
    return (
           <TOCContext.Provider value={values} >
   <div className="w-full p-2 lg:p-6 border-[#eaeaea] flex justify-end items-end rounded-md relative z-40 flex-1 ">
  <div className="flex flex-row space-x-2 items-center">
    <Menu
      className={`cursor-pointer ${isOpen ? "hidden" : "stroke-white"}`}
      onClick={() => setIsOpen(!isOpen)}
    />
    <X
      className={`cursor-pointer ${isOpen ? "stroke-white" : "hidden"}`}
      onClick={() => setIsOpen(!isOpen)}
    />
  </div>
</div>
<AnimatePresence mode="wait">
  {isOpen && (
    <Navbar key="navbar" />
  )}
</AnimatePresence>

<AnimatePresence mode="wait">
  {isOpen && (
    <Navbar key="navbar" />
  )}
</AnimatePresence>
      <main className="grid grid-cols-[10%_1fr_10%] lg:grid-cols-[15%_1fr_15%] h-fit my-20 ">
      
        <TableOfContents/>
        <article className="min-h-screen mx-auto max-w-[80ch] w-[80vw] space-y-6 ">
      <h1  className="leading-tight tracking-tight text-[#ececec] font-semibold text-4xl">Facilitating the Performance Management Process with Large Language Models</h1>
      <section className="my-8">
        <p className="leading-normal py-2 text-[#ececec]">
          Performance management is a structured, strategic process that enhances
          organizational success by aligning individual performance with broader business goals.
          Traditionally, this involves managers and employees collaborating to set expectations,
          assess progress, and reward achievements.
        </p>
        <p className="leading-normal py-2 text-[#ececec]">
          This project translates core performance management principles into a digital application,
          providing users with a structured approach to goal setting, task execution, self-assessment,
          and continuous improvement. By leveraging AI and Large Language Models (LLMs), the system
          functions as a virtual performance manager, mirroring the manager-employee relationship
          in an interactive, self-directed format.
        </p>
      </section>
      
      <TrackedSection sectionId={0} tocTitle="Performance Management Fundamentals" isFirst>
        <h2  className="leading-tight tracking-tight text-[#ececec] font-semibold text-xl mb-2">Performance Management Fundamentals</h2 >
        <p className="leading-normal py-2 text-[#ececec]">
          Performance is the measure of work-related outputs, outcomes, and behaviors that contribute to
          an individual&apos;s or organization&apos;s success. Effective performance management systems ensure alignment
          with strategic goals by defining clear expectations, providing feedback, facilitating development, and
          recognizing achievements.
        </p>
      </TrackedSection>
      
      <TrackedSection sectionId={1} tocTitle="Task Determination & Goal Setting">
        <h2  className="leading-tight tracking-tight text-[#ececec] font-semibold text-xl mb-2">Task Determination & Goal Setting</h2 >
        <p className="leading-normal py-2 text-[#ececec]">
          Task determination ensures that objectives are clear, measurable, and achievable. This system
          structures tasks to be specific, significant, time-bound, achievable, and well-communicated.
          Users describe their goals, and the application generates structured daily task lists with
          time estimates, execution guidance, and potential challenges.
        </p>
      </TrackedSection>
      
      <TrackedSection sectionId={2} tocTitle="Performance Execution & Assessment">
        <h2  className="leading-tight tracking-tight text-[#ececec] font-semibold text-xl mb-2">Performance Execution & Assessment</h2 >
        <p className="leading-normal py-2 text-[#ececec]">
          Performance execution requires individuals to strive for results, display agreed-upon behaviors,
          and engage in self-improvement. The application provides a Pomodoro Timer, a chatbot for assistance,
          suggested resources, and a task history for tracking progress, ensuring accountability and
          structured growth.
        </p>
      </TrackedSection>
      
      <TrackedSection sectionId={3} tocTitle="Performance Standards & Appraisals">
        <h2  className="leading-tight tracking-tight text-[#ececec] font-semibold text-xl mb-2">Performance Standards & Appraisals</h2 >
        <p className="leading-normal py-2 text-[#ececec]">
          Performance standards serve as benchmarks for evaluating success, measured through quantity,
          quality, and time adherence. Users engage in self-assessments, receive AI-driven analytics,
          and adjust their approach based on structured feedback and historical trends.
        </p>
      </TrackedSection>
      
      <TrackedSection sectionId={4} tocTitle="Application Summary & HRM Relevance">
        <h2  className="leading-tight tracking-tight text-[#ececec] font-semibold text-xl mb-2">Application Summary & HRM Relevance</h2 >
        <p className="leading-normal py-2 text-[#ececec]">
          This project integrates performance management theory with AI-powered solutions, reflecting HRM
          principles such as performance planning, task alignment, execution monitoring, and performance review.
          It reinforces academic and professional understanding of performance management processes.
        </p>
      </TrackedSection>
      
      <TrackedSection sectionId={5} tocTitle="Potential Enhancements" isLast>
        <h2  className="leading-tight tracking-tight text-[#ececec] font-semibold text-xl mb-2">Potential Enhancements</h2 >
        <p className="leading-normal py-2 text-[#ececec]">
          Future improvements include competency-based adaptability, visual goal-tracking dashboards,
          and peer collaboration features, further optimizing the application&apos;s approach to performance management.
        </p>
      </TrackedSection>
    </article>
      </main>
      </TOCContext.Provider>
    );
  }
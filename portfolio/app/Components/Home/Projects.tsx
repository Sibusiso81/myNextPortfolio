import React from "react";

import ProjectsCard from "./ProjectsCard";
function Projects() {
  return (
    <section className="dark:bg-neutral-950 w-screen  h-fit lg:h-screen justify-center flex flex-col space-y-4 p-6 lg:pl-20">
     <div>
     <h1 className="text-[28px]  lg:text-[28px] font-bold  ">Selected Work </h1>
      <h2 className="text-[28px]  lg:text-[28px] font-bold  bg-gradient-to-r from-neutral-300 to-[#a1a0a633]  bg-clip-text text-transparent">
        A selection of ideas and thoughts to grow, learn and create
      </h2>
     </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10">
      <ProjectsCard image={'https://i.ibb.co/GQgrKdsW/Screenshot-2025-02-01-110035.png'} decription="An implimentation of project managment and performance manaagment concepts " overallDescritption="A task managment site" siteLink="https://task-manager-zeta-green.vercel.app/" githubLink="https://github.com/Sibusiso81/Task-Manager" title="Fullstack" date="Feb 03,2025"/>
      <ProjectsCard image={'https://i.ibb.co/bM6hVZMZ/Screenshot-2025-02-23-012434.png'} decription="Designed to go beyond a traditional CV, it highlights the clients projects, skills, and professional journey in process automation and cybersecurity" overallDescritption="A Portfolio website" siteLink="https://react-portfolio-nlhb.vercel.app/" githubLink="https://github.com/Sibusiso81/client-portfolio" title="Frontend" date="Feb 23,2025"/>
   
      </div>
    </section>
  );
}

export default Projects;

import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Github from '../Svg/github';
import { CircleArrowUp } from 'lucide-react';
function Projects() {
  return (
    <section className="w-screen max-w-screen-lg h-screen justify-center flex flex-col space-y-4 p-6 lg:pl-20">
        <h1 className="text-xl md:text-3xl ">Projects </h1>
        <p className="text-muted-foreground text-wrap text-sm md:text-md">
          A selection of ideaas and thought ,to inspire ,learn and create
        </p>

        <div className="  rounded-md shadow-lg border-2   border-[#1d1d1d] flex flex-col md:flex-row ">
          <div className="space-y-3 w-full">
            <Image
              src={"https://i.ibb.co/y8WfTHB/Screenshot-2024-12-27-135704.png"}
              alt="project-image"
              width={700}
              height={700}
              quality={100}
              style={{
                maxHeight: "100%",
              }}
              className="w-full h-full  rounded-t-lg md:rounded-l-lg md:rounded-t-none md:rounded-tl-lg"
            />
          </div>
          <div className="flex flex-col space-y-4 p-3 md:p-6 rounded-xl ">
            <div className="flex flex-row space-x-2  ">
              <p>Frontend✦</p>
              <p className="text-black dark:text-muted-foreground">Nov 25,2024</p>
            </div>
            <div className="flex flex-col space-y-3 ">
              <h1 className="text-black dark:text-muted-foreground">
                Building a Portfolio site for a client{" "}
              </h1>
              <p>
                An attempt to transcend the avaerage cv and afford potential
                recruiters and colleborators a chance to know more
              </p>
              <div className="flex flex-row items-center space-x-4">
                <Link
                  href={
                    "https://github.com/Sibusiso81/Portfolio-01/blob/main/README.md"
                  }
                  title="View the GitHub repository"
                  aria-label="Visit my GitHub portfolio repository"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github
                    className="stroke-black dark:stroke-white"
                    aria-hidden="true"
                  />
                  
                </Link>
                <Link
                  href={"https://portfolio-01-red.vercel.app/"}
                  title="View the GitHub repository"
                  aria-label="Visit live site"
                  target="_blank"
                >
                  <CircleArrowUp className="stroke-black dark:stroke-white rotate-45" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Projects
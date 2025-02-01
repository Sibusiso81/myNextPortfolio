import React from "react";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
function About() {
  return (
    <section className="w-screen h-screen flex flex-col p-3 dark:bg-neutral-950  md:p-20 lg:p-24 lg:pl-44 xl:pl-52 justify-center space-y-4 mt-32 ">
      <div className="grid grid-cols-2 md:text-lg lg:text-2xl gap-6">
        {/* About header/ image / title text */}
        <div className="flex flex-col text-nowrap lg:space-y-4">
          <h1 className="text-[30px] lg:text-[38px] font-bold ">About me</h1>
          <h2 className="text-[28px]  lg:text-[28px] font-bold text-[#a1a0a633]">
            Your next HR Asset
          </h2>
        </div>
        {/* About text */}
        <div className="col-span-2 lg:col-span-1 lg:p-6 text-sm ">
          <div className=" dark:text-muted-foreground ">
            I&apos;m an aspiring HR professional with a strong foundation in
            Human Resources Management and a passion for people, processes, and
            organizational growth. My background in web development (HTML, CSS ,
            Tailwind ,React,Javascript, TypeScript) enhances my problem-solving,
            data-driven decision-making, and adaptability—skills that translate
            seamlessly into HR roles.
            <br />
            <br />
            I&apos;m eager to apply my knowledge in recruitment, employee
            relations, and HR operations while learning from industry leaders.
            With a proactive mindset and a commitment to growth, I&apos;m
            looking for an internship or shadowing opportunity where I can
            contribute meaningfully and develop into a well-rounded HR
            professional.
          </div>
          <Link href={"/About"} className=" ">
            <div className="flex flex-row space-x-2 items-center ">
              <Button variant={"link"} className="p-0 text-muted-foreground">
                More about me{" "}
              </Button>
              <ArrowUpRight className="stroke-muted-foreground" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;

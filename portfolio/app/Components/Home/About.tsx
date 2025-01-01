import React from 'react'
import Image from "next/image";
function About() {
  return (
    <section className="w-screen h-fit flex flex-col p-3  md:p-20 lg:p-24 lg:pl-44 xl:pl-52 justify-center space-y-4 mt-32 ">
    <h1 className="text-[30px] lg:text-[38px] font-bold ">About</h1>
    <div className="grid grid-cols-2 md:text-lg lg:text-2lg gap-6">
      {/* About header/ image / title text */}

      <div className="col-span-2 lg:col-span-1 flex flex-col lg:flex-row space-y-3 lg:space-x-4 h-fit lg:pt-6">
        <div className="object-cover lg:justify-self-center lg:place-self-center">
          <Image
            alt="hero-profile-image"
            src="https://i.ibb.co/2sYc7GR/IMG-7451.png"
            width={55}
            height={55}
            /*   style={{
            maxWidth: "30%"&#44;
            height: "30%"&#44;
          }} */
            className="rounded-full object-cover lg:hidden "
            priority
          />
          <Image
            alt="hero-profile-image"
            src="https://i.ibb.co/2sYc7GR/IMG-7451.png"
            width={75}
            height={75}
            /*   style={{
            maxWidth: "30%"&#44;
            height: "30%"&#44;
          }} */
            className="rounded-full object-cover hidden lg:block "
            priority
          />
        </div>

        <div className="xl:max-w-96 lg:max-w-72 ">
          <p className="font-semibold font-sans md:text-lg tracking-wide ">
            I&apos;m Sibusiso&#44; a driven and results-oriented HRM student
            and self tought Web developer.
          </p>
        </div>
      </div>
      {/* About text */}
      <div className="col-span-2 lg:col-span-1 lg:p-10 text-sm">
        <div className="text-black dark:text-muted-foreground ">
          Hi&#44; I&apos;m Sibusiso&#44; a driven and results&#8212;oriented
          individual with a unique blend of technical and human resources
          expertise. As a self&#8212;taught web developer with a solid
          foundation in HTML&#44; CSS&#44; JavaScript&#44; Bootstrap&#44;
          Tailwind CSS&#44; and SEO&#44; I&apos;m eager to contribute to
          innovative and impactful projects.
          <br />
          <br />
          While pursuing my full&#8212;time studies in Human Resources
          Management&#44; I&apos;ve developed a strong understanding of
          people&#44; processes&#44; and organizational dynamics. This
          unique perspective allows me to not only build visually stunning
          and user-friendly websites but also consider the human element in
          every design decision.
          <br />
          <br />
          I&apos;m a fast learner&#44; a highly motivated individual with a
          strong work ethic&#44; and I&apos;m confident in my ability to
          quickly adapt and contribute value to both development and HR
          teams. I&apos;m eager to learn and grow&#44; and I believe my
          unique skillset can bring a valuable and innovative perspective to
          any team.
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
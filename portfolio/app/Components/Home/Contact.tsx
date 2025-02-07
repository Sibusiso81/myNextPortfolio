"use client";
import { MessagesSquare  } from "lucide-react";
import React  from "react";
import Footer from "../Footer/Footer";
import Link from "next/link";
import WordRotate from "@/components/ui/word-rotate";
import { Button } from "@/components/ui/button";
import LinkedIn from "../Svg/linkdin";
import Instagram from "../Svg/instagram";
import Gmail from "../Svg/mail";
import Github from "../Svg/github";
import Image from "next/image";
function Contact() {


 

  return (
    <section className="dark:bg-[#63636633] bg-neutral-900/65  w-full   flex flex-col lg:pace-x-10 p-2 lg:p-6 text-white   ">
      <div className="grid grid-cols-1 md:grid-cols-2 p-2   gap-y-10 flex-1   ">
        <div className="flex flex-col font-bold t  justify-evenly  gap-4">
          <div className="flex flex-col items-start text-[14px]  lg:text-[28px]  w-2/3">
            <p className="text-[20px]  lg:text-[22px] ">Think I&apos;d be a good fit for your team or project ? </p>
            <Button variant={"ghost"} className="w-fit rounded-lg px-0 place-self-start">

</Button>
            
          </div>
          <div className="flex flex-col space-y-3 w-fit ">
            <h3 className="text-lg"> <div className="flex flex-row space-x-2 items-center text-lg font-bold">
    <p>Let&apos;s</p>
    <span className=""> {/* Adjust width based on longest word */}
      <WordRotate
        words={["Work", "Create", "Grow", "Innovate", "thrive",'Build']}
      />
       
    </span>
   <p>together</p>
  </div></h3>
            <div className="grid grid-cols-2 text-sm md:text-md  gap-2 font-medium">
              <Link href={'https://www.linkedin.com/in/sibusiso-zulu/'}>
              <div className="flex flex-row space-x-2  items-center">
              <LinkedIn/>  <p>Lindedin</p>
              </div></Link>
             <Link href={'https://github.com/Sibusiso81'}>
             <div className="flex flex-row space-x-2 items-center">
             <Github/> <p>Github</p>
                
              </div></Link>

              <a href="mailto:example@email.com?subject=Let's Connect&body=Hi, I'd like to discuss opportunities!">
              <div className="flex flex-row space-x-2 items-center">
              <Gmail/> <p>Email</p>
                
              </div>
              </a>
              <Link href={'https://www.instagram.com/_.iamsbu/'}>
             <div className="flex flex-row space-x-2 items-center">
             <Instagram/>  <p>Instagram</p>
                
              </div></Link>
              <Link href={'/Contact'}>
             <div className="flex flex-row space-x-2 items-center">
             <MessagesSquare/> <p>Chat</p>
                
              </div></Link>
              
              
            </div>
          </div>
        </div>
        <div className="flex flex-col md:mx-auto my-auto">
          <div className="pl-6 w-1/2 text-wrap">
          <h1 className="text-[18px]  lg:text-[26px] font-bold ">SIBUSISO ZULU</h1>
          <h2 className="text-[12px]  lg:text-[18px] font-bold  bg-gradient-to-r from-neutral-200 to-[#a1a0a633]  bg-clip-text text-transparent text-wrap">Final-year HRM student & Frontend web developer eager to gain practical insights.</h2>
          </div>
           <Image
                        alt="hero-profile-image"
                        src="https://i.ibb.co/KcZbn2Sg/IMG-7560.jpg"
                        width={250}
                        height={250}
                        
                        className="mx-auto lg:mx-10 object-cover  "
                        priority
                      />
                      
        </div>
      </div>
      <Footer  />
    </section>
  );
}

export default Contact;

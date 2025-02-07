import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Github from '../Svg/github'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

type card ={
    image:string,
    title:string,
    date:string,
    overallDescritption:string,
    decription:string,
    githubLink:string,
    siteLink:string,
}

function ProjectsCard(card:card) {
  return (
    <div className="   flex flex-col space-y-4 ">
    <div className="space-y-3 w-full">
    <Link
            href={card.siteLink}
            title="Visit project site"
            aria-label="Visit live site"
            target="_blank"
          >
            <Image
        src={card.image}
        alt="project-image"
        width={700}
        height={700}
        quality={100}
        style={{
          maxHeight: "100%",
        }}
        className="w-full h-full "
      /></Link> 
      
    </div>
    <div className="flex flex-col  ">
      <div className="flex flex-row space-x-2  ">
        <p>{card.title}✦</p>
        <p className="text-muted-foreground">
          {card.date}
        </p>
      </div>
      <div className="flex flex-col space-y-3 ">
        <h1 className="text-muted-foreground">
        {card.overallDescritption}
        </h1>
        <p>
        {card.decription}
        </p>
        <div className="flex flex-row items-center space-x-4">
          <Link
            href={
             card.githubLink
            }
            title="View the GitHub repository"
            aria-label="Visit my GitHub portfolio repository"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="stroke-white" aria-hidden="true" />
          </Link>
          <Link
            href={card.siteLink}
            title="Visit project site"
            aria-label="Visit live site"
            target="_blank"
          >
            <Button variant={'link'} className="text-green-400 ">Visit site <ArrowUpRight className="stroke-green-400 "/>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectsCard
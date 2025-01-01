import React from 'react'
import Card from './Card'

function Ed() {
  return (
    <section className="h-screen w-screen text-white font-poppins flex flex-col items-center justify-center  mt-10  lg:text-xl overflow-y-hidden mx-auto">
    <h1 className=" font-poppins font-semibold text-2xl lg:text-3xl text-center mx-auto p-5">
      Education & Certifications
    </h1>
    <div className="flex w-full h-full place-self-center justify-self-center mx-auto ">
      <div className="space-y-5 max-w-screen-sm  mx-auto justify-center items-center ">
        <Card
          insitution="Phoenix College of Johannesburg"
          duration="2020/09/12"
          qualifiation="Matric"
        />
        <Card
          insitution={"University of Johannesburg"}
          duration={" Present"}
          qualifiation={`Bachelor of Human Resources Managment `}
        />
        <Card
          insitution={"FreecodeCamp"}
          duration={"Nov-2024"}
          qualifiation={`Responsive web design`}
        />
    
      </div>
    </div>
  </section>
  )
}

export default Ed
import React from "react";
type value = {
  id: number;
  title: string;
  description: string;
};
function ValueAdd() {
  const valueAdds: value[] = [
    {
      id: 1,
      title: "Data-Driven HR Strategy",
      description:
        "With a strong foundation in HRM, Business Management, and Industrial Psychology, I use analytical techniques to interpret HR data, identify trends, and optimize decision-making—ensuring efficient talent acquisition, workforce planning, and employee engagement strategies.",
    },
    {
      id: 2,
      title: "Driving HR Innovation",
      description:
        "I combine HR expertise with technical skills in React, TypeScript, and Supabase to explore cutting-edge solutions, from AI-powered recruitment to employee experience platforms. My background in Project Management enables me to implement and scale HR tech solutions effectively.",
    },
    {
      id: 3,
      title: "Fast Learner & Adaptable",
      description:
        "Excelling in self-taught web development and earning distinctions in HRM and Mathematics, I thrive in dynamic environments. Whether tackling HR challenges or streamlining processes with technology, I quickly adapt and deliver impactful solutions.",
    },
    {
      id: 4,
      title: "Human-Centered Tech & Strategy",
      description:
        "Bridging HR and technology, I design solutions that prioritize people. My Industrial Psychology and Labour Law knowledge ensures compliance, fairness, and an employee-first approach in all HR initiatives—helping businesses create workplaces where talent thrives.",
    },
  ];
  return (
    <section className="w-screen h-fit    p-4  lg:p-20 font-mono  ">
      <div className="flex flex-col">
      <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold  ">
        Value Add On&apos;s 
      </h1>
      <h1 className=" text-lg md:text-xl lg:text-2xl font-bold space-y-6 pb-14 lg:pb-20 text-muted-foreground">
       The value i bring  your team
      </h1>
      </div>
      <div className="grid grid-cols-4 gap-6 lg:gap-2">
        {/*  */}

        
          {valueAdds.map((items,idx) => (
           <div className="col-span-4 md:col-span-2 lg:col-span-1 border-l-2 border-l-green-300 dark:border-l-[#aeaeae] flex flex-col pl-4" key={idx}>
              {/*  NUMBER */}

              <div className="space-y-4 ">
                <p className="text-green-400">0{items.id}</p>
              </div>
              {/* Header */}

              <div className="text-lg font-semibold py-2 lg:py-6">
                <h1>{items.title}</h1>
              </div>
              {/* Description */}

              <div className="dark:text-muted-foreground">
                <p>{items.description}</p>
              </div>
            </div>
          ))}
        </div>
      
    </section>
  );
}

export default ValueAdd;

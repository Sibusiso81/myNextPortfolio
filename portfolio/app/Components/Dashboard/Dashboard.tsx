"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { getWeather } from "@/lib/data";
 function Dashboard() {
  type commitment = string[];
  const [commitmentType, setCommitmentType] = React.useState<string>("Daily");
  const [commitmentText, setCommitmentText] = React.useState<commitment>([
    "Morining Run",
    "Morining Bible reading & Prayer ",
    "4hr learning coding content",
    "4hrs Coding",
    "Study Course Material ",
  ]);


  function handleDailyCommitments() {
    setCommitmentText([
      "Morining Run",
      "Morining Bible reading & Prayer ",
      "4hr learning coding content",
      "4hrs Coding",
      "Study Course Material ",
    ]);
    setCommitmentType("Daily");
    console.log(commitmentText);
    return commitmentText;
  }
  function handleWeeklyCommitments() {
    setCommitmentText([
      "Reach out to HRM ",
      "Document Code study Content ",
      "Work on projects SAT/SUN",
    ]);
    console.log(commitmentText);
    setCommitmentType("Weekly");
  }
  function handleMonthlyCommitments() {
    setCommitmentText([
      "Prep for Tests",
      "Complete and Present Coding projecst ",
    ]);
    setCommitmentType("Monthly");
    console.log(commitmentText);
  }
 

 
 


  return (
   
       
      
        <div className="flex flex-col p-4 space-y-3 my-10 h-full    rounded-xl ">
          <h2 className="text-lg font-bold ">Commitments</h2>
          <ul className="space-y-2">
            <h3 className="text-md md:text-lg font-bold">{commitmentType}</h3>
            {commitmentText.map((commitment, index) => (
              <div className="flex flex-row space-x-2 space-y-1 items-center">
                <Check />
                <li key={index} className="text-sm md:text-md font-mono">
                  {commitment}
                </li>
              </div>
            ))}
          </ul>
          <div className="flex flex-row space-x-2">
            <button
              className="p-2 rounded-lg text-md bg-transparent "
              onClick={handleDailyCommitments}
            >
              Daily
            </button>
            <Separator
              orientation="vertical"
              className="bg-black "
              color="black"
            />
            <button onClick={handleWeeklyCommitments}>Weekly</button>
            <Separator orientation="vertical" className="bg-[#e0e9eb]" />
            <button onClick={handleMonthlyCommitments}>Monthly</button>
          </div>
        </div>
    
  );
}

export default Dashboard;

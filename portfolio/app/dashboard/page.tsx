import React from "react";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";




import { getMotivationalQuote, getWeather } from "@/lib/data";
import { DateWidget } from "../Components/Dashboard/DateWidget";
import { WeatherWidget } from "../Components/Dashboard/WeatherWidget";
import { CourseSchedule } from "../Components/Dashboard/CourseSchedule";
import { ProjectTracker } from "../Components/Dashboard/ProjectTracker";
import { StudyTimer } from "../Components/Dashboard/StudyTimer";
import { JobApplicationTracker } from "../Components/Dashboard/JobAplicationTracker";
import { TechNewsFeed } from "../Components/Dashboard/TeckNewsWidget";

async function page() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  const task: string[] = [];

  if (error || !data?.user) {
    redirect("/Auth/Login");
  }

  /* 
    Featurs to add 

    bento grid containing :
    --Weather 
    --News
    --Commitments (Daily/Weekly/Monthly)
    
    */
    const weather = await getWeather();
    const quote = await getMotivationalQuote();

    /////Get date 
    function getDate() {
      const date = new Date();
  
      //Array of months
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
  
      //Array of days
      const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
  
      //Get the month and day of the week
      const month = months[date.getMonth()];
      const dayOfWeek = weekdays[date.getDay()];
      return `${dayOfWeek} ${month}
           ${date.getDate()}, ${date.getFullYear()}`;
    }
    const date = getDate();  

console.log(quote,date,task)
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">Student Developer Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 space-y-4">
        <div className="flex flex-wrap gap-4">
          
          <DateWidget />
          <WeatherWidget weather={weather} />
        {/*   <QuoteWidget quote={quote[0]} /> */}
        </div>
        {/* <Suspense fallback={<div>Loading tasks...</div>}>
          <TaskList />
        </Suspense> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CourseSchedule />
          <ProjectTracker />
        </div>
      </div>
      <div className="space-y-4">
        <StudyTimer />
        <JobApplicationTracker />
        <TechNewsFeed />
      </div>
    </div>
  </div>
  );
}

export default page;

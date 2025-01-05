import React from "react";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { logout } from "../Auth/Actions/actions";
import { BookOpenText, CirclePlus, Divide, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import Dashboard from "../Components/Dashboard/Dashboard";
import { getMotivationalQuote, getWeather } from "@/lib/data";

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

console.log(quote)
  return (
    <section className="h-fit w-screen grid grid-cols-2 p-2 ">
      <div className="col-span-2 md:col-span-1 ">
        {/* Weather */}
      <div className="flex flex-col space-y-20">
      <div className="flex flex-col max-w-32 font-bold">
            <p className='text-2xl  '>{date}</p>
            <p>{`${weather.current.temp_c}`}  &deg; C</p>
            <p>{weather.current.condition.text}</p>
        </div>
        {/* Motivationa Quote */}
        <div className="flex flex-row space-x-2  my-auto mx-auto   items-center text-sm text-wrap max-w-xs p-2">
          <div><BookOpenText className="h-full "/></div>
          <div className="flex flex-col space-y-2">
            <div className="font-bold">{quote[0].author}</div>
            <div><p className="text-muted-foreground">{quote[0].quote}</p></div>
          </div>
        </div>
        {/* Commitments  */}
        <Dashboard/>
      </div>
      </div>
    </section>
  );
}

export default page;

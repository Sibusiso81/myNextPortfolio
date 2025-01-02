import React from 'react'
import { redirect } from 'next/navigation'


import { createClient } from '@/lib/supabase/server'
import { logout } from '../Auth/Actions/actions';
import { LogOut } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

async function page() {
    const supabase = await createClient();
    const {data,error}= await supabase.auth.getUser();
    if(error || !data?.user){
        redirect('/Auth/Login');  
    }

  return (
    <section className='w-screen h-screen flex flex-col '>
      <nav className='flex flex-row justify-between items-center p-4 bg-transparent text-white dark:text-white'>
        <h1 className='text-xl'>Dashboard</h1>
       <div>
        <Avatar>
        <AvatarImage src="https://i.ibb.co/Y23gG4W/IMG-2894.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
       <button className='b p-2 rounded' onClick={logout}><LogOut/></button>
       </div>
      </nav>
    </section>
  
  
  )
}

export default page
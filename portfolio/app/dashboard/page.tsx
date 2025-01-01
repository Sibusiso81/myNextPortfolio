import React from 'react'
import { redirect } from 'next/navigation'


import { createClient } from '@/lib/supabase/server'
import { logout } from '../Auth/Actions/actions';
async function page() {
    const supabase = await createClient();
    const {data,error}= await supabase.auth.getUser();
    if(error || !data?.user){
        redirect('/Auth/Login');  
    }

  return (
    <section className='w-screen h-screen flex flex-col '>
      <nav className='flex flex-row justify-between items-center p-4 bg-gray-800 text-white dark:text-white'>
        <h1 className='text-2xl'>Dashboard</h1>
        <button className='bg-gray-700 p-2 rounded' onClick={logout}>Logout</button>
      </nav>
    </section>
  
  
  )
}

export default page
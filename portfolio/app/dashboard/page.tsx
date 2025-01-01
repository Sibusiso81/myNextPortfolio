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
    <div>Hello{ data.user.email}
    
    <button onClick={logout} className='bg-neutral-900/95  p-2 rounded-md'>Logout</button>
    </div>
  
  )
}

export default page
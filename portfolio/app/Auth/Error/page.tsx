'use client'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { CircleX } from 'lucide-react'
import React from 'react'

function page() {
  return (
  <section className='w-screen h-screen flex flex-col items-center justify-center text-white dark:text-white  '>
    <div className='flex flex-row space-x-3 mx-auto my-auto'>
        <CircleX />
        <Separator/>
        <p>Sorry somthing went wrong</p>
    </div>
  </section>
  )
}

export default page
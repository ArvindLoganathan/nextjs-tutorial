"use client"
import { useRouter } from 'next/navigation';
import React from 'react'


const Sidebar = () => {
  const router=useRouter();

  const handleClick=()=>{
    console.log("inside click handler");
    router.push('/dashboard');
  }

  return (
    <>
    <div> Sidebar1 page</div>
    <button onClick={handleClick}>submit go to dashboard</button>
    </>
  )
}

export default Sidebar

"use client"
import { useRouter } from 'next/navigation';
import React from 'react'


const ClientPage = () => {
  const router=useRouter();
  console.log("inside click handler");
  const handleClick=()=>{
    console.log("inside click handler");
    router.push('/dashboard');
  }

  return (
    <>
    <div> ClientPage page</div>
    <button onClick={handleClick}>submit go to dashboard</button>
    </>
  )
}

export default ClientPage

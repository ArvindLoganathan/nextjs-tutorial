import { Metadata } from 'next';
// import { resolve } from 'path';
import React from 'react'

type Props={  
  params:{'id':string}
}


// export const generateMetadata=async ({params}:Props): Metadata =>{
export const generateMetadata=async ({params}:Props): Promise<Metadata> =>{
  const {id} =  params;
  const title = await new Promise((resolve)=>{
    setTimeout(()=>{resolve("resolved title")},2000)
  }); // we need wrapr eiyh promise
  return{
    title: `user with ${params?.id } with title ${title}` ,
    // description: "Generated by create next app",
  } 
} ;


export default function userspage({params}:Props) {
  return (
    <div>
      users page {params?.id}
    </div>
  )
}


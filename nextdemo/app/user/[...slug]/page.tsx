import { notFound } from 'next/navigation'
import React from 'react'

export default function userpage({params}:{params:{slug:string[]}}) {
    console.log('slug',params?.slug)
    if(params?.slug?.length==2){
      notFound();
    }
    if(params?.slug?.length==3){
      throw new Error("custom error");
    }
    return (
    <div>
      user page {params?.slug && params?.slug[0]}
    </div>
  )
}


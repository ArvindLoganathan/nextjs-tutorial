import React from 'react'

export default async function Streaming ({children}:{children: React.ReactNode}){
  await new Promise((resolve)=>{
    setTimeout(()=>{resolve("resolved title")},4000)
  });
  return (
    <>
    <div style={{width:"100%",height:"500px", border:"1px solid"}}>{children}</div>
    </>
  )
};



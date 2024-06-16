import { Metadata } from 'next';
import React from 'react'

//using template in layout it would be sidebar | with template
export const metadata: Metadata = {
  title: "sidebar",
};
const Sidebar = async() => {
   await new Promise((resolve)=>{
    setTimeout(()=>{resolve("resolved title")},2000)
  });
  return (
    <>
    <div> Sidebar page</div>
    </>
  )
}

export default Sidebar

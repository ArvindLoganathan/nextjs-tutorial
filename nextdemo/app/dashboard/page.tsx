import { Metadata } from 'next';
import { notFound } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = {
  title: "dashboard Layout >> page",
  description: "Generated by create next app",
};
const Dashboard = () => {
  // if(true){
  //   notFound();
  // }
  return (
    <>
    <div> Dashboard page</div>
    </>
  )
}

export default Dashboard

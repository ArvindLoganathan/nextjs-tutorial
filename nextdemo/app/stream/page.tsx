import React, { Suspense } from 'react'
import Streaming from '../components/Streaming'
// import { cookies } from 'next/headers'

async function StreamingPage() {

  // const cook=cookies().get("role")
  // console.log("role",cook)
  const res   =  await fetch('https://jsonplaceholder.typicode.com/posts');
  const userList = await res.json();
  console.log('userList',userList)
  console.log("end")
  return (
    <div>
        <div> streamming header</div>
        <Suspense fallback={<p>loading...</p>}> 
        <Streaming>My component streaming</Streaming>
        </Suspense>

    </div>
  )
}

export default StreamingPage

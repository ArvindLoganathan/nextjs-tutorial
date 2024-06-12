import Link from 'next/link'
import React from 'react'
import User from '../components/User'

const page = () => {

  return (
    <>
        <div>
      users page
    </div>
    <Link href='/home'>home</Link>
    <br/>
    <User/>
    </>
  )
}

export default page

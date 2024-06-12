import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div>
      home page
    </div>
    <div>
    <Link href='/users'>users</Link>
    </div>
    </>
  )
}

export default page

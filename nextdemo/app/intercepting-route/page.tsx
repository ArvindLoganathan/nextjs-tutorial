import Link from 'next/link'
import React from 'react'

function r1() {
  return (
    <>
    <div>
      heading on top
    </div>
    <Link href="/intercepting-route/r1">route  R1</Link>
    <div>placeholder</div>
    <Link href="/intercepting-route/r2">route  R2</Link>
    
    </>
  )
} 

export default r1

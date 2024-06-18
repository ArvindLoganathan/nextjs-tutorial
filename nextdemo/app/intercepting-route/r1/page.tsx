import Link from 'next/link'
import React from 'react'

function r1() {
  return (
    <>
    <div>
      heading r1
    </div>
    <Link href="/intercepting-route/r2">route to intercept R2</Link>
    </>
  )
}

export default r1

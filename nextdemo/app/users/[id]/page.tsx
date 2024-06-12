import React from 'react'

export default function userpage({params}:{params:{id:string}}) {
  return (
    <div>
      user page {params?.id}
    </div>
  )
}


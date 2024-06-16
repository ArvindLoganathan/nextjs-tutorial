import Card from '@/app/components/Card';
import Link from 'next/link';
import React from 'react'

const Create = () => {
  return (
    <>
    <Card>
       Create Question page
       <Link href='/question'>back to question</Link>   
    </Card>
    </>
  )
}

export default Create

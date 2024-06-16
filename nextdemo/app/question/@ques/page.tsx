import Card from '@/app/components/Card';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'

//using template in layout it would be sidebar | with template
export const metadata: Metadata = {
  title: "Questionnaire page",
};
const DQuestion =  () => {
  return (
    <>
    <Card> 
      Questionnaire display page
      <Link href='/question/create'>create question</Link>
    </Card>
    
    </>
  )
}

export default DQuestion

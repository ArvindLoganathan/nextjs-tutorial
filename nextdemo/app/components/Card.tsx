import React from 'react'

export default  function Card ({children}:{children: React.ReactNode}){
  return (
    <>
    <div style={{width:"400px",height:"400px", border:"1px solid"}}>{children}</div>
    </>
  )
};



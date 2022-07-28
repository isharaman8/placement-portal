import React, { useState } from 'react'
import CompenyCard from '../Component/CompenyCard'

const Compney = () => {
  const [compenies,setCompenies]=useState([1,2,3,4,5])
  return (
    <div className='px-36 py-5 space-y-2'>
      {compenies.map((item)=><CompenyCard/>)}
    </div>
  )
}

export default Compney

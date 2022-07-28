import React, { useState } from 'react'
import CompenyCard from '../Component/CompenyCard'

const HomePage = () => {
  const [compenies,setCompenies]=useState([1,2,3])
  return (
    <div >
      <h1 className='text-4xl text-center py-5 font-semibold'>Current Hiring Compenies</h1>

      <div className='px-36 py-5 space-y-2'>
        {compenies.map((item) => <CompenyCard />)}
      </div>

    </div>
  )
}

export default HomePage

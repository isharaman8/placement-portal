import React, { useState } from 'react'
import AllUserCard from '../Component/Card/AllUserCard'

const AllUser = () => {
  const [users, setUsers]=useState([1,2,3,4,5,6,7])
  return (
    <div>
      <div className='space-y-4 px-20 py-5'>
        {users.map((item)=><AllUserCard/>)}
      </div>
      
    </div>
  )
}

export default AllUser

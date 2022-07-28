import { Button } from '@mui/material'
import React from 'react'

const AllUserCard = () => {
  return (
    <div className="py-3 bg-white rounded-md flex justify-between items-center px-5">
    <div className="flex items-center space-x-5 ">
      <img
        className="h-12 w-12 rounded-full"
        src="https://res.cloudinary.com/zarmariya/image/upload/v1658141474/fks8floldp6zdyvqyf9z.webp" alt="" />
      <div className="space-y-1 items-center">
        <h1 className="text-xl font-semibold">Ashok Zarmariya</h1>
          <p>ashok@gmail.com</p>
      </div>
    </div>
    <div>
    <Button variant="contained">Send Request</Button> 
    </div>
  </div>
  )
}

export default AllUserCard

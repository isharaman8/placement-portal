import { Button } from '@mui/material'
import React from 'react'

const CompenyCard = () => {
  return (
    <div className="py-3 bg-white rounded-md flex justify-between items-center px-5">
    <div className="flex items-center space-x-7 ">
      <img
        className="h-16 w-16 rounded-full"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png" alt="" />
      <div className="space-y-1 items-center">
        <h1 className="text-xl font-semibold">Wipro</h1>
          <p className='pb-2 text-sm'>Information technology company</p>
          <p>Bengaluru, Karnataka</p>
          <p>Vacency: 20+</p>
          <p>Role: Frontend</p>
        
      </div>
    </div>
    <div>
    <Button variant='contained'>Apply</Button>
    </div>
  </div>
  )
}

export default CompenyCard

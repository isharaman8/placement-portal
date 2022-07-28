import React from 'react'
import { Navbar } from '../Component/Navbar/Navbar'
import { UserSidebar } from '../Component/Sidebar/User/UserSidebar'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <UserSidebar/>
    </div>
  )
}

export default HomePage

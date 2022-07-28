<<<<<<< HEAD
import { useState } from "react";
import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";
import { AdminSidebar } from "./Component/Sidebar/Admin/AdminSidebar";
import { RecruiterSidebar } from "./Component/Sidebar/Recruiter/RecruiterSidebar";
import { UserSidebar } from "./Component/Sidebar/User/UserSidebar";
=======
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotificationCard from './Component/NotificationCard'
import AllUser from './Page/AllUser'
import Compney from './Page/Compney'
import HomePage from './Page/HomePage'
import Notifications from './Page/Notifications'
import PlacementData from './Page/PlacementData'

>>>>>>> ashok
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
<<<<<<< HEAD
      <Navbar />
      {/* <AdminSidebar /> */}
      {/* <UserSidebar /> */}
      <RecruiterSidebar />
=======
     
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='/notification' element={<Notifications/>}></Route>
        <Route path='/alluser' element={<AllUser />}></Route>
        <Route path="/compeny" element={<Compney/>}></Route>
        <Route path="placementdata" element={<PlacementData/>}></Route>
      </Routes>
     
      
>>>>>>> ashok
    </div>
  );
}

export default App;

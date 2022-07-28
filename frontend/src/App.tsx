import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotificationCard from './Component/NotificationCard'
import AllUser from './Page/AllUser'
import Compney from './Page/Compney'
import HomePage from './Page/HomePage'
import PlacementData from './Page/PlacementData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
     
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='/notification' element={<NotificationCard />}></Route>
        <Route path='/alluser' element={<AllUser />}></Route>
        <Route path="/compeny" element={<Compney/>}></Route>
        <Route path="placementdata" element={<PlacementData/>}></Route>
      </Routes>
     
      
    </div>
  )
}

export default App

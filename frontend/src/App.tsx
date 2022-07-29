import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotificationCard from "./Component/NotificationCard";
import AllUser from "./Page/AllUser";
import Compney from "./Page/Compney";
import HomePage from "./Page/HomePage";
import Notifications from "./Page/Notifications";
import PlacementData from "./Page/PlacementData";
import { Login } from "./Page/Login";
import { Navbar } from "./Component/Navbar/Navbar";
import { UserSidebar } from "./Component/Sidebar/User/UserSidebar";

function App() {
  return (
    <div className="bg-slate-600">
      <Navbar />
      {/* <div>
          {" "}
          <UserSidebar />
        </div> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/notification" element={<Notifications />}></Route>
        <Route path="/alluser" element={<AllUser />}></Route>
        <Route path="/company" element={<Compney />}></Route>
        <Route path="/placementdata" element={<PlacementData />}></Route>
      </Routes>
    </div>
  );
}

export default App;

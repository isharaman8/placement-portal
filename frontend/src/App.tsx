import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllUser from "./Page/AllUser";
import Compney from "./Page/Compney";
import HomePage from "./Page/HomePage";
import Notifications from "./Page/Notifications";
import PlacementData from "./Page/PlacementData";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/notification" element={<Notifications />}></Route>
        <Route path="/alluser" element={<AllUser />}></Route>
        <Route path="/compeny" element={<Compney />}></Route>
        <Route path="placementdata" element={<PlacementData />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { AdminSidebar } from "./Components/Sidebar/Admin/AdminSidebar";
import { RecruiterSidebar } from "./Components/Sidebar/Recruiter/RecruiterSidebar";
import { UserSidebar } from "./Components/Sidebar/User/UserSidebar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      {/* <AdminSidebar /> */}
      {/* <UserSidebar /> */}
      <RecruiterSidebar />
    </div>
  );
}

export default App;

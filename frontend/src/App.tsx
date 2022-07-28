import { useState } from "react";
import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";
import { AdminSidebar } from "./Component/Sidebar/Admin/AdminSidebar";
import { RecruiterSidebar } from "./Component/Sidebar/Recruiter/RecruiterSidebar";
import { UserSidebar } from "./Component/Sidebar/User/UserSidebar";
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

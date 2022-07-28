import React, { useState } from "react";
import AllUserCard from "../Component/AllUserCard";
import { AdminSidebar } from "../Component/Sidebar/Admin/AdminSidebar";

const AllUser = () => {
  const [users, setUsers] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <div>
      <div className=" absolute left-0 top-20">
        {" "}
        <AdminSidebar />
      </div>
      <div className="space-y-4 px-20 py-5">
        {users.map((item) => (
          <AllUserCard />
        ))}
      </div>
    </div>
  );
};

export default AllUser;

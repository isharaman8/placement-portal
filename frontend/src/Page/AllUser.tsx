import React, { useState } from "react";
import AllUserCard from "../Component/Card/AllUserCard";
import PaginationComponent from "../Component/PaginationComponent";
import { AdminSidebar } from "../Component/Sidebar/Admin/AdminSidebar";

const AllUser = () => {
  const [users, setUsers] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div>
      <div className="absolute top-20 left-1">
        <AdminSidebar />
      </div>
      <div className="space-y-4 px-20 py-5 pt-20 ml-5">
        {users.slice((page - 1) * 8, page * 8).map((item) => (
          <AllUserCard num={item} />
        ))}

        <div>
          <PaginationComponent
            page={page}
            handleChange={handleChange}
            totlePage={users.length / 8}
          />
        </div>
      </div>
    </div>
  );
};

export default AllUser;

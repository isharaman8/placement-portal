import React, { useState } from "react";
import AllUserCard from "../Component/Card/AllUserCard";
import PaginationComponent from "../Component/PaginationComponent";

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
      <div className="grid grid-cols-5 gap-3 pt-20 ml-24 lg:flex flex-col lg:mx-auto pl-12">
        {users.slice((page - 1) * 10, page * 10).map((item) => (
          <AllUserCard num={item} />
        ))}
      </div>
      <div>
        <PaginationComponent
          page={page}
          handleChange={handleChange}
          totlePage={users.length / 8}
        />
      </div>
    </div>
  );
};

export default AllUser;

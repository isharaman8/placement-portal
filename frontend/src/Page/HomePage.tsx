import React, { useState } from "react";
import CompenyCard from "../Component/CompenyCard";

import { UserSidebar } from "../Component/Sidebar/User/UserSidebar";

const HomePage = () => {
  const [companies, setCompanies] = useState([1, 2, 3, 4, 5]);
  return (
    <div className=" ">
      <div className=" absolute left-0 top-20">
        {" "}
        <UserSidebar />
      </div>{" "}
      <div className="overflow-y-auto">
        <h1 className="text-4xl text-center py-5 font-semibold">
          Current Hiring Companies
        </h1>
        <div className="px-36 py-5 space-y-2 overflow-y-auto">
          {companies.map((item) => (
            <CompenyCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

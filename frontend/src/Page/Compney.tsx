import React, { useState } from "react";
import CompenyCard from "../Component/CompenyCard";
import { RecruiterSidebar } from "../Component/Sidebar/Recruiter/RecruiterSidebar";
import { UserSidebar } from "../Component/Sidebar/User/UserSidebar";

const Compney = () => {
  const [compenies, setCompenies] = useState([1, 2, 3, 4, 5]);
  return (
    <div>
      {" "}
      <div className=" absolute left-0 top-20">
        {" "}
        <RecruiterSidebar />
      </div>
      <div className="px-36 py-5 space-y-2">
        {compenies.map((item) => (
          <CompenyCard />
        ))}
      </div>
    </div>
  );
};

export default Compney;

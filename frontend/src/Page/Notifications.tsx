import { useState } from "react";
import NotificationCard from "../Component/Card/NotificationCard";

import { UserSidebar } from "../Component/Sidebar/User/UserSidebar";

const Notifications = () => {
  const [notification, setNotification] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div>
      {/* <div className=" absolute left-0 top-20">
    

        <UserSidebar />
      </div> */}
      <div className="space-y-4 px-24 py-5 pt-20 ml-5">
        {notification.map((item) => (
          <NotificationCard />
        ))}
      </div>
    </div>
  );
};

export default Notifications;

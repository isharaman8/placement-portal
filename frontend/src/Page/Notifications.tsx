import { useState } from "react"
import NotificationCard from "../Component/Card/NotificationCard";


const Notifications = () => {

  const [notification, setNotification] = useState([1,2,3,4,5,6,7,8]);
  return (
    <div >
      <div className="space-y-4 px-24 py-5">
        {notification.map((item)=><NotificationCard/>)}
      </div>
      
    </div>
  )
}

export default Notifications

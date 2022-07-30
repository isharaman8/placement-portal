import { useSelect } from "@mui/base";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NotificationCard from "../Component/Card/NotificationCard";

import { UserSidebar } from "../Component/Sidebar/User/UserSidebar";
import socket from "../utils/socket";

const Notifications = () => {
	const [notification, setNotification] = useState([]);
	const store = useSelector((store: any) => store.userLogin);

	const handleNotifications = (payload: any) => {
		setNotification(payload);
	};

	useEffect(() => {
		socket.emit(
			"findAllNotifications",
			{ userid: store?.data?.payload?.id },
			(data: any) => setNotification(data)
			// console.log(`All Notifications`, data)
		);
	}, []);

	useEffect(() => {
		console.log(notification);
	}, [notification]);
	return (
		<div>
			{/* <div className=" absolute left-0 top-20">
    

        <UserSidebar />
      </div> */}
			<div className="space-y-4 px-24 py-5 pt-20 ml-5">
				{notification.map((item) => (
					<NotificationCard
						handleNotifications={handleNotifications}
						item={item}
					/>
				))}
			</div>
		</div>
	);
};

export default Notifications;

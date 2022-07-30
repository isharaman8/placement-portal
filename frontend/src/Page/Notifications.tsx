import { useSelect } from "@mui/base";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotificationCard from "../Component/Card/NotificationCard";

import { UserSidebar } from "../Component/Sidebar/User/UserSidebar";
import { addNotification } from "../Redux/Actions/notification.actions";
import socket from "../utils/socket";

const Notifications = () => {
	const [notification, setNotification] = useState([]);
	const store = useSelector((state: any) => state.login.userLogin);

	const dispatch = useDispatch();

	const storeNotifications = useSelector(
		(state: any) => state.notifications.notifications
	);

	const handleNotifications = (payload: any) => {
		setNotification(payload);
	};

	useEffect(() => {
		socket.emit(
			"findAllNotifications",
			{ userid: store?.data?.payload?.id },
			(data: any) => dispatch(addNotification(data))
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
				{storeNotifications.map((item: any) => (
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

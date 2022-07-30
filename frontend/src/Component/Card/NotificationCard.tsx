import { BsThreeDots, BsX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addNotification } from "../../Redux/Actions/notification.actions";
import socket from "../../utils/socket";

interface IProps {
	item: any;
	handleNotifications: (payload: any) => void;
}

const NotificationCard = ({ item, handleNotifications }: IProps) => {
	const store = useSelector((state: any) => state.login.userLogin);
	const dispatch = useDispatch();

	const handleRemoveNotification = () => {
		socket.emit(
			"removeNotification",
			{ id: store?.data?.payload?.id },
			(data: any) => {
				handleNotifications(data);
				dispatch(addNotification(data));
			}
		);
	};

	return (
		<div className="py-3 bg-white rounded-md flex justify-between items-center px-5">
			<div className="flex items-center space-x-5 ">
				{/* <img
					className="h-12 w-12 rounded-full"
					src="https://res.cloudinary.com/zarmariya/image/upload/v1658141474/fks8floldp6zdyvqyf9z.webp"
					alt=""
				/> */}
				<div className="flex space-x-1 items-center">
					{/* <h1 className="text-xl font-semibold">Ashok Zarmariya</h1> */}
					<p>{item.content}</p>
				</div>
			</div>
			<div>
				{/* <p>1h</p> */}
				<BsX onClick={handleRemoveNotification} className="text-xl" />
			</div>
		</div>
	);
};

export default NotificationCard;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { userLogin } from "../Redux/Actions/action";
import socket from "../utils/socket";

interface IProps {
	user?: any;
	getAllUsers?: () => void;
}

export const UserProfile = ({ user, getAllUsers }: IProps) => {
	// const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

	const store = useSelector((state: any) => state.login.userLogin);
	const dispatch = useDispatch();

	const handleAddFriend = async () => {
		console.log("Friends");
		const url =
			"https://placements-backend-hackathon.herokuapp.com/auth/addfriends";

		// axios
		// 	.put(
		// 		url,
		// 		{ userID: user._id },
		// 		{ headers: { Authorization: `Bearer ${store?.data?.token}` } }
		// 	)
		// 	.then(() => {
		// const profileURL =
		// 	"https://placements-backend-hackathon.herokuapp.com/auth/profile";
		// axios
		// 	.get(profileURL, {
		// 		headers: { Authorization: `Bearer ${store?.data?.token}` },
		// 	})
		// 	.then((data: any) => dispatch(userLogin(data.data)))
		// 	.then(() => getAllUsers && getAllUsers())
		// 	.catch((err: any) => alert(err.message));
		// // .catch((err: any) => alert(err.message));
		axios
			.put(
				url,
				{ userID: user._id },
				{ headers: { Authorization: `Bearer ${store?.data?.token}` } }
			)
			.then(() => {
				socket.emit(
					"createNotification",
					{
						content: `${store?.data?.payload?.name} added you as friend`,
						notificationfor: user._id,
					},
					(data: any) => console.log(data)
				);
				getAllUsers && getAllUsers();
			});

		// console.log(getAllUsers());
		// })
		// .catch((err: any) => alert(err.message));
	};

	useEffect(() => {
		// console.log(store?.data?.payload?.friends?.includes(user._id));
	}, []);

	// console.log(user);
	return (
		<div className="">
			<section className="w-64  bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
				<div className="flex items-center justify-between">
					<span className="text-gray-400 text-sm">2d ago</span>
					{/* <span className="text-emerald-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
							/>
						</svg>
					</span> */}
				</div>
				{/* <div className="mt-6 w-fit mx-auto">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7DaftP9syRV3cHK3vj_NTZAvP6GeYqTwuXHAYT5XcLzvIYCVrv97buMpwb3JY9DN21nc&usqp=CAU"
						className="rounded-full w-28 "
						alt="profile picture"
					/>
				</div> */}

				<div className="mt-8 ">
					<h2 className="text-white font-bold text-2xl tracking-wide">
						{user?.name}
					</h2>
				</div>
				<p className="text-emerald-400 font-semibold mt-2.5 flex justify-between">
					<span className="mt-1">Active</span>
					<span>
						{!user?.friends?.includes(store?.data?.payload?.id) ? (
							<button
								type="button"
								className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
								onClick={handleAddFriend}
							>
								Add Friend
							</button>
						) : (
							<span style={{ color: "grey" }}>Friend</span>
						)}
					</span>
				</p>

				<div className="h-1 w-full bg-black mt-8 rounded-full">
					<div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
				</div>
				<div className="mt-3 text-white text-sm">
					<span className="text-gray-400 font-semibold">Email: </span>
					<span>{user?.emailID}</span>
				</div>
			</section>
		</div>
	);
};

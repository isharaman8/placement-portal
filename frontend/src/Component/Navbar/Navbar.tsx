import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { userLogout } from "../../Redux/Actions/action";
import socket from "../../utils/socket";

export const Navbar = () => {
	const user = useSelector((state: any) => state.userLogin);
	const isEmpty = Object.keys(user).length === 0;
	const [isOpen, setIsOpen] = useState(false);
	const [notifications, setNotifications] = useState([]);

	const store = useSelector((store: any) => store.userLogin);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	socket.on("getSingleNotification", (data: any) => {
		const newNotifications: any[] = [data, ...notifications];
		setNotifications(newNotifications as any);
		console.log(`Received Notification: `, data);
	});

	useEffect(() => {
		// console.log(store);
		if (!store?.data) return;
		// console.log();
		socket.emit(
			"findAllNotifications",
			{ userid: store?.data?.payload?.id },
			(data: any) => setNotifications(data)
			// console.log(`All Notifications`, data)
		);
	}, []);

	return (
		<div className="fixed w-full overflow-y-hidden z-50 ">
			<nav className="navbar navbar-expand-lg bg-slate-800 h-16 flex  items-center justify-between   overflow-hidden">
				<div className="flex ">
					<div className=" w-12 h-12 ml-2 bg-slate-800 flex items-center justify-center sm:ml-2 ">
						<img
							src="./job.gif"
							alt=""
							className="w-9 h-9  ml-2 cursor-pointer"
							onClick={() => {
								navigate("/");
							}}
						/>
					</div>
				</div>
				<div className="bg-slate-800 flex items-center justify-center text-slate-100 space-x-4 mr-12">
					<div className="ml-20  bg-slate-800 flex items-center justify-center border-b-2 md:pr-3 md:mr-2">
						<input
							className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
							type="text"
							placeholder="Jane Doe"
							aria-label="Full name"
						/>

						<button className="ml-0.5 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-sm text-sm px-4 py-1.5 text-center mr-2 ">
							<svg
								className="w-4 h-4 text-white "
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								></path>
							</svg>
						</button>
					</div>
					<div
						style={{ position: "relative" }}
						onClick={() => navigate("/notification")}
					>
						<sup
							style={{
								position: "absolute",
								right: 0,
								top: 0,
								backgroundColor: "red",
								color: "white",
								// border: "1px solid white",
								borderRadius: 100,
								textAlign: "center",
								// lineHeight: 100,
								// padding: 5,
							}}
						>
							{notifications.length}
						</sup>
						<svg
							className="w-6 h-6 lg:mr-3"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							></path>
						</svg>
					</div>
					<div>
						{isEmpty ? (
							<button
								type="button"
								className="py-1.5 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								onClick={() => navigate("/login")}
							>
								Login
							</button>
						) : (
							<button
								type="button"
								className="py-1.5 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								onClick={() => {
									dispatch(userLogout({}));
									localStorage.removeItem("loggedInUser");
									localStorage.removeItem("SignUpUser");
									navigate("/login");
								}}
							>
								Logout
							</button>
						)}
					</div>
					<div>
						<button
							type="button"
							className="bg-gray-800 flex text-sm rounded-full focus:outline-none "
							id="user-menu-button"
							aria-expanded="false"
							aria-haspopup="true"
							onClick={() => setIsOpen(!isOpen)}
						>
							<span className="sr-only">Open user menu</span>
							<img
								className="h-8 w-8 rounded-full"
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXh4eGjo6OgoKDk5OTg4OCkpKTY2Ninp6exsbHV1dXc3NzDw8PR0dG+vr6urq63t7fKysrBwcGMZqvqAAAFaUlEQVR4nO2d3ZqjIAxAlSAgirDv/7ILdbprW6dV+Qv9cq46c+X5goCRxK4jCIIgCIIgCIIgCIIgCIIgCIIgCIIoDQBwPQY0979rX05ioNPjZKUcVqS006i777GEzlnJGOv/4/+S1n2L42we7TaWZq59cQkY7bCn9yM52LH2BcYB2u6GbxtIq1seq06+97s5Slf7Mq8C3H72uzla3mQYYTwQwHsYxwYVYRwO+gWG9hTBnRH0iq41xfmcoFdsa2kEcVbQK4qWoijkacG+l6L2ZR8H1AXBvlftBHE6ukw8wqbaF36UU+vElqGRTSqoayH0QWxjnIK7KugVm1gV+XJZsO8XXvvyPxMTwkaCeG2luKNqX/5nLk+kK/inUzAxg9QPU4N9mEJcCH0QsRuKuBD6ICLfncLFDdvGcEIexIOpmTeGtrbCe3TMcr+y6NoSb7n0YPgI8sfEMXaQ+mGKe0WcExiiTtjEbUp/DFFvTeMXC+zLBRmSYQOGXz/TfP9q0Y3Rgn2Pe8XXCXZtuPelPC5LE1C4022xSQz8aYz4yRT5VOqHabQh7kHqgxj7CLwgD2H0MEU/SKOf8pE/4QfiZlPsM+mNqIwp9mzpSkRCEXsq8YcLJ03uDE2EMOJObOIuDFx+C9zCG+CVi1lT5JnSLdeSGbjTF89cuBWZqX3Rp+DLWUXWzk24wk8eG2LIH3x30KcUmcKdu9jnxN6mkb3MC9Nhw2YOJT4B85tymU0A2zvj/Q/gB1YNZtqstrgzf9rBLbhT3J8BcOrX0ifGlPuCWkvohF36V0nWL1Z8SwUi6NmEEsu1DnH9Ic3cdNHaCwB8dMZapZS1xo38C0bnK6G+mXPefV+dM0EQBEEQBEEQBEEQRCuExAwP6MDt1/rPLyBknfTsJmPVIoc1k9gPclHWTG7WbWelALgYnQli/WvHttt/vKpxo2gxtehDo51Rcr8X3ZOpVMbppoIZkr92J2xvNXsb0sS1L/0A0PHZLsMJu/+Ww2JnjvtNBoBw9ordxtI6gXe8Cqdi9P5JKofxAB/AbA93oPtoKe2MLJAgJhkdvQdHJidMvb+ESRa+jaQ0SAarH55Jw7dxZH6w1tbrulHtvMFO5tiryicyQduMfqtjzQ6uoE2m8fngyEw1xznD/LLrKKucuTncYTaJY40utcc7zCZRlKVnnLMNWOMpfLzvyIm81DBT8hRxwVtwo1jwmG0VwYKKJSfRZ8UiAzW+XDtCsUhhVILWFxGKBTrUJ+iaEEP+jgtQ7SZcYTb3OJ2r+gVy71ErhzD/khHd+DGBYtbcRoouSdGGecsU45uzxJO1EW+CtojxZG27ENkkOA1ZWw3XXysCOdeLs5WhOchcbSpq+3nyZsJTtJyLI38Dm8rjlOVv2p6gU3AMJboMJ2ike50ijSXgeAFzego1lqiWxijWWKLWqliw78L5rhdJBEt2zhAVFNlS8qU36EO9BJIKDmXfIsJYOIpsKf39wBPfb0wiWOEbkKALRpEtNV50Q7npxk8ydd7kl1oXK/YfKvOitOyr0WcKZBcrfzMQcp84YbL6wa+8UypD8dWZjCMVy1ctc+1v/D6mttoPwP9kON/G2B9EZ/dBJH/rxiymM8IefuRD8Sf8pEPXZRD0lOyoKesnlB2WQKc57s1kvQOlnwBhouPIeoPsBnwEummJqplZJtxlQd2tc5m6mOJgg2qjwxmAmH7vs/d7+NSEuOLpGeBe8ngVTShBnASi9f0Q0I23OrYDFZaDdSP6u2+XtZD0Vo24Ixr+OSy2tfLRFwC4FnPwlFIOd/zv4DYL3WIJ8B4Q8KpiDIibWNuRIwiCIAiCIAiCIAiCIAiCIAiCIAiiRf4CPHlDC7+BCBEAAAAASUVORK5CYII="
								alt=""
							/>
						</button>
					</div>
					{/* <div className="bg-slate-800">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLineJoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div> */}
					<div
						className={`${
							isOpen
								? "block origin-top-right z-50 absolute top-20 right-1 mt-2 w-48 rounded-md shadow-lg py-1 bg-slate-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
								: "hidden"
						}`}
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="user-menu-button"
						// tabIndex="-1"
					>
						{/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
						<a
							href="#"
							className="block px-4 py-2 text-sm text-slate-50"
							role="menuitem"
							// tabIndex="-1"
							id="user-menu-item-0"
						>
							Your Profile
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-sm text-slate-50"
							role="menuitem"
							// tabIndex="-1"
							id="user-menu-item-1"
						>
							Settings
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-sm text-slate-50"
							role="menuitem"
							// tabIndex="-1"
							id="user-menu-item-2"
							// onClick={handleLogout}
						>
							Sign out
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};

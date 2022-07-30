import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllUser from "./Page/AllUser";
import Compney from "./Page/Compney";
import HomePage from "./Page/HomePage";
import Notifications from "./Page/Notifications";
import PlacementData from "./Page/PlacementData";
import { Login } from "./Page/Login";
import { Navbar } from "./Component/Navbar/Navbar";
import { UserSidebar } from "./Component/Sidebar/User/UserSidebar";
import AddCompanyForm from "./Component/Form/AddCompanyForm";
import { Admin } from "./Page/Admin";
import { UserProfile } from "./Page/UserProfile";
import socket from "./utils/socket";

function App() {
	useEffect(() => {
		socket.on("getSingleNotification", (data: any) => {
			// const newNotifications: any[] = [data, ...notifications];
			// setNotifications(newNotifications as any);
			console.log(`Received Notification: `, data);
		});
	}, []);
	return (
		<div className="bg-slate-600">
			<Navbar />
			<div className=" absolute left-1 top-20 lg:hidden">
				<UserSidebar />
			</div>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/admin" element={<Admin />}></Route>
				<Route path="/admin/form" element={<AddCompanyForm />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/notification" element={<Notifications />}></Route>
				<Route path="/alluser" element={<AllUser />}></Route>
				<Route path="/profile" element={<UserProfile />}></Route>
				<Route path="/company" element={<Compney />}></Route>
				<Route path="/placementdata" element={<PlacementData />}></Route>
			</Routes>
		</div>
	);
}

export default App;

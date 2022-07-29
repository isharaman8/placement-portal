import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLoginRequest, userSignUpRequest } from "../Redux/Actions/action";
import "./login.css";
import { connect } from "react-redux";

export const Login = () => {
	const [disable, setDisable] = useState(false);
	const [userData, setUserData] = useState({
		name: "",
		emailID: "",
		password: "",
		role: "",
	});
	const dispatch: any = useDispatch();

	const handleSignup = (event: any) => {
		event.preventDefault();
		console.log(userData);
		dispatch(userSignUpRequest(userData));
	};
	const handleLogin = (event: any) => {
		event.preventDefault();
		const obj = {
			emailID: userData.emailID,
			password: userData.password,
		};
		dispatch(userLoginRequest(obj));

		console.log(obj);
	};
	return (
		<div className=" bg-[#33be8f]">
			<div className="bg-slate-100">
				<img className="wave" src="./wave.png" />
				<div className="container">
					<div className="img">
						<img src="./bg.svg" />
					</div>
					<div className="login-content">
						<form action="index.html">
							<img src="./avatar.svg" />
							<h2 className="title">Welcome</h2>
							{disable ? (
								<div className="input-div one">
									<div className="i">
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
											></path>
										</svg>{" "}
									</div>
									<div className="div">
										<input
											type="text"
											className="input"
											placeholder="Name"
											onChange={(e) => {
												setUserData({ ...userData, name: e.target.value });
											}}
										/>
									</div>
								</div>
							) : null}
							{disable ? (
								<div className="input-div one">
									<div className="i">
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
											></path>
										</svg>{" "}
									</div>
									<div className="">
										<label html-for="underline_select" className="sr-only">
											Underline select
										</label>

										<select
											id="underline_select"
											className="block py-2.5  ml-3 text-lg text-white bg-transparent border-0 bg-slate-600 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
											onChange={(event) => {
												setUserData({ ...userData, role: event.target.value });
											}}
										>
											<option className="">Role</option>
											<option value="Admin" className="">
												Admin
											</option>
											<option value="Student">Student</option>
											<option value="Recruiter">Recruiter</option>
										</select>
									</div>
								</div>
							) : null}
							<div className="input-div one">
								<div className="i">
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										></path>
									</svg>{" "}
								</div>
								<div className="div">
									<input
										type="email"
										className="input"
										placeholder="Email"
										onChange={(e) => {
											setUserData({ ...userData, emailID: e.target.value });
										}}
									/>
								</div>
							</div>
							<div className="input-div pass">
								<div className="i">
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
										></path>
									</svg>{" "}
								</div>
								<div className="div">
									<input
										type="password"
										className="input"
										placeholder="Password"
										onChange={(e) => {
											setUserData({ ...userData, password: e.target.value });
										}}
									/>
								</div>
							</div>
							<a href="#">Forgot Password?</a>
							<div className="flex-col">
								<button
									type="button"
									className="mt-5  px-28 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm  py-2.5 text-center mr-2 mb-2"
									onClick={(e) => {
										setDisable(false);
										handleLogin(e);
									}}
								>
									Login..
								</button>
								<button
									type="button"
									className={`${
										!disable
											? "hidden mt-1 px-28 mb-5  text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm  py-2.5 text-center mr-2 "
											: "mt-1 px-28 mb-5  text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm  py-2.5 text-center mr-2 "
									}`}
									onClick={(e) => {
										setDisable(true);
										handleSignup(e);
									}}
								>
									Signup
								</button>
								<button
									type="button"
									className={`${
										disable
											? "hidden mt-1 px-24 mb-5  text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm  py-2.5 text-center mr-2 "
											: "mt-1 px-28 mb-5  text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm  py-2.5 text-center mr-2 "
									}`}
									onClick={(e) => {
										setDisable(true);
									}}
								>
									Signup
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

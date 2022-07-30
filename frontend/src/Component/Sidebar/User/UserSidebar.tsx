import React, { useState } from "react";
import { useNavigate } from "react-router";
export const UserSidebar = () => {
	const [open, setOpen] = useState(true);
	const Menus = [
		{ title: "Dashboard", src: "Chart_fill" },
		{ title: "All User", src: "User" },
		{ title: "Profile", src: "User", gap: true },
		{ title: "Company ", src: "Calendar" },
		{ title: "Analytics", src: "Chart" },
		{ title: "Notifications ", src: "Folder", gap: true },
	];

	const navigate = useNavigate();
	const handleClick = (title: string) => {
		switch (title) {
			case "Dashboard":
				navigate("/");
				break;
			case "All User":
				navigate("/alluser");
				break;

			case "Profile":
				navigate("/profile");
				break;
			case "Students":
				navigate("/students");
				break;
			case "Company ":
				navigate("/company");

				break;
			case "Analytics":
				navigate("/placementdata");
				break;
			case "Notifications ":
				navigate("/notification");
				break;

			default:
				return;
		}
	};
	return (
		<div className="w-64 fixed z-50  ">
			<div className="flex w-full">
				<div
					className={` ${
						!open
							? "w-64 bg-slate-700 rounded-md"
							: "w-20 bg-slate-700 rounded-md"
					} bg-dark-purple  p-5 h-screen  pt-8 relative duration-300`}
				>
					<img
						src="/assets/control.png"
						className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple bg-black
           border-2 rounded-full  ${open && "rotate-180"}`}
						onClick={() => setOpen(!open)}
					/>

					<div className="flex gap-x-4 items-center">
						<img
							src="/assets/logo.png"
							className={`cursor-pointer duration-500  ${
								open && "rotate-[360deg]"
							}`}
						/>

						<h1
							className={`text-white origin-left font-medium text-xl duration-200 ${
								open && "scale-0"
							}`}
						>
							Student
						</h1>
					</div>
					<ul className="pt-6">
						{Menus.map((Menu, index) => (
							<li
								key={index}
								className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
									index === 0 && "bg-light-white"
								} `}
							>
								<img src={`/assets/${Menu.src}.png`} />
								<span
									className={`${open && "hidden"} origin-left duration-200`}
									onClick={() => {
										handleClick(Menu.title);
									}}
								>
									{Menu.title}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

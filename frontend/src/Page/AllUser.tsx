import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AllUserCard from "../Component/Card/AllUserCard";
import PaginationComponent from "../Component/PaginationComponent";

const AllUser = () => {
	const [users, setUsers] = useState([]);
	const store = useSelector((state: any) => state.login.userLogin);
	const [token, setToken] = useState(store?.data?.token);

	const getAllUsers = async () => {
		let url =
			"https://placements-backend-hackathon.herokuapp.com/auth/allusers";

		const data = await axios.get(url, {
			headers: {
				Authorization: `Bearer ${store?.data?.token}`,
			},
		});
		console.log(data);
		console.log(users);
		setUsers(data.data);
	};
	useEffect(() => {
		getAllUsers();
	}, []);
	const [page, setPage] = React.useState(1);
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};
	return (
		<div>
			<div className="grid grid-cols-5 gap-3 pt-20 ml-24 lg:flex flex-col lg:mx-auto pl-12">
				{users.slice((page - 1) * 10, page * 10).map((item) => (
					<AllUserCard
						getAllUsers={getAllUsers}
						key={`${Date.now()}-KEY-${Math.floor(Math.random() * 2112313)}`}
						user={item}
					/>
				))}
			</div>
			<div>
				<PaginationComponent
					page={page}
					handleChange={handleChange}
					totlePage={users.length / 8}
				/>
			</div>
		</div>
	);
};

export default AllUser;

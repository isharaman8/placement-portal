import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CompenyCard from "../Component/Card/CompenyCard";
import AddCompanyForm from "../Component/Form/AddCompanyForm";
import PaginationComponent from "../Component/PaginationComponent";
import { UserSidebar } from "../Component/Sidebar/User/UserSidebar";

const HomePage = () => {
	const [companies, setCompanies] = useState([]);
	const [page, setPage] = React.useState(1);
	const [isStudent, setIsStudent] = React.useState(false);
	const navigate = useNavigate();
	const [companyLoading, setCompanyLoading] = useState(false);
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};
	const store = useSelector((state: any) => state.login.userLogin);

	useEffect(() => {
		if (!store?.data) navigate("/login");
		if (store?.data?.payload?.role === "student") setIsStudent(true);
		// console.log(store);
	}, []);

	const getCompanies = async () => {
		try {
			setCompanyLoading(true);
			let URL =
				"https://placements-backend-hackathon.herokuapp.com/companies/getallcompanies";

			console.log(URL);
			if (store?.data?.payload?.role === "student")
				URL += `?currentlyHiring=true`;
			const data = await axios.get(URL);
			setCompanies(data.data);
		} catch (err: any) {
			alert(err.message);
		} finally {
			setCompanyLoading(false);
		}
	};

	useEffect(() => {
		getCompanies();
	}, []);

	return (
		<div style={{ height: "100vh" }}>
			<div className="px-36 pt-20">
				<h1 className="text-4xl text-center py-5 font-semibold">
					Current Hiring Companies Page: {(page - 1) * 3 + " - " + page * 3}{" "}
				</h1>

				<div className="  py-5 space-y-2">
					{companyLoading ? (
						<div>Loading...</div>
					) : companies.length === 0 ? (
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "center",
								fontSize: 25,
							}}
						>
							No Current Companies Hiring
						</div>
					) : (
						companies
							.slice((page - 1) * 3, page * 3)
							.map((item) => (
								<CompenyCard
									key={
										Date.now() + "-KEY-" + Math.floor(Math.random() * 123412)
									}
									company={item}
									getCompanies={getCompanies}
								/>
							))
					)}
					{companies.length === 0 ? null : (
						<div>
							<PaginationComponent
								page={page}
								handleChange={handleChange}
								totlePage={companies.length / 3}
							/>
						</div>
					)}
				</div>

				{isStudent ? null : (
					<div className="py-10">
						<AddCompanyForm
							token={store?.data?.token}
							getCompanies={getCompanies}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default HomePage;

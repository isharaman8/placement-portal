import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CompenyCard from "../Component/Card/CompenyCard";
import PaginationComponent from "../Component/PaginationComponent";

const Compney = () => {
	const [companies, setCompanies] = useState([]);
	const [page, setPage] = React.useState(1);
	const cardRef = useRef<HTMLDivElement>(null);
	// const [isStudent, setIsStudent] = React.useState(false);
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
		cardRef.current?.focus();
	};
	const [companyLoading, setCompanyLoading] = useState(false);

	const store = useSelector((state: any) => state.login.userLogin);

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
		<div>
			<h1 className="py-5 text-center text-3xl font-semibold" ref={cardRef}>
				All The Upcoming Companies On This Week
			</h1>
			<div className="px-36 py-5 space-y-2 ">
				{companies.slice((page - 1) * 5, page * 5).map((item) => (
					<CompenyCard
						key={Date.now() + "-KEY-" + Math.floor(Math.random() * 123412)}
						company={item}
						getCompanies={getCompanies}
					/>
				))}

				<div>
					<PaginationComponent
						page={page}
						handleChange={handleChange}
						totlePage={companies.length / 5}
					/>
				</div>
			</div>
		</div>
	);
};

export default Compney;

import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Toas from "../Toas";

interface IProps {
	token?: string;
	getCompanies?: () => void;
}

const AddCompanyForm = ({ token, getCompanies }: IProps) => {
	const [up, setup] = useState(false);
	const [companyName, setCompanyName] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [vacancy, setVacancy] = useState<number>(0);
	const [role, setRole] = useState<string>("");
	const navigate = useNavigate();

	const handleClose = () => setup(false);

	const handleAddCompany = async () => {
		if (!companyName || !description || !location || !vacancy || !role)
			return alert("Please fill all the details");

		const payload = {
			name: companyName,
			description,
			location,
			numOpenings: vacancy,
			jobDescription: role,
			currentlyHiring: false,
		};

		const URL =
			"https://placements-backend-hackathon.herokuapp.com/companies/addcompany";

		if (!token) {
			alert("Please login first");
			navigate("/login");
		}

		try {
			const data = await axios.post(URL, payload, {
				headers: { Authorization: `Bearer ${token}` },
			});

			console.log(data);
		} catch (error: any) {
			console.log(error);
			alert(error.message);
		} finally {
			getCompanies && getCompanies();
		}
	};

	return (
		<div>
			<div className="space-y-5 border rounded-md py-10 px-64 bg-[rgb(75,105,149)] pt-20">
				<h1 className="font-bold text-slate-800 text-3xl text-center pb-5">
					Add Upcoming Company
				</h1>

				<div className="space-y-2">
					<label className="w-full text-lg font-semibold" htmlFor="title">
						Company Name
					</label>
					<input
						className="w-full py-3 px-5 rounded-md outline-none"
						id="title"
						type="text"
						value={companyName}
						onChange={(e: any) => setCompanyName(e.target.value)}
						placeholder="Company Name"
					/>
				</div>
				<div>
					<label className="w-full text-lg font-semibold" htmlFor="about">
						About
					</label>
					<input
						className="w-full py-3 px-5 rounded-md outline-none"
						id="about"
						type="text"
						placeholder="About"
						value={description}
						onChange={(e: any) => setDescription(e.target.value)}
					/>
				</div>
				<div>
					<label className="w-full text-lg font-semibold" htmlFor="location">
						Location
					</label>
					<input
						className="w-full py-3 px-5 rounded-md outline-none"
						id="lcation"
						type="text"
						placeholder="Location"
						value={location}
						onChange={(e: any) => setLocation(e.target.value)}
					/>
				</div>
				<div>
					<label className="w-full text-lg font-semibold" htmlFor="vacency">
						Vacancy
					</label>
					<input
						className="w-full py-3 px-5 rounded-md outline-none"
						id="vacency"
						type="number"
						placeholder="Vacency"
						value={vacancy}
						onChange={(e: any) => setVacancy(e.target.value)}
					/>
				</div>
				<div>
					<label className="w-full text-lg font-semibold" htmlFor="role">
						Role
					</label>
					<input
						className="w-full py-3 px-5 rounded-md outline-none"
						id="role"
						type="text"
						placeholder="Role"
						value={role}
						onChange={(e: any) => setRole(e.target.value)}
					/>
				</div>
				<div>
					<Button
						onClick={handleAddCompany}
						variant="contained"
						sx={{ width: "100%", height: "3rem" }}
					>
						Add Upcoming Company
					</Button>
				</div>
			</div>
			<Toas open={up} handleClose={handleClose} />
		</div>
	);
};

export default AddCompanyForm;

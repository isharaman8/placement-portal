import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
	userLogin,
	userLoginRequest,
	userLogout,
	userSignup,
	userSignUpRequest,
} from "../../Redux/Actions/action";

interface props {
	company: any;
	getCompanies: () => void;
	userLogout?: (payload: any) => void;
	userLogin?: (payload: any) => void;
	userSignUpRequest?: (payload: any) => void;
	userLoginRequest?: (payload: any) => void;
	userSignup?: (payload: any) => void;
	state?: any;
}
const CompenyCard = ({
	company,
	getCompanies,
}: // userLogin,
// userLoginRequest,
// userSignUpRequest,
// userLogout,
// userSignup,
// state,
props) => {
	const [isStudent, setIsStudent] = useState(false);
	const store = useSelector((state: any) => state.userLogin);
	const [appliedToCompany, setAppliedToCompany] = useState(false);
	const [currentlyHiring, setCurrentlyHiring] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleCompanyApplied = async () => {
		try {
			let URL =
				"https://placements-backend-hackathon.herokuapp.com/companies/applyforcompany";

			const data = await axios.post(
				URL,
				{ companyID: company?._id },
				{ headers: { Authorization: `Bearer ${store?.data?.token}` } }
			);
			// console.log(data);
			getCompanies();
		} catch (err: any) {
			alert(err.message);
		}
	};
	const handleHiringCompany = async () => {
		const URL =
			"https://placements-backend-hackathon.herokuapp.com/companies/updatecompanydata";

		try {
			const data = await axios.put(
				URL,
				{ currentlyHiring: !currentlyHiring, companyID: company?._id },
				{ headers: { Authorization: `Bearer ${store?.data?.token}` } }
			);

			getCompanies();
		} catch (error: any) {
			alert(error.message);
		}
	};

	useEffect(() => {
		// let stringified = localStorage.getItem("loggedInUser");
		// let objectified;

		// if (stringified) {
		// 	objectified = JSON.parse(stringified);
		// 	dispatch(userLogin(objectified));
		// }
		if (!store?.data) navigate("/login");

		// console.log(company);
		setAppliedToCompany(
			company?.usersApplied?.some(
				(c: any) => c.emailID === store?.data?.payload?.emailID
			)
		);
		setCurrentlyHiring(company?.currentlyHiring);
		// console.log(store.data);

		if (store?.data?.payload?.role === "student") setIsStudent(true);
	}, []);

	return (
		<div className="py-5   bg-white rounded-md flex justify-between items-center px-5">
			<div className="flex items-center space-x-7 ">
				{/* <img
					className="h-16 w-16 rounded-full"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png"
					alt=""
				/> */}
				<div className="space-y-1 items-center">
					<h1 className="text-xl font-semibold mb-3">{`${company?.name}`}</h1>
					<p className="text-sm ">
						<span style={{ fontWeight: "bold" }}>Job Profile: </span>
						{company?.jobDescription}
					</p>
					<p className="text-sm">
						<span style={{ fontWeight: "bold" }}>Description:</span>{" "}
						{company?.description}
					</p>
					<p className="text-sm">
						<span style={{ fontWeight: "bold" }}>Location:</span>{" "}
						{company?.location}
					</p>

					<p className="pb-2 text-sm">
						<span style={{ fontWeight: "bold" }}>Vacancies:</span>{" "}
						{company?.numOpenings}
					</p>
				</div>
			</div>
			<div className="flex flex-col space-y-1">
				{isStudent ? (
					<Button
						variant={"contained"}
						color={appliedToCompany ? "success" : "primary"}
						disabled={appliedToCompany}
						onClick={handleCompanyApplied}
					>
						{appliedToCompany ? `Applied` : "Apply"}
					</Button>
				) : (
					<Button
						variant="contained"
						onClick={handleHiringCompany}
						color={!currentlyHiring ? "primary" : "error"}
					>
						{!currentlyHiring ? `Add To Current Hiring` : "Remove From Hiring"}
					</Button>
				)}
			</div>
		</div>
	);
};

// const mapStateToProps = (state: any) => {
// 	return { ...state };
// };

// const mapDispatchToProps = (dispatch: any) => {
// 	return {
// 		userLogout: (payload: any) => dispatch(userLogout(payload)),
// 		userLogin: (payload: any) => dispatch(userLogin(payload)),
// 		userSignUpRequest: (payload: any) => dispatch(userSignUpRequest(payload)),
// 		userLoginRequest: (payload: any) => dispatch(userLoginRequest(payload)),
// 		userSignup: (payload: any) => dispatch(userSignup(payload)),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CompenyCard);
export default CompenyCard;

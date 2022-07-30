import { Button } from "@mui/material";
import React from "react";
import { UserProfile } from "../../Page/UserProfile";

interface props {
	user?: any;
	getAllUsers: () => void;
}

const AllUserCard = ({ user, getAllUsers }: props) => {
	return <UserProfile getAllUsers={getAllUsers} user={user} />;
};

export default AllUserCard;

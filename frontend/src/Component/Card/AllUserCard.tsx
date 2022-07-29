import { Button } from "@mui/material";
import React from "react";
import { UserProfile } from "../../Page/UserProfile";

interface props {
  num: number;
}

const AllUserCard = ({ num }: props) => {
  return <UserProfile />;
};

export default AllUserCard;

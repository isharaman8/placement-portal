import { Button } from "@mui/material";
import React from "react";

interface props {
  num: number;
}
const CompenyCard = ({ num }: props) => {
  return (
    <div className="py-3  bg-white rounded-md flex justify-between items-center px-5">
      <div className="flex items-center space-x-7 ">
        <img
          className="h-16 w-16 rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png"
          alt=""
        />
        <div className="space-y-1 items-center">
          <h1 className="text-xl font-semibold">{`Wipro ${num}`}</h1>
          <p className="pb-2 text-sm">Information technology company</p>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <Button variant="contained">Apply</Button>
        <Button variant="contained">Add To Current Hiring</Button>
      </div>
    </div>
  );
};

export default CompenyCard;

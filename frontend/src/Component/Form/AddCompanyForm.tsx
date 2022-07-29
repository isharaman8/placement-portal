import { Button } from "@mui/material";
import { useState } from "react";
import { AdminSidebar } from "../Sidebar/Admin/AdminSidebar";
import Toas from "../Toas";

const AddCompanyForm = () => {
  const [up, setup] = useState(false);
  const handleClose = () => setup(false);

  return (
    <div>
      <div className="space-y-5 border rounded-md py-10 px-64 bg-[#9f9f9f] pt-20">
        <h1 className="font-bold text-white text-3xl text-center pb-5">
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
          />
        </div>
        <div>
          <label className="w-full text-lg font-semibold" htmlFor="vacency">
            Vacency
          </label>
          <input
            className="w-full py-3 px-5 rounded-md outline-none"
            id="vacency"
            type="text"
            placeholder="Vacency"
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
          />
        </div>
        <div>
          <Button
            onClick={() => {
              setup(true);
            }}
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

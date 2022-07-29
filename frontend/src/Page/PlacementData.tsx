
import PlacementDataChart from "../Component/PlacementDataChart"

import { UserSidebar } from "../Component/Sidebar/User/UserSidebar";

const PlacementData = () => {
  return (
    <div>

      

      <div>
      <PlacementDataChart/>
        <div className=" absolute left-0 top-20">
          {" "}
          <UserSidebar />
        </div>
      </div>
      <div> placement data page</div>{" "}

    </div>
  );
};

export default PlacementData;

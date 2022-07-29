import { UserSidebar } from "../Component/Sidebar/User/UserSidebar";

const PlacementData = () => {
  return (
    <div>
      <div className="bg-slate-600">
        {" "}
        <div className=" absolute left-1 top-20">
          {" "}
          <UserSidebar />
        </div>
      </div>
      <div> placement data page</div>{" "}
    </div>
  );
};

export default PlacementData;

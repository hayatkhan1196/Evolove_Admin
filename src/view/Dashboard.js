import React from "react";
import "../style/dashboard.scss";
import UserSlider from "../component/UserSlider";

const Dashboard = () => {
  return (
    <div className="dashboard_div">
      <UserSlider />
    </div>
  );
};

export default Dashboard;

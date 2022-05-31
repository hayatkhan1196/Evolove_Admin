import React from "react";
import "../style/home.scss";
import Sidebars from "../component/Sidebars";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="home">
      <Sidebars />
      <Dashboard />
    </div>
  );
};

export default Home;

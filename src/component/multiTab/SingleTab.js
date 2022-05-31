import React, { useState } from "react";
import "../../style/userDetail.scss";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Course from "./Course";
import Product from "./Product";
import Blog from "./Blog";

const MultiTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="multiTab">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Courses" value="1" />
              <Tab label="Products" value="2" />
              <Tab label="Blogs" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Course />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default MultiTabs;

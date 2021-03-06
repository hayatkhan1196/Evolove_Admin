import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PrivacyTipRoundedIcon from "@mui/icons-material/PrivacyTipRounded";
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import "../style/home.scss";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ArticleIcon from '@mui/icons-material/Article';
import BookOnlineIcon from '@mui/icons-material/BookOnline';

const Menues = () => {
  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
          <ListItemButton color="red" className="menu_background">
            <ListItemIcon>
              <GridViewRoundedIcon sx={{ color: "#D60B52" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{ color: "#662483" }} />
          </ListItemButton>
        </Link>
        <Link
          to="/users"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton className="menu_background">
            <ListItemIcon>
              <GroupRoundedIcon sx={{ color: "#D60B52" }} />
            </ListItemIcon>
            <ListItemText primary="Coaches" style={{ color: "#662483" }} />
          </ListItemButton>
        </Link>
        <Link
          to="/appUsers"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton className="menu_background">
            <ListItemIcon>
              <GroupRoundedIcon sx={{ color: "#D60B52" }} />
            </ListItemIcon>
            <ListItemText primary="Users" style={{ color: "#662483" }} />
          </ListItemButton>
        </Link>



        <Link
          to="/addBanners"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton className="menu_background">
            <ListItemIcon>
              <AddToPhotosIcon sx={{ color: "#D60B52" }} />
            </ListItemIcon>
            <ListItemText primary="Add Banners" style={{ color: "#662483" }} />
          </ListItemButton>
        </Link>

        <Link
          to="/addTicket"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton className="menu_background">
            <ListItemIcon>
              <BookOnlineIcon sx={{ color: "#D60B52" }} />
            </ListItemIcon>
            <ListItemText primary="Tickets" style={{ color: "#662483" }} />
          </ListItemButton>
        </Link>

        <Link
          to="/allBlogs"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton className="menu_background">
            <ListItemIcon>
              <ArticleIcon sx={{ color: "#D60B52" }} />
            </ListItemIcon>
            <ListItemText primary="All Blogs" style={{ color: "#662483" }} />
          </ListItemButton>
        </Link>


        <Link
          to="/moonCalender"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton className="menu_background">
            <ListItemIcon>
              <NightsStayIcon sx={{ color: "#D60B52" }} />
            </ListItemIcon>
            <ListItemText primary="Moon Calender" style={{ color: "#662483" }} />
          </ListItemButton>
        </Link>


        <Link
          to="/privacy-policy"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton className="menu_background">
            <ListItemIcon>
              <PrivacyTipRoundedIcon sx={{ color: "#D60B52" }} />
            </ListItemIcon>
            <ListItemText primary="Privacy Policy" style={{ color: "#662483" }} />
          </ListItemButton>
        </Link>
        <Link
          to="/terms-and-conditions"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItemButton className="menu_background">
            <ListItemIcon>
              <NoteAltIcon sx={{ color: "#D60B52" }} />
            </ListItemIcon>
            <ListItemText primary="Terms & Conditions" style={{ color: "#662483" }} />
          </ListItemButton>
        </Link>
        


      </List>
    </div>
  );
};

export default Menues;

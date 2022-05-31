import React, { useState, useEffect } from "react";
import Sidebars from "../component/Sidebars";
import "../style/users.scss";
import { userContent } from "../component/UserData";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { getService } from '../services/Services';
import  UpgradeIcon  from '@mui/icons-material/Upgrade';
import  TextField  from '@mui/material/TextField';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";



const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #E63369",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};
const Users = () => {

  const [users, setUsers] = useState([])
  const [_open3, setOpen3] = useState(false);
  const handleOpen3 = () => setOpen3(true);

  const _handleClose3 = () => setOpen3(false);

  let list = []
  const getAllUsers = async () => {

    const querySnapshot = await getService("Users")

    querySnapshot.forEach((doc) => {

      list.push({
        id: doc.id,

        ...doc.data()
      })
    });
    const updatedList = list.filter((items) =>
      items.Coach == true

    )
    setUsers(updatedList)



    // setLoading(false)
  };

  useEffect(() => {
    // if(!openPopup){
    getAllUsers()
    // }
  }, [])



  return (
    <div className="users_div">
      <Sidebars />
      <div className="users_data">
        <div className="order_head">
          <Typography variant="h6" component="div" gutterBottom>
            {" "}
            ALL Users
          </Typography>
        </div>
        <Divider sx={{ background: "#E63369" }} />

        <div style={{ padding: "25px" }}>
          <Grid container spacing={2}>
            
            <Grid item xs={2.4}>
              <Typography variant="h6" component="div" gutterBottom>
                User Image
              </Typography>
            </Grid>
            <Grid item xs={2.4}>
              <Typography variant="h6" component="div" gutterBottom>
                Full Name
              </Typography>
            </Grid>

            <Grid item xs={2.4}>
              <Typography variant="h6" component="div" gutterBottom>
              Conatct No.
              </Typography>
            </Grid>
            <Grid item xs={2.4}>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                User Email
              </Typography>
            </Grid>
            <Grid item xs={2.4}>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                View
              </Typography>
            </Grid>
            {/* <Grid item xs={2}>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                Action
              </Typography>
            </Grid> */}
          </Grid>
          {users.map((item) => {
            return (
             
              <div>
                <Divider className="food_detail" />
                <Grid container spacing={2} key={item.userId}>
                  {/* <Grid item xs={2}>
                    <Typography variant="body1" component="div" gutterBottom>
                      {item.userId}
                    </Typography>
                  </Grid> */}
                  <Grid item xs={2.4}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src={item.ProfileImage}
                        variant="rounded"
                        sx={{ width: 50, height: 50 }}
                      />
                    </span>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Typography variant="body1" component="div" gutterBottom>
                      {item.FullName}
                    </Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Typography variant="body1" component="div" gutterBottom>
                      {item.Contact}
                    </Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Typography
                      variant="body1"
                      component="div"
                      gutterBottom
                      style={{ textAlign: "center" }}
                    >
                      {item.Email}
                    </Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Link
                      to={`/appUsersDetails/${item.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography align="center">
                        <Button variant="outlined" size="small">
                          View Detail
                        </Button>
                      </Typography>
                    </Link>
                  </Grid>
                  {/* <Grid item xs={2}>
                      <Typography align="center">
                        <Button variant="outlined" size="small"  onClick={handleOpen3}>
                          Edit Detail
                        </Button>
                      </Typography>
                  </Grid> */}
                </Grid>
        
              </div>
                   
            );
          })}
          
        </div>
      </div>
     
    </div>
  );
};

export default Users;

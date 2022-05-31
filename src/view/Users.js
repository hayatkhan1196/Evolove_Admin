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

const Users = () => {
  const [users, setUsers] = useState([])

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
      items.Coach == false

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
            ALL COACHES
          </Typography>
        </div>
        <Divider sx={{ background: "#E63369" }} />

        <div style={{ padding: "25px" }}>
          <Grid container spacing={2}>
            {/* <Grid item xs={2}>
              <Typography variant="h6" component="div" gutterBottom>
                User ID
              </Typography>
            </Grid> */}
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
                Contact
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
          </Grid>
          {users.map((item) => {
            return (
              <div>
                <Divider className="food_detail" />
                <Grid container spacing={2} key={item.id}>
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
                      to={`/home/${item.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography align="center">
                        <Button variant="outlined" size="small">
                          View Detail
                        </Button>
                      </Typography>
                    </Link>
                  </Grid>
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

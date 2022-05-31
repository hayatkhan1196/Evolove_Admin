import React from "react";
import "../../style/userDetail.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {userContent} from '../UserData'



const Product = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {userContent.map((coach) => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <div className="courseCard" key={coach.index}>
              <img
                width="100%"
                height="50%"
                src={coach.productImage}
                alt="pdocutimage"
                style={{ borderRadius: "18px 20px 0px 0px", height: "200px" }}
              />
              <div className="card_data">
                <Typography variant="h6" gutterBottom component="div">
                  {coach.productTitle}
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="body1" gutterBottom component="div">
                    {coach.productName}
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    component="div"
                    style={{ color: "#268244" }}
                  >
                    <strong>${coach.productPrice}</strong>
                  </Typography>
                </div>
                <Link
                    to={`/product-detail/${coach.userName}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                <Button
                  variant="contained"
                  style={{
                    color: "#ffff",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(90deg, rgba(220,26,85,1) 12%, rgba(109,35,128,1) 87%)",
                  }}
                >
                  View Details
                </Button>
                </Link>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Product;

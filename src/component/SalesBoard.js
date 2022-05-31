import React from "react";
import "../style/userDetail.scss";
import Typography from "@mui/material/Typography";
import SalesBoardChart from "./SalesBoardChart";
import Grid from "@mui/material/Grid";

const SalesBoard = () => {
  return (
    <div className="user_mood_chart">
      <Typography variant="h6" component="div" gutterBottom>
        Sales Board
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <div className="course_sales">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <Typography variant="h6" component="div" gutterBottom>
                Courses
              </Typography>
              <Typography variant="h6" component="div" gutterBottom>
                Earnings
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                color: "#428244",
              }}
            >
              <Typography variant="h5" component="div" gutterBottom>
                123
              </Typography>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                style={{ color: "#428244" }}
              >
                $100
              </Typography>
            </div>
            <SalesBoardChart
              sunday={100}
              monday={200}
              tuesday={800}
              wednesday={400}
              thursday={500}
              friday={600}
              saturday={100}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="course_sales">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <Typography variant="h6" component="div" gutterBottom>
                Ebooks
              </Typography>
              <Typography variant="h6" component="div" gutterBottom>
                Earnings
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                style={{ color: "#428244" }}
              >
                87
              </Typography>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                style={{ color: "#428244" }}
              >
                $1000
              </Typography>
            </div>
            <SalesBoardChart
              sunday={100}
              monday={500}
              tuesday={400}
              wednesday={800}
              thursday={500}
              friday={499}
              saturday={1000}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className="course_sales">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <Typography variant="h6" component="div" gutterBottom>
                Articles
              </Typography>
              <Typography variant="h6" component="div" gutterBottom>
                Earnings
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                color: "#428244",
              }}
            >
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                style={{ color: "#428244" }}
              >
                23
              </Typography>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                style={{ color: "#428244" }}
              >
                $898
              </Typography>
            </div>
            <SalesBoardChart
              sunday={300}
              monday={200}
              tuesday={400}
              wednesday={1000}
              thursday={500}
              friday={600}
              saturday={898}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SalesBoard;

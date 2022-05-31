import React, { useEffect } from "react";
import "../../style/userDetail.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { getService } from '../../services/Services';

const Course = () => {
  const [allCourses, setAllCourses] = React.useState([]);
  

  let list = []
  const getAllCourses = async () => {
      
      const querySnapshot = await getService("Courses")

      querySnapshot.forEach((doc) => {
console.log({doc});

          list.push({
              id: doc.id,
              ...doc.data(),
          })
      });
          setAllCourses(list)

  };
  useEffect(() => {
      getAllCourses()
     
  }, [])
  return (
    <div>
      <Grid container spacing={2}>
        {allCourses.map((coach) => (
          
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
 
            <div className="courseCard" >
             
              <iframe
                width="100%"
                height="100%"
                src={coach.Video}
                frameborder="0"
                style={{ borderRadius: "18px 20px 0px 0px", height: "200px" }}
                allowfullscreen
                title="Course video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <div className="card_data">
                <Typography variant="body1" gutterBottom component="div">
                  Dr. { coach.CoachName}
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                 {coach.Title}
                </Typography>
                <Link
                    to={`/course-detail/${coach.id}`}
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

export default Course;

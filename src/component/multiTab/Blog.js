import React, { useState, useEffect } from "react";
import "../../style/userDetail.scss";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { userContent } from '../UserData'
import { getService } from "../../services/Services";




const Blog = () => {
  const [allBlogs, setAllBlogs] = React.useState('');
  let allList = []
  let list = []
  const getAllBlogs = async () => {

    const querySnapshot = await getService("Blog")
    querySnapshot.forEach((doc) => {

      list.push({
        id: doc.id,

        ...doc.data()
      })
    });

    // setLoading(false)
    list.map((item) => {
      item?.BlogText.map((subitems) => {
        allList.push(subitems)
      })
    })
    setAllBlogs(allList)
  };
  useEffect(() => {
    // if(!openPopup){
    getAllBlogs()
    // }
  }, [])
  return (
    <div>
      <Grid container spacing={2}>
        {allBlogs && allBlogs.map((blog) => (
          <div className="blog_content">
            <Grid item xs={12} sm={12} md={3}>
              <img
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                src={blog.FeatureImage}
                alt="blogpost"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <div style={{ padding: "10px" }}>
                <Typography variant="h5" gutterBottom>
                  {blog.blogTitle}
                </Typography>
                <Typography variant="body1">{blog.Discription}</Typography>
                <Link
                  to={`/blog-detail/${blog.blogId}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      color: "#ffff",
                      marginTop: "10px",
                      borderRadius: "12px",
                      background:
                        "linear-gradient(90deg, rgba(220,26,85,1) 12%, rgba(109,35,128,1) 87%)",
                    }}
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </Grid>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;

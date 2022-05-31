import React, { useEffect, useState } from 'react';
import Sidebars from '../component/Sidebars';
import '../style/userDetail.scss';
import { useParams } from "react-router-dom";
import { userContent } from '../component/UserData';
import Typography from '@mui/material/Typography';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Config/firebase';

const CourseDetails = () => {
  const params = useParams();
  const { id } = params;
  const _handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [_open, setOpen] = useState(false);
  const [data, setData] = useState([])
  console.log("🚀 ~ file: CourseDetails.js ~ line 25 ~ CourseDetails ~ data", data)
  // const { productImage, productName, productPrice, productTitle, userImage } =user;
  const frameVide = "http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1";
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
  useEffect(() => {
    // declare the data fetching function
    if (id) {
      const handelFetch = async () => {
        // setLoading(true)
        const docRef = doc(db, "Courses", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setData(docSnap.data())
          // setLoading(false)

        } else {
          console.log("No such document!");
          // setLoading(false)
        }

      };
      // call the function
      handelFetch()
        // make sure to catch any error
        .catch(console.error);
    }
  }, [id])

  return (
    <div className="blog_detial_div">
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{
          marginTop: '10px',
          color: "white",
          backgroundColor: "#E63369",
          borderRadius: "10px",
          marginLeft: '20px'
        }}
      >
        Edit Course
      </Button>
      <Button
        variant="contained"
        style={{
          marginTop: '10px',
          color: "white",
          backgroundColor: "red",
          borderRadius: "10px",
          marginLeft: '20px'
        }}
      >
        Delete Course
      </Button>
      <div className="blog_detail_data">
        <Sidebars />
        <iframe
          width="100%"
          height="100%"
          src={data && data.Video}
          frameborder="0"
          style={{ borderRadius: "10px 10px 10px 10px", height: "400px" }}
          allowfullscreen
          title="Course video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
        <Typography variant="body1" component="div" gutterBottom>
          DR.{data && data.CoachName}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          gutterBottom

        >
          {data && data.Title}
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          <strong> Description</strong>
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          {
            data && data.Discription
          }        </Typography>
        {/* </div> */}
        <div className="course_cordian">
          <Typography variant="h6" component="div" gutterBottom m={2}>
            <strong> Curriculum</strong>
          </Typography>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Intro to Course</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                neque molestie elementum, id ut condimentum quis. Vitae nisi,
                sem facilisis sed fringilla. Nunc, aliquam nunc cras Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Duis neque molestie
                elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed
                fringilla. Nunc, aliquam nunc cras
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Mindfullness</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                neque molestie elementum, id ut condimentum quis. Vitae nisi,
                sem facilisis sed fringilla. Nunc, aliquam nunc cras Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Duis neque molestie
                elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed
                fringilla. Nunc, aliquam nunc cras
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                neque molestie elementum, id ut condimentum quis. Vitae nisi,
                sem facilisis sed fringilla. Nunc, aliquam nunc cras Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Duis neque molestie
                elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed
                fringilla. Nunc, aliquam nunc cras
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

      </div>
      <Modal
        open={_open}
        onClose={_handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <div style={{ padding: "8px" }}>
            <TextField
              id="standard-multiline-static"
              placeholder="Title"
              variant="outlined"
              fullWidth
            />
          </div>
          <div style={{ padding: "8px" }}>
            <TextField
              id="standard-multiline-static"
              placeholder="Description"
              variant="outlined"
              fullWidth
            />
          </div>
          <div style={{ padding: "8px" }}>
            <TextField
              id="standard-multiline-static"
              placeholder="Intro"
              variant="outlined"
              fullWidth
            />
          </div>
          <div style={{ padding: "8px" }}>
            <TextField
              id="standard-multiline-static"
              placeholder="Mindfullness"
              variant="outlined"
              fullWidth
            />
          </div>
          <Button
            variant="contained"
            style={{
              float: "right",
              margin: "7px",
              color: "white",
              backgroundColor: "#E63369",
            }}
          >
            Update
          </Button>
        </Box>
      </Modal>
    </div>

  )
}

export default CourseDetails
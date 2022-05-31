import React, { useState } from 'react';
import SideBbars from '../component/Sidebars';
import '../style/userDetail.scss'
import { useParams } from "react-router-dom";
import { userContent } from '../component/UserData'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import SaveIcon from "@mui/icons-material/Save";
import { getService } from '../services/Services';
import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Config/firebase';


const BlogDetails = () => {
  const params = useParams();
  const { id } = params;
  const [_open, setOpen] = useState(false);
  const _handleClose = () => setOpen(false);
  const [data, setData] = useState()
  const [usersId, setUsersId] = useState('')
  const [_Newimage, set_NewImage] = useState('');


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const session = JSON.parse(localStorage.getItem('session'));

      setUsersId(session.uid)
    }
    // declare the data fetching function
    if (usersId) {
      const handelFetch = async () => {
        // setLoading(true)
        const docRef = doc(db, "Blog", usersId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          docSnap.data().BlogText?.map((item) => {
            // item?.BlogText.map((subitems) => {
            if (id == item.blogId) {
              setData(item)
            }

            // })
          })
          // setData(docSnap.data())
          // setLoading(false)

        } else {
          console.log("No such document!");

        }

      };
      // call the function
      handelFetch()
        // make sure to catch any error
        .catch(console.error);
    }
  }, [usersId])







  // useEffect(() => {
  //   // declare the data fetching function
  //   if (id) {
  //     const handelFetch = async () => {
  //       // setLoading(true)
  //       const docRef = doc(db, "Blog", id);
  //       const docSnap = await getDoc(docRef);

  //       if (docSnap.exists()) {
  //         console.log("Document data:", docSnap.data());
  //         setData(docSnap.data())
  //         // setLoading(false)

  //       } else {
  //         console.log("No such document!");
  //         // setLoading(false)
  //       }

  //     };
  //     // call the function
  //     handelFetch()
  //       // make sure to catch any error
  //       .catch(console.error);
  //   }
  // }, [id])

  const _style = {
    height: "25rem",
    width: "100%",
    backgroundColor: "blue",
    backgroundImage: `url(${data && data.FeatureImage})`,
    backgroundSize: '100% 100%',
    borderRadius: "10px",
    marginBottom: '20px',
    marginTop: '20px'

  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #E63369",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <div className="blog_detial_div">
      <SideBbars />

      <div className="blog_detail_data">
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          style={{
            marginTop: '10px',
            color: "white",
            backgroundColor: "#E63369",
            borderRadius: "10px",
            marginLeft: '20px'
          }}
        >
          Edit Blog
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
          Delete Blog
        </Button>
        <div style={_style}></div>
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" gutterBottom sx={{ color: "#488244" }}>
            {data && data.blogTitle}
          </Typography>
          {/* <Typography variant="body1" component="div" gutterBottom sx={{ color: "#488244" }}>
            01-01-2022
          </Typography> */}
        </div>

        <div style={{ display: 'flex', alignItems: "center", margin: '10px' }}>
          {/* <Avatar
            alt="Remy Sharp"
            // src={userImage}
            sx={{ width: 50, height: 50 }}
          /> */}
          <div style={{ display: "fex", flexDirection: 'column' }}>
            {/* 
            <Typography variant="body1" component="div" style={{ marginLeft: "10px" }}>
              <strong>{userName}</strong>
            </Typography> */}
            <Typography variant="h6" component="div" style={{ marginLeft: "10px" }} >
              {data && data.Discription}
            </Typography>
          </div>
        </div>


        {/* <Typography variant="body1" component="div" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit leo tellus nullam neque, aliquet neque libero vestibulum. Accumsan egestas sed ut elementum vulputate praesent et interdum. Praesent est, tortor congue justo, nibh ipsum in lorem ut. Euismod molestie dictum nulla egestas pulvinar. Vel tincidunt eget lacus, pellentesque ac tellus varius. Ullamcorper sit tincidunt enim sagittis sit. Gravida erat neque id blandit faucibus scelerisque. Facilisi nunc quis at vestibulum facilisis sed in ac nunc.
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit leo tellus nullam neque, aliquet neque libero vestibulum. Accumsan egestas sed ut elementum vulputate praesent et interdum. Praesent est, tortor congue justo, nibh ipsum in lorem ut. Euismod molestie dictum nulla egestas pulvinar. Vel tincidunt eget lacus, pellentesque ac tellus varius. Ullamcorper sit tincidunt enim sagittis sit. Gravida erat neque id blandit faucibus scelerisque. Facilisi nunc quis at vestibulum facilisis sed in ac nunc.
        </Typography> */}
        {/* <img className="blog_secondary_image" src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="extraImage" /> */}
        <img
          style={{ width: "100%", height: "auto", borderRadius: "10px", marginTop: "25px" }}
          src={data && data.Image}
          alt="blogpost"
        />
        <Typography variant="body1" component="div" gutterBottom>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit leo tellus nullam neque, aliquet neque libero vestibulum. Accumsan egestas sed ut elementum vulputate praesent et interdum. Praesent est, tortor congue justo, nibh ipsum in lorem ut. Euismod molestie dictum nulla egestas pulvinar. Vel tincidunt eget lacus, pellentesque ac tellus varius. Ullamcorper sit tincidunt enim sagittis sit. Gravida erat neque id blandit faucibus scelerisque. Facilisi nunc quis at vestibulum facilisis sed in ac nunc. */}
          {data && data.blogText}
        </Typography>
        {/* <Typography variant="body1" component="div" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit leo tellus nullam neque, aliquet neque libero vestibulum. Accumsan egestas sed ut elementum vulputate praesent et interdum. Praesent est, tortor congue justo, nibh ipsum in lorem ut. Euismod molestie dictum nulla egestas pulvinar. Vel tincidunt eget lacus, pellentesque ac tellus varius. Ullamcorper sit tincidunt enim sagittis sit. Gravida erat neque id blandit faucibus scelerisque. Facilisi nunc quis at vestibulum facilisis sed in ac nunc.
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit leo tellus nullam neque, aliquet neque libero vestibulum. Accumsan egestas sed ut elementum vulputate praesent et interdum. Praesent est, tortor congue justo, nibh ipsum in lorem ut. Euismod molestie dictum nulla egestas pulvinar. Vel tincidunt eget lacus, pellentesque ac tellus varius. Ullamcorper sit tincidunt enim sagittis sit. Gravida erat neque id blandit faucibus scelerisque. Facilisi nunc quis at vestibulum facilisis sed in ac nunc.
        </Typography> */}
      </div>

      <Modal
        open={_open}
        onClose={_handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Divider />
            <Button
              variant="contained"
              style={{
                margin: "10px 0px 10px 10px",
                color: "white",
                backgroundColor: "#E63369",
                borderRadius: "5px",

              }}
            >
              <input
                type="file"
                onChange={(e) => {
                  const selectImage = e.target.files[0];
                  set_NewImage(URL.createObjectURL(selectImage));
                }}
                name="image"
                id="input"
                accept="image/*"
              />
            </Button>
            <div style={{ padding: "8px" }}>

              <TextField
                id="standard-multiline-static"
                placeholder="Blog Title"
                variant="outlined"
                fullWidth

              />
            </div>
            <div style={{ padding: "8px" }}>

              <TextField
                id="standard-multiline-static"
                placeholder="Blog Category"
                variant="outlined"
                fullWidth

              />
            </div>
            <div style={{ padding: "8px" }}>

              <TextField
                id="standard-multiline-static"
                placeholder="Blog Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
              />
            </div>
            <Button
              variant="contained"
              style={{
                margin: "10px 0px 10px 10px",
                color: "white",
                backgroundColor: "#E63369",
                borderRadius: "5px",

              }}
            >
              <input
                type="file"
                onChange={(e) => {
                  const selectImage = e.target.files[0];
                  set_NewImage(URL.createObjectURL(selectImage));
                }}
                name="image"
                id="input"
                accept="image/*"
              />
            </Button>
            <div style={{ padding: "8px" }}>

              <TextField
                id="standard-multiline-static"
                placeholder="Blog Price"
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
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default BlogDetails
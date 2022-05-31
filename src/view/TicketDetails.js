import React, { useEffect, useState } from "react";
import Sidebars from "../component/Sidebars";
import "../style/userDetail.scss";
import { useParams } from "react-router-dom";
import { userContent } from "../component/UserData";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Config/firebase";


const TicketDetails = () => {
    const params = useParams();
    const { id } = params;
    const handleOpen = () => setOpen(true);
    const _handleClose = () => setOpen(false);
    const [_open, setOpen] = useState(false);
    const [data, setData] = useState()
    // const [usersId, setUsersId] = useState('')

    // const user = userContent.find((user) => user.userName === userName);
    // const { productImage, productPrice } = user;
    const _style = {
        height: "20rem",
        width: "100%",
        backgroundColor: "blue",
        backgroundImage: `url(${data && data.image})`,
        backgroundSize: "100% 100%",
        borderRadius: '10px',
        marginBottom: '20px'
    };
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
        // if (typeof window !== 'undefined') {
        //     const session = JSON.parse(localStorage.getItem('session'));

        //     setUsersId(session.uid)
        // }
        // declare the data fetching function
        if (id) {
            const handelFetch = async () => {
                // setLoading(true)
                const docRef = doc(db, "Tickets", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    // console.log("Document data:", docSnap.data());
                      setData(docSnap.data())
                
                } else {
                    console.log("No such document!");

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

            <Sidebars />
            {/* <div style={_style}></div> */}
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
                Edit Event
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
                Delete Event
            </Button>
            <div className="blog_detail_data">
                <div style={_style}></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body1" component="div" gutterBottom>
                        <strong>Event Name: </strong> {data && data.eventName}

                    </Typography>

                    <Typography
                        variant="body1"
                        component="div"
                        gutterBottom
                        sx={{
                            color: "#ffff",
                            backgroundColor: "#E63369",
                            borderRadius: "5px",
                            paddingRight: "10px",
                            paddingLeft: "10px",
                        }}
                    >
                        ${data && data.evetPrice}
                    </Typography>
                </div>
                <div style={{ border: '1px solid #E63369', borderRadius: '5px', padding: 10 }}>

                    <Typography>
                        {data && data.descriptionName}
                    </Typography>

                </div>
                <Typography variant="body1" component="div" gutterBottom marginTop={5}>
                    <strong>All Participants </strong>
                </Typography>
                <div style={{ padding: "25px" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Typography variant="h6" component="div" gutterBottom>
                                User ID
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="div" gutterBottom>
                                User Image
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="h6" component="div" gutterBottom>
                                User Name
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                                style={{ textAlign: "center" }}
                            >
                                User Email
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                                style={{ textAlign: "center" }}
                            >
                                Ticket Number
                            </Typography>
                        </Grid>
                    </Grid>
                    {userContent.map((item) => {
                        return (
                            <div>
                                <Divider className="food_detail" />
                                <Grid container spacing={2} key={item.userId}>
                                    <Grid item xs={2}>
                                        <Typography variant="body1" component="div" gutterBottom>
                                            {item.userId}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <span style={{ display: "flex", alignItems: "center" }}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={item.userImage}
                                                variant="rounded"
                                                sx={{ width: 50, height: 50 }}
                                            />
                                        </span>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="body1" component="div" gutterBottom>
                                            {item.userName}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography
                                            variant="body1"
                                            component="div"
                                            gutterBottom
                                            style={{ textAlign: "center" }}
                                        >
                                            {item.userEmail}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography
                                            variant="body1"
                                            component="div"
                                            gutterBottom
                                            style={{ textAlign: "center" }}
                                        >
                                            {'7687876876'}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        );
                    })}
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
                            placeholder="Name"
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
                            placeholder="Price"
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
    );
};

export default TicketDetails;

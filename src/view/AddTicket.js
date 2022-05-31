
import React, { useEffect, useState } from "react";
import Sidebars from "../component/Sidebars";
import "../style/privacyPolicy.scss";
import _TermsAndConditions from "../assets/images/terms_and_conditions.png";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddTermsAndConditions from "../component/AddTermsAndConditions";
import Grid from "@mui/material/Grid";
import { TicketContent } from './../component/UserData'
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import { db, storage } from '../Config/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { getService, postService, postServiceById, updateService } from "../services/Services";
import { doc, getDoc } from "firebase/firestore";

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

const AddTicket = () => {
    const [_open, setOpen] = useState(false);
    const _handleClose = () => setOpen(false);
    const [_Newimage, set_NewImage] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [eventName, setEventName] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const [descriptionName, setEventtDescription] = useState('')
    const [evetPrice, setEventPrice] = useState('')
    const [tickets, setTickets] = useState([])
    console.log("🚀 ~ file: AddTicket.js ~ line 45 ~ AddTicket ~ tickets", tickets)
    // const [usersId, setUsersId] = useState('')y

    const handleOpen = () => setOpen(true);


    let allList = []
    let list = []
    const getAllTickets = async () => {
        // if (typeof window !== 'undefined') {
        //     const session = JSON.parse(localStorage.getItem('session'));

        //     setUsersId(session.uid)
        // }
        const querySnapshot = await getService("Tickets")

        querySnapshot.forEach((doc) => {

            list.push({
                id: doc.id,

                ...doc.data()
            })
        });
        list.map((item) => {
            setTickets(list)

        })


        // setLoading(false)
    };

    useEffect(() => {
        // if(!openPopup){
        getAllTickets()
        // }
    }, [])



    const handleEventName = (event) => {
        setEventName(event.target.value);
    };
    const handleEventDescription = (event) => {
        setEventtDescription(event.target.value)
    }
    const handleEventPrice = (event) => {
        setEventPrice(event.target.value)
    }
    // const uniqueID = () => {
    //     return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    // };
    const onSubmit = async () => {
        _handleClose();
        const record = {
            image: imageUrl,
            eventName: eventName,
            descriptionName: descriptionName,
            evetPrice: evetPrice,
            // TickId: uniqueID()

        };
        await postService("Tickets", record)

        // const docRef = doc(db, "Tickets", usersId);
        // const docSnap = await getDoc(docRef);

        // if (docSnap.exists()) {
        //     let list = docSnap.data()
        //     list.Details.push(record)
        //     await updateService("Tickets", usersId, list)


        // } else {

        //     const data = {
        //         Details: [record]
        //     }

        //     await postServiceById(usersId, "Tickets", data)

        // }


    }

    const uploadImage = (e, type) => {
        const imageFile = e.target.files[0];
        const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const uploadProgress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setIsLoading(true);

            },
            (error) => {
                console.log(error);

                setIsLoading(false);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                    setImageUrl(downloadURL);

                    setIsLoading(true);
                });
            }
        );
    };
    return (
        <div className="privacy_div">
            <Sidebars />
            <div className="privacy_policy">
                <Button
                    variant="contained"
                    onClick={handleOpen}
                    style={{
                        margin: "10px 0px 10px 40px",
                        color: "white",
                        backgroundColor: "#E63369",
                        borderRadius: "10px",
                    }}
                >
                    Add New Ticket
                </Button>
                <Grid container spacing={2} style={{ padding: 25 }}>

                    {tickets.map((coach) => (
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                            <div className="courseCard" key={coach.index}>
                                <img
                                    width="100%"
                                    height="50%"
                                    src={coach.image}
                                    alt="pdocutimage"
                                    style={{ borderRadius: "18px 20px 0px 0px", height: "200px" }}
                                />
                                <div className="card_data">
                                    <Typography variant="h6" gutterBottom component="div">
                                        {coach.eventName}
                                    </Typography>
                                    <div
                                        style={{ display: "flex", justifyContent: "space-between" }}
                                    >
                                        <Typography variant="body1" gutterBottom component="div">
                                            {coach.descriptionName}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            gutterBottom
                                            component="div"
                                            style={{ color: "#268244" }}
                                        >
                                            <strong>${coach.evetPrice}</strong>
                                        </Typography>
                                    </div>
                                    <Link
                                        to={`/ticketDetails/${coach.id}`}
                                        style={{ textDecoration: "none", color: "black" }}
                                    >
                                        <Button
                                            variant="contained"
                                            style={{
                                                color: "#fff",
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
                <Modal
                    open={_open}
                    onClose={_handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div>
                            <Typography variant="h6" component="div" gutterBottom>
                                Add New Ticket
                            </Typography>
                            <Divider />
                            <input
                                accept="image/"
                                style={{ display: 'none' }}
                                id="raised-button-file"

                                type="file"
                                onChange={(e) => uploadImage(e)}
                            />

                            <label htmlFor="raised-button-file">
                                <Button variant="contained" component="span" style={{
                                    margin: "0px 0px 15px 10px",
                                    color: "white",
                                    backgroundColor: "#E63369",
                                    borderRadius: "5px",
                                    width: "100%"

                                }}>
                                    upload Image
                                </Button>
                            </label>
                            <div style={{ padding: "8px" }}>

                                <TextField
                                    id="standard-multiline-static"
                                    placeholder="Event Name"
                                    variant="outlined"
                                    fullWidth
                                    value={eventName}
                                    onChange={handleEventName}
                                />
                            </div>
                            <div style={{ padding: "8px" }}>

                                <TextField
                                    id="standard-multiline-static"
                                    placeholder="Event Description"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={descriptionName}
                                    onChange={handleEventDescription}
                                />
                            </div>
                            <div style={{ padding: "8px" }}>

                                <TextField
                                    id="standard-multiline-static"
                                    placeholder="Ticket Price"
                                    variant="outlined"
                                    fullWidth
                                    value={evetPrice}
                                    onChange={handleEventPrice}

                                />
                            </div>
                            <Button
                                variant="contained"
                                startIcon={<SaveIcon />}
                                onClick={onSubmit}
                                style={{
                                    float: "right",
                                    margin: "7px",
                                    color: "white",
                                    backgroundColor: "#E63369",
                                }}
                            >
                                {isLoading ? "...uploading " : " uploaded "}
                                {""}
                                Save
                            </Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default AddTicket;

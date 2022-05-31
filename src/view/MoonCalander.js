
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
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import { userContent } from '../component/UserData'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../Config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getService, postServiceById, updateService } from '../services/Services';
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

const AddBlogs = () => {
    const [_open, setOpen] = useState(false);
    const _handleClose = () => setOpen(false);
    const [_Newimage, set_NewImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [featureImageUrl, setFeatureImageUrl] = useState('');
    const [blogData, setBlogData] = React.useState('');
    const [blogText2, setBlogText2] = React.useState('');
    const [allBlogs, setAllBlogs] = React.useState([]);
    const [usersId, setUsersId] = useState('')
    const [blogTitle, setBlogtitle] = useState('')
    const [blogDescription, setBlogDescription] = useState('')
    const [blogPrice, setBlogblogPrice] = useState('')
    const [startDate, setStartDate] = useState(new Date());


    const categories = [
        'Psychology', 'Spirituality',
        'Education', 'Awareness',
        'Music', 'Natural Medicine',
        'Conscious business', 'Yoga',
        'Meditation', 'Other']

    const handleOpen = () => setOpen(true);

    const sortedActivities = allBlogs && allBlogs.slice().sort((a, b) => b.Date - a.Date)


    let allList = []
    let list = []
    const getAllMoonCalenderBlogs = async () => {
        if (typeof window !== 'undefined') {
            const session = JSON.parse(localStorage.getItem('session'));

            setUsersId(session.uid)
        }
        const querySnapshot = await getService("MoonCalander")

        querySnapshot.forEach((doc) => {

            list.push({
                id: doc.id,
                ...doc.data(),
            })
        });

        list.map((item) => {
            item?.Blog.map((subitems) => {
                allList.push(subitems)

            })
            setAllBlogs(allList)

        })

    };
    useEffect(() => {
        // if(!openPopup){
        getAllMoonCalenderBlogs()
        // }
    }, [])

    const uniqueID = () => {
        return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    };


    const onSubmit = async () => {
        _handleClose();
        const record = {
            FeatureImage: featureImageUrl,
            Title: blogTitle,
            Category: blogData,
            Date: startDate,
            PriceType: blogPrice,
            Image: imageUrl,
            blogText: blogText2,
            Discription: blogDescription,
            blogId: uniqueID()
        };
        // await postService("Blog", record)

        const docRef = doc(db, "MoonCalander", usersId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let list = docSnap.data()
            list.Blog.push(record)
            await updateService("MoonCalander", usersId, list)


        } else {

            const data = {
                Blog: [record]
            }

            await postServiceById(usersId, "MoonCalander", data)

        }

    }
    const handleChangeBlog = (event) => {
        setBlogData(event.target.value);

    };
    const handleBlogText = (event) => {
        setBlogText2(event.target.value);

    };
    const handleBlogDescription = (event) => {
        setBlogDescription(event.target.value);

    };
    const handleBlogPrice = (event) => {
        setBlogblogPrice(event.target.value);

    };
    const handleBlogtitle = (event) => {
        setBlogtitle(event.target.value);

    };
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
                    if (type == "featureImage") {
                        setImageUrl(downloadURL);
                        setIsLoading(true);
                    } else {
                        setFeatureImageUrl(downloadURL)
                        setIsLoading(true);
                    }
                    setIsLoading(false);
                });
            }
        );


    };
    return (
        <div className="privacy_div">
            <Sidebars />
            <div className="privacy_policy">
                {/* <div style={{ marginLeft: '35%' }}>
                    <Calendar onChange={onChange} value={value} />
                </div> */}
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
                    Add New Blog
                </Button>
                <div>
                    <Grid container spacing={2} style={{ padding: 25 }}>
                        {sortedActivities && sortedActivities?.map((blog) => (
                            <div className="blog_content" >
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
                                            {blog.Title}
                                        </Typography>
                                        <Typography variant="body1">{blog.Discription}</Typography>
                                        <Link
                                            to={`/moonCalenderBlogDeatils/${blog.blogId}`}
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
                <Modal
                    open={_open}
                    onClose={_handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div>
                            <Typography variant="h6" component="div" gutterBottom>
                                Add New
                            </Typography>
                            <Divider />
                           
                            <input
                                accept="image/"
                                style={{ display: 'none' }}
                                id="raised-button-file"

                                type="file"
                                onChange={(e) => uploadImage(e, "image")}
                            />

                            <label htmlFor="raised-button-file">
                                <Button variant="contained" component="span" style={{
                                    margin: "0px 0px 15px 10px",
                                    color: "white",
                                    backgroundColor: "#E63369",
                                    borderRadius: "5px",
                                    width: "100%"

                                }}>
                                    upload Features Image
                                </Button>
                            </label>

                            <div style={{ padding: "8px" }}>

                                <TextField
                                    id="standard-multiline-static"
                                    placeholder="Blog Title"
                                    variant="outlined"
                                    fullWidth
                                    value={blogTitle}
                                    onChange={handleBlogtitle}

                                />
                            </div>
                           
                            <FormControl required sx={{ m: 1, minWidth: 415 }}>
                                <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={blogData}
                                    onChange={handleChangeBlog}
                                >
                                    {
                                        categories && categories.map((item) => {

                                            return (
                                                <MenuItem value={item}>
                                                    {item}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </Select>

                            </FormControl>
                            {/* DatePicker css in Dashboard.scss  */}
                            <div >
                                <DatePicker
                                    className="myDatePicker"
                                    selected={startDate}
                                    onChange={(date: Date) => setStartDate(date)} />

                            </div>
                            <div style={{ padding: "8px" }}>

                                <TextField
                                    id="standard-multiline-static"
                                    placeholder="Blog Description"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={blogDescription}
                                    onChange={handleBlogDescription}
                                />
                            </div>
                           
                            <input
                                accept="image/"
                                style={{ display: 'none' }}
                                id="raised-button-fil"

                                type="file"
                                onChange={(e) => uploadImage(e, "featureImage")}
                            />

                            <label htmlFor="raised-button-fil">
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
                                    placeholder="Blog Text"
                                    variant="outlined"
                                    fullWidth
                                    // multiline
                                    rows={4}
                                    value={blogText2}
                                    onChange={handleBlogText}
                                />
                            </div>
                            <div style={{ padding: "8px" }}>

                                <TextField
                                    id="standard-multiline-static"
                                    placeholder="Blog Price"
                                    variant="outlined"
                                    fullWidth
                                    value={blogPrice}
                                    onChange={handleBlogPrice}

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
                                {isLoading ? "...uploading " : " Save Image"}
                                {""}
                            
                            </Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default AddBlogs;

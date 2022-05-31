import React, { useState, useEffect } from "react";
import Sidebars from "../component/Sidebars";
import "../style/privacyPolicy.scss";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import _CurrentBanner from "../assets/images/EvoLoveBanner.png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Select from '@mui/material/Select';
import AddPolicy from "../component/AddPolicy";
import SaveIcon from '@mui/icons-material/Save';
import { ref } from 'firebase/storage';
import { uploadBytesResumable } from 'firebase/storage';
import { storage } from '../Config/firebase';
import { getDownloadURL } from 'firebase/storage';
import { getService, postService } from "../services/Services";

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
const blogsData = ['Home', 'Shop', 'Blogs']
const AddBanner = () => {
    const [_open, setOpen] = useState(false);
    const [_image, set_Image] = useState(_CurrentBanner);
    const [_Newimage, set_NewImage] = useState('');
    const [screenData, setScreenData] = React.useState('');
    const [showDisplay, setShowDisplay] = React.useState('');
    const [blogData, setBlogData] = React.useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [tagLine, setTagLine] = React.useState('');
    const [allBlogs, setAllBlogs] = React.useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [bannerData, setAllBannerData] = useState('')
    const _handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    // const handleOpen = () => setOpen(true);

    let bannerList = []
    const getAllBanners = async () => {

        const querySnapshot = await getService("Advertisment")

        querySnapshot.forEach((doc) => {

            bannerList.push({
                id: doc.id,

                ...doc.data()
            })
        });
        setAllBannerData(bannerList)
        // setLoading(false)
    };
    useEffect(() => {
        // if(!openPopup){
        getAllBanners()
        // }
    }, [])


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
        list.map((item) => {
            item?.BlogText.map((subitems) => {
                allList.push(subitems)
            })
        });
        setAllBlogs(allList)
        // setLoading(false)
    };
    useEffect(() => {
        // if(!openPopup){
        getAllBlogs()
        // }
    }, [])
    const uniqueID = () => {
        return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    };
    const onSubmit = async () => {
        _handleClose();
        const record = {
            tagline: tagLine,
            videoUrl: videoUrl,
            bannerUrl: imageUrl,
            screenData: screenData,
            Type: showDisplay,
            blogId: uniqueID()
        };
        await postService("Advertisment", record)

    }
    const handleChange = (event) => {
        setScreenData(event.target.value);

    };
    const handleTagLine = (event) => {
        setTagLine(event.target.value);

    };
    const handleChangeBlog = (event) => {
        setBlogData(event.target.value);

    };
    const handleChanges = (event) => {
        const getDta = event.target.value
        setShowDisplay(getDta);
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
                    if (type === "image") {
                        setImageUrl(downloadURL);
                    } else {
                        setVideoUrl(downloadURL);
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

                <Typography
                    variant="body2"
                    component="div"
                    gutterBottom
                    style={{ padding: "20px 40px 20px 40px" }}
                >
                    <Button
                        variant="contained"
                        onClick={handleOpen}
                        style={{
                            // margin: "10px 0px 10px 40px",
                            color: "white",
                            backgroundColor: "#E63369",
                            borderRadius: "10px",
                            // marginLeft:'45%',
                            float: 'left'
                        }}
                    >
                        Add Banner
                    </Button>
                </Typography>

                <Grid container spacing={2} style={{ padding: 25 }}>

                    {bannerData && bannerData.map((banner) => (
                        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                            <div className="courseCard" key={banner.index}>
                                <img
                                    width="100%"
                                    height="50%"
                                    src={banner.bannerUrl}
                                    alt="pdocutimage"
                                    style={{ borderRadius: "18px 20px 0px 0px", height: "200px" }}
                                />
                                <div className="card_data">
                                    <Typography variant="h6" gutterBottom component="div">
                                        {banner.tagline}
                                    </Typography>


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
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography sx={{ fontWeight: '400px' }} component="div" gutterBottom>
                                        Add Banner Images
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>

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
                                            upload Image
                                        </Button>
                                    </label>
                                </Grid>



                                <Grid item xs={6}>
                                    <Typography sx={{ fontWeight: '400px' }} component="div" gutterBottom>
                                        Screen Names
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>

                                    <FormControl size="small" required sx={{ m: 1, minWidth: 210 }}>
                                        <Select
                                            labelId="demo-simple-select-required-label"
                                            id="demo-simple-select-required"
                                            value={screenData}
                                            onChange={handleChange}
                                        >{blogsData.map((ele) => {
                                            return (
                                                <MenuItem value={ele}>
                                                    {ele}
                                                </MenuItem>
                                            )
                                        })

                                            }
                                        </Select>

                                    </FormControl>

                                </Grid>


                                <Grid item xs={6}>
                                    <Typography sx={{ fontWeight: '400px' }} component="div" gutterBottom>
                                        Tag Line
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ padding: "8px", width: "14rem" }}>

                                        <TextField

                                            size="small"
                                            id="standard-multiline-static"
                                            placeholder="Tag Line"
                                            variant="outlined"
                                            fullWidth
                                            value={tagLine}
                                            onChange={handleTagLine}

                                        />
                                    </div>

                                </Grid>


                                <Grid item xs={6}>
                                    <Typography sx={{ fontWeight: '400px' }} component="div" gutterBottom>
                                        Types
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>

                                    <FormControl size="small" required sx={{ m: 1, minWidth: 210 }}>
                                        <Select
                                            labelId="demo-simple-select-required-label"
                                            id="demo-simple-select-required"
                                            value={showDisplay}
                                            onChange={handleChanges}
                                        >
                                            <MenuItem value="blog">Blog</MenuItem>
                                            <MenuItem value="video">Video</MenuItem>

                                        </Select>

                                    </FormControl>

                                </Grid>
                                {showDisplay == "video" ?
                                    <Grid container spacing={2} >
                                        <Grid item xs={6}>
                                            <Typography sx={{ fontWeight: '400px' }} component="div" gutterBottom>
                                                Upload Image
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>

                                            <input
                                                accept="video/mp4,video/x-m4v,video/"
                                                style={{ display: 'none' }}
                                                id="raised-button-fil"
                                                multiple
                                                type="file"
                                                onChange={(e) => uploadImage(e, "video")}
                                            />

                                            <label htmlFor="raised-button-fil">
                                                <Button variant="contained" component="span" style={{
                                                    margin: "0px 0px 15px 10px",
                                                    color: "white",
                                                    backgroundColor: "#E63369",
                                                    borderRadius: "5px",
                                                    width: "100%"

                                                }}>
                                                    {isLoading ? "...uploading " : " upload video"}
                                                </Button>
                                            </label>
                                        </Grid>
                                    </Grid>
                                    :
                                    <Grid container spacing={4} >
                                        <Grid item xs={6}>
                                            <Typography sx={{ fontWeight: '400px' }} component="div" gutterBottom>
                                                All Blogs
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>

                                            <FormControl size="small" required sx={{ m: 1, minWidth: 210 }}>
                                                <Select
                                                    labelId="demo-simple-select-required-label"
                                                    id="demo-simple-select-required"
                                                    value={blogData}
                                                    onChange={handleChangeBlog}
                                                >
                                                    {
                                                        allBlogs && allBlogs.map((item) => {

                                                            return (
                                                                <MenuItem key={item.id} value={item.Category}>
                                                                    {item.Category}
                                                                </MenuItem>
                                                            )
                                                        })
                                                    }
                                                </Select>

                                            </FormControl>

                                        </Grid>
                                    </Grid>}
                            </Grid>
                            {/* <div style={{ padding: "8px" }}>

                                <TextField
                                    id="standard-multiline-static"
                                    variant="outlined"
                                    fullWidth

                                />
                            </div> */}


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

                                Save
                            </Button>
                        </div>
                    </Box>
                </Modal>
                {/* <img
                    src={_Newimage ? _Newimage : _image}
                    alt="privacy policy"
                    className="privacy_image"
                /> */}
                {/* {_Newimage ?
                    <Button
                        variant="contained"
                        style={{
                            margin: "10px 0px 10px 40%",
                            color: "black",
                            backgroundColor: "#E63369",
                            borderRadius: "50px",

                        }}
                    >
                       Save Banner
                    </Button>
                    :
                    <Button
                        variant="contained"
                        style={{
                            margin: "10px 0px 10px 40%",
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
                    </Button> */}
                {/* } */}
                {/* <Modal
                    open={_open}
                    onClose={_handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <AddPolicy />
                    </Box>
                </Modal> */}
            </div>
        </div>
    );
};

export default AddBanner;

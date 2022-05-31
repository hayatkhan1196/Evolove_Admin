import React from "react";
import Sidebars from "../component/Sidebars";
import "../style/userDetail.scss";
import { useParams } from "react-router-dom";
import { userContent } from "../component/UserData";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";

const ProductDetails = () => {
  const params = useParams();
  const { userName } = params;
  const user = userContent.find((user) => user.userName === userName);
  const { productImage, productName, productPrice, productTitle, userImage } =user;
  const _style = {
    height: "25rem",
    width: "100%",
    backgroundColor: "blue",
    backgroundImage: `url(${productImage})`,
    backgroundSize: "100% 100%",
    borderRadius:'10px',
    marginBottom:'20px'
  };
  return (
    <div className="blog_detial_div">
      <Sidebars />
      {/* <div style={_style}></div> */}
      <div className="blog_detail_data">
      <div style={_style}></div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" component="div" gutterBottom>
            <strong>Publisher: </strong> {userName}
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
            {productName}
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          {productTitle}
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
            ${productPrice}
          </Typography>
          </div>
        <div style={{border: '1px solid #E63369', borderRadius: '5px'}}>
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
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon  />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              
            >
              <Typography>About Publisher</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={userImage}
                  sx={{ width: 50, height: 50 }}
                />
                <div style={{ display: "fex", flexDirection: "column" }}>
                  <Typography
                    variant="body1"
                    component="div"
                    style={{ marginLeft: "10px" }}
                  >
                    <strong>{userName}</strong>
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    style={{ marginLeft: "10px" }}
                  >
                    Meditation Specialist
                  </Typography>
                </div>
              </div>
              <Typography
                variant="body1"
                component="div"
                style={{ marginLeft: "10px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                neque molestie elementum, id ut condimentum quis. Vitae nisi,
                sem facilisis sed fringilla. Nunc, aliquam nunc cras
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon  />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Reviews</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://s.abcnews.com/images/GMA/idris-elba1-sh-ml-181106_hpMain_4x3_608.jpg"
                  sx={{ width: 40, height: 40 }}
                />

                <Typography
                  variant="caption"
                  component="div"
                  style={{ marginLeft: "10px" }}
                >
                  Guy Hawkins
                </Typography>
              </div>
              <Typography
                variant="body1"
                component="div"
                style={{ marginLeft: "10px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                neque molestie elementum,
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12AF/production/_122638740_sullideals.jpg"
                  sx={{ width: 40, height: 40 }}
                />

                <Typography
                  variant="caption"
                  component="div"
                  style={{ marginLeft: "10px" }}
                >
                  Brooklyn Simmons
                </Typography>
              </div>
              <Typography
                variant="body1"
                component="div"
                style={{ marginLeft: "10px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                neque molestie elementum,
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp"
                  sx={{ width: 40, height: 40 }}
                />

                <Typography
                  variant="caption"
                  component="div"
                  style={{ marginLeft: "10px" }}
                >
                  Simon David
                </Typography>
              </div>
              <Typography
                variant="body1"
                component="div"
                style={{ marginLeft: "10px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                neque molestie elementum,
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

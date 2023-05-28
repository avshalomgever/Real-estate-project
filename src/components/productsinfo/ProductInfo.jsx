import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import { useState } from "react";
import "./productinfo.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faUsers,
  faBed,
  faBath,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
function ProductInfo() {
  let { id } = useParams();
  const [data1, setData1] = useState(data.results);

  console.log(data1);
  let objById = data1.find((obj) => obj.zpid == id);
  console.log(objById);
  return (
    <div className="product-info">
      <div className="">
        <h2>
          {" "}
          {`${objById.bedrooms} room ${objById.homeType} in ${objById.city} `}
        </h2>
        <h3> {`${objById.streetAddress}`} </h3>
        <img src={objById.imgSrc} alt="" />
      </div>
      <div className="card-of-details">
        <Card
          style={{
            backgroundColor: "",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          sx={{ minWidth: "30vw", height: " 50vh" }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            ></Typography>

            <Typography variant="body1">
              <FontAwesomeIcon style={{ color: "#ff4081" }} icon={faCheck} />{" "}
              {`Sale or Rent ?      ${objById.homeStatus}`}
              <br />
              <FontAwesomeIcon
                style={{ color: "#ff4081" }}
                icon={faUsers}
              />{" "}
              {` Type of property:      ${objById.homeType}`}
              <br />
              <FontAwesomeIcon style={{ color: "#ff4081" }} icon={faBed} />{" "}
              {`Rooms:      ${objById.bedrooms}`}
              <br />
              <FontAwesomeIcon style={{ color: "#ff4081" }} icon={faBath} />{" "}
              {`bathrooms:      ${objById.bathrooms}`}
              <br />
              <FontAwesomeIcon
                style={{ color: "#ff4081" }}
                icon={faChartArea}
              />{" "}
              {`Built Area:      ${objById.livingArea} sqft`}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ProductInfo;

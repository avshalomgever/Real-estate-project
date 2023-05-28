import "./products.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBed,faBath,faDollarSign} from '@fortawesome/free-solid-svg-icons' 

const Products = ({ value }) => {
  return (
    <div>
      <div className="product">
        <Card sx={{ maxWidth: 600 }}>
          <div className="image-container">
            <CardMedia
              sx={{ height: 250 }}
              component="img"
              height="140"
              src={value.imgSrc}
              alt="Product Image"
              title="Green Iguana"
            />
          </div>

          <CardContent>
            <h1 className="ctNcntr">
              <Typography gutterBottom variant="h5" component="div">
                {value.city} {value.country}
              </Typography>
            </h1>
            <div className="details">
            <Typography variant="h6" color="text.secondary" >
              <div>{`${value.price}`}<FontAwesomeIcon icon={faDollarSign} /> </div><div>{`${value.bathrooms}`} <FontAwesomeIcon icon={faBath} /></div>
              <div>{`${value.bedrooms}`} <FontAwesomeIcon icon={faBed} /></div> 
            
              
             
            </Typography>
            </div>
           <div className="d-btn" > <button className="button" type="button"><h3>I want it!</h3></button></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Products;

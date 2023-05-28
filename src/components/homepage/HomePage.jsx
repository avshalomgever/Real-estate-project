import "./homePage.css";
import React from "react";
import Carousel from "better-react-carousel";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import data from "../data.json";


const HomePage = () => {
  const [value,setValue]=useState([])
  const [value1,setValue1]=useState()
  

 useEffect(() => {
  setValue([data.results]);
}, []);




  return (
    <div>
      <div className="pic">
        <div className="search-house">
          <h1 className="headline">Search your dream house</h1>

          <div className="searchNbutton">
            <input className="inpt" type="text" value={value1}  />
            <button className="button" type="button" onClick={e=>setValue1(e.target.value='Sike,you ate a big dick')}>
              Click
            </button>
          </div>
        </div>
      </div>
      
      <h1 className="head-carousel"> Some examples of our dream houses</h1>
      <div className="carousel">
        <Carousel
          cols={2}
          rows={1}
          gap={10}
          loop
          scrollSnap={true}
          showDots={true}
          
          
        >
          <Carousel.Item >
            <img
            style={{borderRadius: '70px'}}
              width="100%"
              height="100%"
              src="../../../pictures/house 3.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            style={{borderRadius: '70px'}}
              width="100%"
              height="100%"
              src="../../../pictures/house 2.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            style={{borderRadius: '70px'}}
              width="100%"
              height="100%"
              src="../../../pictures/house 4.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            style={{borderRadius: '70px'}}
              width="100%"
              height="100%"
              src="../../../pictures/house 5.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            style={{borderRadius: '70px'}}
              width="100%"
              height="100%"
              src="../../../pictures/house 6.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            style={{borderRadius: '70px'}}
              width="100%"
              height="100%"
              src="../../../pictures/house 7.webp"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <div className="explane">
        <div className="image">
          <img src="../../../pictures/family house3.jpg" alt="" />
        </div>
        <div className="explane-words" >
          <h1>Let us make your dream come true</h1>{" "}
          <h2>
            Take all the strain and worry away and give our men to do the work
            for you
          </h2>
          <Link to={"/Details"}>
            <button className="button" type="button">
              Get Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;

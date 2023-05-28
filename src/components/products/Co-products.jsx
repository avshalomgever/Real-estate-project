import Products from "./Products";
import "./co-product.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import data from "../data.json";

const CoProduct = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [bed, setbeds] = useState(1);
  const [price, setprice] = useState(250_000);
  const [selectVisible, setSelectVisible] = useState(false);

  useEffect(() => {
    setData1(data.results);
    setData2(data.results);
  }, []);

  function filtered(bed,price) {
    setData1(
      data2.filter((obj) => obj.bedrooms >= bed && obj.price >= price)
    );
    
  }

  const sorted = (value) => {
    const sortedData = [...data1];
    if (value === "max to low") {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (value === "low to max") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (value === "max bedrooms") {
      sortedData.sort((a, b) => b.bedrooms -a.bedrooms);
    } else if (value === "low bedrooms") {
      sortedData.sort((a, b) => a.bedrooms -b.bedrooms);
    }
    else if(value==='max bethrooms'){
      sortedData.sort((a,b)=>b.bathrooms-a.bathrooms);
    }
    else if(value==='low bethrooms'){
      sortedData.sort((a,b)=>a.bathrooms-b.bathrooms);
    }
    else if(value==='defult'){
      setData1(data.results);
      return;
    }
    setData1(sortedData);
  };
  const toggleSelectVisibility = () => {
    setSelectVisible(!selectVisible);
  };
  
  return (
    <div>
      <div className="select1">
      <div className="divs-select">
      <button className="button" onClick={toggleSelectVisibility}>
          Sort By 
        </button>
        {selectVisible && (
      <select className="select-sort" onChange={(e) => sorted(e.target.value)} name="" id="">
        <option value="defult">Defult</option>
        <option value="max to low">Max price-low price</option>
        <option value="low to max">Low price-max price</option>
        <option value="max bedrooms">Max bedrooms-low bedrooms</option>
        <option value="low bedrooms">Low bedrooms-max bedrooms</option>
        <option value="max bethrooms">Max bathrooms-low bathrooms</option>
        <option value="low bethrooms">low bathrooms-max bathrooms</option>
      </select>
        )}
      </div>
      <div className="select-container">
        <h3>Bedrooms:</h3>
      <select name="" id="" onChange={e=>setbeds(e.target.value)}> 
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <h3>Price:</h3>
      <select name="" id="" onChange={e=>setprice(e.target.value)}>
        <option value="250000">250</option>
        <option value="500000">500</option>
        <option value="1000000">1000</option>
        <option value=""></option>
      </select>
        <button className="button" onClick={()=>filtered(bed,price)}>Filter</button>
        <button className="button" onClick={()=> setData1(data.results)}>Defult</button>
        </div>
        </div>
      <div className="co-products">
        {data1 &&
          data1
          .filter((obj) => obj.imgSrc  && obj.zpid && obj.bedrooms)
          .map((value, index) => {
            return (
              <Link key={index} to={`/products/${value.zpid}`}>
                <Products value={value} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default CoProduct;

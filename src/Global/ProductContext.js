import React, { createContext, useState } from "react";
import earring from "../assests/earring.jpg";
import handbag from "../assests/handbag.jpg";
// import headphone from "../assests/headphone.jpg";
import iphone from "../assests/iphone.jpg";
import laptop from "../assests/laptop.jpg";
import purse from "../assests/purse.jpg";
import sunglasses from "../assests/sunglasses.jpg";
import waterbottle from "../assests/waterbottle.jpg";
import watermelon from "../assests/watermelon.jpg";
import football from "../assests/football.jpg";
import pen from "../assests/pen.jpg";
import badminton from "../assests/badminton.jpg";
import facialoil from "../assests/facialoil.jpg";
import wirelessheadphone from '../assests/wirelessheadphone.jpg';
import mouse from "../assests/mouse.jpg";
import sofa from "../assests/sofa.jpg";
import chair from "../assests/chair.jpg";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useState([
    { id: 1, name: "Earring", price: 300, image: earring, status: "hot" },
    { id: 2, name: "HandBag", price: 1100, image: handbag, status: "new" },
    { id: 3, name: "Iphone", price: 45000, image: iphone, status: "hot" },
    { id: 4, name: "Laptop", price: 55000, image: laptop, status: "hot" },
    { id: 5, name: "Purse", price: 780, image: purse, status: "new" },
    
    {
      id: 6,
      name: "SunGlasses",
      price: 1500,
      image: sunglasses,
      status: "hot",
    },
    {
      id: 7,
      name: "WaterBottle",
      price: 500,
      image: waterbottle,
      status: "new",
    },
    { id: 8, name: "WaterLemon", price: 300, image: watermelon, status: "hot" },
    { id: 9, name: "Football", price: 750, image: football, status: "new" },
    { id: 10, name: "Pen", price: 250, image: pen, status: "hot" },
    { id: 11, name: "Badminton", price: 1000, image: badminton, status: "hot" },
    { id: 12, name: "Facial Oil", price: 500, image: facialoil, status: "new" },
    { id: 13, name: "Wireless Headphone", price: 2000, image: wirelessheadphone, status: "hot" },
    { id: 14, name: "Chair", price: 12000, image: chair, status: "new" },
    { id: 15, name: "Mouse", price: 2500, image: mouse, status: "hot" },
    { id: 16, name: "Sofa", price: 2000, image: sofa, status: "new" },

  ]);
  return (
    <ProductContext.Provider value={{ products: [...products] }}>
        {props.children}
    </ProductContext.Provider>
  );

};

export default ProductContextProvider;

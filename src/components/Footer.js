import React,{useContext} from "react";
import { CartContext } from "../Global/CartContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const {qty}=useContext(CartContext)
  return (
    <>
        <div className="footer">
        <p>Created by Md Kamil . © {new Date().getFullYear()} . All Rights Reserved</p>
        </div>
    </>
  );
};

export default Footer;

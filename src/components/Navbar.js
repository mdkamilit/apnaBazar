import React,{useContext} from "react";
import { CartContext } from "../Global/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {qty}=useContext(CartContext)
  return (
    <>
      <nav>
        <ul className="left">
          <li>
            <Link to={'/'}>IndoExpress</Link>
          </li>
        </ul>
        <div className="col-xs-4">
                {/* <div className="form">                   */}
                  <input type="text" className="search" placeholder="Search anything..."/>  
                             
                {/* </div> */}
                
              </div>

        <ul className="right">
          <li>
            <Link to='/cart'>
              <span className="shoppingCart">
                <i className="fas fa-cart-plus">                  
                </i>
                <span className="cartCount">{qty}</span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

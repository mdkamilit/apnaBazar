import React,{useContext,useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Global/CartContext';
import StripeCheckout from 'react-stripe-checkout';
import emptyCart from '../assests/emptycart.jpg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';

import { Link } from 'react-router-dom';

// const PAYMENT_MSG='Thanks for Shopping with us...'
const Cart = () => {
  const navigate=useNavigate();
  const [message, setMessage] = useState(false);
   const {shoppingCart,totalPrice,qty,dispatch}=useContext(CartContext);
  console.log('cart',shoppingCart)

  const handleToken=(token)=>{ 
    console.log(token) 
    if(token.object==='token'){ 
      shoppingCart.length=0;       
      setTimeout(() => {
        Swal.fire('Yor Order will be deliver soon.'  )  
        window.location.reload(false)
      },0);
      // navigate('/')
        
    } 
     
  }

  
  return (
    
   <div className='cart-container'>
    {/* <h2 style={{marginTop:'50px' ,alignItems:'left'}}>{shoppingCart.length >0 ?'Product Review':''}</h2> */}
    <div className='cart-details' style={{marginTop:'100px'}}>
        {
          shoppingCart.length >0 ?
          shoppingCart.map((cart)=>(
            <div className="cart" key={cart.id}>
              <span className="cart-image">
                <img src={cart.image} alt="cartnotfound"  title={cart.name}/>
              </span>
              <span className='cart-product-name'>{cart.name}</span>
              <span className='cart-product-price'>$ {cart.price}.00</span>
              <span className='inc' onClick={()=>dispatch({type:'INCREMENT',id:cart.id,cart})}><i className="fa-solid fa-plus"></i></span>
              <span className='product-quantity'>{cart.qty}</span>
              <span className='dec' onClick={()=>dispatch({type:'DECREMENT',id:cart.id,cart})}><i className="fa-solid fa-minus"></i></span>
              <span className='product-total-price'>$ {cart.price * cart.qty}.00</span>
              <span className='delete-product' onClick={()=>dispatch({type:'DELETE',id:cart.id,cart})}><i className="fa-solid fa-trash" title='Remove Item'></i></span>

            </div>
          )):<h2 className='emtymsg'> Sorry, your cart is currently empty 🙃<div className="mt-10">Please add products to continue shopping</div><Link to={'/'}  className="fa-solid fa-arrow-left"></Link></h2>
        }


    </div>
    {shoppingCart.length >0 ? <div className='cart-summary'>
      <div className="summary">
        <h3>Cart Summary</h3>
        <div className='total-items'>
          <div className="items">Total Items</div>
          <div className='items-count'>{qty}</div>
        </div>
        <div className='shipping-charge'>
          <div className='charge-title'>Shipping Charge</div>
          <div className='charge-amount'>40</div>
        </div>
        <div className='total-price-section'>
          <div className='just-title'>Total Price</div>
          <div className='items-price'>$ {totalPrice+40}.00</div>
        </div>
        <div className='stripe-section'>
       
         <StripeCheckout
        token={handleToken}
        stripeKey="pk_test_51MFBjaSBVLKQ3MdKXNHqO8LKFoCizZzR9GoOBiWFacrHuz2avZCwt6sPfOF0wQ09rBwqRQ5VIa50MAPS8clCdE6300npesPRY0"
        billingAddress shippingAddress amount={totalPrice *100}
        description={`Total Amount ${totalPrice+40}.00`}
        name='Products Info'
        panelLabel='Place Order'  
     />
        </div>
      </div>
    </div>:''}
    {/* <ToastContainer /> */}  
   </div>
  )
}

export default Cart
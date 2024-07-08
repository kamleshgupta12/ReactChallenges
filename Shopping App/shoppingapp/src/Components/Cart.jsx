import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { CartItems } from './CartItems';

export const Cart = () => {
  const { cart } = useSelector((state) => state);
  // console.log(cart,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  const [totalAmount,setTotalAmount]=useState(0)

  useEffect(()=>{
    setTotalAmount(cart.reduce((curr,accu)=> curr + accu.price,0));
  },[cart])
function checkoutHandler(){
  alert("this Facility has been Temporary Blocked ")
}

  return (
    <div>
      <div>
        {
          cart.length > 0 ?
            (<div>
              <div>
                {
                  cart.map((item, index) => <CartItems item={item} index={index} />)
                }
              </div>
              <div>
                <div>
                  <p>Your Cart</p>
                  <p>Summary</p>
                  <p>Total Items : {cart.length}</p>
                </div>
                <div>
                  <p>Total Amount : ₹{totalAmount}</p>
                  <button onClick={checkoutHandler}>Checkout Now</button>
                </div>
              </div>
            </div>)
            :
            (<div>
              <div>
                <p>Your Cart Is Empty</p>
                <Link to='/'><button>Shop Now</button></Link>
              </div>
            </div>)
        }
      </div>
    </div>
  )
}

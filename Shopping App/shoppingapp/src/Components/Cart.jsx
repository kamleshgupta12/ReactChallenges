import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { CartItems } from './CartItems';

export const Cart = () => {
  const { cart } = useSelector((state) => state);
  // console.log(cart,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(cart.reduce((curr, accu) => curr + accu.price, 0));
  }, [cart])
  function checkoutHandler() {
    alert("this Facility has been Temporary Blocked ")
  }

  return (
    <div>
      <div className=''>
        {
          cart.length > 0 ?
            (<div className='flex justify-center items-center h-[90vh] mt-[50px]'>
              <div className='flex flex-col  h-[90vh] mt-[50px]  '>
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
              <div className='flex flex-col gap-5 justify-center items-center'>
                <p className='font-bold text-3xl'>Your Cart Is Empty !</p>
                <Link to='/'><button className='bg-green-600 font-medium border-[2px] border-green-600 transition-all duration-200 text-[20px] px-3 text-white p-2 rounded-lg hover:bg-white hover:border-green-600 hover:border-[2px] hover:text-green-600'>Shop Now</button></Link>
              </div>
            </div>)
        }
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { CartItems } from './CartItems';
import toast from 'react-hot-toast';

export const Cart = () => {
  const { cart } = useSelector((state) => state);
  // console.log(cart,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(cart.reduce((curr, accu) => curr + accu.price, 0));
  }, [cart])
  function checkoutHandler() {
    toast.error("Comming Soon...")
  }

  return (
    <div>
      <div className=''>
        {
          cart.length > 0 ?
            (<div className='flex justify-center  max-sm:flex-col lg:flex-row max-sm:items-center  mt-[50px]  mx-[100px]'>
              <div className='flex flex-col  h-[100%] w-[50%] max-sm:w-[100%] '>
                {
                  cart.map((item, index) => <CartItems item={item} index={index} />)
                }
              </div>
              <div className='  w-[50%] max-sm:w-[100%] flex flex-col justify-center items-center  justify-between mb-10 '>
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-green-800 font-medium text-2xl'>Your Cart</p>
                  <p className='text-green-600  font-semibold text-4xl  font-sans'>Summary</p>
                
                  <p className='text-[#555] font-bold text-xl mt-3'>Total Items : <span className=' font-normal'>{cart.length}</span></p>
                </div>
                <div className='w-[100%] px-5'>
                  <p className='font-bold text-xl text-[#555]'>Total Amount : <span className='text-black font-extrabold  font-mono'>₹{totalAmount}</span></p>
                  <button className='bg-green-600 font-bold w-full  border-[2px] border-green-600 transition-all duration-200 text-[20px] px-3 mt-2 text-white p-3 rounded-md hover:bg-white hover:border-green-600 hover:border-[2px] hover:text-green-600' onClick={checkoutHandler}>Checkout Now</button>
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

import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <div className=' flex justify-between items-center  h-[60px] w-full bg-slate-800 px-[8rem] '>
        <NavLink to="/">
          <div className='text-[30px] font-bold text-white'>
            Shopping Cart
          </div>
        </NavLink>

        <div className='flex items-center gap-6'>
          <NavLink to="/">
            <div>
              <h4 className='text-white text-[25px] font-medium'>Home</h4>
            </div>
          </NavLink>

          <NavLink to="/cart">
            <div >
              <div className='text-[40px] relative text-[white]'><FaShoppingCart /></div>
             {
               cart.length > 0 &&

               <div className='flex items-center justify-center text-white font-medium text=[20px] absolute bg-green-600 w-[17px] h-[17px] rounded-full top-2 right-[131px] animate-bounce '>
               <p className='text-[13px]'>{cart.length}</p>
             </div>
             }
            </div>
          </NavLink>
        </div>

      </div>
    </div>
  )
}

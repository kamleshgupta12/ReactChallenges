import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <div className=' flex justify-between items-center  h-[60px] w-full bg-slate-300 px-10 '>
        <NavLink to="/">
          <div>
            <img className='w-[100px]' src={require('../Images/logo.png')} alt="logo" />
          </div>
        </NavLink>

        <div className='flex items-center gap-2'>
          <NavLink to="/">
            <div>
              <h4>Home</h4>
            </div>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <p><FaShoppingCart /></p>
            </div>
          </NavLink>
        </div>

      </div>
    </div>
  )
}

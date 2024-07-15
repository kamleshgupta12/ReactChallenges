import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Remove } from '../Redux/Slice/CartSlice';
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';


export const CartItems = ({item,index}) => {
  const {cart} = useSelector((state)=>state);
const dispatch = useDispatch();


//   function itemRemove(id){
//     dispatch(Remove(id))
// console.log(id,'kkkkkkkkkkkkkkkkkkkkkk');
//   }
  return (
    <div className='border-b-2 border-slate-700 flex gap-10 max-sm:gap-5 justify-center items-center px-[20px] max-sm:p-1 pb-5 mb-10'> 
      <div>
        <img className='w-[350px] ' src={item.image} alt="" />
      </div>
      <div className='flex flex-col gap-6'>
        <p className='text-xl max-sm:text-sm  font-bold text-slate-600'>{item.title}</p>
        <p className='max-sm:text-[10px]'>{item.description.split(" ").slice(0,15).join(" ")}...</p>
        <div className='flex justify-between'>
          <p className='font-bold text-green-600 font-mono text-2xl'>₹{item.price}</p>
          <p className='font-bold text-xl text-red-600 px-2 py-2  bg-red-200 rounded-full hover:text-white hover:bg-red-400 cursor-pointer' onClick={()=>dispatch(Remove(item.id), toast.error("Removed")) }><MdDelete/></p>
        </div>
      </div>
    </div>
  )
}

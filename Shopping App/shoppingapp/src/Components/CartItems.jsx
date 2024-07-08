import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Remove } from '../Redux/Slice/CartSlice';

export const CartItems = ({item,index}) => {
  const {cart} = useSelector((state)=>state);
const dispatch = useDispatch();


//   function itemRemove(id){
//     dispatch(Remove(id))
// console.log(id,'kkkkkkkkkkkkkkkkkkkkkk');
//   }
  return (
    <div>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <div>
          <p>{item.price}</p>
          <p onClick={()=>dispatch(Remove(item.id))}>Remove</p>
        </div>
      </div>
    </div>
  )
}

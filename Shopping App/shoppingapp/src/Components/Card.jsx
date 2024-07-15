import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Add, Remove } from '../Redux/Slice/CartSlice';
import toast from 'react-hot-toast';
export const Card = ({ product }) => {
    // const [selected, setSelected] = useState(false)
    const { cart } = useSelector((state) => state)
    const dispatch = useDispatch();
    function removeItem() {
        dispatch(Remove(product.id))
        toast.error("Removed")
    }
    function addItem() {
        dispatch(Add(product))
        toast.success("Item Add Successfully")
        console.log(product, "kamleshhhhhhhhhhhhhhhhh");
    }

    // console.log(product);
    return (
        <div>
            <div className=' bg-[#fbfafa] flex flex-col border h-[400px] w-[280px] justify-center  items-center justify-between p-3 rounded-md hover:shadow-lg hover:bg-white'>
                <div>
                    <p className='font-bold '>{product.title.split(" ").slice(0,3).join(" ")}...</p>
                </div >  
                <div className='' >
                    <p className='text-[13px] font-sans text-center '>{product.description.split(" ").slice(0,10).join(" ")}...</p>
                </div>
                <div>
                    <img className='w-[120px]' src={product.image} alt="" />
                </div>
                <div className='flex gap-[85px]'>
                    <div><p className='font-bold text-green-600'>₹{product.price}</p></div>
                    <div >
                        {
                            cart.some((presentId) => presentId.id == product.id)
                                ? (<button className='border-slate-800 border-[2px] font-normal pl-2 pr-2 rounded-xl w-[130px] hover:bg-slate-800 hover:text-[white]' onClick={removeItem}> Remove Item</button>)
                                : (<button className='border-slate-800 border-[2px] font-normal pl-2 pr-2 rounded-xl w-[130px]  hover:bg-slate-800 hover:text-[white]' onClick={addItem}> Add To Cart</button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Add, Remove } from '../Redux/Slice/CartSlice';
export const Card = ({ product }) => {
    // const [selected, setSelected] = useState(false)
    const { cart } = useSelector((state) => state)
    const dispatch = useDispatch();
    function removeItem() {
        dispatch(Remove(product.id))
    }
    function addItem() {
        dispatch(Add(product))
        console.log(product, "kamleshhhhhhhhhhhhhhhhh");
    }

    // console.log(product);
    return (
        <div>
            <div className='flex flex-col border p-4 items-center justify-center  justify-between'>
                <div>
                    <p>{product.title}</p>
                </div>
                <div>
                    <p>{product.description.substring(0, 52)}...</p>
                </div>
                <div>
                    <img className='w-[150px]' src={product.image} alt="" />
                </div>
                <div className='flex  items-center justify-between'>
                    <p>{product.price}</p>
                    <div >
                        {
                            cart.some((presentId) => presentId.id == product.id)
                                ? (<button onClick={removeItem}> Remove Item</button>)
                                : (<button onClick={addItem}> Add To Cart</button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

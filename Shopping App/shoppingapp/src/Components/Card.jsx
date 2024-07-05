import React, { useState } from 'react'

export const Card = ({ product }) => {
    const [selected,setSelected] =useState(false)
    console.log(product);
    return (
        <div>
            <div className='flex flex-col border p-4 items-center justify-center  justify-between'>
                <div>
                    <p>{product.title}</p>
                </div>
                <div>
                    <p>{product.description.substring(0,52)}...</p>
                </div>
                <div>
                    <img className='w-[150px]' src={product.image} alt="" />
                </div>
                <div className='flex  items-center justify-between'>
                    <p>{product.price}</p>
                    <button >
                        {
                           selected ? <p>Remove to Cart</p> : <p>Add to Cart</p>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

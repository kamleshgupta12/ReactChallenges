import React, { useEffect, useState } from 'react'
import { Card } from './Card';
import { Spinner } from './Spinner';

export const Home = () => {
  const API_URL = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState([])
  const [loader, setLoader] = useState(false)

  async function productData() {
    setLoader(true);
    try {

      const result = await fetch(API_URL);
      const data = await result.json();
      setProducts(data)
      console.log(data,">>>>");
    }
    catch {
      console.log("Somethings wnt wrong........");
      setProducts([])
    }
    setLoader(false)
  }

  useEffect(() => {
    productData()
  }, [])
  return (
    <div>
      <div>
        <div className='bg-[#fbfafa]  w-[100%] h-[90vh] flex justify-center items-center mt-[50px] mb-5'>
          {
            loader ? (<Spinner />) : (products.length === 0 ? (<div></div>)
              : (
                <div className='flex flex-wrap justify-center items-center gap-5  h-[90vh] '>
                  {
                    products.map((product) => (
                      (<Card product={product} key={product.id} />)
                    ))
                  }
                </div>
              ))
          }
        </div>
      </div>
    </div>
  )
}


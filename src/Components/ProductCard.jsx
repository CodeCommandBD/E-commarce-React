import React from 'react'
import { IoCartOutline } from 'react-icons/io5';

const ProductCard = ({product}) => {
    console.log(product);
    
  return (
    <div className='border relative border-gray-100 roudned-
     cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max '>
        <img src={product.images} alt="" className='bg-gray-100 aspe'/>
        <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>
        <p className='my-1 text-lg text-gray-800 font-bold'>${product.price}</p>
        <button className='flex items-center justify-center gap-2 bg-purple-500 text-white rounded-md cursor-pointer font-semibold w-full p-2'><IoCartOutline></IoCartOutline> Add To Cart</button>
    </div>
  )
}

export default ProductCard
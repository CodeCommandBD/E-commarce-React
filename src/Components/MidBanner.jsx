import React from 'react'
import banner from '../Assets/e-bg.png'
const MidBanner = () => {
  return (
    <div>
        <div className='bg-gray-100 md:py-24'>
            <div className='container relative md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]' style={{backgroundImage: `url(${banner})`, backgroundSize: 'center', backgroundAttachment: 'fixed'}}>
                <div className='absolute inset-0 flex items-center justify-center top-0 left-0 w-full h-full bg-black/60 bg-opacity-50 '>
                    <div className='text-center text-white px-4'>
                        <h1 className='text-4xl md:text-6xl font-bold mb-4'>Discover the Best Deals</h1>
                        <p className='text-lg md:text-xl mb-8'>Shop the latest trends and exclusive offers</p>
                        <button className='bg-purple-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-600 transition duration-300 cursor-pointer'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MidBanner
import React, { useEffect } from 'react'
import { dataContext, useData } from '../Contexts/DataContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Category from './Category'

const Carousel = () => {
    const { data, fetchAllProducts } = useData(dataContext)

    useEffect(() => {
        fetchAllProducts()
    }, [])

    return (
        <div className="w-full relative">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                {data?.slice(0, 10)?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='bg-gradient-to-r from-purple-800 via-purple-700 to-purple-400'>
                            <div className='flex gap-10 justify-between h-[75vh] w-full items-center px-4 container'>
                                <div className='space-y-6'>
                                    <h3 className='text-green-500 font-semibold font-sans text-sm'>
                                        Powering your world with the Best in Electronics
                                    </h3>
                                    <h1 className='text-3xl text-white font-bold uppercase line-clamp-3 md:max-w-[500px]'>
                                        {item.title}
                                    </h1>
                                    <p className='md:max-w-[500px] line-clamp-3 text-gray-400 pr-7'>
                                        {item.description}
                                    </p>
                                    <button className='bg-gradient-to-r from-purple-600 to-green-500 py-2 px-3 rounded-md cursor-pointer mt-2 text-white shadow-2xl'>
                                        Shop Now
                                    </button>
                                </div>
                                <div>
                                    <img 
                                        src={item.images[0]} 
                                        alt={item.title} 
                                        className='max-w-[450px] bg-transparent rounded-full shadow-2xl shadow-green-400 transition-all hover:scale-105'
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
            <Category></Category>
            
            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-4 z-10">
                <AiOutlineArrowLeft className="bg-green-600 text-white p-2 rounded-full text-2xl hover:bg-green-700 transition-all" />
            </div>
            <div className="swiper-button-next absolute top-1/2 -translate-y-1/2 right-4 z-10">
                <AiOutlineArrowRight className="bg-green-600 text-white p-2 rounded-full text-2xl hover:bg-green-700 transition-all" />
            </div>

            <style>
                {`
                    .swiper-button-next,
                    .swiper-button-prev {
                        width: auto !important;
                        height: auto !important;
                        background: transparent !important;
                    }
                    .swiper-button-next:after,
                    .swiper-button-prev:after {
                        display: none;
                    }
                    .swiper-pagination-bullet {
                        background: #f53347 !important;
                    }
                `}
            </style>
        </div>
    )
}

export default Carousel
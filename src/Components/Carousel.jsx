import React, { useContext, useEffect } from 'react'
import { dataContext } from '../Contexts/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {  AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const Carousel = () => {

    const { data, fetchAllProducts } = useContext(dataContext)
    console.log(data);

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const SamplePrevArrow =(props)=>{
        const {className, style, onClick} =props
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}} >
                <AiOutlineArrowLeft className='arrows' style={{...style, display: 'block', borderRadius: '50px', background:'#f53347', color:'white', position: 'absolute', padding: '2px', left:'50px'}}></AiOutlineArrowLeft>
            </div>
        )
    }
    const SampleNextArrow =(props)=>{
        const {className, style, onClick} =props
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
                <AiOutlineArrowRight className='arrows' style={{...style, display: 'block', borderRadius: '50px', background:'#f53347', color:'white', position: 'absolute', padding: '2px', left:'50px'}}></AiOutlineArrowRight>
            </div>
        )
    }

    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <sampleNextArrow to='next'></sampleNextArrow>,
        prevArrow: <samplePrevArrow to='prev'></samplePrevArrow>
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    // ?. শুধুমাত্র তখনই দরকার, যখন আপনি নিশ্চিত না data আসলে আছে কিনা (মানে undefined বা null কিনা)।
                    data?.slice(0,7)?.map((item, index)  => {
                        return <div key={index} className='bg-gradient-to-r from-purple-800 via-purple-700 to-purple-400 -z-10'>
                            <div className='flex gap-10 justify-between h-[75vh] w-full items-center px-4 container'>
                                <div className='space-y-6'>
                                    <h3 className='text-green-500 font-semibold font-sans text-sm'>Powering your world with the Best in Electronics</h3>
                                    <h1 className='text-3xl text-white font-bold uppercase line-clamp-3 md:max-w-[500px]'>{item.title}</h1>
                                    <p className='md:max-w-[500px] line-clamp-3 text-gray-400 pr-7'>{item.description}</p>
                                    <button className='bg-gradient-to-r from-purple-600 to-green-500 py-2 px-3 rounded-md cursor-pointer mt-2 text-white shadow-2xl'>Shop Now</button>
                                </div>
                                <div>
                                    <img src={item.image} alt={item.title} className='max-w-[450px] rounded-full shadow-2xl shadow-green-400 transition-all hover:scale-105'/>
                                </div>
                            </div>
                        </div>
                    })
                }
                <div>
                    <h3>1</h3>
                </div>
                
              
            </Slider>
        </div>
    )
}

export default Carousel
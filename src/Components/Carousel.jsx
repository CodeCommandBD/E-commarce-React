import React, { useContext, useEffect } from 'react'
import { dataContext } from '../Contexts/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Carousel = () => {

    const { data, fetchAllProducts } = useContext(dataContext)
    console.log(data);

    useEffect(() => {
        fetchAllProducts()
    }, [])
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    // ?. শুধুমাত্র তখনই দরকার, যখন আপনি নিশ্চিত না data আসলে আছে কিনা (মানে undefined বা null কিনা)।
                    data?.slice(0,7)?.map((item, index)  => {
                        return 
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
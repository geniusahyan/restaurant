import React, { useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';

    const SimpleNextArrow = (props)=>{
        const {className, style, onClick} = props;
        return (
            <div className={className} style={{...style, display:"block"} } onClick={onClick}></div>
        )
    }
    const SimplePrevArrow = (props)=>{
        const {className, style, onClick} = props;
        return (
            <div className={className} style={{...style, display:"block"} } onClick={onClick}></div>
        )
    }

const SpecialDishes = () => {

    const slider = useRef(null);


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        nextArrow: <SimpleNextArrow />,
        prevArrow: <SimplePrevArrow />
      };

      const slide = [1,2,3,4,5,6,7,8];

  return (
    <div className='section-container my-20 ' >
         <div className='text-left px-6 ' >
            <p className='text-red uppercase tracking-wide font-medium text-lg ' >Special Dishes</p>
            <h1 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug md:w-[32rem] ' >Standout Dished From Our Menu</h1>
        </div>

        
       

        <div className='flex items-center px-1  ' >
            <button className='rounded-full hidden lg:flex bg-red p-1' onClick={()=>slider.current?.slickPrev()} >
                <ArrowCircleLeft />
            </button>
            <Slider ref={slider} {...settings} className='px-1 h-[25rem] flex gap-3 overflow-hidden  ' >
                {
                    slide.map((item, index)=>{
                        return (
                            <Card title={'item'} />
                        )
                    })
                }
            </Slider>
            <button className='rounded-full hidden lg:flex bg-red p-1 ' onClick={()=>slider.current?.slickNext()} >
                <ArrowCircleRight />
            </button>
        </div>
    </div>
  )
}

export default SpecialDishes
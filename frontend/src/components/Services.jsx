import React from 'react'
import testimonial from '/testimonial.jpg'
import { Star } from '@mui/icons-material'

const Services = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row px-4 items-center justify-between gap-12 ' >
            <div className="md:w-1/2 px-2 ">
                <div className='text-left md:w-4/5 ' >
                <p className='text-red uppercase tracking-wide font-medium text-lg ' >our story & sevices</p>
                <h1 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug ' >Our Culinary Journey And Services</h1>
                <blockquote className='font-mono mb-3 ' >
                    "I had the pleasure of dining at AhyanFood last night , and I'm still raving about the experience! The attention to detail in presentation and service was impeccable"
                </blockquote>
            </div>
        </div>
            <div className="md:w-1/2">
                <img src={testimonial} alt="" className='h-[30rem]' />
            </div>
        </div>
    </div>
  )
}

export default Services
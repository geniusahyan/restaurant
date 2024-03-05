import React from 'react'
import Food from '/food2.jpg';
import Card from './Card';

const Categories = () => {
    const  categories = [
        {id:1,title:"food", src:Food, desc: "this is best food i ever seen"},
        {id:1,title:"food", src:Food, desc: "this is best food i ever seen"},
        {id:1,title:"food", src:Food, desc: "this is best food i ever seen"},
        {id:1,title:"food", src:Food, desc: "this is best food i ever seen"}
    ]
  return (
    <div className='section-container py-16  ' >
        <div className='text-center ' >
            <p className='text-red uppercase tracking-wide font-medium text-lg ' >Customer Favorites</p>
            <h1 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug ' >Populer Categories</h1>
        </div>
        <div className='grid grid-cols-1 px-4 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' >
            {
                categories.map((item, index)=>{
                    return (
                        <Card key={index} title={item.title} desc={item.desc} />
                    )
                })
            }
        </div>

    </div>
  )
}

export default Categories
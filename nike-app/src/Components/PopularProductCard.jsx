import React from 'react'
import  {star} from "../assets/icons"
const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-fulls'>
        <img src={imgURL} alt="" className='w-[228px] h-[280px]'/>
        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} width={24} height={24} alt="" />
            <p>4.5</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold'>{name}</h3>
        <p className='mt-2 font-semibold text-red-500 leading-normal'>{price}</p>
    </div>
    
  )
}

export default PopularProductCard
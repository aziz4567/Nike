import React from 'react'
import { star } from '../assets/icons'
const ReviewCard = ({rating,customerName,feedback,imgURL}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} className='rounded-full object-cover w-[120px] h-[120px]' alt="" />
        <p className='mt-6 max-w-sm text-center'>{feedback}</p>
        <div className='flex justify-center items-center  gap-2.5'>
            <img src={star} width={24} height={24} className='object-contain m-0 ' alt="" />
        </div>
        <h3 className='mt-1 font-bold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard
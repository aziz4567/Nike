import React from 'react'

const CServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16 '>
        <div className='w-11 h-11 justify-center flex items-center bg-red-500 rounded-full'>
            <img src={imgURL} alt="" width={24} height={24}/>
        </div>
        <h3 className='mt-5 font-bold text-3xl'>{label}</h3>
        <p className='mt-3 break-words text-lg text-slate-500 leading-normal'>{subtext}</p>
    </div>
  )
}

export default CServiceCard
import Image from 'next/image';
import React from 'react'

interface Props {
  title: string;
  image: string;
  date: string;
  height: string;
}

const SmallNewcard = ({ date, height, image, title }: Props) => {
  return (
    <div className='bg-gray-900 p-4 flex space-x-6'>
      <div className='flex-shrink-0 w-full sm:w-auto'>
        <Image src={image} alt={title} width={120} height={120} className='object-cover w-full h-full' />
      </div>
      <div className='flex flex-col justify-between w-full'>
        <div className='flex items-center space-x-4 mb-2'>
          <h1 className='w-fit px-4 text-[8px] sm:text-[10px] py-[0.5rem] uppercase bg-red-600 text-white'>Football</h1>
          <p className='text-yellow-600 text-[9px] sm:text-[12px] text-opacity-95'>{date}</p>
        </div>
        <div className='flex justify-between items-center'>
          <h1 className='text-[13px] sm:text-[17px] hover:text-red-500 cursor-pointer hover:underline transition-all duration-500 uppercase text-white font-semibold'>{title}</h1>
          <p className='ml-4 hover:text-red-500 cursor-pointer hover:underline transition-all duration-500 text-white text-[9px] sm:text-[12px] font-semibold'>Read More</p>
        </div>
      </div>
    </div>
  )
}

export default SmallNewcard;

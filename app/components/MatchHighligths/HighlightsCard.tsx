"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import Modal2 from '../Helper/Modal2';

interface Props {
  title: string;
  image: string;
  date: string;
}

const HighlightsCard = ({ date, image, title}: Props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <div className='bg-[#1e1c1c] p-4'>
      {showModal && <Modal2 hideModal={closeModalHandler} />}
      <div className='h-[230px] relative'>
        <Image src={image} alt={title} width={200} height={200} className='object-cover h-full w-full' />
        <div 
          onClick={showModalHandler} 
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[4rem] h-[4rem] bg-black hover:bg-red-600 rounded-full transition-all duration-300 cursor-pointer'
        >
          <FaPlay className='text-white' />
        </div>
        <div className='px-4 py-1 bg-yellow-500 absolute bottom-0 left-0 flex items-center space-x-2'>
          <FaPlay className='text-red-600' />
          <p className='text-[15px] text-red'>6:00pm</p>
        </div>
      </div>
      <h1 className='text-[18px] text-white mt-[1.5rem] pb-[1.5rem] border-b-2 border-gray-500 border-opacity-30 font-semibold'>{title}</h1>
      <p className='text-yellow-600 text-opacity-70 mt-[0.5rem]'>{date}</p>
    </div>
  );
}

export default HighlightsCard;

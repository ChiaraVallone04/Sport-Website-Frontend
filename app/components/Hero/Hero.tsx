"use client";
import React, { useState } from 'react';
import { BiCalendar, BiUser } from 'react-icons/bi';
import { FaPlay } from 'react-icons/fa6';
import Modal from '../Helper/Modal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
      {showModal && <Modal hideModal={closeModalHandler} />}
      <div className='absolute inset-0 bg-black opacity-70'></div>
      <div className='relative z-10 flex items-center justify-center h-full text-white'>
        <div className='w-11/12 mx-auto lg:w-4/5 lg:flex lg:items-center lg:space-x-12'>
          <div className='text-center lg:text-left mb-8 lg:mb-0 lg:text-left'>
            <p className='text-lg sm:text-xl px-4 py-2 mb-1 sm:mb-2 bg-red-600 text-white uppercase inline-block'>Football</p>
            <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-0 lg:mb-1'>ARSENAL FC</h1>
            <h3 className='text-xs sm:text-base md:text-lg lg:text-lg text-white font-medium mt-0 lg:mt-1'>ONCE A GUNNER ALWAYS A GUNNER</h3>
            <br />
            <div className='flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-14 mt-4'>
              <div className='flex items-center space-x-2'>
                <BiCalendar className='w-[1rem] h-[1rem] text-white'/>
                <p className='text-[11px] sm:text-[14px] text-white uppercase'>Since December 1, 1886</p>
              </div>
              <div className='flex items-center space-x-2'>
                <BiUser className='w-[1rem] h-[1rem] text-white'/>
                <p className='text-[11px] sm:text-[14px] text-white uppercase'>CHIA AND LAUTI</p>
              </div>
            </div>
            <div className='mt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6'>
              <button className='sm:px-8 sm:py-2.5 px-4 py-2 bg-red-600 hover:bg-red-800 transition-all duration-200 sm:text-[17px] text-[13px] font-semibold text-white'>Watch Highlights</button>
              <button className='sm:px-8 sm:py-2.5 px-4 py-2 bg-white hover:bg-gray-300 transition-all duration-200 sm:text-[17px] text-[13px] font-semibold text-black'>Learn More</button>
            </div>
          </div>
          <div className='flex justify-center lg:justify-end lg:ml-0'>
            <div onClick={showModalHandler} className='w-[6rem] h-[6rem] xl:w-[8rem] xl:h-[8rem] rounded-full bg-red-600 hover:bg-yellow-500 transition-all duration-200 cursor-pointer flex items-center justify-center lg:ml-[4rem] xl:ml-[5rem]'>
              <FaPlay className='w-[2rem] h-[2rem] xl:w-[3rem] xl:h-[3rem] text-white'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

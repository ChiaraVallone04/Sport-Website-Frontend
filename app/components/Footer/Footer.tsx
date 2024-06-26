import React from 'react'
import { FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-[#111111]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10'>
            <div>
                <h1 className='text-[22px] text-yellow-500 font-semibold mb-[1.5rem] uppercase'>About Club</h1>
                <p className='text-[17px] text-white font-semibold text-opacity-70 '>Arsenal Football Club, founded in 1886 by munitions workers, has grown into a globally recognized team with millions of fans. </p>
            <div className='mt-[1.5rem] flex items-center space-x-3'>

                <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col'>
                    <FaFacebook className='text-white'/>
                </div>

                <div className='w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center justify-center flex-col'>
                    <FaTwitter className='text-white'/>
                </div>

                <div className='w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col'>
                    <FaYoutube className='text-white'/>
                </div>

                <div className='w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col'>
                    <FaInstagram className='text-white'/>
                </div>
            </div>
            </div>


            <div>
                <h1 className='text-[22px] text-yellow-500 font-semibold mb-[1.5rem] uppercase' >About us</h1>
                <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>About club</p>
                <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>Contacts</p>
                <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>Price table</p>
                <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>Shop</p>
                <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>Our Players</p>
            </div>

            <div>
                <h1 className='text-[22px] text-yellow-500 font-semibold mb-[1.5rem] uppercase' >Quick Link</h1>
                <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>About club</p>
                <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>Contacts</p>
                <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>Price table</p>
                <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>Shop</p>
                <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem] uppercase'>Our Players</p>
            </div>

            <div>
                <h1 className='text-[22px] text-yellow-500 font-semibold mb-[1.5rem] uppercase' >Get In Touch</h1>
                <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>1133819031</p>
                <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>chiara.vallone04@gmail.com</p>
                <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>Argentina</p>
            </div>
        </div>
    </div>
  )
}

export default Footer

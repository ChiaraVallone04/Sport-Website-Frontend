import React from 'react';

interface Props {
  hideModal: () => void;
}

const Modal = ({ hideModal }: Props) => {
  return (
    <div className='relative z-20'>
      <div onClick={hideModal} className='fixed top-0 left-0 right-0 bottom-0 bg-[#000000e1]'></div>
      <div className='fixed top-[50%] left-[50%] w-[350px] h-[250px] md:w-[500px] md:h-[350px] lg:w-[800px] lg:h-[500px] z-30 transform -translate-x-1/2 -translate-y-1/2'>
        <iframe src="https://www.youtube.com/embed/1qjuu5FObWM" className="w-full h-full" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default Modal;

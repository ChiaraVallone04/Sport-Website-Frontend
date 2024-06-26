import React from 'react';
import NewsCard from '../Helper/NewsCard';
import SmallNewcard from '../Helper/SmallNewcard';

const LastestNews = () => {
  return (
    <div>
      <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='heading'>Latest News</h1>
      </div>
      <div className='w-[80%] mx-auto pt-[2rem] grid grid-cols-1 lg:grid-cols-5 gap-[2rem]'>
        <div className='col-span-3'>
            <NewsCard image="/images/n5.webp" date="23 june, 2024" title="Key dates and events for this summer" height="h-[400px]"  />
        </div>
        <div className='col-span-2 space-y-4'>
            <div>
            <SmallNewcard image="/images/n7.webp" date="23 june, 2024" title="Martinelli comes on in Copa America draw" height="h-[400px]" />
            </div >

            <div className='mt-[1.4rem] mb-[1.4rem]'>
            <SmallNewcard image="/images/n8.webp" date="24 june, 2024" title="Saka, Rice and Jorginho all in Euro 2024 action" height="h-[400px]" />
            </div>
            
            <div>
            <SmallNewcard image="/images/n9.jpg" date="25 june, 2024" title="Saka wins 2023/24 Emirates Goal Season" height="h-[400px]" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default LastestNews;

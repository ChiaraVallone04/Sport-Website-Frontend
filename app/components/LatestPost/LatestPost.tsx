import React from 'react'
import PostCard from './PostCard'

const LatestPost = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='heading'>Latest Post</h1>
        <div className='w-[80%] mx-auto mt-[3rem]'>
            <div>
                <PostCard title="FIXTURE CONFIRMED 24/25" image="/images/n14.webp" date="21 May, 2024"/>
            </div>

            <div>
                <PostCard title="THE INVISIBLES, A SEASON LIKE NO OTHER" image="/images/n15.jpg" date="22 May, 2024"/>
            </div>

        </div>
    </div>
  )
}

export default LatestPost
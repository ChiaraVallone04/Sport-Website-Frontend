import React from 'react'
import NewsCard from '../Helper/NewsCard'

const TrendingNews = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='heading'>Trending News</h1>
        <div className='pt-[2rem] md:pt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[2rem]'>
            <div>
                <NewsCard image="/images/n2.jpg" date="June 21, 2024" title="Saliba keeps another clean sheet for France" height="h-[300px]"/>
            </div>
            
            <div>
                <NewsCard image="/images/n1.webp" date="June 22, 2024" title="Trossard in Belgium’s first win at Euro 2024" height="h-[300px]"/>
            </div>

            <div>
                <NewsCard image="/images/n3.webp" date="June 23, 2024" title="Havertz in Germany finish top of Group A" height="h-[300px]"/>
            </div>

            <div>
                <NewsCard image="/images/n4.webp" date="June 24, 2024" title="Raya keeps clean sheet on Euro 2024 debut" height="h-[300px]"/>
            </div>
        </div>

    </div>
  )
}

export default TrendingNews
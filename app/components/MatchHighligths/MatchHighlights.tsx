import React from 'react'
import HighlightsCard from './HighlightsCard'

const MatchHighlights = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <h1 className='heading'>Match Highlights</h1>
      <div className='mt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]'>
        <div>
          <HighlightsCard image="/images/n10.webp" title="Martin Odegaard, 1 Place" date="20 May 2024"  />
        </div>

        <div>
          <HighlightsCard image="/images/n11.avif" title="Declan Rice, 2 Place" date="21 May 2024"  />
        </div>

        <div>
          <HighlightsCard image="/images/n12.jpg" title="William Saliba, 3 Place" date="22 May 2024"  />
        </div>

        <div>
          <HighlightsCard image="/images/n13.webp" title="Kai Havertz, 4 Place" date="22 May 2024"  />
        </div>

      </div>
    </div>
  )
}

export default MatchHighlights
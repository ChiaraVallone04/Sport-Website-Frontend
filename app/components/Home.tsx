import React from 'react'
import Hero from './Hero/Hero'
import TrendingNews from './TrendingNews/TrendingNews'
import LastestNews from './LastestNews/LastestNews'
import MatchHighlights from './MatchHighligths/MatchHighlights'
import LatestPost from './LatestPost/LatestPost'


const Home = () => {
  return (
    <div>
        <Hero/>
        <TrendingNews/>
        <LastestNews/>
        <MatchHighlights/>
        <LatestPost/>
    </div>
  )
}

export default Home
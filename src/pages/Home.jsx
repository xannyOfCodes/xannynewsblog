import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeHealth from '../components/HomeHealth'
import HomeTopStories from '../components/HomeTopStories'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <HomeHealth/>
      <HomeTopStories/>
    </div>
  )
}

export default Home

import React from 'react'
import Markets from '../components/Markets'
import Trending from '../components/Trending '

const Home = () => {
  return (
    <div className='wrapper-container '>
        <Trending/>
        <Markets/>
    </div>
  )
}

export default Home
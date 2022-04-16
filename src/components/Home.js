import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img className='home-image'
          src="https://gmedia.playstation.com/is/image/SIEPDC/amazon-prime-page-banner-desktop-01-en-12nov20?$native--t$"
          alt='amazon banner'/>
      </div>

      <div className='home-row'>
        <Product/> 
        <Product/>
        <Product/>
      </div>

      <div className='home-row'>
        {/* <Product/>  
        <Product/>
        <Product/> */}

      </div>

      <div className='home-row'>
        {/* <Product/> */}
      </div>
    </div>
  )
}

export default Home
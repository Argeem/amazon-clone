import React from 'react'
import './Home.css'
import Product from './Product'
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const productLs = [
    [
      {
        id : uuidv4(),
        title : 'Acer Predator Helios 300 PH315-54-760S Gaming Laptop',
        price : 1129.99,
        image : 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg',
        rating :5
      },
      {
        id : uuidv4(),
        title : 'Timex Men\'s T45181 Expedition Resin Combo Brown/Green Nylon Strap Watch',
        price : 41.34,
        image : 'https://m.media-amazon.com/images/I/816w5QsUzPL._AC_SY200_.jpg',
        rating :4
      }
    ],
    [
      {
        id : uuidv4(),
        title : 'Principles for Dealing with the Changing World Order: Why Nations Succeed and Fail',
        price : 21.99,
        image : 'https://m.media-amazon.com/images/I/61R4llNQbkL._AC_SY200_.jpg',
        rating : 4
      },
      {
        id : uuidv4(),
        title : 'STORi Audrey Stackable Cosmetic Organizer Drawers | Set of 2 | Clear | 4.5-Inches Tall',
        price : 24.99,
        image : 'https://m.media-amazon.com/images/I/61egZZgcE3L._AC_SX679_.jpg',
        rating : 5
      },
      {
        id : uuidv4(),
        title : 'Nova Baby Swing for Infants - Motorized Portable Swing, Remote Control, Gray - Jool Baby Products',
        price : 149.99,
        image : 'https://m.media-amazon.com/images/I/71-pI1YXACL._AC_SX679_.jpg',
        rating : 3
      }
    ],
    [
      {
        id : uuidv4(),
        title : 'LG 29WP60G-B UltraWide Monitor 29" 21:9 FHD (2560 x 1080) IPS Display, sRGB 99% Color Gamut',
        price : 226.95,
        image : 'https://m.media-amazon.com/images/I/91YTNMvJxAL._AC_SX679_.jpg',
        rating : 5
      }
    ]
  ]

  return (
    <div className='home'>
      <div className='home-container'>
        <img className='home-image'
          src="https://gmedia.playstation.com/is/image/SIEPDC/amazon-prime-page-banner-desktop-01-en-12nov20?$native--t$"
          alt='amazon banner'/>
      </div>

      <div className='home-row'>
        {productLs[0].map((element)=>{
          return <Product {...element} key={element.id}/>
        })}
      </div>

      <div className='home-row'>
        {productLs[1].map((element)=>{
          return <Product {...element} key={element.id}/>
        })}
      </div>

      <div className='home-row'>
        {productLs[2].map((element)=>{
          return <Product {...element} key={element.id}/>
        })}
      </div>
    </div>
  )
}

export default Home
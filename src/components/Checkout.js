import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout-left'>
          <img className='checkout-ad' 
            src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg'
            alt='ad banner'/>

          <div>
            <h2 className='checkout-title'>Shopping Basket</h2>
            {/* Basket Item */}
            {/* Basket Item */}
            {/* Basket Item */}
            {/* Basket Item */}
          </div>          
        </div>

        <div className='checkout-right'>
          <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout
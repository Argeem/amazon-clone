import React from 'react'
import { useStateValue } from '../data/StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
  const [{basket},] = useStateValue()

  return (
    <div className='checkout'>
        <div className='checkout-left'>
          <img className='checkout-ad' 
            src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg'
            alt='ad banner'/>

          <div>
            <h2 className='checkout-title'>Shopping Basket</h2>
            {basket.map((component)=>(
              <CheckoutProduct
                id = {component.id}
                title = {component.title}
                image = {component.image}
                price = {component.price}
                rating = {component.rating}/>
            ))}
          </div>          
        </div>

        <div className='checkout-right'>
          <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout
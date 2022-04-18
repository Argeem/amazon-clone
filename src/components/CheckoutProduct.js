import React from 'react'
import { useStateValue } from '../data/StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({id,image,title,price,rating}) {
  const [{basket},dispatch] = useStateValue()
  const removeFormBasket = () =>{
    //remove item from basket
    dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id
    })
  }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct-image'
            src={image}
            alt={image}/>
        <div className='checkoutProduct-info'>
            <p className='checkoutProduct-title'>
                {title}
            </p>
            <p className='checkoutProduct-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkProduct-rating'>
                {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>
                ))}
            </div>
            <button onClick={removeFormBasket}>Reomove from Basket</button>
        </div>
    </div>  
  )
}

export default CheckoutProduct
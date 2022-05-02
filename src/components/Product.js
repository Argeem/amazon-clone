import React from 'react'
import { useStateValue } from '../data/StateProvider'
import './Product.css'

function Product({id, title,image,price,rating}) {
  const [,dispatch] = useStateValue();
  const addToBasket=()=>{
    //dispatch the item into the data layer
    dispatch({
        type: "ADD_TO_BASKET",
        item:{
            id: id,
            // eslint-disable-next-line
            title,title,
            image: image,
            price: price,
            rating: rating
        }
    })
  }

  return (
    <div className='product'>
        <div class='product-info'>
            <p>{title}</p>
            <p className='product-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product-rating'>
                {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>
                ))}
            </div>
        </div>

        <img
            src={image}
            alt={image}/>

        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
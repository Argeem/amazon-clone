import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div class='product-info'>
            <p>info</p>
            <p className='product-price'>
                <small>$</small>
                <strong>0.00</strong>
            </p>
            <div className='product-rating'>
                <p>⭐⭐⭐⭐⭐</p>
            </div>
        </div>

        <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg'
            alt='image of product'/>

        <button>Add to Basket</button>
    </div>
  )
}

export default Product
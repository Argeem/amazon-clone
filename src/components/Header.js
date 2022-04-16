import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img className='header-logo'
            src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='amazon-logo'
        />

        <div className='header-search'>
            <input className='header-input'
                type='text'
            />
            <SearchIcon className='search-icon'/>
        </div>

        <div className='header-nav'>
            <div className='header-option'>
                <span className='header-optionLineOne'>Hello Guest</span>
                <span className='header-optionLineTwo'>Sign In</span>
            </div>

            <div className='header-option'>
                <span className='header-optionLineOne'>Return</span>
                <span className='header-optionLineTwo'>& Order</span>
            </div>

            <div className='header-option'>
                <span className='header-optionLineOne'>Your</span>
                <span className='header-optionLineTwo'>Prime</span>
            </div>

            <div className='header_optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header-optionLineTwo header-basketCount'>0</span>
            </div>
        </div>
        
    </div>
  )
}

export default Header
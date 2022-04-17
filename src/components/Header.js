import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useStateValue } from '../data/StateProvider';

function Header() {
  const [{basket},_] = useStateValue();
  
  return (
    <div className='header'>
        <Link to='/'>
            <img className='header-logo'
                src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt='amazon-logo'/>
        </Link>

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
            
            <Link to='/checkout'>
                <div className='header_optionBasket'>
                   <ShoppingBasketIcon/>
                   <span className='header-optionLineTwo header-basketCount'>{basket?.length}</span>
                </div>
            </Link>
        </div>
        
    </div>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
const Header = () => {
  return (
    <div className='Header__all'>
        <div className="Header__all__img">
            
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
        
        </div>
       <div className='Header__all__link'>
       <Link to="/">Home</Link>
        <Link to="/Add">Add</Link>
        <Link to="/Basket">Basket</Link>
        <Link to="/WishList">WishList</Link>
       </div>
       <div className='Header__all__icons'>
       <i class="fa-solid fa-magnifying-glass"></i>
       <i class="fa-solid fa-download"></i>
       <i class="fa-solid fa-image"></i>
       </div>
       <div className='hamburger'>
       <i class="fa-solid fa-bars"></i>

       </div>
      
    </div>
  )
}

export default Header

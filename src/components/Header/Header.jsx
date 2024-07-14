import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header-container'>
    <div>
        <h3>We make your Home more quality</h3>
    </div>
    <div>
        <img className='head-img' src='./facebook.png' />
        <img className='head-img' src='./twitter.png' />
        <img className='head-img' src='./google.png' />
        <img className='head-img' src='./be.png' />
    </div>
    </div>
  )
}

export default Header;
import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className='nav'>
    <div className='nav-bar'>
        <div className='nav-img'>
        <img src = './logo.png' />
        </div>
        <div className='nav-name'>
        <h1>AUHANDY</h1>
        <h3>We Repair Everything.</h3>
        </div>
    </div>
    <div className='nav-list'>
    <ul>
      <li><a href="#home">HOME</a></li>
      <li><a href="#services">SERVICES</a></li>
      <li><a href="#about">PROJECTS</a></li>
      <li><a href="#contact">PAGES</a></li>
      <li><a href="#contact">BLOG</a></li>
      <li><a href="#contact">CONTACT</a></li>
      <li><img className='search-img' src='./search.svg' /></li>
    </ul>
    </div>
    </div>
    </>
  )
}
export default Navbar
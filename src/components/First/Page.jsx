import React from 'react'
import './Page.css'
const Page = () => {
  return (
   <div className='first-page'>
    <div className='first-img'>
        <img src='./first.png' />
    </div>
    <div className='first-info'>
        <h1>Expert Handyman & Remodelling</h1>
        <p>"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
        <div className='btns'>
        <button className='learn-btn'>LEARN MORE</button>
        <button className='quote-btn'>GET A QUOTE</button>
        </div>
    </div>
   </div>
  )
}

export default Page;
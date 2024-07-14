import React from 'react'
import './Fifth.css'
const Fifth = () => {
  return (
    <>
    <div className='Fifth-info'>
        <h1>OUR Projects</h1>
        <h1 className='five-line'></h1>
    </div>
    <div className='fifth-list'>
    <ul>
      <li><a href="#home">ALL</a></li>
      <li><a href="#services">ENGINE REPAIR</a></li>
      <li><a href="#about">ELECTRICAL</a></li>
      <li><a href="#contact">PLUMBING</a></li>
      <li><a href="#contact">REPAIR HOUSE</a></li>
      <li><a href="#contact">WALLPAINT</a></li>
    </ul>
    </div>
    <div className='fifth-img'>
        <img src='./fifth.PNG' />
    </div>
    <div className='fifth-btn'>
    <button>ALL PROJECTS</button>
    </div>
    </>
  )
}

export default Fifth;
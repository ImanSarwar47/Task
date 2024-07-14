import React from 'react'
import './Cards.css'
const Cards = (props) => {
    const { image,title, content } = props;
  return (
    <>
    <div className="card">
      <img src={image} alt="Card" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
    </>
  )
}

export default Cards;
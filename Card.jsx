import React from 'react'
import './App.css'

const Card = (props) => {

  return (
    <div>
    <div className='card'>
     
    <img src={props.img} className="card-image" />
    <div className='card-stats'>
      <img src='Star 1.svg'/>
      <span>{props.rate}</span>
      <span> {props.cont}</span>
      <span> {props.place} </span>
    </div>
    <p>{props.title}</p>
    <p>{props.price}</p>

  </div>
  </div>
  )
}

export default Card
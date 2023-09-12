import React from 'react'
import "./card.css"
import "./flip-transition.css"
import { FaHeart, FaRegHeart } from "react-icons/fa"; 

export const Card = ({onClick}) => {
  return (
    <>
    <div className='card' >

        <div className='card__front'>
          <input placeholder='Respuesta'/>
        </div>
        <div className='card__back'><p>You get 3 heart of 5 heart of calification
          <div className='card__calification'>
            <FaHeart/>
            <FaHeart/>
            <FaHeart/>
            <FaRegHeart/>
            <FaRegHeart/>
          </div>
        </p>
        </div>
      
    </div>
      <button onClick={onClick}>Flip</button>
    </>
  )
}

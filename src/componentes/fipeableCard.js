import React from 'react'
import "./flipeadble.css"
import { CSSTransition } from 'react-transition-group'
import { Card } from './card/card'
import { useState } from 'react'
export const FipeableCard = () => {
    const[Showfront, setShowFront] =useState(true)
  return (
    <div className='fipeable-card-conteiner'>
       
        <CSSTransition in={Showfront} timeout={300}
        classNames="flip">
            <Card onClick={() =>{
                setShowFront((v)=> !v)
            }}/>
        </CSSTransition>
    </div>
  )
}

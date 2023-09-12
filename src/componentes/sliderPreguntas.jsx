import React from 'react'
import "./sliderpreguntas.css"
import { FipeableCard } from './fipeableCard'
import { type } from '@testing-library/user-event/dist/type'
export const SliderPreguntas = ({preguntas}) => {
    const [preguntaActual , setPreguntaActual] = React.useState(0)
    const cantidad = preguntas?.length

    const moveRight = () => {
      setPreguntaActual(preguntaActual === cantidad -1 ? 0 : preguntaActual +1)
    }

    const moveLeft = () => {
      setPreguntaActual(preguntaActual === 0 ? cantidad - 1 : preguntaActual - 1)
    }
    console.log(preguntaActual)
   
  return (
    <>
    <h1>{preguntas[0].id}</h1>
    <div className='sliderPreguntas'>
        <div className='sliderPreguntas__text'> 
         <button className="left" onClick={moveLeft}>←</button>  
        {
            preguntas.map((pregunta, index) =>{
              if (typeof pregunta === "object" ) {
                console.log("Es un objeto")
              }else{
                return(
                   <div > 
                     {preguntaActual === index &&(
                      <p>{pregunta}</p>
                     )}
                    </div>
                   
                )
              }
            })
          

        }

        <button  className="right" onClick={moveRight}>→</button>  
        </div>
        <FipeableCard/>
    </div>
    </>
  )
}

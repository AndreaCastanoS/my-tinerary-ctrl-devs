import React from 'react'

export default function Btn(props) {
    let {verb} = props
    let {onClick} = props // saco la propiedad verbos del objeto props, a traves de las llaves
   
  return (
    <div className= "buttonCar" onClick={onClick}>  {verb} </div>
  )
}

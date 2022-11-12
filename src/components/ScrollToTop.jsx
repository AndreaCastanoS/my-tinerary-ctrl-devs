import React from 'react'

export default function ScrollTop() {

    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <h2 onClick={scrollUp} className= "scrollToTop" > ^ </h2>
  )
}
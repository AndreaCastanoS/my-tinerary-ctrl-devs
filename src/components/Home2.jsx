import React from 'react'
import Footer from './Footer'
import Carousel from './Carousel'
import ScrollToTop from './ScrollToTop'



export default function Home2() {
  return (
    <div className=' w-100 vh-100 bg-home'>
         <Carousel></Carousel>
         <ScrollToTop></ScrollToTop>
        <Footer></Footer>
    </div>
  )
}

import React from 'react'
import { Link as NavLink } from "react-router-dom";


export default function Footer() {
  return (
    
        <footer  className='flex column p-2 footer '>
            <div className='flex between'>
         <div className='flex column g-5'>
            <h4>About Us</h4>
            <a href="https://www.linkedin.com/in/andrea-casta%C3%B1o-222144231/" className='text-decoration'>Andrea Castaño</a> 
            <a href="https://www.linkedin.com/in/antonella-tortoza-771376198" className='text-decoration'>Antonella Tortoza</a> 
      
         </div>
         <ul className='text-decoration flex g-5 column '>
          <NavLink to ="/index" className='text-decoration list-none '>
            <li >Home</li>
          </NavLink>
          <NavLink to="/cities" className='text-decoration list-none' >
            <li>Cities</li>
          </NavLink>
          <NavLink to="/hotels" className='text-decoration  list-none'>
            <li>Hotels</li>
          </NavLink>
          <NavLink to="/signup" className='text-decoration list-none'>
            <li>Sign Up</li>
          </NavLink>
          <NavLink to="/signin" className='text-decoration list-none'>
            <li>Sing In</li>
          </NavLink>
        </ul>
        </div>
        <div className='text-center'>
            <h4>My Tinerary Project 2022 - All rights reserved</h4>  
        </div>
</footer>
    
  )
}

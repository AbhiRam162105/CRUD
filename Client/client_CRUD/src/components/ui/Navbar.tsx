import * as React from "react";
import './navbar.css'

let Navbar:()=>any;
Navbar = () => {
  return (
    <>
    <div className='overall'>
            <div className='Navbar'>
            <div className='nav_logo'>
                Navbar
            </div>
            <div className='nav_links'>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">Hire</a></li>
                    
                </ul>
            <div/>
     </div>
            
    </div>

        <div className='nav_button'><button><a href="#">Profile</a></button></div>
    </div>
    
    
    </>
    
  )
}

export default Navbar;
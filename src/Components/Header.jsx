import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"
import { useSelector } from 'react-redux'

function Header({user}) {
     const items =  useSelector(state => state.cartReducer)
     return (
          <header>
               <div className='container flex'>
               <div>
                    <Link className='logo '  to={"/"}>Redux_Store</Link>
               </div>
               <nav className='navbar'>
                    <ul className='flex'>
                         <li><Link className='link'  to={"/"}>Home</Link></li>
                         <li><Link className='link'  to={"/cart"}>Cart {`[${items.length}]`} </Link></li>
                         {/* <li><Link  className='link' to={"/"}>Feedback</Link></li> */}
                         <li><Link  className='link avatar' to={"/profile"}>
                              {user} 
                         </Link></li>
                    </ul>
               </nav>
               </div>
          </header>
     )
}

export default Header

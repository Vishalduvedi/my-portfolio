import React from 'react';
import './Navbar.css';
import spier from '../../image/spier.png';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <nav className='navbar'>
     <div className="spier">
     <img src={spier} alt="gym" className='gymlogo' />
     </div>
      <div className="desktopmenu">
         <Link className='desktopmenulistitem'>home</Link> 
         <Link className='desktopmenulistitem'>About</Link>
        <Link className='desktopmenulistitem'>Portfolio</Link>
        <Link className='desktopmenulistitem'>Client</Link> 
      </div>
      <button className="desktopmenubtn">
        contact me
      </button>

    </nav>

  )
}

export default Navbar

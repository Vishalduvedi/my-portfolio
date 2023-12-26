import React, { useState } from 'react';
import './Navbar.css';
import spier from '../../image/spier.png';
import list from '../../image/list.png'
import { Link } from 'react-scroll';  
const Navbar = () => {
  const [showMenu,setShowMenu] =useState(false);
  return (
    <nav className='navbar'>
     <div className="spier">
     <img src={spier} alt="gym" className='gymlogo' />
     </div>
      <div className="desktopmenu">
         <Link activeClass='active' to='intro' spy={"true"} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>home</Link> 

         <Link activeClass='active' to='skills' spy={"true"} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>About</Link>

        <Link activeClass='active' to='work' spy={"true"} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>Portfolio</Link>

        <Link activeClass='active' to='clients' spy={"true"} smooth={true} offset={-100} duration={500} className='desktopmenulistitem'>Client</Link> 
      </div>

      <button className="desktopmenubtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior : 'smooth'});
      }}>
        contact me
      </button>
      

      <div className="listbar">
     <img src={list} alt="menu" className='mobmenu' onClick={()=>setShowMenu(!showMenu)} />
     </div>

      <div className="navmenu" style={{display :showMenu ? 'flex' :'none'}}>
         <Link activeClass='active' to='intro' spy={"true"} smooth={true} offset={-100} duration={500} className='listitem'  onClick={()=>{setShowMenu(false)}}>home</Link> 

         <Link activeClass='active' to='skills' spy={"true"} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>{setShowMenu(false)}}>About</Link>

        <Link activeClass='active' to='work' spy={"true"} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>{setShowMenu(false)}}>Portfolio</Link>

        <Link activeClass='active' to='clients' spy={"true"} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>{setShowMenu(false)}}>Client</Link>

         <Link activeClass='active' to='contact' spy={"true"} smooth={true} offset={-100} duration={500} className='listitem'>Contact</Link> 
      </div>

      
    </nav>

  )
}

export default Navbar

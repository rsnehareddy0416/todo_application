import React from 'react'
import '../style/nav.css'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>
        logo
      </div>
      <div className='nav-menu'>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
      <div className='nav-buttons'>
        <Link to="/register"><button>Register</button></Link>
        <Link to="/login"><button>login</button></Link>
        <Link to="/cart"><button>🛒</button></Link>
      </div>
      
    </div>
  )
}

export default Nav

import React from 'react'
import './Navbar.css'
import logo from '../images/images/logo.png'
import {FaBell, FaCaretDown, FaFacebookMessenger,  FaHome, FaPlus,   FaSistrix, FaUserFriends, FaUsers, FaVideo} from 'react-icons/fa'
import {AiOutlineShop} from 'react-icons/ai'
import { Link  } from 'react-router-dom' 





const Navbar = () => {
 

  

  
  
  return (
    <div className='Navbar'>
      <div className="navbar_first">
        <div className="navbar_first_logo">
          <img src={logo}  className ='navbar_first_logo'width={40}alt='fblogo'></img>
        </div>
        <div className="navbar_first_search">
          
        <input type='text' placeholder='facebook search'className='navbar_first_searchbar' ></input>
        
          
          <FaSistrix  className='navbar_searchIcon'/>
          
          

          
        </div>
        


      </div>
      
      <div className="navbar_middle">
        
        <Link to='/dashboard'  className='middleIcon'  ><FaHome className='navbar_middleicons' />
        
        </Link>
        <Link to='/cart'  className='middleIcon'  >
          
          <AiOutlineShop className='navbar_middleicons' />
          <span className='navbar_notify'>3</span>
          
          
        
       </Link>
        <Link to='/video' className='middleIcon'><FaVideo className='navbar_middleicons' />
        <span className='navbar_notify'>10</span>
        </Link>
        <Link to='/users' className='middleIcon'><FaUserFriends className='navbar_middleicons' />
        <span className='navbar_notify'>22</span>
        </Link>
        <Link to ='/group' className='middleIcon'><FaUsers className='navbar_middleicons' />
        <span className='navbar_notify'>5</span>
        </Link>
       

      </div>
      <div className="navbar_last">
        <span className=' navbar_lastsection'>
          <FaPlus/>
        </span>
        <span className=' navbar_lastsection'>
          <FaFacebookMessenger/>
        </span>
        <span className=' navbar_lastsection'>
          <FaBell/>
        </span>
        <span className=' navbar_lastsection'>
          <FaCaretDown/>
        </span>

      </div>
    </div>
  )
}

export default Navbar;



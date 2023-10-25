import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import { CiLogin, CiLogout } from 'react-icons/ci'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
//import { logo } from './assets'

const NavBar = () => {

  const {Search, setSearch}= useState();
  //login, logout and user authentication implementation using Auth0
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
       <div className="free">
          <div className="icon">
           <FaTruckMoving/>
          </div>
          <p>Welcome to the intership assignment!</p>
       </div>
       <div className="main_header">
          <div className="container">
              <div className="logo">
                <img src='' alt='logo'></img>
              </div>
              <div className="search_box">
                <input type="text" value={Search} placeholder="Enter the product name" autoComplete='off' onChange={(e)=> setSearch(e.target.value)}></input>
                <button>Search</button>
              </div>
              <div className="icon">
                {
                  isAuthenticated &&
                  (
                  <div className="account">
                    <div className="user_icon">
                     <AiOutlineUser/>
                    </div>
                    <p>Hello, {user.name}</p>
                  </div>

                  )
                }
                <div className="second_icon">
                  <Link to="/" className="link"><AiOutlineHeart/></Link>
                  <Link to="/cart" className="link"><BsBagCheck/></Link>
                </div>
              </div>
          </div>
       </div>
       <div className="header">
          <div className="container">
            <div className="nav">
            <ul>
              <li>
                <Link to='/' className="link">Home</Link>
              </li>
              <li>
                <Link to='/product' className="link">Product</Link>
              </li>
              <li>
                <Link to='/about' className="link">About</Link>
              </li>
              <li>
                <Link to='/contact' className="link">Contact</Link>
              </li>
            </ul>
            </div>
            <div className="auth">
              {
                //if user logedin then show logout button else show login button
                isAuthenticated ?
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></button>
                :
                <button onClick={()=> loginWithRedirect()}><CiLogin/></button>
              }                            
            </div>
          </div>
       </div>
    </div>
  )
}

export default NavBar
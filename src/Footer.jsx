import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {FaGoogleDrive} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="container">
                <div className="about">
                    <div className="logo">
                        <img src='' alt='logo'></img>
                    </div>
                    <div className="detail">
                        <p>This is an intership assignment by Shaikh Mohammed Zaid</p>
                        <div className="icon">
                            <li><AiFillGithub/></li>
                            <li><FaGoogleDrive/></li>
                            <li><AiFillGithub/></li>
                            <li><AiFillGithub/></li>
                        </div>
                    </div>
                </div>
                <div className="account">
                    <h3>GitHub code & Google drive video</h3>
                    <ul>
                        <li>Account</li>
                        <li>order</li>
                        <li>cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
                </div>
                <div className="page">
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
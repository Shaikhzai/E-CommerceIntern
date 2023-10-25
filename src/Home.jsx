//import React, { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import {BsArrowRight, BsCurrencyDollar, BsHeadphones} from 'react-icons/bs'
import {FiTruck} from 'react-icons/fi'
import {HiOutlineReceiptPercent} from 'react-icons/hi2'
import {AiOutlineShoppingCart, AiOutlineEye, AiOutlineHeart} from 'react-icons/ai'
import { NotebookImg, MobilePhone, SmartWatch, HeadPhone, CpuHeatSink, IpadSliderImg } from './assets'
import homeProduct from './HomeProduct'
import './Home.css'

const Home = () => {


  return (
    <div>
        <div className="top_banner">
            <div className="container">
                <div className="detail">
                    <h2>The Best Note book collection 2023</h2>
                    <Link to='/product' className="link">Shop Now <BsArrowRight/></Link>
                </div>
                <div className="img_box">
                    <img src={NotebookImg} alt='NoteBookImage'></img>
                </div>
            </div>
        </div>
        <div className="product_type">
            <div className="container">
                <div className="box">
                    <div className="img_box">
                        <img src={MobilePhone} alt='Mobile'></img>
                    </div>
                    <div className="detail">
                        <p>23 products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src={SmartWatch} alt='Smart Watch'></img>
                    </div>
                    <div className="detail">
                        <p>43 products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src={HeadPhone} alt='Head Phone'></img>
                    </div>
                    <div className="detail">
                        <p>13 products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src={CpuHeatSink} alt='Cpu Heatsink'></img>
                    </div>
                    <div className="detail">
                        <p>20 products</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="about">
            <div className="container">
                <div className="box">
                    <div className="icon">
                        <FiTruck/>
                    </div>
                    <div className="detail">
                        <h3>Free Shipping</h3>
                        <p>Order above $50</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <BsCurrencyDollar/>
                    </div>
                    <div className="detail">
                        <h3>Return and Refund</h3>
                        <p>Money back Garuntee</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <HiOutlineReceiptPercent/>
                    </div>
                    <div className="detail">
                        <h3>Member discount</h3>
                        <p>On every order</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <BsHeadphones/>
                    </div>
                    <div className="detail">
                        <h3>Coustomer support</h3>
                        <p>24/7 call support</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="product">

            <h2>Top Products</h2>

            <div className="container">
                {
                    homeProduct.map((CurElem)=>{
                        return(
                            <div className="box" key={CurElem.id}>
                                <div className="img_box">
                                  <img src={CurElem.Img} alt={CurElem.Title}></img>
                                  <div className="icon">
                                    <li><AiOutlineShoppingCart/></li>
                                    <li><AiOutlineEye/></li>
                                    <li><AiOutlineHeart/></li>
                                  </div>
                                </div>
                                <div className="detail">
                                    <p>{CurElem.Cat}</p>
                                    <h3>{CurElem.Title}</h3>
                                    <h4>{CurElem.Price}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="banner">
            <div className="container">
                <div className="detail">
                    <h4>LATEST TECHNOLOGY ADDED</h4>
                    <h3>Apple ipad 10.2 9th Gen - 2021</h3>
                    <p><BsCurrencyDollar/> 400</p>
                    <Link to='./product' className="link">Shop now! <BsArrowRight/></Link>
                </div>
                <div className="img_box">
                    <img src={IpadSliderImg} alt='slider img'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
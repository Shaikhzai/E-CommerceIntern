import React, { useState } from 'react'
import ProductDetails from './ProductDetail'
import {AiOutlineShoppingCart, AiOutlineEye, AiOutlineHeart} from 'react-icons/ai'
import './Product.css'

const Product = () => {

  const [Product, setProduct]= useState(ProductDetails)
  
  const FilterProducts= (product)=>{
    const update= ProductDetails.filter((x)=>
    {
       return x.Cat=== product;
    })
    setProduct(update)
  }

  const AllProducts=()=>
  {
    setProduct(ProductDetails)
  }

  return (
    <div>
        <div className="products">
            <h3>Products</h3>
            <p>Home. Products</p>
            <div className="container">
                <div className="filter">
                     <div className="categories">
                        <h3>Categories</h3>
                        <ul>
                            <li onClick={()=> AllProducts()}>All Products</li>
                            <li onClick={()=> FilterProducts("Tablet")}>Tablet</li>
                            <li onClick={()=> FilterProducts("Smart Watch")}>Smart Watch</li>
                            <li onClick={()=> FilterProducts("Headphone")}>Headphone</li>
                            <li onClick={()=> FilterProducts("Camera")}>Camera</li>
                            <li onClick={()=> FilterProducts("Gaming")}>Gaming</li>
                        </ul>
                     </div>
                </div>
                <div className="productbox">
                    <div className="contant">
                        {
                            ProductDetails.map((CurElem)=>
                            {
                                return(
                                    <div>
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
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
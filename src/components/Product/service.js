import React from 'react';
import Branding from "../../images/Branding.png"
import Design from "../../images/Ui Design.png"
import Pro from "../../images/Product.png"
import "./service.css"


const Product = () =>{
    return(
        <div className='main-div'>
            <h1>OUR SERVICE</h1>
            <div className='products'>
            <div className='card1'>
                <img src = {Branding} alt = ""/>
                <h3>Branding</h3>
                <p>Lorem ipdi dolor wjgd amet, ehr cobhkdhd,</p>
            </div>
            <div className='card second-card'>
                <img src={Design} alt = ""/>
                <h3>UI/UX</h3>
                <p>Lorem ipdi dolor wjgd amet, ehr cobhkdhd,</p>
            </div>
            <div className=" card second-card">
                <img src={Pro} alt = ""/>
                <h3>Product Design</h3>
                <p>Lorem ipdi dolor wjgd amet, ehr cobhkdhd,</p>
            </div>
            </div>
        </div>
        
    )
}

export default Product;
import React from 'react';
import HeroImage from "../../images/image (2).png"
import "./HeroSection.css"


const HeroSection = () => {
    return(
        <div className='heroine'>
            <div className='left'>
                <div className='text'>
                    <p className='welcome'>Hi there!</p>
                    <h1 className='luxe'><span>LUXE</span> IS HERE TO BE YOUR ASSISTANCE</h1>
                    <p>I am here ready to help you in making creative digital productst</p>
                </div>
                <button className='button'>Let's Discuss</button>
            </div>
            <div className='right'>
                <img src={HeroImage} alt=''/>
            </div>
        </div>
    )
}

export default HeroSection;
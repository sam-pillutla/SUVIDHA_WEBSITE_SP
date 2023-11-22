import React, { useState } from 'react';
import './Collab.css';
import collab from './collab.png';


const Footer =()=> {
    return(
        <div>
            <div className='heading-cen'>
                <h1>
                Empowering Change Together: <br></br>Our Collaborative Initiatives
                </h1>
            </div>

            <div>
                <img className='collab-img' src={collab} alt=""></img>
            </div>
        </div>


    )
}

export default Footer;
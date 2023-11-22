
import React, { useEffect } from 'react';
import './Contact_page.css';
import Navbar from './Navbar';
import Footter from './Footter';
import { Link } from 'react-router-dom';






const Contact_page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Navbar/>
        <div className='contact-bg' >

            <div className='cont-img-body'>
                <h1 style={{color:'#EAAB11',fontSize:'40px'}}>CONTACT US</h1>
                <h2 style={{color:'#EAAB11',fontWeight:'300'}}>Open to your queries</h2>
                <p style={{fontSize:'22px',fontWeight:'400',color:'white'}}>
                  <Link to={"/"} className='ahref'>
                    <a href="#" className='ahref'>Home </a>
                  </Link>
                  <Link to={"/contact"} className='ahref'>
                    /<a href="#"  className='ahref' > Contact </a>
                  </Link>
                  </p>
            </div>
            <button class="learn-more"> < a href="https://docs.google.com/forms/d/e/1FAIpQLSfAaaHU-k256CY6_83JPBOYeVFtKuKBvqMJb7oBIsDLKRmwNg/viewform" style={{textDecoration:'none'}}>Send us a message</a></button>
           



        </div>
        
        
        
      

        

       
        <Footter/>
        
        
       
    </div>
  );
}

export default Contact_page;
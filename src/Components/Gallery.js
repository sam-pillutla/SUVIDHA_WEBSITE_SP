
import React, { useEffect } from 'react';
import './Gallery.css';
import Navbar from './Navbar';
import Footter from './Footter';
import group7 from './Group-7.png';
import x1 from './x1.png';
import x2 from './x2.png';
import x3 from './x3.png';
import x4 from './x4.png';
import x5 from './x5.png';
import x6 from './x6.png';
import x7 from './x7.png';
import x8 from './x8.png';
import x9 from './x9.png';
import x10 from './x10.png';
import x11 from './x11.png';
import next from './vnext.png';
import { Link } from 'react-router-dom';






const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <Navbar/>
        <div className='bg9'><img src={group7} alt="bacimg"></img></div>
        <p style={{fontSize:'22px',fontWeight:'400',color:'black',textAlign:'center',marginTop:'-10px'}}>
            <Link to={'/'} className='ahre'>
                <a href="#" className='ahre'>Home </a>
            </Link>
            <Link to={'/gallery'} className='ahre'>
                /<a href="#"  className='ahre'> Gallery </a>
            </Link>
        </p>
        <h1 className='gallery-head'>GALLERY</h1>
        <div className='event_homepage'>
            <h2 className="head7">Our Gallery</h2>
            <h1>
            Moments of Impact: <br></br>Capturing the Journey of Our NGO
            </h1>
        </div>

        <div className='galcardz'>
            <div className='threecards'>

                <div class="card-gal">
                    <img className="x1" src={x1} alt="events-image"></img>
                        <div className='matter-tex'>
                            <h1 style={{fontSize:'25px',fontWeight:'600',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',paddingRight:'70px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Free Workshops</h1>
                            <a href="https://drive.google.com/drive/u/1/folders/11DrNvVoYiIlmKUDW2AvsiklJTuIDL3Gk"><img className='next-btn' src={next} ></img></a>
            
                        </div> 
                </div>
                <div class="card-gal">
                    <img className="x1" src={x2} alt="events-image"></img>
                        <div className='matter-tex'>
                            <h1 style={{fontSize:'25px',fontWeight:'600',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',paddingRight:'40px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Books Distribution</h1>
                            <a href="https://drive.google.com/drive/u/1/folders/1FKG4shImI-9JRavKIP-0b-Tp9Hd205VI"><img className='next-btn' src={next} ></img></a>
                        </div> 
                </div>
                <div class="card-gal">
                    <img className="x1" src={x3} alt="events-image"></img>
                        <div className='matter-tex'>
                            <h1 style={{fontSize:'25px',fontWeight:'600',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',paddingRight:'90px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Online Events</h1>
                            <a href="https://drive.google.com/drive/u/1/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms"><img className='next-btn' src={next} ></img></a>
                        </div> 
                </div>

            </div>
            <div className='threecards'>

                <div class="card-gal">
                    <img className="x1" src={x4} alt="events-image"></img>
                        <div className='matter-tex'>
                            <h1 style={{fontSize:'25px',fontWeight:'600',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',paddingRight:'40px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Cloths Distribution</h1>
                            <a href="https://drive.google.com/drive/u/1/folders/1nOFKvOjhWsbfVVPGumOfpLrFe2364_zK"><img className='next-btn' src={next} ></img></a>
                        </div> 
                </div>
                <div class="card-gal">
                    <img className="x1" src={x5} alt="events-image"></img>
                        <div className='matter-tex'>
                            <h1 style={{fontSize:'25px',fontWeight:'600',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',paddingRight:'80px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Tree Plantation</h1>
                            <a href="https://drive.google.com/drive/u/1/folders/1V5Owzjc00GT_U2Mw_bdOMbiCYSxmScSw"><img className='next-btn' src={next} ></img></a>
                        </div> 
                </div>
                <div class="card-gal">
                    <img className="x1" src={x6} alt="events-image"></img>
                        <div className='matter-tex'>
                            <h1 style={{fontSize:'25px',fontWeight:'600',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',paddingRight:'80px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Free Education</h1>
                            <a href="https://drive.google.com/drive/u/1/folders/1ucG-Ltm_6fAwZ-1ta4-nHhRdKpu-3EAN"><img className='next-btn' src={next} ></img></a>
                        </div> 
                </div>

            </div>
            <div className='threecards'>

                <div class="card-gal">
                    <img className="x1" src={x7} alt="events-image"></img>
                        <div className='matter-tex'>
                            <h1 style={{fontSize:'25px',fontWeight:'600',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',paddingRight:'90px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Woman's Day</h1>
                            <a href="https://drive.google.com/drive/u/1/folders/1_V-acFibBsweHcM-R-P__4EQWpauB6dK"><img className='next-btn' src={next} ></img></a>
                        </div> 
                </div>
                <div class="card-gal">
                    <img className="x1" src={x8} alt="events-image"></img>
                        <div className='matter-tex'>
                            <h1 style={{fontSize:'25px',fontWeight:'600',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',paddingRight:'55px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Food Distribution</h1>
                            <a href="https://drive.google.com/drive/u/1/folders/1AfCK5kJqf9_N_JGd8wqUhNesS8k1tVmw"><img className='next-btn' src={next} ></img></a>
                        </div> 
                </div>
                <div class="card-gal">
                    <img className="x1" src={x9} alt="events-image"></img>
                        <div className='matter-tex'>
                            <h1 style={{fontSize:'25px',fontWeight:'600',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',paddingRight:'80px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Suvidha Events</h1>
                            <a href="https://drive.google.com/drive/u/1/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms"><img className='next-btn' src={next} ></img></a>
                        </div> 
                </div>

            </div>
            <div className='threecards'>

                <div class="card-gal">
                    <img className="x1" src={x10} alt="events-image"></img>
                        <div className='matter-tex'>
                            <h1 style={{fontSize:'25px',fontWeight:'600',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',paddingRight:'23px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Empowering woman</h1>
                            <a href="https://drive.google.com/drive/u/1/folders/1tMkME479AhVFQ5pUZag3-YPgNWhIn7Rl"><img className='next-btn' src={next} ></img></a>
                        </div> 
                </div>
                <div class="card-gal">
                    <img className="x1" src={x11} alt="events-image"></img>
                        <div className='matter-tex'>
                            <h1 style={{fontSize:'25px',fontWeight:'600',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',paddingRight:'80px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Animal Feeding</h1>
                            <a href="https://drive.google.com/drive/u/1/folders/1xr7jhBYaap-tZ2puU5HiF6ccitJtBfaB"><img className='next-btn' src={next} ></img></a>
                        </div> 
                </div>
                

            </div>
        </div>

        

       
        <Footter/>
        
        
       
    </div>
  );
}

export default Gallery;

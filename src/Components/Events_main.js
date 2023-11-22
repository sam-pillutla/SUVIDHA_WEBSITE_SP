
import React, { useEffect } from 'react';
import './Events_main.css';
import Navbar from './Navbar';
import Footter from './Footter';
import line from './line1.png';
import z1 from './c1.png';
import z2 from './c2.png';
import z3 from './c3.png';
import z4 from './c4.png';
import z5 from './c5.png';
import z6 from './c6.png';
import z7 from './c7.png';
import z8 from './c8.png';
import { Link } from 'react-router-dom';


const Events_main = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <Navbar/>
        <div>
        <div class="card-events_main">
            <div className='help-img-body'>
                <h2 style={{color:'#EAAB11'}}>OUR</h2>
                <h1 style={{color:'#EAAB11'}}>EVENTS</h1>
                <p style={{fontSize:'25px',fontWeight:'400',color:'white'}}>
                    <Link to={"/"} className='ahref'>
                        <a href="#" className='ahref'>Home </a>
                    </Link>
                    <Link to={"/events"} className='ahref'>
                        /<a href="" className='ahref'> Events </a>
                    </Link>
                    </p>
            </div>
        </div> 
        </div>

        <div className='event_homepage'>
        <h2 className="head7">Suvidha Events</h2>
        <h1>
          Our Charity events,<br />
          Celebrating our impact together
        </h1>
      </div>

      <div className='eventcardz'>
        <div className='twocards'>

            <div class="card-eve">
                <img className="z1" src={z1} alt="events-image"></img>
                <div className='matter'>
                    <div><img className="linex" src={line} ></img></div>
                    <div className='matter-text'>
                        <h1 style={{fontSize:'25px',fontWeight:'500',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Tree Plantation</h1>
                        <h1 style={{fontSize:'16px',fontWeight:'200',fontFamily:'Arial',color:'#555555',paddingLeft:'15px',paddingRight:'40px',lineHeight:'24px'}}>Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet.</h1>
                    </div> 
                </div>
            </div>

            <div class="card-eve">
                <img className="z1" src={z2} alt="events-image"></img>
                <div className='matter'>
                    <div><img className="linex" src={line} ></img></div>
                    <div className='matter-text'>
                        <h1 style={{fontSize:'25px',fontWeight:'500',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Fundraising Events</h1>
                        <h1 style={{fontSize:'16px',fontWeight:'200',fontFamily:'Arial',color:'#555555',paddingLeft:'15px',paddingRight:'40px',lineHeight:'24px'}}>Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.</h1>
                    </div> 
                </div>
            </div>
        </div>

        <div className='twocards'>
            <div class="card-eve">
                <img className="z1" src={z3} alt="events-image"></img>
                <div className='matter'>
                    <div><img className="linex" src={line} ></img></div>
                    <div className='matter-text'>
                        <h1 style={{fontSize:'25px',fontWeight:'500',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Cloths Distribution</h1>
                        <h1 style={{fontSize:'16px',fontWeight:'200',fontFamily:'Arial',color:'#555555',paddingLeft:'15px',paddingRight:'40px',lineHeight:'24px'}}>Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event.</h1>
                    </div> 
                </div>
            </div>

            <div class="card-eve">
                <img className="z1" src={z4} alt="events-image"></img>
                <div className='matter'>
                    <div><img className="linex" src={line} ></img></div>
                    <div className='matter-text'>
                        <h1 style={{fontSize:'25px',fontWeight:'500',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Women's Day</h1>
                        <h1 style={{fontSize:'16px',fontWeight:'200',fontFamily:'Arial',color:'#555555',paddingLeft:'15px',paddingRight:'40px',lineHeight:'24px'}}>Celebrating the strength, resilience, and achievements of women worldwide on this special Women's Day. Together, let's honor their contributions.</h1>
                    </div> 
                </div>
            </div>
        </div>

        <div className='twocards'>
            <div class="card-eve1">
                <img className="z1" src={z5} alt="events-image"></img>
                <div className='matter'>
                    <div><img className="linexx" src={line} ></img></div>
                    <div className='matter-text'>
                        <h1 style={{fontSize:'25px',fontWeight:'500',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',lineHeight:'30px',marginTop:'20px',marginBottom:'10px',paddingRight:'20px'}}>Food Donation Initiatives by Our NGO</h1>
                        <h1 style={{fontSize:'16px',fontWeight:'200',fontFamily:'Arial',color:'#555555',paddingLeft:'15px',paddingRight:'40px',lineHeight:'24px'}}>Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals.</h1>
                    </div> 
                </div>
            </div>

            <div class="card-eve1">
                <img className="z1" src={z6} alt="events-image"></img>
                <div className='matter'>
                    <div><img className="linexx" src={line} ></img></div>
                    <div className='matter-text'>
                        <h1 style={{fontSize:'25px',fontWeight:'500',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',lineHeight:'30px',marginTop:'20px',marginBottom:'10px',paddingRight:'20px'}}>Ensuring Happy and Healthy Animals through Feeding Programs</h1>
                        <h1 style={{fontSize:'16px',fontWeight:'200',fontFamily:'Arial',color:'#555555',paddingLeft:'15px',paddingRight:'40px',lineHeight:'24px'}}>Join us in providing sustenance and compassion to our furry companions. Together, let's make a positive impact on their lives through our Animal Feeding event.</h1>
                    </div> 
                </div>
            </div>
        </div>

        <div className='twocards'>
            <div class="card-eve">
                <img className="z1" src={z7} alt="events-image"></img>
                <div className='matter'>
                    <div><img className="linex" src={line} ></img></div>
                    <div className='matter-text'>
                        <h1 style={{fontSize:'25px',fontWeight:'500',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Sanitary Pads Distribution</h1>
                        <h1 style={{fontSize:'16px',fontWeight:'200',fontFamily:'Arial',color:'#555555',paddingLeft:'15px',paddingRight:'40px',lineHeight:'24px'}}>Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Together, let's empower women and ensure access to safe and dignified hygiene.</h1>
                    </div> 
                </div>
            </div>

            <div class="card-eve">
                <img className="z1" src={z8} alt="events-image"></img>
                <div className='matter'>
                    <div><img className="linex" src={line} ></img></div>
                    <div className='matter-text'>
                        <h1 style={{fontSize:'25px',fontWeight:'500',fontFamily:'Arial',color:'rgb(49, 67, 83)',paddingLeft:'15px',lineHeight:'3px',marginTop:'30px',marginBottom:'20px'}}>Free Workshops</h1>
                        <h1 style={{fontSize:'16px',fontWeight:'200',fontFamily:'Arial',color:'#555555',paddingLeft:'15px',paddingRight:'40px',lineHeight:'24px'}}>Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops.</h1>
                    </div> 
                </div>
            </div>
        </div>

      </div>
       
        <Footter/>
        
        
       
    </div>
  );
}

export default Events_main;


import React, { useEffect } from 'react';
import './Help.css';
import Navbar from './Navbar';
import Footter from './Footter';
import qr from './qr.png';

const Help = () => {
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
        <Navbar/>
        <div>
        <div class="card-help">
            <div className='help-img-body'>
                <div id="fly-in">  
                    <div><span>Suvidha</span>Foundatiion</div>
                    <div>WE<span>Help what you Donate</span></div>
                    <div>BE THE CHANGE<span> for a better World</span></div>
                    <div><span>LET US</span>DONATE</div>
                </div>
            </div>
        </div> 
        </div>

        <h1 className='actd'>Account Details</h1>
        <div className='helpc'>
            <div>
                <h2>For Indian Donors</h2>
                <h3 style={{fontWeight:'normal',width:'500px'}}>Bank Of Baroda<br></br><br></br>

                    City: Nagpur<br></br><br></br>

                    Contact No: +91 8010996763<br></br><br></br>

                    Account Name: Suvidha Mahila Mandal<br></br><br></br>

                    Suvidha Account No: 97840100027609<br></br><br></br>

                    IFSC Code: BARB0DBKPAR</h3>
            </div>
            <div>
            <div class="cardu">
                <div class="cnt"><img  className='qr-img' src={qr}></img></div>
            </div>
            </div>

        </div>
        <Footter/>
        
        
       
    </div>
  );
}

export default Help;

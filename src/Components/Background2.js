import React from 'react';
import './Background2.css'
import j1 from './j1.png';
import j2 from './j2.png';
import j3 from './j3.png';
import j4 from './j4.png';

const CardSlider = () => {

  return (
    <div>
        <div className='Background-2' style={{color:'white',paddingTop:'100px'}}>
            <div className="Background-2-Heading " style={{color:'rgb(232, 194, 67)'}}>
                {/* <div className='four'></div> */}
                    <span><img className='img4'  src={j1}></img></span>
                    <div className='spandisp'>
                        <span className='disp1'>15+<br></br></span>
                        <span className='disp2'>Countries</span>
                    </div>
            </div>
            <div className="Background-2-Heading " style={{color:'rgb(232, 194, 67)'}}>
                {/* <div className='four'></div> */}
                    <span><img className='img4'  src={j2}></img></span>
                    <div className='spandisp'>
                        <span className='disp1'>3L+<br></br></span>
                        <span className='disp2'>Volunteers</span>
                    </div>
            </div>
            <div className="Background-2-Heading " style={{color:'rgb(232, 194, 67)'}}>
                {/* <div className='four'></div> */}
                    <span><img className='img4'  src={j3}></img></span>
                    <div className='spandisp'>
                        <span className='disp1'>1Cr+<br></br></span>
                        <span className='disp2'>Internship Goals</span>
                    </div>
            </div>
            <div className="Background-2-Heading " style={{color:'rgb(232, 194, 67)'}}>
                {/* <div className='four'></div> */}
                    <span><img className='img4'  src={j4}></img></span>
                    <div className='spandisp'>
                        <span className='disp1'>54L+<br></br></span>
                        <span className='disp2'>Trees Planted</span>
                    </div>
            </div>
        </div>
    </div>

  );
};

export default CardSlider;

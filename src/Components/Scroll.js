import React from 'react';
import './Scroll.css'; // Import your CSS file for styling (if needed)
import k1 from './food.png';
import k2 from './k2.png';
import k4 from './k4.png';
import k5 from './k5.png';
import k6 from './k6.png';
const Card = () => {
  return (
<div className='body-scroll'>
    <div class="parent">
        <div class="cardo">
            <div class="content-box">
            <div className='heading-center'>
                <h2 className="head5">what we do?</h2>
                <h1>
                Cause for a Sustainable Future
                </h1>
            </div>
                <div class="date-box">
                    <span ><img className='img9' src={k1}></img></span>
                    <div className='sam'>
                    <span class="cardo-title">Healthy food</span><br></br><br></br>
                    <span class="month">By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.</span>
                    </div>  
                </div>
                <div class="date-box1">
                    <span ><img className='img9' src={k2}></img></span>
                    <div className='sam'>
                    <span class="cardo-title">Social Awareness</span><br></br><br></br>
                    <span class="month">We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment and prevent the spread of diseases.</span>
                    </div>  
                </div>
                <div class="date-box2">
                    <span ><img className='img9' src={k1}></img></span>
                    <div className='sam'>
                    <span class="cardo-title">Tree Plantation</span><br></br><br></br>
                    <span class="month">Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations.</span>
                    </div>  
                </div>
                <div class="date-box3">
                    <span ><img className='img9' src={k4}></img></span>
                    <div className='sam'>
                    <span class="cardo-title">Health Care</span><br></br><br></br>
                    <span class="month">We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable, and of high quality for those in need.</span>
                    </div>  
                </div>
                <div class="date-box4">
                    <span ><img className='img9' src={k5}></img></span>
                    <div className='sam'>
                    <span class="cardo-title">Primary Education</span><br></br><br></br>
                    <span class="month">By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future.</span>
                    </div>  
                </div>
                <div class="date-box5">
                    <span ><img className='img9' src={k6}></img></span>
                    <div className='sam'>
                    <span class="cardo-title">Social Care</span><br></br><br></br>
                    <span class="month">Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals.</span>
                    </div>  
                </div>
                
                
            </div>
            
        </div>
        
    </div>
</div>
  );
};

export default Card;

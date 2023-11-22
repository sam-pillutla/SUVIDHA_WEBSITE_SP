import React from 'react';
import './Background1.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const CardSlider = () => {
const navigate = useNavigate()
    const handleClick=()=>{
        navigate('/intern')
    }

  return (
    <div>
        <div className='Background-1' style={{color:'white',paddingTop:'100px'}}>
            <div className="Background-1-Heading " style={{color:'rgb(232, 194, 67)'}}>
                Apply For Internship and <br />Mentorship Programs
            </div>
            <div className="background-1-content1"><br></br>
                Seize the opportunity to gain invaluable experience and<br/> jumpstart your career with an internship that propels you<br/> towards success.
            </div>
            <div className="background-1-subheading"><br></br>
                The Suvidha Foundation Internship Program is a unique opportunity for students and recent graduates to gain experience and <br/>contribute to the work of Suvidha Foundation. Along with undertaking tasks related to their specific skills, we encourage interns to <br/>develop a reputable professional portfolio.
            </div>
            {/* <Link to={"./intern"}> */}
                <button className='buttonap' onClick={handleClick}> Apply</button>
            {/* </Link> */}
        </div>
    </div>

  );
};

export default CardSlider;

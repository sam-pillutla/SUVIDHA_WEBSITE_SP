import React from 'react';
import './Team.css';
import t1 from './twitter.png';
import m1 from './m1.png';
import m2 from './m2.png';
import m3 from './m3.png';
import m4 from './m4.png';
import t6 from './instagram.png';

const Team = () => {
  return (
    <div>
    <div className='heading-center'>
                <h2 className="head6">MEET OUR CREW</h2>
                <h1>
                Torchbearers at the heart of our Charity
                </h1>
    </div>
    <div className='team-cards'>
            <div className="cd1">
            <div className="cd-photo"><img className="team-img" src={m1}></img></div>
            <div className="cd-title">
            SHOBA MOTGHARE <br />
                <span>Secretary</span>
            </div>
            <div className="cd-socials">
                <button className="cd-socials-btn facebook">
                    <a href="">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21">
                    <path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path>
                </svg></a>
                </button>
                <button className="cd-socials-btn github">
                <a href="">
                <img className="n" src={t6}></img>
                </a>
                </button>
                <button className="cd-socials-btn linkedin">
                <a href="">
                <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path>
                </svg>
                </a>
                </button>
                <button className="cd-socials-btn linkedin">
                <a href="">
                <img className="n" src={t1}></img>
                </a>
                </button>
            </div>
            </div>


            <div className="cd1">
            <div className="cd-photo"><img className="team-img" src={m2}></img></div>
            <div className="cd-title">
            PAYAL BADHE <br />
                <span>President</span>
            </div>
            <div className="cd-socials">
                <button className="cd-socials-btn facebook">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21">
                    <title></title>
                    <path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path>
                </svg>
                </button>
                <button className="cd-socials-btn github">
                <img className="n" src={t6}></img>
                </button>
                <button className="cd-socials-btn linkedin">
                <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path>
                </svg>
                </button>
                <button className="cd-socials-btn linkedin">
                <img className="n" src={t1}></img>
                </button>
            </div>
            </div>


            <div className="cd1">
            <div className="cd-photo"><img className="team-img" src={m3}></img></div>
            <div className="cd-title">
            BHARATI SHENDRE <br />
                <span>Treasurer</span>
            </div>
            <div className="cd-socials">
                <button className="cd-socials-btn facebook">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21">
                    <title></title>
                    <path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path>
                </svg>
                </button>
                <button className="cd-socials-btn github">
                <img className="n" src={t6}></img>
                </button>
                <button className="cd-socials-btn linkedin">
                <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path>
                </svg>
                </button>
                <button className="cd-socials-btn linkedin">
                <img className="n" src={t1}></img>
                </button>
            </div>
            </div>


            <div className="cd1">
            <div className="cd-photo"><img className="team-img" src={m4}></img></div>
            <div className="cd-title">
            NILIMA KALAMBI <br />
                <span>Advisor</span>
            </div>
            <div className="cd-socials">
                <button className="cd-socials-btn facebook">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" id="Layer_21" height="24" data-name="Layer 21">
                    <title></title>
                    <path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path>
                </svg>
                </button>
                <button className="cd-socials-btn github">
                <img className="n" src={t6}></img>
                </button>
                <button className="cd-socials-btn linkedin">
                <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path>
                </svg>
                </button>
                <button className="cd-socials-btn linkedin">
                <img className="n" src={t1}></img>
                </button>
            </div>
            </div>

            
            

            
    </div>
    </div>
  );
};

export default Team;

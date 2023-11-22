
import React, { Component } from 'react';
import './Demo.css'; // Import your CSS for styling
import Woman from './woman_empowerment.png'; // Import your imag
export class Demo extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 'home', // Default active tab
      previous:'home'
    };
  }

  handleTabChange = (tab) => {
    document.getElementById(tab).style.color='white';
    document.getElementById(this.state.previous+"1").hidden=1;
    document.getElementById(tab+"1").hidden=0;
    document.getElementById(this.state.previous).style.color='rgb(229, 189, 58)';
    this.setState({ activeTab: tab });
    this.setState({ previous: tab });
  };

  render() {
    const { activeTab } = this.state;

    return (
    <div className='main1'>
        <div className="book">
          <p className='malala'>"I raise up my voice not so I can shout, but so that those without a voice can be heard... we cannot succeed when half of us are held back."  </p>                    
          <p className='ja'> — Malala Yousafzai</p>
          <div className="cover">
            <img  className="imgwoman" src={Woman} alt="Your Image Description" />
          </div>
        </div>

      <div>
          <h1 className='getinvolved'>Get involved,</h1>
          <p className='suvidhatext'>Suvidha Foundation<br></br>(Suvidha Mahila Mandal)</p>
        

        <div className="wrapper">
            <nav>
                <label
                htmlFor="home"
                id='home'
                className={`home ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => this.handleTabChange('home')}
                style={{color:'white'}}
                >
                About
                </label>
                <label
                htmlFor="blog"
                id='blog'
                className={`blog ${activeTab === 'blog' ? 'active' : ''}`}
                onClick={() => this.handleTabChange('blog')}
                >
                Mission
                </label>
                <label
                htmlFor="code"
                id='code'
                className={`code ${activeTab === 'code' ? 'active' : ''}`}
                onClick={() => this.handleTabChange('code')}
                >
                Vision
                </label>
                <div className="slider" style={{ left: activeTab === 'home' ? '0%' : activeTab === 'blog' ? '33.33%' : '66.66%' }}></div>
            </nav>


            <section>
                <div
                // className={`content content-1 ${activeTab === 'home' ? 'active' : ''}`}
                id='home1'
                
                >
                <div className="title">Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.</div>
                <p className='text-black'>
                   
                </p>
                </div>
                <div
                // className={`content content-2 ${activeTab === 'blog' ? 'active' : ''}`}
                id='blog1'
                hidden
                >
                <div className="title">To Inspire Students, help them Innovate and let them Integrate to build the next generation humankind.<br></br><br></br>To Run Food Donation And Awareness Campaign In Rural Region.</div>
                <p>
                    {/* Content for Blog */}
                
                </p>
                </div>
                <div
                // className={`content content-3 ${activeTab === 'code' ? 'active' : ''}`}
                  id='code1'
                  hidden
                >
                <div className="title">To build Next Generation Entrepreneur, by providing them a Skill-Based Education.<br></br>
                <br></br>To Provide Internship, Training And Workshops and Quality Education All Over The World..</div>
                <p >
                    {/* Content for Code */}
                  
                </p>
                </div>
            </section>
            
        </div>
      </div>

    </div>
   
    );
  }
}

export default Demo;

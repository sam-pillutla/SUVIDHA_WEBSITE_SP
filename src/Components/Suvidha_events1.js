import React from 'react';
import './Suvidha_events1.css';
// import './Bootstrap.css';
import tree from './c1.png';
import Fund from './c2.png';
import { Link } from 'react-router-dom';
// import Treegif from './plant.gif';


const MyComponent = () => {
  return (
    <div className='eventshome-body'>
      <div className='event_homepage'>
        <h2 className="head4">Suvidha Events</h2>
        <h1>
          Our Charity events,<br />
          Celebrating our impact together
        </h1>
      </div>
      

      <div className='event_cards1'>
      <div class="cardevent1">
        <img  className="events_img" src={tree} alt="events_image"/>
        <h2 className='event-head1'>Tree Plantation</h2>
        <div class="card__content">
            <p class="card__title">Tree Plantation</p>
            <p className='box1'></p>
            {/* <img src={Treegif} alt='tree' className='tree-gif'></img> */}
            <p class="card__description">Embark on a journey with us to cradle the nurturing essence of Mother Earth, as we sow the seeds of change, one tree at a time. United, let's paint a verdant canvas for the future and breathe renewed life into the heartbeat of our beloved planet.</p>
        </div>
      </div>
      <div class="cardevent1">
        <img  className="events_img" src={Fund} alt="events_image"/>
        <h2 className='event-head2 '>Fundraising Events</h2>
        <div class="card__content">
            <p class="card__title">Fundraising Events</p>
            <p className='box1'></p>
            <p class="card__description">Support us at our Fundraising Event and make a big impact with your small act of generosity. Join us in uplifting lives and fostering positive change in our community. Your contribution matters—see you there!</p>
        </div>
      </div>
      </div>
      <Link to={"./events"}>
        <button className='buttonapp'> Scope in </button>
      </Link>
      
    </div>
  );
};

export default MyComponent;

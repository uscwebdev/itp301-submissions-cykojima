import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="navItem navHome">
        <Link to="/" className="linkStyle">
          Home
        </Link>
      </div>
      <div className="navItem navCalendar">
        <Link to="/Calendar" className="linkStyle">
          Calendar
        </Link>
      </div>
      <div className="navItem navSchedule">
        <Link to="/schedule" className="linkStyle">
          Schedule
        </Link>
      </div>
      <div className="contactUs">
        <div className="contactUsText">
          <Link to="/contact_us" className="linkStyle">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

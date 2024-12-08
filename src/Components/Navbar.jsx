//import React from 'react';
import logo from "../../public/images/TestLogo.svg";
import homeicon from "../../public/images/home-icon.svg";
import groupicon from "../../public/images/group-icon.svg";
import transactionicon from "../../public/images/transaction-icon.svg";
import calendaricon from "../../public/images/calendar-icon.svg";
import chaticon from "../../public/images/chat-bubble.svg";
import doctorphoto from "../../public/images/doctorpic.png";
import profilesetting from "../../public/images/setting.png";
import profilehumburg from "../../public/images/humburg.png";

function Navbar() {
  return (
    <>
    <header className="header">
      <div className="container">
        <div className="dflex align-items-centers">
          <div className="logo">
            <img src={logo} alt="Logo"/>
          </div>
          {/* dflex */}
          <nav className="navigation">
            <ul>
              <li><a href="#"><span><img src={homeicon} alt=""/></span>Overview</a></li>
              <li><a href="#"><span><img src={groupicon} alt=""/></span>Patients</a></li>
              <li><a href="#"><span><img src={calendaricon} alt=""/></span>Schedule</a></li>
              <li><a href="#"><span><img src={chaticon} alt=""/></span>Message</a></li>
              <li><a href="#"><span><img src={transactionicon} alt=""/></span>Transactions</a></li>
            </ul>
          </nav>
          {/* navigation */}
          <div className="profile">
            <div className="dflex align-items-centers">
              <div className="profile-photo">
                <img src={doctorphoto}></img>
              </div>
              <div className="profile-name">
                <p><strong>Dr. Jose Simmons</strong>General Practitioner</p>
              </div>
              <div className="humburg">
                <img src={profilesetting}></img>
                <img src={profilehumburg}></img>
              </div>
            </div>
          </div>
          {/* profile */}
        </div>
        {/* Mobile Navbar */}
        {/* <div>
        <nav className="mobile-navigation">
            <ul>
              <li><a href="#"><span><img src={homeicon} alt=""/></span>Overview</a></li>
              <li><a href="#"><span><img src={groupicon} alt=""/></span>Patients</a></li>
              <li><a href="#"><span><img src={calendaricon} alt=""/></span>Schedule</a></li>
              <li><a href="#"><span><img src={chaticon} alt=""/></span>Message</a></li>
              <li><a href="#"><span><img src={transactionicon} alt=""/></span>Transactions</a></li>
            </ul>
          </nav>
        </div> */}
      </div>
    </header>
    </>
  )
}

export default Navbar;

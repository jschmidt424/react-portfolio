import React from "react";
import { Link } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';

export default function Home() {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__content">
          <div className="landing__content-name">
            <h1>Welcome! <span>I'm Josh Schmidt</span></h1>
            <h3>I build things for the web</h3>
          </div>
          <div className="landing__buttons">
            
            <Link to="/home" className="landing__buttons-item">
              <HomeRoundedIcon />
              <p>Home</p>
            </Link>
            <Link to="/projects" className="landing__buttons-item">
              <AccountTreeRoundedIcon />
              <p>Projects</p>
            </Link>
            <Link to="/skills" className="landing__buttons-item">
              <SchoolRoundedIcon />
              <p>Skills</p>
            </Link>
            <Link to="/contact" className="landing__buttons-item">
              <ContactsRoundedIcon />
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import profilePicture from '../assets/img/profilePicture1.jpg'

export const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    console.log("clicked open")

    open ? setOpen(false) : setOpen(true);
  };
  
  return(
    <>
    <div className="sidebar-container">
      <div className="sidebar-top">
        <img src={profilePicture} alt="John Kroll" className="circle responsive-img avatar" />
        <div id="nameDesc" className="name-desc brand-logo">
          
          <h1 className="text-darken-1">
            John Kroll
          </h1>
          <span className="title-desc text-darken-1">
            Web Developer
          </span>
          
        </div>
      </div>

      <ul className="linkList nav">
        <li id='li-about-me'>
          <div id="link-text">About me</div>
        </li>
        <li id="li-experience">
          <div>Experience</div>
        </li>
        <li id="li-skills">
          <div>Skills</div>
        </li>
        <li id="li-projects">
          <div>Projects</div>
        </li>
        <li id="li-education">
          <div>Education</div>
        </li>
        <li id="li-contact">
          <div>Contact</div>
        </li>
      </ul>
    </div>


    <nav className="top-bar-visible" key="left">
      <IconButton
        color="black"
        aria-label="open drawer"
        onClick={toggleDrawer}
        edge="start"
        className="sidenav-trigger"
        // className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      {/* <button data-target="mobile-list" className="sidenav-trigger" onClick={toggleDrawer}>
        <i className="material-icons">
          menu
        </i>
        </button> */}
      <div className="top-bar-container">

        <img src={profilePicture} alt="John Kroll" className="circle responsive-img avatar-top" />
        <div id="nameDesc" className="name-desc brand-logo">
          
          <h1>
            John Kroll
          </h1>
          <span className="title-desc">
            Web Developer
          </span>
          
        </div>
      </div>
    </nav>
    <Drawer anchor="left" open={open} variant="persistent">
      <ul id="mobile-list" className="linkList sidenav">
          <li id='li-about-me'>
            <div>
              <a href="#sect-about-me">About me</a>
            </div>
          </li>
          <li id="li-experience">
            <div>
              <a href="#sect-exp">Experience</a>
            </div>
          </li>
          <li id="li-skills">
            <div>
              <a href="#sect-skills">Skills</a>
            </div>
          </li>
          <li id="li-projects">
            <div>
              <a href="#sect-projects">Projects</a>
            </div>
          </li>
          <li id="li-education">
            <div>
              <a href="#sect-education">Education</a>
            </div>
          </li>
          <li id="li-contact">
            <div>
              <a href="#sect-contact">Contact</a>
            </div>
          </li>
        </ul>
      </Drawer>
    </>
  );
}

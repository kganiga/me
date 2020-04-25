import React, { Component } from 'react';
import MdPerson from 'react-ionicons/lib/MdPerson'
import MdList from 'react-ionicons/lib/MdList'
import MdGlobe from 'react-ionicons/lib/MdGlobe'
import MdCodeWorking from 'react-ionicons/lib/MdImages'
import MdAt from 'react-ionicons/lib/MdAt'

import { NavLink } from 'react-router-dom';

const cName = 'menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-17 current_page_item current-menu-item'

class Menu extends Component {
 
  render() {
    return (<>
      <header className="header">
        <div className="profile">
          <div className="title">Khalil Ganiga</div>
          <div className="subtitle subtitle-typed">Engineer | Blogger | I build things..! </div><span className="typed-cursor">|</span>
        </div><span />
        <div className="top-menu top-menu-onepage">
          <div className="menu-main-menu-container">
            <ul id="menu-main-menu" className="menu">

              <li><NavLink to="/" activeClassName={cName}><a href="" className="one-page-menu-item"><span className='icon'><MdPerson /></span>About</a></NavLink></li>
              <li><NavLink to="/resume" activeClassName={cName}><a href="" className="one-page-menu-item"><span className='icon'><MdList /></span>Resume</a></NavLink></li>
              <li><NavLink to="/gallery" activeClassName={cName}><a href="" className="one-page-menu-item"><span className='icon'><MdCodeWorking /></span>Gallery</a></NavLink></li>
              <li><NavLink to="/blog" activeClassName={cName}><a href="" className="one-page-menu-item"><span className='icon'><MdGlobe /></span>Blog</a></NavLink></li>
              <li><NavLink to="/contact" activeClassName={cName}><a href="" className="one-page-menu-item"><span className='icon'><MdAt /></span>Contact</a></NavLink></li>
            </ul>
          </div>
        </div>
      </header>

    </>
    );
  }
}


export default Menu;
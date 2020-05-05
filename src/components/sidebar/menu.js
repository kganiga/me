import React, { Component } from 'react';
import MdPerson from 'react-ionicons/lib/MdPerson'
import MdList from 'react-ionicons/lib/MdList'
import MdGlobe from 'react-ionicons/lib/MdGlobe'
import MdCodeWorking from 'react-ionicons/lib/MdImages'
import MdAt from 'react-ionicons/lib/MdAt'

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = { addClass: false }
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }

  render() {
    let activeMenu = ["menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-30 current_page_item "];
    if (this.state.addClass) {
      activeMenu.push('current-menu-item');
    }
    return (<>
      <header className="header">
        <div className="profile">
          <div className="title">Khalil Ganiga</div>
          <div className="subtitle subtitle-typed">Engineer | Blogger | I build things..! </div><span className="typed-cursor">|</span>
        </div><span />
        <div className="top-menu top-menu-onepage">
          <div className="menu-main-menu-container">
            <ul id="menu-main-menu" className="menu">
              <li className={activeMenu.join(' ') +''} onClick={this.toggle.bind(this)}><a href="/" className="one-page-menu-item"><span className='icon'><MdPerson /></span>About</a></li>
              <li><a href="#resume" className={activeMenu.join(' ')} onClick={this.toggle.bind(this)}><span className='icon'><MdList /></span>Resume</a></li>
              <li><a href="#gallery" className={activeMenu.join(' ')} onClick={this.toggle.bind(this)}><span className='icon'><MdCodeWorking /></span>Gallery</a></li>
              <li><a href="#work" className={activeMenu.join(' ')} onClick={this.toggle.bind(this)}><span className='icon'><MdGlobe /></span>Work</a></li>
              <li><a href="#contact" className={activeMenu.join(' ')} onClick={this.toggle.bind(this)}><span className='icon'><MdAt /></span>Contact</a></li>

            </ul>
          </div>
        </div>
      </header>

    </>
    );
  }
}


export default Menu;
import React, { Component } from 'react';
import MdPerson from 'react-ionicons/lib/MdPerson'
import MdList from 'react-ionicons/lib/MdList'
import MdGlobe from 'react-ionicons/lib/MdGlobe'
import MdCodeWorking from 'react-ionicons/lib/MdImages'
import MdAt from 'react-ionicons/lib/MdAt'

const cName = 'current-menu-item'
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelIndex: 0
    };
  }


  getBtnId = (e) => {
    if (e.target) {
      console.log((e.currentTarget.id));
      this.setState({
        panelIndex: Number(e.currentTarget.id)
      });
    }
  };

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
              <li onClick={this.getBtnId} id="0" data-id="menu-item-0" className={this.state.panelIndex === 0 ? cName: ''}><a href="/me" className="one-page-menu-item"><span className='icon'><MdPerson /></span>About</a></li>
              <li onClick={this.getBtnId} id="1" data-id="menu-item-1" className={this.state.panelIndex === 1 ? cName: ''}><a href="#resume" className="one-page-menu-item"><span className='icon'><MdList /></span>Resume</a></li>
              <li onClick={this.getBtnId} id="2" data-id="menu-item-2" className={this.state.panelIndex === 2 ? cName: ''}><a href="#work" className="one-page-menu-item"><span className='icon'><MdGlobe /></span>Work</a></li>
              {/*<li onClick={this.getBtnId} id="3" data-id="menu-item-3" className={this.state.panelIndex === 3 ? cName: ''}><a href="#gallery" className="one-page-menu-item"><span className='icon'><MdCodeWorking /></span>Gallery</a></li>*/}
              <li onClick={this.getBtnId} id="4" data-id="menu-item-4" className={this.state.panelIndex === 4 ? cName: ''}><a href="#contact" className="one-page-menu-item"><span className='icon'><MdAt /></span>Contact</a></li>
            </ul>
          </div>
        </div>
      </header>

    </>
    );
  }
}


export default Menu;
import React, { Component } from 'react';
import Logo from '../Nord_logo.png';
import './header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <a>
            <img alt="Brand" src={Logo} />
          </a>
          <p className="brand-text">Nord Software</p>
        </nav>
      </header>
    );
  }
}

export default Header;

import '../scss/header.scss'
import { ReactSVG } from 'react-svg'
import React from 'react'


import logo from '../res/logo.svg'

function Header() {
  return (
    <div class='header'>
      <ReactSVG class='logo' src={logo}/>
      <h1>Sing In</h1>
    </div>
  );
}

export default Header;

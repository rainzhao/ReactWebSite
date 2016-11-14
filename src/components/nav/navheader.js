require('styles/navheader.scss');

import React from 'react';
import NavlistComponent from './Navlist.js';

class navheader extends React.Component{
  render () {
    return (
      <div className="nav_header_wrap">
        <div className="nav_header_logobar">
          <div className="nav_header_logobar__logo">
            <img src="http://ofyi1vpax.bkt.clouddn.com/color-logo.png" alt=""/>
          </div>
          <div className="nav_header_logobar__btn">
            <NavlistComponent />
          </div>
        </div>
      </div>
    )
  }
}
export default navheader;

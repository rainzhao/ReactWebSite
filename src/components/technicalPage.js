require('../styles/technical.scss');

import React from 'react';
import classNames from 'classnames';
import MarktelComponent from './markModel/marktel.js';

class technicalComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contactMark: true,
      telc: ''
    }
  }

  render() {
    let telClass = classNames({
      'technicalCls': this.state.contactMark
    });
    let telUsFun = () => {
      this.setState({...this.state,contactMark:!this.state.contactMark, telc: telClass});
    };
    return (
      <div className="technical_wrap">
        <MarktelComponent  telc={this.state.telc} onClose={telUsFun}/>
        <div className="technical_center">
          <div className="technical_center__header">
            <small>微杨为您提供</small>
            <h3>技术帮助</h3>
          </div>
          <div className="technical_center__body">
            <ul>
              <li><img src="http://ofyi1vpax.bkt.clouddn.com/mail.png" alt=""/><span>support@micropoplar.com</span></li>
              <li onClick={telUsFun}><img src="http://ofyi1vpax.bkt.clouddn.com/phone.png" alt=""/><span>400-0011-096</span></li>
              <li><img src="http://ofyi1vpax.bkt.clouddn.com/QQ.png" alt=""/><span>2226282516</span></li>
            </ul>
          </div>
          <div className="technical_center__footer">
            <img src="http://ofyi1vpax.bkt.clouddn.com/hand.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default technicalComponent;

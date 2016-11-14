require('../styles/contactpage.scss');

import React from 'react';
import MarktelComponent from './markModel/marktel.js'
import classNames from 'classnames';

class contactComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contactMark: true,
      telc: ''
    }
  }

  render() {
    let telClass = classNames({
      'contactCls': this.state.contactMark
    });
    let telUsFun = () => {
      this.setState({...this.state,contactMark:!this.state.contactMark, telc: telClass});
    };
    return (
      <div className="contact_wrap">
        <MarktelComponent  telc={this.state.telc} onClose={telUsFun}/>
        <div className="contact_center">
          <div className="contact_center__header">
            <h3>联系我们</h3>
          </div>
          <div className="contact_center__body">
            <div className="contact_center__phone" onClick={telUsFun}>
              <img src="http://ofyi1vpax.bkt.clouddn.com/phone.png"/>
              <strong>(+86)400-0011-096</strong>
              <span>(24小时服务)</span>
            </div>
            <div className="contact_center__address">
              <p>Email: support@micropoplar.com</p>
              <p>Add: 上海市普陀区曹杨路450号绿地合创大厦1306</p>
              <img src="http://ofyi1vpax.bkt.clouddn.com/location.png" alt=""/><span>我们在这里</span>
            </div>
            <div className="contact_center__code">
              <img src="http://ofyi1vpax.bkt.clouddn.com/code.png" alt=""/>
              <span>扫描关注微杨公众号</span>
            </div>
          </div>
        </div>
        <div className="contact_footer">
          <span>&copy;2014 All Rights reserved by MICROPOPLAR 沪ICP备 13001093号-4</span>
        </div>
      </div>
    )
  }
}

export default contactComponent;

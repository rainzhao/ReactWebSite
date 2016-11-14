require('../styles/candopage.scss');

import React from 'react';

class candoComponent extends React.Component{
  render() {
    return (
      <div className="cando_wrap">
        <div className="cando_center">
          <div className="cando__cloud">
            <img src="http://ofyi1vpax.bkt.clouddn.com/cloud.png" className="circle_animate5" alt=""/>
            <div className="cando__one cando__circle circle_animate1">
              个性化需求定制
            </div>
            <div className="cando__two cando__circle circle_animate2">
              电商平台
            </div>
            <div className="cando__three cando__circle circle_animate3">
              互联网品牌
            </div>
            <div className="cando__four cando__circle circle_animate4">
              大数据管理
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default candoComponent;

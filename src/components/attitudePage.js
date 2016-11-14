require('styles/attitudepage.scss');

import React from 'react';

class attitudeComponent extends React.Component{
  render() {
    return (
      <div className="attitude_wrap">
        <div className="attitude_expand">
          <ul>
            <li>
              <h3>靠谱</h3>
              <div className="attitude_des">
                <p>挑战，是我们价值的试金石</p>
                <p>时间，是我们真诚的见证</p>
              </div>
            </li>
            <li>
              <h3>专业</h3>
              <div className="attitude_des">
                <p>我们的每一个成员都是一支队伍</p>
              </div>
              <p>我们的每一个成员都是一支队伍</p>
            </li>
            <li>
              <h3>责任</h3>
              <div className="attitude_des">
                <p>家人，关心你的安康</p>
                <p>我们，成就你的梦想</p>
              </div>
            </li>
            <li>
              <h3>极速</h3>
              <div className="attitude_des">
                <p>你的需求与我们的回应之间</p>
                <p>没有时差</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default attitudeComponent;















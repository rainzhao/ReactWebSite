require('normalize.css/normalize.css');
require('styles/App.scss');
require('styles/homepage.scss');

import React from 'react';

class HomeComponent extends React.Component{
  render () {
    let down = "http://ofyi1vpax.bkt.clouddn.com/down.png";
    return (
      <div className="homewrap">
        <div className="homewrap_main">
          <div className="homewrap_main__circleouter">
            <div className="homewrap_main__circleinner">
              <img src="http://ofyi1vpax.bkt.clouddn.com/logo.png" alt="" className="homewrap_main__circleinner__logo"/>
              <img src="http://ofyi1vpax.bkt.clouddn.com/homepageDescribe.png" alt="" className="homewrap_main__circleinner__des"/>
              <div className="home_main__circleinner__essay">
                <p>我们迎着汹涌的创业浪潮</p>
                <p>为勇于改变世界的行动派</p>
                <p>造着铁锹</p>
                <p>搭着梯子</p>
                <p>一路高歌</p>
                <div className="home_main__circleinner__dot"></div>
                <div className="home_main__circleinner__dot"></div>
                <div className="home_main__circleinner__dot"></div>
              </div>
            </div>
            <div className="home_main__circleouter__down">
              <img src={down}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default HomeComponent;

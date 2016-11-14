require('../styles/joinus.scss');

import React from 'react';

class joinusComponent extends React.Component{
  render() {
    return (
      <div className="joinus_wrap">
        <div className="joinus_body">
          <h3>加入我们</h3>
          <div  className="joinus__img">
            <img src="http://ofyi1vpax.bkt.clouddn.com/joinus_h.png" alt=""/>
          </div>
          <div className="joinus_listwrap">
            <div className="joinus_list">
              <div className="joinus_list__content">
                <h4>ios开发工程师</h4>
                <span>工作2年以上，性格开朗，积极向上，有良好的沟通和审美能力。</span>
              </div>
            </div>
            <div className="joinus_list">
              <div className="joinus_list__content">
                <h4>PHP开发工程师</h4>
                <span>工作2年以上，具有优良的编程风格和习惯，并会编写开发文档。</span>
              </div>
            </div>
            <div className="joinus_list">
              <div className="joinus_list__content">
                <h4>网站前端开发工程师</h4>
                <span>工作2年以上，精通JavaScript、div+css、Photoshop，熟悉响应式网站开发及HTML5。</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default joinusComponent;

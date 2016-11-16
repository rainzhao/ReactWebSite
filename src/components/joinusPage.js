require('../styles/joinus.scss');

import React from 'react';

class joinusComponent extends React.Component{
  render() {
    return (
      <div className="joinus_wrap">
        <div className="joinus_body">
          <h3>加入我们</h3>
          {/*<div  className="joinus__img">
         <img src="http://ofyi1vpax.bkt.clouddn.com/joinus_h.png" alt=""/>
         </div>*/}
          <div className="joinus_listwrap">
            <div className="joinus_list">
              <div className="joinus_list__content">
                <h4>产品经理</h4>
                <span>向客户调研和了解软件需求，帮助客户理清思路。深入了解客户商业模式，为客户设计和规划IT信息化解决方案。</span>
              </div>
            </div>
            <div className="joinus_list">
              <div className="joinus_list__content">
                <h4>JAVA资深工程师</h4>
                <span>根据产品需求进行产品的Java服务器端的开发工作，编写技术文档，以供团队协同工作时使用。对产品提出技术优化方案，以帮助产品有更好的用户体验。</span>
              </div>
            </div>
            <div className="joinus_list">
              <div className="joinus_list__content">
                <h4>用户体验官</h4>
                <span>能够独立参与客户访谈，并协助完善项目目标定义。独立完成标杆产品分析，从品牌、用户定位、功能特性、交互逻辑、视觉体验等多个方面解读产品等。</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default joinusComponent;

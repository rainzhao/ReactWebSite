require('styles/customerpage.scss');

import React from 'react';
import Slider from 'react-slick';

class customerComponent extends React.Component{
  render() {
    const settings ={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="customer_container">
        <div className="customer_swiper">
          <Slider {...settings}>
            <div className="customer_wrap">
              <h3>他们说</h3>
              <img src="http://ofyi1vpax.bkt.clouddn.com/theySay.png" alt=""/>
              <div className="customer__describe">
                <p>在企业信息化软件繁杂的今天</p>
                <p>能够拥有一套完全符合企业运营业务流程的IT管理软件的需求变得日益突然</p>
                <p>也成为了企业在未来的O2O战场上是否能够成功的重要因素</p>
                <p>很感谢微杨科技带来的技术服务</p>
              </div>
              <div className="customer__name">
                <p>报喜鸟集团电商副总裁</p>
                <p>王琪先生</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}

export default customerComponent;

require('normalize.css/normalize.css');
require('styles/App.scss');
require('styles/aboutus.scss');

import React from 'react';
import Slider from 'react-slick';

class aboutusComponent extends React.Component {
  render () {
    const settings ={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="aboutus_wrap">
        <div className="aboutus_swiper">
          <Slider {...settings}>
            <div className="aboutus_swiper_main">
              <div className="aboutus_swiper_header">
                <p>找不到合适的</p>
                <h2>CTO<small>?</small>技术合伙人<small>?</small></h2>
              </div>
              <div className="aboutus_swiper_body">

                <img src="http://ofyi1vpax.bkt.clouddn.com/smallr.png" alt=""/>
                <h3>创始人兼CEO</h3>
                <div className="aboutus_swiper_describe">
                  <span>周之桦</span>
                  <div className="about_swiper_describe__one">
                    <p>上海交通大学计算机专业</p>
                    <p>程序猿，DBA，高级SA，架构师</p>
                    <p>IT解决方案设计，互联网商业模式研究</p>
                  </div>
                  <div className="about_swiper_describe__two">
                    <p>15年企业信息化服务</p>
                    <p>5年跨国公司首席技术官</p>
                    <p>4年公益组织服务及志愿者管理</p>
                    <p>2014年上海爱好儿童康复中心优秀志愿者</p>
                    <p>2015年度上海市慈善基金会优秀义工</p>
                    <p>上海蓝丝带行动志愿者团队发起人及理事长助理</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}

export default aboutusComponent;

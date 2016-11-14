require('../styles/ourcasepage.scss');

import React from 'react';
import Slider from 'react-slick';

class OurcaseComponent extends React.Component{
  render () {
    const settings ={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    let showCase = (event) => {
      this.props.callFullBack(event.target.alt);
    };
    let ourcaseData = this.props.getFullBack.caseData;
    return (
      <div className="ourcase_wrap">
        <div className="ourcase_header">
          <h3>我们的案例</h3>
        </div>
        <div className="ourcase_switch">
          <Slider {...settings}>
            {ourcaseData.map(onecase =>
              <div className="ourcase_switch_wrap" key={onecase.id}>
                <div className="ourcase_switch_inner">
                  <div className="ourcase_switch__img" onClick={showCase}>
                    <img src={onecase.imgLink} alt={onecase.id}  />
                  </div>
                  <div className="ourcase_switch__describe">
                    <div className="ourcase_switch__des_h">
                      <h3>{onecase.name}</h3>
                    </div>
                    <div className="ourcase_switch__des_b">
                      <p>{onecase.text1}</p>
                      <p>{onecase.text2}</p>
                      <p>{onecase.text3}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Slider>
        </div>
      </div>
    )
  }
}

export default OurcaseComponent;

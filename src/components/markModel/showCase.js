require('../../styles/showcase.scss');

import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';
class ShowCaseComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      num: 1
    }
  }

  render() {
    let _afterChange = (i) => {
      this.setState({...this.state,index: i});
      let numi = i;
      ++numi;
      if(numi>this.props.getFullcase.showCaseData.length){
        numi = this.props.getFullcase.showCaseData.length-1;
        this.setState({...this.state,num:numi});
      }
      this.setState({...this.state,num:numi});
    };
    const settings ={
      dots: false,
      infinite: false,
      speed: 500,
      touchMove: true,
      afterChange: _afterChange,
      initialSlide: this.state.index
    };
    let showhide = classNames({
      'showhide': this.props.getFullcase.caseState
    });

    let closeCase = () => {
      this.setState({...this.state,index: 0,num:1});
      this.props.closeFullcase();
    };
    return (
      <div  className={"showcase_wrap " + showhide}>
        <div key={Math.random()}>
          <div className="showcase_header">
            <div className="showcase_header__mes">
              <span>{this.state.num+"/"}</span>
              <span>{this.props.getFullcase.showCaseData.length}</span>
            </div>
            <div className="showcase_header__close" onClick={closeCase}>
            </div>
          </div>
          {this.props.getFullcase.showCaseData.length>0?(
            <Slider {...settings}>
              {this.props.getFullcase.showCaseData.map(oneCase => (
                <div className="showcase_body" key={Math.random()}>
                  <img src={oneCase} alt=""/>
                </div>
                ))
              }
            </Slider>
          ):null}
        </div>
      </div>
    )
  }
}

export default ShowCaseComponent;


















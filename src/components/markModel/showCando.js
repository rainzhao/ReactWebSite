require('styles/showcando.scss');

import React from 'react';
import classNames from 'classnames';

export default class ShowCandoComponent extends React.Component{
  render(){
    let showCando = classNames({
      'showCando': this.props.getCando.candoState
    });
    let closeCando = () => {
      this.props.closeCando();
    };
    let data = this.props.getCando.showCandoData;
    return (
      <div className={"showCandoWrap " + showCando}>
        <div className="showCando_mes" onClick={closeCando}>
          <div className="showCando_detail">
          {data.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <span>{item.describe}</span>
            </div>
          ))}
          </div>
          <img src="images/bgImg/cando.png" alt=""/>
        </div>
      </div>
    )
  }
}


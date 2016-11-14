import React from 'react';

require('styles/marktel.scss');

class MarktelComponent extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    let closeMark = () => {
      this.props.onClose();
    };
    return (
      <div className={"telAlert " + this.props.telc}>
        <div className="marktel_wrap">
          <div className="marktel_center">
            <div className="marktel_content">
              <h3>确定拨打</h3>
              <p>400-0011-096</p>
              <div className="marktel_btn">
                <button onClick={closeMark}>否</button>
                <button onClick={closeMark}><a href="tel:400-011-096">是</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MarktelComponent;

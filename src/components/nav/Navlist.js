require('styles/nav.scss');

import React from 'react';
import addones from 'react-addons';


class NavComponent extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      navs: [
        {id: 1, title: '关于我们',link:'#aboutpage'},
        {id: 2, title: '我们的态度',link:'#attitudepage'},
        {id: 3, title: '客户说',link:'#custompage'},
        {id: 4, title: '我们能做',link:'#candopage'},
        {id: 5, title: '案例',link:'#ourcasepage'},
        {id: 6, title: '加入我们',link:'#joinuspage'},
        {id: 7, title: '技术帮助',link:'#technicalpage'},
        {id: 8, title: '联系我们',link:'#contactpage'}],
      navsState :false,
      listActive: false
    };
  }
  render() {
    let cx = addones.classSet;
    let classes = cx({
      'listActive': this.state.listActive,
    });

    let toggleNavs = () => {
      this.setState({...this.state, listActive: !this.state.listActive});
    };
    const navs = this.state.navs;
    return (
      <div className="navwrap">
        <div className="nav_btn">
          <ul onClick={toggleNavs} className={classes}>
            <li> </li>
            <li> </li>
            <li> </li>
          </ul>
        </div>
        <div className={'nav_list ' + classes}>
          <ul>
            {navs.map(nav => <li key={nav.id} onClick={toggleNavs}><a href={nav.link}>{nav.title}</a></li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default NavComponent;










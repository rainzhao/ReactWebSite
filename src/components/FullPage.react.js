import React from 'react';
import 'fullpage.js';
import $ from 'jquery';

import HomeComponent from './homePage.js';
import AboutUsComponent from './aboutPage.js';
import AttitudeComponent from './attitudePage.js';
import CustomerComponent from './customerPage.js';
import CandoComponent from './candoPage.js';
import JoinusComponent from './joinusPage.js';
import TechnicalComponent from './technicalPage.js';
import ContactComponent from './contactPage.js';
import NavheaderComponent from './nav/navheader.js';
import OurcaseComponent from './ourcasePage.js';
import ShowCaseComponent from './markModel/showCase.js';
import classNames from 'classnames'

export default class FullPage extends React.Component{
  constructor(props){
    super(props);
    let imgUrl = "http://ofyi1vpax.bkt.clouddn.com/";
    this.state = {
      caseState: '',
      caseData: [
        {'id':1 ,'name':'优觅','imgLink':imgUrl+'case01.png','text1':'以健康的饮食改变用户的就餐习惯','text2':'客户在线选购食品、线下解冻使用','text3':'解决上班族没时间做饭、餐厅等位时间长等餐饮痛点'},
        {'id':2 ,'name':'优觅','imgLink':imgUrl+'case02.png','text1':'以健康的饮食改变用户的就餐习惯','text2':'客户在线选购食品、线下解冻使用','text3':'解决上班族没时间做饭、餐厅等位时间长等餐饮痛点'},
        {'id':3 ,'name':'优觅','imgLink':imgUrl+'case03.png','text1':'以健康的饮食改变用户的就餐习惯','text2':'客户在线选购食品、线下解冻使用','text3':'解决上班族没时间做饭、餐厅等位时间长等餐饮痛点'},
        {'id':4 ,'name':'优觅','imgLink':imgUrl+'case04.png','text1':'以健康的饮食改变用户的就餐习惯','text2':'客户在线选购食品、线下解冻使用','text3':'解决上班族没时间做饭、餐厅等位时间长等餐饮痛点'},
        {'id':5 ,'name':'优觅','imgLink':imgUrl+'case05.png','text1':'以健康的饮食改变用户的就餐习惯','text2':'客户在线选购食品、线下解冻使用','text3':'解决上班族没时间做饭、餐厅等位时间长等餐饮痛点'},
        {'id':6 ,'name':'优觅','imgLink':imgUrl+'case06.png','text1':'以健康的饮食改变用户的就餐习惯','text2':'客户在线选购食品、线下解冻使用','text3':'解决上班族没时间做饭、餐厅等位时间长等餐饮痛点'}
      ],
      showCaseData: [],
      homeFullClass: ''
    }
  }
  onCaseChanged = (id) =>{
    let imgUrl = "http://ofyi1vpax.bkt.clouddn.com/";
    this.setState({...this.state, showCaseData: this.state.showCaseData=[]});
    if(id == 1){
      this.setState({...this.state, showCaseData: this.state.showCaseData=[]});
      this.setState({...this.state,showCaseData:this.state.showCaseData.push(...[imgUrl+'bigyoume.jpg',imgUrl+'bigyoumi01.png',imgUrl+'bigyoumi2.png'])})
    }
    if(id ==2){
      this.setState({...this.state, showCaseData: this.state.showCaseData=[]});
      this.setState({...this.state,showCaseData:this.state.showCaseData.push(...[imgUrl+'bigmusic.png',imgUrl+'bigmusic2.png',imgUrl+'bigmusic3.png',imgUrl+'bigmusics.png'])})
    }
    if(id ==3){
      this.setState({...this.state, showCaseData: this.state.showCaseData=[]});
      this.setState({...this.state,showCaseData:this.state.showCaseData.push(...[imgUrl+'bigclothes.jpg',imgUrl+'bigclothess.jpg'])})
    }
    if(id ==4){
      this.setState({...this.state, showCaseData: this.state.showCaseData=[]});
      this.setState({...this.state,showCaseData:this.state.showCaseData.push(...[imgUrl+'bigsay.png',imgUrl+'bigsay2.png',imgUrl+'bigsay3.png'])})
    }
    if(id ==5){
      this.setState({...this.state, showCaseData: this.state.showCaseData=[]});
      this.setState({...this.state,showCaseData:this.state.showCaseData.push(...[imgUrl+'bigkaimi.jpg'])})
    }
    if(id ==6){
      this.setState({...this.state, showCaseData: this.state.showCaseData=[]});
      this.setState({...this.state,showCaseData:this.state.showCaseData.push(...[imgUrl+'bigcolllec.png'])})
    }
    this.setState({...this.state,caseState:'showHide'});
  };
  closeFullCases = () => {
    this.setState({...this.state,caseState:''});
  };
  componentDidMount() {
    let afterLoadCss = (anchorLink,index) => {
      let homeFullClass = '';
      if(index == 1){
        homeFullClass = classNames({'homeFullClass':true});
        this.setState({...this.state,homeFullClass: homeFullClass})
      }else{
        homeFullClass = classNames({'homeFullClass':false});
        this.setState({...this.state,homeFullClass: homeFullClass})
      }
    };
    $(this.fullpageElem).fullpage({
      anchors:['homepage', 'aboutpage', 'attitudepage','custompage','candopage','ourcasepage','joinuspage','technicalpage','contactpage'],
      afterLoad: afterLoadCss
    });
  }
  render() {

    return (
      <div>
        <div className={this.state.homeFullClass}>
          <NavheaderComponent />
        </div>
        <div  ref={(fullpageElem) => this.fullpageElem = fullpageElem}>
          <div className="section">
            <HomeComponent />
          </div>
          <div className="section">
            <AboutUsComponent />
          </div>
          <div className="section">
            <AttitudeComponent />
          </div>
          <div className="section">
            <CustomerComponent />
          </div>
          <div className="section">
            <CandoComponent />
          </div>
          <div className="section">
            <OurcaseComponent getFullBack={this.state} callFullBack={this.onCaseChanged}/>
          </div>
          <div className="section">
            <JoinusComponent />
          </div>
          <div className="technical_page section">
            <TechnicalComponent />
          </div>
          <div className="section">
            <ContactComponent />
          </div>
        </div>
        <ShowCaseComponent getFullcase={this.state} closeFullcase={this.closeFullCases}/>
      </div>
    )
  }
}



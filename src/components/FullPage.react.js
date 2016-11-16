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
import classNames from 'classnames';
import ShowCandoComponent from './markModel/showCando.js';

export default class FullPage extends React.Component{
  constructor(props){
    super(props);
    let imgUrl = "http://ofyi1vpax.bkt.clouddn.com/";
    this.state = {
      caseState: '',
      caseData: [
        {'id':1 ,'name':'悠觅','imgLink':imgUrl+'case01.png','text1':'为了解决白领上班无暇做饭、外出就餐等位时间长、外卖食材卫生安全不能保障。以健康的饮食改变用户的就餐系统，客户在线选购食品，线下加热即食。','text2':'','text3':''},
        {'id':2 ,'name':'上海交响乐团','imgLink':imgUrl+'case02.png','text1':'作为亚洲地区历史最为悠久的交响乐团，用户可以通过便捷的方式快速选择心仪的演出场次并完成订票操作。','text2':'','text3':''},
        {'id':3 ,'name':'恺米切','imgLink':imgUrl+'case03.png','text1':'是意大利FENICIA S.p.A 集团旗下衬衫定制品牌。秉承着历史悠久的家族文化，坚持传统精湛的工艺处理。','text2':'','text3':''},
        {'id':4 ,'name':'优觅','imgLink':imgUrl+'case04.png','text1':'以健康的饮食改变用户的就餐习惯','text2':'客户在线选购食品、线下解冻使用','text3':'解决上班族没时间做饭、餐厅等位时间长等餐饮痛点'},
        {'id':5 ,'name':'派菲柏乐','imgLink':imgUrl+'case05.png','text1':'项目简介：知名床垫品牌','text2':'项目亮点：品牌宣传形象打造及内容管理系统的开发 ','text3':''},
        {'id':6 ,'name':'爱回收','imgLink':imgUrl+'case06.png','text1':'开发创意趣味的接手机赢积分游戏，精美趣味且符合品牌形象的的视觉设计及稳定流畅的游戏体验。','text2':'','text3':''}
      ],
      showCaseData: [],
      homeFullClass: '',
      candoData: [
        {'id':1,'name':'个性化需求定制','describe': '还在嫌弃计算机太笨吗？那是因为您有个性化的软件需求没有被发现和满足。告诉我们，我们擅长把您的需求落地。'},
        {'id':2,'name':'电商平台','describe': '还在某宝上开店，可是头疼无法在微信推广中直接达成购买？是时候拥有专属你的电商平台，跨平台的。'},
        {'id':3,'name':'互联网品牌','describe':'在朋友圈中发布自己的网站，可是点开布局全乱；在度娘中搜索自己，却发现被低级的转码。高端、专业、时尚、现代设计背后需要专业。'},
        {'id':4,'name': '大数据管理','describe':'还在头疼无法追踪客户访问路径，访问量、复购率、转化率？ 建立自己的CRM系统吧，做自己的数据管家， VIP客户任你挖。'}
      ],
      candoState: '',
      showCandoData:[]
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
  onCandoChanged = (item) => {

    if(item == 1){
      this.setState({...this.state, showCandoData: this.state.showCandoData=[]});
      this.setState({...this.state, showCandoData: this.state.showCandoData.push(this.state.candoData[item-1])});
    }
    if(item == 2){
      this.setState({...this.state, showCandoData: this.state.showCandoData=[]});
      this.setState({...this.state, showCandoData: this.state.showCandoData.push(this.state.candoData[item-1])});
    }
    if(item == 3){
      this.setState({...this.state, showCandoData: this.state.showCandoData=[]});
      this.setState({...this.state, showCandoData: this.state.showCandoData.push(this.state.candoData[item-1])});
    }
    if(item == 4){
      this.setState({...this.state, showCandoData: this.state.showCandoData=[]});
      this.setState({...this.state, showCandoData: this.state.showCandoData.push(this.state.candoData[item-1])});
    }
    this.setState({...this.state,candoState:'true'});
  };
  closeCando = () => {
    this.setState({...this.state,candoState:''});
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
            <CandoComponent  candoCallBack={this.onCandoChanged}/>
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
        <ShowCandoComponent getCando={this.state} closeCando={this.closeCando}/>
      </div>
    )

  }
}



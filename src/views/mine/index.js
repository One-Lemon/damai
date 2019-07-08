import React, { Component } from 'react'
import { List, Button } from 'antd';
import { ListWrap, Wrapper, HeaderWrap, MainWrap, FootWrap, UserGreeting, GuestGreeting } from './style';
import { connect } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom'


class Mine extends Component {
  // constructor(props){
  //   super(props);
  //   // this.state = {
  //   //   display: 'none',
  //   //   isLoggedIn:true
  //   // }
  // }
  render() {
    return (
      <Wrapper>
        <HeaderWrap >
          <div className='Header-Avator'></div>
          <p className='Header-name'><Greeting isLoggedIn={this.props.isLoggedIn}/></p>
        </HeaderWrap>
        <MainWrap>
          <ListWrap>
            <List.Item>
              <div className='main-title'>
                <i className='iconfont icon-wodedingdan'></i>
                <NavLink to='/order'>我的订单</NavLink>
              </div>
              <div className='main-right'><i className='iconfont icon-arrow-right'></i></div>
            </List.Item>
            <List.Item>
              <div className='main-title'>
                <i className='iconfont icon-youhuijuan'></i>
                <NavLink to='/coupon'>优惠卷</NavLink>
                </div>
              <div className='main-right'><i className='iconfont icon-arrow-right'></i></div>
            </List.Item>
            <List.Item>
              <div className='main-title'>
                <i className='iconfont icon--wodeyouhuijuan'></i>
                <NavLink to='/myticket'>我的票</NavLink>
              </div>
              <div className='main-right'><i className='iconfont icon-arrow-right'></i></div>
            </List.Item>
          </ListWrap>
          <ListWrap>
            <List.Item>
              <div className='main-title'>
                <i className='iconfont icon-icon-test'></i>
                <span>我的关注</span>
              </div>
              <div className='main-right'><i className='iconfont icon-arrow-right'></i></div>
            </List.Item>
          </ListWrap>
          <ListWrap>
            <List.Item>
              <div className='main-title'>
                <i className='iconfont icon-shouhuodizhi'></i>
                <span>收货地址</span>
              </div>
              <div className='main-right'><i className='iconfont icon-arrow-right'></i></div>
            </List.Item>
            <List.Item>
              <div className='main-title'>
                <i className='iconfont icon-changyonggoupiaoren48'></i>
                <span>常用购票人</span>
              </div>
              <div className='main-right'><i className='iconfont icon-arrow-right'></i></div>
            </List.Item>
            <List.Item>
              <div className='main-title'>
                <i className='iconfont icon-shimingrenzheng'></i>
                <span>实名认证</span>
              </div>
              <div className='main-right'><i className='iconfont icon-arrow-right'></i></div>
            </List.Item>
            <List.Item>
              <div className='main-title'>
                <i className='iconfont icon-yijianfankui'></i>
                <span>意见反馈</span>
              </div>
              <div className='main-right'><i className='iconfont icon-arrow-right'></i></div>
            </List.Item>
            <List.Item>
              <div className='main-title'>
                <i className='iconfont icon-kefudianhua'></i>
                <span>客服电话</span>
              </div>
              <div className='main-right'><span>1010-3721</span></div>
            </List.Item>
          </ListWrap>
          <BtnGreeting isLoggedIn={this.props.isLoggedIn}/>
          <FootWrap>
            <p className='about-link'>关于大麦</p>
            <p className="about-line">|</p>
            <p className='about-link'>联系我们</p>
          </FootWrap>
        </MainWrap>
      </Wrapper>
    )
  }
}

function Greeting(props) {
  // console.log(props);
  const userInfo= JSON.parse(window.localStorage.getItem('Sign'));
  console.log(userInfo);
  // console.log(userInfo[0].username);
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting to=''>{'欢迎___'+userInfo.username}</UserGreeting>;
  }
  return <GuestGreeting to='/login'>登录/注册</GuestGreeting>;
}

function BtnGreeting(props) {
  const isLoggedIn = props.isLoggedIn;
  function handleSignOut () {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('visible')
    window.location.reload()
  }
  if (isLoggedIn) {
    return (
      <ListWrap>
      <List.Item>
        <Button style={{width:'100%',border:'0'}} onClick={handleSignOut}>退出登录</Button>
      </List.Item>
    </ListWrap>
    );
  }
  return null;
}
export default connect(
  ({login}) => ({
    isLoggedIn: login.isLoggedIn
})
,null)(Mine)



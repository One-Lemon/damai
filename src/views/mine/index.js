import React, { Component } from 'react'
import { List } from 'antd';
import { ListWrap, Wrapper, HeaderWrap, MainWrap, FootWrap } from './style';
import { NavLink } from 'react-router-dom'
import './style.css'
export default class Mine extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderWrap >
          <div className='Header-Avator'></div>
          <p className='Header-name'><NavLink to='/login'>登录/注册</NavLink></p>
        </HeaderWrap>
        <MainWrap>
          <ListWrap>
            <List.Item>
              <div className='main-title'>
                <i className='iconfont icon-wodedingdan'></i>
                <span>我的订单</span>
              </div>
              <div className='main-right'><i className='iconfont icon-arrow-right'></i></div>
            </List.Item>
            <List.Item>
              <div className='main-title'>
                <i className='iconfont icon-youhuijuan'></i>
                <span>优惠卷</span>
                </div>
              <div className='main-right'><i className='iconfont icon-arrow-right'></i></div>
            </List.Item>
            <List.Item>
              <div className='main-title'>
                <i className='iconfont icon--wodeyouhuijuan'></i>
                <span>我的票</span>
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


import React, { Component } from 'react';
import { Affix, Icon } from 'antd';
import { Main, Content, Bottom, BottomLeft, BuyButton, DetailTop, ServiceBar, DetailTimeInfo } from './style';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1273085_b04qwv7wexj.js'
})


export default class Pdetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bottom: 0
    }
  }
  render() {
    return (
      <Main>
        <Content>
          <DetailTop>
            <div className="bg-default" style={{backgroundImage: "url(https://gd2.alicdn.com/imgextra/i3/0/O1CN01MncWU52GdSBD0Cknv_!!0-item_pic.jpg_400x400)"}}>
            </div>
            <div className="container">
              <div className="imgframe">
                <div className="img" style={{backgroundImage: "url(https://gd2.alicdn.com/imgextra/i3/0/O1CN01MncWU52GdSBD0Cknv_!!0-item_pic.jpg_400x400)"}}></div>
              </div>
              <div className="right-content">
                <div className="right-content-top">
                  <p className="title">
                    【成都】“UNINE FAN MEETING TOUR ‘RUN TO U’”全国巡回见面会Ending场
                  </p>
                </div>
                <div className="right-content-bottom">
                  <span className="price">¥499-¥1299</span>
                </div>
              </div>
            </div>
          </DetailTop>
          <ServiceBar>
            <div className="service-item">
              <Icon type="close-circle" />
              <div className="text">不支持选座</div>
            </div>
            <div className="service-item">
              <Icon type="check-circle" />
              <div className="text">快递票</div>
            </div>
            <div className="service-item">
              <Icon type="check-circle" />
              <div className="text">纸质发票</div>
            </div>
          </ServiceBar>
          <DetailTimeInfo>
            <div className="left">
              <div className="time">
                <span className="time-str">
                  2019.07.27 周六 19:30
                </span>
                <Icon type="right" />
              </div>
              <div className="time-desc">
                演出时长约90分钟（以现场为准）
              </div>
            </div>
            <div className="right">
              <MyIcon type="icon-zuoweitu_" />
              <span className="seat-text">座位图</span>
            </div>
            <div className="bottom-line">

            </div>
          </DetailTimeInfo>
        </Content>
        <Affix offsetBottom={this.state.bottom}>
          <Bottom>
            <BottomLeft>
              <Icon type="home"  className="leftIcon"/>
              <p className="leftMsg">大麦首页</p>
            </BottomLeft>
            <BottomLeft>
              <Icon type="heart"  className="leftIcon"/>
              <p className="leftMsg">想看</p>
            </BottomLeft>
            <BuyButton>
              <p className="buybuttontext">立即预订</p>
            </BuyButton>
          </Bottom>
        </Affix>
      </Main>
    )
  }
}


import React, { Component } from 'react';
import { Affix, Icon } from 'antd';
import { connect } from 'react-redux';
import * as actions from './store/actionCreates';
import { Main, Content, Bottom, BottomLeft, BuyButton, DetailTop, ServiceBar, DetailTimeInfo, LocationInfo, SectionPadding, SectionTitle, CellContent, ArtistCardWrapper, NoticeSection, DetailSuggest, DetailSuggestItem } from './style';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1273085_64g1smiaz0e.js'
})


class Pdetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bottom: 0
    }
  }
  render() {
    console.log(this.props.list.staticData);
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
                    {/* {this.props.list[0].staticData.itemBase} */}
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
            <div className="bottom-line"></div>
          </DetailTimeInfo>
          <LocationInfo>
            <div className="location-left">
              <p className="location-left-city single-line">
                成都市 | 五粮液成都金融城演艺中心
              </p>
              <p className="location-left-address single-line">
                成都市武侯区锦城大道大魔方演艺中心
              </p>
            </div>
            <div className="location-right">
              <MyIcon type="icon-dingwei"/>
            </div>
          </LocationInfo>
          <SectionPadding />
          <SectionTitle>
            <div className="title-text">演出介绍</div>
          </SectionTitle>
          <CellContent>
            <div className="project-detail-html" style={{overflow:"hidden",height: "190px"}}>
              <div className="project-readmore__bg"></div>
              <div className="item-detail-html-box">
                <p>
                  <img alt="" src="https://img.alicdn.com/imgextra/i1/2251059038/O1CN01tPaWt12GdSBMMB7Kd_!!2251059038.jpg_620x10000Q75s200_.webp"/>
                </p>
              </div>
            </div>
            <div className="project-readmore">展开更多</div>
          </CellContent>
          <ArtistCardWrapper>
            <SectionTitle>
              <div className="title-text">演出阵容</div>
            </SectionTitle>
            <div className="artist-card">
              <div className="artist-card-img" style={{backgroundImage: "url(https://intercms.damai.cn/artist/pic/1557804097928/1557804097928-main.jpg)"}}>
              </div>
              <div className="artist-card-content">
                <div className="artist-card-content-top">
                  <span>UNINE</span>
                  <div className="btn">
                    <Icon type="plus" />
                    关注
                  </div>
                </div>
                <div className="artist-card-content-archives">
                  由李汶翰、李振宁、姚明明、管栎、嘉羿、胡春杨、夏瀚宇、陈宥维、何昶希组成。
                </div>
              </div>
            </div>
          </ArtistCardWrapper>
          <SectionPadding />
          <NoticeSection>
            <SectionTitle>
              <div className="title-text">须知事项</div>
            </SectionTitle>
            <div className="subtitle">购票须知</div>
            <div className="notice-content">
              <div className="info-item">
                <div className="item-title">
                  <Icon type="check-circle" />
                  <div className="text">限购说明</div>
                </div>
                <div className="item-text">每个账号最多购买4张</div>
              </div>
              <div className="info-item">
                <div className="item-title">
                  <Icon type="check-circle" />
                  <div className="text">实名制</div>
                </div>
                <div className="item-text">购买时您需要输入购票人身份证信息，每笔订单对应一个证件号</div>
              </div>
              <div className="info-item">
                <div className="item-title">
                  <Icon type="check-circle" />
                  <div className="text">配送信息说明</div>
                </div>
                <div className="item-text">本项目不支持修改配送地址，请务必在下单前检查好您的收货地址</div>
              </div>
              <div className="read-more">
                <div className="text">全部9条购票须知</div>
              </div>
            </div>
            <div className="subtitle subtitle-margin-top">观演须知</div>
            <div className="notice-content">
              <div className="info-item">
                <div className="item-title">
                  <Icon type="check-circle" />
                  <div className="text">入场时间</div>
                </div>
                <div className="item-text">演出前约90分钟</div>
              </div>
              <div className="info-item">
                <div className="item-title">
                  <Icon type="check-circle" />
                  <div className="text">禁止携带物品</div>
                </div>
                <div className="item-text">由于安保和版权的原因，大多数演出、展览及比赛场所禁止携带食品、饮料、专业摄录设备、打火机等物品，请您注意现场工作人员和广播的提示，予以配合</div>
              </div>
              <div className="info-item">
                <div className="item-title">
                  <Icon type="check-circle" />
                  <div className="text">寄存说明</div>
                </div>
                <div className="item-text">无寄存处，请自行保管携带物品</div>
              </div>
              <div className="read-more">
                <div className="text">全部7条观演须知</div>
              </div>
            </div>
          </NoticeSection>
          <DetailSuggest>
            <h4 className="detail-suggest-title">为你推荐</h4>
            <DetailSuggestItem>
              <div className="project-item">
                <div className="project-item_pic">
                  <img alt="" className="project-item_pic_poster" src="https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN013X5ghV2GdSBEHz0FI_!!0-item_pic.jpg_q60.jpg_.webp"/>
                </div>
                <div className="project-item_info">
                  <div className="project-item_info_title project-item_limit_lines_2 project-item_info_title_line">
                    <span>施展【UNLOCK THE MIRACLE】解锁奇迹FAN MEETING</span>
                  </div>
                  <div className="project-item_info_time project-item_limit_lines_1">
                    成都 / 2019.07.27 周六 19:30 / 华熙LIVE·528M空间
                  </div>
                  <div className="project-item_info_price">
                    <span className="project-item_info_price_str">
                      ￥280-880
                    </span>
                  </div>
                </div>
              </div>
            </DetailSuggestItem>
          </DetailSuggest>
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

  componentDidMount () {
    this.props.handleDetailstList()
  }
}

export default connect (
  ({pdetails}) => ({
    list: pdetails.list
  }),
  (dispatch) => ({
    handleDetailstList () {
      dispatch(actions.asyncDetailsList())
    }
  })
)(Pdetails)

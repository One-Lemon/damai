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
    let data = this.props.list ? this.props.list : {}
    return (
      <Main>
        <Content>
          <DetailTop>
            <div className="bg-default" style={{backgroundImage: `url(${data.staticData ?data.staticData.itemBase.itemPic:''})`}}>
            </div>
            <div className="container">
              <div className="imgframe">
                <div className="img" style={{backgroundImage: `url(${data.staticData ?data.staticData.itemBase.itemPic:''})`}}></div>
              </div>
              <div className="right-content">
                <div className="right-content-top">
                  <p className="title">
                    {data.staticData?data.staticData.itemBase.itemName:''}
                  </p>
                </div>
                <div className="right-content-bottom">
                  <span className="price">{data.item?data.item.priceRange:''}</span>
                </div>
              </div>
            </div>
          </DetailTop>
          <ServiceBar>
            {data.staticData ? data.staticData.itemBase.serviceNotes.map((item, index) => {
              return (
                <div className="service-item" key={index}>
                  <Icon type={item.isSupport === "true" ? "check-circle" : "close-circle" } />
                  <div className="text">{item.tagName}</div>
                </div>
              )
            }) : ''}
          </ServiceBar>
          <DetailTimeInfo>
            <div className="left">
              <div className="time">
                <span className="time-str">
                  {data.staticData?data.staticData.itemBase.showTime:''}
                </span>
                <Icon type="right" />
              </div>
              <div className="time-desc">
                {data.staticData?data.staticData.itemBase.showDuration:''}
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
                {data.staticData ? data.staticData.venue.venueCityName : ''} | {data.staticData ? data.staticData.venue.venueName : ''}
              </p>
              <p className="location-left-address single-line">
              {data.staticData ? data.staticData.venue.venueAddr : ''}
              </p>
            </div>
            <div className="location-right">
              <MyIcon type="icon-dingwei"/>
            </div>
          </LocationInfo>
          <SectionPadding />
          <SectionTitle>
            <div className="title-text">
              {data.staticData? data.staticData.itemExtendInfo.itemDescTitle : ''}
            </div>
          </SectionTitle>
          <CellContent>
            <div className="project-detail-html" style={{overflow:"hidden",height: "190px"}}>
              <div className="project-readmore__bg"></div>
              <div className="item-detail-html-box" dangerouslySetInnerHTML={{ __html:data.staticData ? data.staticData.itemExtendInfo.itemExtend : ''}}>
              </div>
            </div>
            <div className="project-readmore">展开更多</div>
          </CellContent>
          <ArtistCardWrapper>
            <SectionTitle>
              <div className="title-text">演出阵容</div>
            </SectionTitle>
            {data.dynamicExtData ? data.dynamicExtData.artists.map((item, index) => {
                return (
                  <div className="artist-card" key={index}>
                    <div className="artist-card-img" style={{backgroundImage: `url(${item.picUrl})`}}>
                    </div>
                    <div className="artist-card-content">
                      <div className="artist-card-content-top">
                        <span>{item.artistName}</span>
                        <div className="btn">
                          <Icon type="plus" />
                          关注
                        </div>
                      </div>
                      <div className="artist-card-content-archives">
                        {item.archives}
                      </div>
                    </div>
                  </div>
                )
              }) : ''}
            {/* <div className="artist-card">
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
            </div> */}
          </ArtistCardWrapper>
          <SectionPadding />
          <NoticeSection>
            <SectionTitle>
              <div className="title-text">{data.staticData ? data.staticData.noticeMatter.title : ''}</div>
            </SectionTitle>
            {data.staticData ? data.staticData.noticeMatter.noticeList.map((item,index) => {
              return (
                <div key={index}>
                  <div className={index===0 ? "subtitle" : "subtitle subtitle-margin-top"}>{item.noteTitle}</div>
                  {item.ticketNoteList.map((item,index) => {
                    return (
                      <div className="notice-content" key={index}>
                        <div className="info-item">
                          <div className="item-title">
                            <Icon type="check-circle" />
                            <div className="text">{item.title}</div>
                          </div>
                          <div className="item-text">{item.content}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            }) : ''}
            {/* <div className="subtitle">购票须知</div>
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
            </div> */}
          </NoticeSection>
          <DetailSuggest>
            <h4 className="detail-suggest-title">为你推荐</h4>
            {this.props.recomlist.map(item => {
              return (
                <DetailSuggestItem key={item.id}>
                  <div className="project-item">
                    <div className="project-item_pic">
                      <img alt="" className="project-item_pic_poster" src={item.verticalPic}/>
                    </div>
                    <div className="project-item_info">
                      <div className="project-item_info_title project-item_limit_lines_2 project-item_info_title_line">
                        <span>{item.name}</span>
                      </div>
                      <div className="project-item_info_time project-item_limit_lines_1">
                        {item.cityName} / {item.showTime} / {item.venueName}
                      </div>
                      <div className="project-item_info_price">
                        <span className="project-item_info_price_str">
                          ￥{item.priceStr}
                        </span>
                      </div>
                    </div>
                  </div>
                </DetailSuggestItem>
              )
            })}
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
              <p className="buybuttontext">{data.item ? data.item.buyBtnText : ''}</p>
            </BuyButton>
          </Bottom>
        </Affix>
      </Main>
    )
  }

  componentDidMount () {
    let id = this.props.match.params.id
    this.props.handleDetailstList(id)
    this.props.handleRecommendedList()
  }
}

export default connect (
  ({pdetails}) => ({
    list: pdetails.list,
    recomlist: pdetails.recomlist
  }),
  (dispatch) => ({
    handleDetailstList (id) {
      dispatch(actions.asyncDetailsList(id))
    },
    handleRecommendedList () {
      dispatch(actions.asyncRecommendedList())
    }
  })
)(Pdetails)

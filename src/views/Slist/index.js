import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SlistBox, BgBox, BgPic, MainBox, HeadBox, PageTitle, MiddleSelect, BottmDetail } from './style';
import * as actions from './store/actionCreates';
import { Icon } from 'antd';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1272983_uk1e3s8tthq.js'
})

class Slist extends Component {
  nav = [
    { id: 1, name: '全部' },
    { id: 2, name: '歌手' },
    { id: 3, name: '演员' },
    { id: 4, name: '演奏家' },
    { id: 5, name: '编剧导演' },
    { id: 6, name: '其他' },
  ]
  componentDidMount() {
    this.props.handleSingerList();
  }
  render() {
    // console.log(this.props.selectList)
    return (
      <SlistBox>
        <BgBox>
          <BgPic />
        </BgBox>
        <MainBox>
          <HeadBox>
            <PageTitle>
              <span className='abc'>大咖在大麦</span>
              <div className="search">
                <NavLink to="/search">
                  <input className="texInput" type="text" placeholder="搜大咖" style={{ paddingLeft: '1rem', color: '#111' }} />
                  <MyIcon type="icon-fangdajing" style={{ position: "absolute", top: "25%", left: '73%', fontSize: '.4rem', color: '#111' }} />
                </NavLink>
              </div>
            </PageTitle>
            <div className="bottomTitle">
              <span className="introduce">目前共229位大咖有上架演出</span>
              <span className="myFollow">我的关注
                <MyIcon type="icon-arrow-right" />
              </span>
            </div>
          </HeadBox>
          <MiddleSelect>
            <ul className="navBox">
              {
                this.nav.map(item => {
                  return <li key={item.id} className="navLi"
                    onClick={this.chgSelect.bind(this, `${item.name}`)} >
                    {item.name}
                  </li>
                })
              }
            </ul>
          </MiddleSelect>
          <BottmDetail>
            <div className="detailBox">
              {
                this.props.selectList.map((item, index) => {
                  return (
                    <div ref="performBox" key={item.damaiId} className="infoBox">
                      <div className="singerName" 
                        onClick={ this.handleChgPage.bind(this,`${item.damaiId}`) }>
                        <div className="singerInfo">
                          <div className="littlePic" style={{ backgroundImage: `url(${item.headPic})` }}></div>
                          <div className="littleName">
                            <span className="singer-name">{item.name}</span>
                            <span className="singer-tag">{item.subtype}</span>  <br />
                            <span className="singer-fans">{(item.fansCount / 10000).toFixed(1)}万粉丝</span>
                          </div>
                        </div>
                        <div className="follow">
                          <MyIcon type="icon-iconjia" />
                          关注</div>
                      </div>
                      <div className="performList">
                        <div className="perform-list" ref={"perform-list" + index} style={{ overflowY: "hidden", maxHeight: "3.86667rem" }}>
                          {
                            item.performanceInfo.map(performance => {
                              return (
                                <div key={performance.projectId} className="perform-cell">
                                  <p className="perform-title">{performance.projectName}</p>
                                  <p className="perform-address">
                                    <span className="perform-address-info">{performance.venueCity} / {performance.showTime} / {performance.venueName}
                                    </span>
                                  </p>
                                </div>
                              )
                            })
                          }

                        </div>
                        <div
                          className="perform-list-more"
                          style={{ display: 'block' }}
                          ref={'more' + index}
                          onClick={this.showMore.bind(this, index)}
                        >
                          共{item.performanceInfo.length}个演出
                          <MyIcon type="icon-arrow-down" style={{ marginLeft: '.2rem' }} />
                        </div>
                      </div>
                    </div>
                  )
                })
              } 

            </div>
          </BottmDetail>
        </MainBox>
      </SlistBox>
    )
  }
  showMore = (index) => {
    let aaa = "more" + index
    let bbb = "perform-list" + index
    this.refs[aaa].style.display = "none";
    this.refs[bbb].style.overflowY = "auto";
    this.refs[bbb].style.maxHeight = '';
  }

  chgSelect = (name) => {
    // console.log(name)
    this.props.handleSelect(name)
  }
  handleChgPage=(id)=>{
    this.props.handleChgDetailPage(id)
  }
}

export default connect(
  ({ slist }) => {
    return ({
      singerList: slist.singerList,
      selectList: slist.selectList,
    })
  },
  dispatch => ({
    handleSingerList() {
      dispatch(actions.asyncSingerList())
    },
    handleSelect(name) {
      dispatch(actions.selectPerformace(name))
    },
    handleChgDetailPage(id){// 跳转到特定id的歌手详情页
      
    }
  })
)(Slist)

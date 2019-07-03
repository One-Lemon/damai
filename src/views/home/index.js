import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { HomeHead, BigKa, SingList, Recent, HomeBox, HomeContent, SearchBox } from './style';
import { connect } from 'react-redux';
import { Icons, MenuNav, SlideShow } from './components';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1270780_bgsg0nlkspg.js'
})

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateList: ['今天', '明天']
    }
  }
  // 获取日期
  getDateList() {
    let week = new Date().getDay();
    let date = [];
    switch (week) {
      case 1:
        date = ['周三', '周四', '周五', '周六', '周日'];
        break;
      case 2:
        date = ['周四', '周五', '周六', '周日', '周一'];
        break;
      case 3:
        date = ['周五', '周六', '周日', '周一', '周二'];
        break;
      case 4:
        date = ['周六', '周日', '周三', '周四', '周五'];
        break;
      case 5:
        date = ['周日', '周三', '周四', '周五', '周六'];
        break;
      case 6:
        date = ['周一', '周二', '周三', '周四', '周五'];
        break;
      case 7:
        date = ['周二', '周三', '周四', '周五', '周六'];
        break;
      default:
        break;
    }
    let newDate = this.state.dateList;
    newDate = newDate.concat(date);
    this.setState({
      dateList: newDate
    })
  }
  
  componentDidMount() {
    this.getDateList();
  }
  render() {
    return (
      <HomeBox>
        <HomeHead>
          <Link to="/address" className="address">
            <MyIcon type="icon-gps" style={{ fontSize: '.5rem', marginRight: '4px' }} />
            深圳
         </Link>
          <Link to="/search" style={{ flex: 1 }}>
            <SearchBox>
              <MyIcon type="icon-fangdajing" className='fdj' />
              <span>搜索明星、演出比赛、场馆</span>
            </SearchBox>
          </Link>
          <Link to="/mine" className="mine">
            <MyIcon type="icon-yonghu" />
          </Link>
        </HomeHead>
        <HomeContent>
          <SlideShow />
          <Icons />
          <img src="./images/boss.jpg" alt="boss" style={{ width: '100%' }} />
          <div style={{ marginTop: '.56rem' }}>
            <BigKa>
              大咖在大麦
            <Link>查看更多 ></Link>
            </BigKa>
            <SingList>
              <ul>
                <li>123</li>
                <li>123</li>
                <li>123</li>
              </ul>
            </SingList>
          </div>
          <Recent>
            <div className="title">
              近期演出
            <span>演出日历 ></span>
            </div>
            <div className="date">
              {
                this.state.dateList.map((item, index) => {
                  return <NavLink key={index} to="/">{item}</NavLink>
                })
              }
            </div>
            <div className="card">
              <ul>
                <li>
                  <div className="card-pic">
                    123
                </div>
                  <p className="title">459</p>
                </li>
                <li>
                  <div className="card-pic">
                    123
                </div>
                  <p className="title">459</p>
                </li>
                <li>
                  <div className="card-pic">
                    123
                </div>
                  <p className="title">459</p>
                </li>
              </ul>
            </div>
          </Recent>
          <MenuNav />
        </HomeContent>
      </HomeBox>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { HomeHead, BigKa, SingList, Recent, HomeBox, HomeContent, SearchBox } from './style';
import { connect } from 'react-redux';
import { Icons, SlideShow } from './components';
import Projuct from './components/project';
import { MenuNav } from './components/menuNav';
import { getBigKaList, getDateList, getProject } from './store/actionCreate';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1270780_uptpx68v6nb.js'
})

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayList: ['今天', '明天'],
      activeClass: [1, 0, 0, 0, 0, 0, 0]
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
    let newDate = this.state.dayList;
    newDate = newDate.concat(date);
    this.setState({
      dayList: newDate
    })
  }
  goSinger(id) {
    this.props.history.push(`/sdetails?artistId=${id}`);
  }

  reDateList(index) {
    let newArr = this.state.activeClass;
    for (let i = 0; i < newArr.length; i++) {
      if (i === index) {
        newArr[i] = 1;
      } else {
        newArr[i] = 0;
      }
    }
    this.setState({
      activeClass: newArr
    })
    this.props.getDateList(index);
  }

  componentDidMount() {
    this.getDateList();
    this.props.getDateList(0);
    this.props.getProject();
    this.props.getBigKaList();
  }
  boxScroll = (e) => {
    let boundary = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight;
    if (boundary < 100 && this.props.open) {
      this.props.getProject();
    }
  }
  render() {
    return (
      <HomeBox onScroll={this.boxScroll}>
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
            <Link to="/slist">查看更多<MyIcon type="icon-gengduo" /></Link>
            </BigKa>
            <SingList onScroll={(e)=>{e.stopPropagation()}}>
              <ul>
                {
                  this.props.bigKaList.map(item => {
                    let url = 'url(' + item.artPic + ')';
                    let fans = (item.artFans / 10000).toFixed(1);
                    return (
                      <li key={item.artistId} onClick={this.goSinger.bind(this, item.artistId)}>
                        <div className="art-top">
                          <div className="art-img" style={{ background: url, backgroundSize: 'cover' }} />
                          <div className="art-info">
                            <p>{item.artistName}</p>
                            <span>{fans}万粉丝数</span>
                          </div>
                          <div className="love">
                            <MyIcon type="icon-xihuan" />关注
                          </div>
                        </div>
                        <div className="art-bottom">
                          <p>最近5场演出</p>
                          <MyIcon type="icon-gengduo" />
                        </div>
                      </li>
                    )
                  })
                }
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
                this.state.dayList.map((item, index) => {
                  return <div key={index} className={this.state.activeClass[index] ? "dataActive" : ""}
                    onClick={this.reDateList.bind(this, index)}>{item}</div>
                })
              }
            </div>
            <div className="card"  onScroll={(e)=>{e.stopPropagation()}}>
              <ul>
                {
                  this.props.dateList.map(item => {
                    return (
                      <li key={item.id}>
                        <div className="card-pic">
                          <img src={item.verticalPic} alt="item.name" />
                          <div>
                            <p className="card-name">{item.name}</p>
                            <p className="card-price">￥{item.priceLow} 起</p>
                          </div>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </Recent>
          <div className="recent-title">更多演出</div>
          <MenuNav />
          <Projuct />
        </HomeContent>
      </HomeBox>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bigKaList: state.home.bigKaList,
    dateList: state.home.dateList,
    open: state.home.open,
    page: state.home.page,
    city: state.address.cityId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBigKaList: () => {
      dispatch(getBigKaList());
    },
    getDateList: index => {
      dispatch(getDateList(index));
    },
    getProject: () => {
      dispatch(getProject())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

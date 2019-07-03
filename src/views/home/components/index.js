import React, { Component } from 'react';
import { Icon, Carousel } from 'antd';
import { IconWarp, IconDiv } from '../style';
import { connect } from 'react-redux';
import './carousel.css';
import { getSlideList } from '../store/actionCreate';
import { Link, withRouter } from 'react-router-dom';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1270780_yjqs6ieqtz9.js'
})
// 图标群
export class IconList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IconList: [
        { type: 'icon-yanchanghui', title: '演唱会' },
        { type: 'icon-huaju', title: '话剧歌剧' },
        { type: 'icon-yinlehui', title: '音乐会' },
        { type: 'icon-tiyu', title: '体育' },
        { type: 'icon-quyuanzatan28', title: '曲苑杂役' },
        { type: 'icon-qinzi', title: '亲子' },
        { type: 'icon-zhanlanfei', title: '展览休闲' },
        { type: 'icon-jingwai', title: '境外' }
      ]
    }
  }
  iconGo = () => {
    console.log(123)
    this.props.history.push('/search');
  }
  render() {
    return (
      <IconWarp>
        {
          this.state.IconList.map((item, index) => {
            return (
              <IconDiv key={index} onClick={this.iconGo}>
                <MyIcon type={item.type} style={{ fontSize: '.64rem', paddingBottom: '.08rem' }} />
                <span>{item.title}</span>
              </IconDiv>
            )
          })
        }
      </IconWarp>
    )
  }
}
export const Icons =withRouter(IconList);

// 分类
export class MenuNav extends Component {
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  render() {
    return (
      <div>
        暂无
      </div>
    )
  }
}
// 轮播图
class Slide extends Component {
  routerWillLeave() {
    console.log(123)
  }
  render() {
    return (
      <Carousel autoplay>
        {
          this.props.slideList.map((item, index) => {
            return (
              <Link to={`/search?item=${index}`} key={index}><img src={item.src} alt={index} style={{ width: '100%' }} /></Link>
            )
          })
        }
      </Carousel>
    )
  }
  componentDidMount() {
    this.props.getSlideList();
  }
}
const mapStateToProps = (state) => {
  return {
    slideList: state.home.slideList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSlideList: () => {
      dispatch(getSlideList());
    }
  }
}

export const SlideShow = connect(mapStateToProps, mapDispatchToProps)(Slide)

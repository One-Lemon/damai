import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actionCreates';
import { SingerDetail, SingerBanner, BannerImg, SingerBox, Avator, BottomBox, SingerName, SingerFans, ShowList, Date, Party, PTitle, Padress } from './style';
import { Icon } from 'antd';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1272983_uk1e3s8tthq.js'
})

class Sdetails extends Component {
  render() {
     console.log(this.props.performanceList)
    return (
      <SingerDetail>
        <SingerBanner>
          <BannerImg src={this.props.performanceList.headBgImg} alt="">
          </BannerImg>
        </SingerBanner>
        <SingerBox>
          <Avator style={{ backgroundImage: `url( ${this.props.performanceList.headImg})` }} />
          <SingerName>{this.props.performanceList.artistName}</SingerName>
          <MyIcon type="icon-jiahao" style={{ backgroundColor: '#fff', borderRadius: '100%', color: '#ff1268', position: 'absolute', top: '10%', left: '55%', fontSize: '.9rem' }} />
          <MyIcon type="icon-v" style={{ backgroundColor: '#fff', color: "#ffaf46", borderRadius: '100%', fontSize: ".5rem", position: 'absolute', top: "46%", left: '60%' }} />
          <SingerFans>{(this.props.performanceList.artFans / 10000)}万 粉丝</SingerFans>
        </SingerBox>
        <BottomBox>
          {
            this.props.performanceList.projectInfo ? this.props.performanceList.projectInfo.map(item => {
              return (
                <ShowList key={ item.venueId }>
                  <Date>
                    <p style={{ fontSize: '12px', color: '#888' }}>{item.date}</p>
                    <p style={{ fontSize: '22px', color: '#111' }}>{item.day}</p>
                    <p style={{ fontSize: '12px', color: '#888' }}>{item.month}</p>
                  </Date>
                  <Party>
                    <PTitle>{ item.name }</PTitle>
                    <Padress>{ item.venueCity } · {item.venueName}</Padress>
                  </Party>
                </ShowList>
              )
            }) :[]
          }

        </BottomBox>
      </SingerDetail>
    )
  }
  componentDidMount() {
    this.props.handleSingerDetails();
  }
}

export default connect(
  ({ sdetails }) => ({
    performanceList: sdetails.performanceList
  }),
  dispatch => ({
    handleSingerDetails() {
      dispatch(actions.asyncGetSingerDetail())
    }
  })
)(Sdetails);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actionCreates';
import { SingerDetail,SingerBanner,BannerImg,SingerBox,Avator,BottomBox} from './style';
import '../../styles/base.less';

class Sdetails extends Component {
  render() {
    return (
      <SingerDetail>
        <SingerBanner>
          <BannerImg src="//intercms.damai.cn/artist/bgpic/1535596063165/1535596063165-main.jpg?x-oss-process=image/resize,w_750,/quality,q_50/format,webp" alt="">
          </BannerImg>
        </SingerBanner>
        <SingerBox>
          <Avator />
          
        </SingerBox>
        <BottomBox />
      </SingerDetail>
    )
  }
  // componentDidMount(){
  //  this.props.handleSingerDetails();
  // }
}

export default connect(
  ({ sDetail })=>({
    //singerInfo:sDetail.singer
  }),
  dispatch=>({
    handleSingerDetails(){
      dispatch(actions.asyncGetSingerDetail())
    }
  })
)( Sdetails );
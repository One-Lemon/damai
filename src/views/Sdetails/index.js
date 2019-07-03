import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actionCreates';
import { SingerDetail,SingerBanner,BannerImg,SingerBox,Avator,BottomBox,SingerName,SingerFans,ShowList,Date,Party,PTitle,Padress} from './style';
import { Icon } from 'antd';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1272983_uk1e3s8tthq.js'
})

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
          <SingerName>周杰伦</SingerName>
          <MyIcon type="icon-jiahao" style={{ backgroundColor:'#fff',borderRadius:'100%', color:'#ff1268',position:'absolute',top:'10%',left:'55%',fontSize:'.9rem'}} />
          <MyIcon type="icon-v" style={{ backgroundColor:'#fff',color:"#ffaf46",borderRadius:'100%',fontSize:".5rem" ,position:'absolute',top:"46%",left:'60%'}}/>
          <SingerFans>156.98 万 粉丝</SingerFans>
        </SingerBox>
        <BottomBox>
        <ShowList>
            <Date>
              <p style={{fontSize:'12px',color:'#888'}}>周日</p>
              <p style={{fontSize:'22px',color:'#111'}}>28</p>
              <p style={{fontSize:'12px',color:'#888'}}>七月</p>
            </Date>
            <Party>
              <PTitle>2019超级巨星演唱会黄石站</PTitle>
              <Padress>黄石 · 黄石奥体中心体育场</Padress>
            </Party>
          </ShowList>
          <ShowList>
            <Date>
              <p style={{fontSize:'12px',color:'#888'}}>周日</p>
              <p style={{fontSize:'22px',color:'#111'}}>28</p>
              <p style={{fontSize:'12px',color:'#888'}}>七月</p>
            </Date>
            <Party>
              <PTitle>2019超级巨星演唱会黄石站</PTitle>
              <Padress>黄石 · 黄石奥体中心体育场</Padress>
            </Party>
          </ShowList>
          <ShowList>
            <Date>
              <p style={{fontSize:'12px',color:'#888'}}>周日</p>
              <p style={{fontSize:'22px',color:'#111'}}>28</p>
              <p style={{fontSize:'12px',color:'#888'}}>七月</p>
            </Date>
            <Party>
              <PTitle>2019超级巨星演唱会黄石站</PTitle>
              <Padress>黄石 · 黄石奥体中心体育场</Padress>
            </Party>
          </ShowList>
          <ShowList>
            <Date>
              <p style={{fontSize:'12px',color:'#888'}}>周日</p>
              <p style={{fontSize:'22px',color:'#111'}}>28</p>
              <p style={{fontSize:'12px',color:'#888'}}>七月</p>
            </Date>
            <Party>
              <PTitle>2019超级巨星演唱会黄石站</PTitle>
              <Padress>黄石 · 黄石奥体中心体育场</Padress>
            </Party>
          </ShowList>
        </BottomBox>
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

import React, { Component } from 'react'
import { Affix } from 'antd';
import { Navcategory, Menulist, Condition, Container, ContentList, ContentImg, ContentRight, ContentRightTitle, ContentRightInfo, ContentRightPrice } from './style'


export default class Plist extends Component {
  constructor (props) {
    super (props)
    this.state = {
      top: 0,
      menulist:[
        { id: 1, name: "全部" },
        { id: 2, name: "演唱会" },
        { id: 3, name: "话剧歌剧" },
        { id: 4, name: "音乐会" },
        { id: 5, name: "曲苑杂坛" },
        { id: 6, name: "舞蹈芭蕾" },
        { id: 7, name: "体育比赛" },
        { id: 8, name: "儿童亲子" },
        { id: 9, name: "展览休闲" },
        { id: 10, name: "二次元" },
        { id: 11, name: "旅游展览" }
      ]
    }
  }

  
  render() {
    return (
      <div>
        <Affix offsetTop={this.state.top}>
          <Navcategory>
            <Menulist>
              {this.state.menulist.map( item => {
                return ( <li key={item.id}>{item.name}</li>)
              })}
            </Menulist>
          </Navcategory>
          <Condition>
            
          </Condition>
        </Affix>
        <Container style={{ width: "100%", height: "100%"}}>
          <ContentList>
            <ContentImg>
              <img src="https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01MncWU52GdSBD0Cknv_!!0-item_pic.jpg_q60.jpg_.webp" alt="" />
            </ContentImg>
            <ContentRight>
              <ContentRightTitle>
                “UNINE FAN MEETING TOUR ‘RUN TO U’”全国巡回见面会Ending场
              </ContentRightTitle>
              <ContentRightInfo>
                成都 / 2019.07.27 周六 19:30 / 五粮液成都金融城演艺中心
              </ContentRightInfo>
              <ContentRightPrice>
                ￥499-1299
              </ContentRightPrice>
            </ContentRight>
          </ContentList>
          <ContentList>
            <ContentImg>
              <img src="https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01MncWU52GdSBD0Cknv_!!0-item_pic.jpg_q60.jpg_.webp" alt="" />
            </ContentImg>
            <ContentRight>
              <ContentRightTitle>
                “UNINE FAN MEETING TOUR ‘RUN TO U’”全国巡回见面会Ending场
              </ContentRightTitle>
              <ContentRightInfo>
                成都 / 2019.07.27 周六 19:30 / 五粮液成都金融城演艺中心
              </ContentRightInfo>
            </ContentRight>
          </ContentList>
          <ContentList>
            <ContentImg>
              <img src="https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01MncWU52GdSBD0Cknv_!!0-item_pic.jpg_q60.jpg_.webp" alt="" />
            </ContentImg>
            <ContentRight>
              <ContentRightTitle>
                “UNINE FAN MEETING TOUR ‘RUN TO U’”全国巡回见面会Ending场
              </ContentRightTitle>
              <ContentRightInfo>
                成都 / 2019.07.27 周六 19:30 / 五粮液成都金融城演艺中心
              </ContentRightInfo>
            </ContentRight>
          </ContentList>
          <ContentList>
            <ContentImg>
              <img src="https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01MncWU52GdSBD0Cknv_!!0-item_pic.jpg_q60.jpg_.webp" alt="" />
            </ContentImg>
            <ContentRight>
              <ContentRightTitle>
                “UNINE FAN MEETING TOUR ‘RUN TO U’”全国巡回见面会Ending场
              </ContentRightTitle>
              <ContentRightInfo>
                成都 / 2019.07.27 周六 19:30 / 五粮液成都金融城演艺中心
              </ContentRightInfo>
            </ContentRight>
          </ContentList>
          <ContentList>
            <ContentImg>
              <img src="https://img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01MncWU52GdSBD0Cknv_!!0-item_pic.jpg_q60.jpg_.webp" alt="" />
            </ContentImg>
            <ContentRight>
              <ContentRightTitle>
                “UNINE FAN MEETING TOUR ‘RUN TO U’”全国巡回见面会Ending场
              </ContentRightTitle>
              <ContentRightInfo>
                成都 / 2019.07.27 周六 19:30 / 五粮液成都金融城演艺中心
              </ContentRightInfo>
            </ContentRight>
          </ContentList>
        </Container>
      </div>
    )
  }
}


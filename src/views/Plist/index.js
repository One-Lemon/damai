import React, { Component } from 'react'
import { Affix } from 'antd';
import { connect } from 'react-redux'
import * as actions from './store/actionCreates'
import { Navcategory, Menulist, Condition, Container, ContentList, ContentImg, ContentRight, ContentRightTitle, ContentRightInfo, ContentRightPrice } from './style'


class Plist extends Component {
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
    console.log(this.props.list);
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
          {this.props.list.map(item => {
            return (
              <ContentList key={item.id}>
                <ContentImg>
                  <img src={item.verticalPic} alt="" />
                </ContentImg>
                <ContentRight>
                  <ContentRightTitle>
                    {item.name}
                  </ContentRightTitle>
                  <ContentRightInfo>
                    {item.logicAddress} / {item.showTime} / {item.venueName}
                  </ContentRightInfo>
                  <ContentRightPrice>
                    ￥{item.priceStr}
                  </ContentRightPrice>
                </ContentRight>
              </ContentList>
            )
          })}
        </Container>
      </div>
    )
  }

  componentDidMount () {
    this.props.handleProjectList()
  }
}

export default connect (
  ({project}) => ({
    list: project.list
  }),
  (dispatch) => ({
    handleProjectList() {
      dispatch(actions.asyncProjectList())
    }
  })
)(Plist)


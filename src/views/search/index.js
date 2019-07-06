import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { SearchBox, SearchHead, HOTSearch } from './style';
import * as actions from './store/actionCreates';
import { Icon } from 'antd';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1272983_uk1e3s8tthq.js'
})
class Search extends Component {

  componentDidMount() {
    this.props.handleHotSearch()
  }

  render() {
    return (
      <SearchBox>
        <SearchHead>
          <div className="inputBox">
            <MyIcon type="icon-fangdajing" className="fangdj" />
            <input type="text" placeholder="搜索明星、演出比赛、场馆" className="searchInput" />
          </div>
          <span className="cancle"><Link to="">取消</Link></span>
        </SearchHead>
        <HOTSearch>
          <div className="hotSearchTitle">热搜</div>
          <ul className="hotItemBox">
            {this.props.hotSearchList.map(item => {
              return (
              <li key={item.word} className="hotItem">{item.word}</li> )
            })
            }
          </ul>
        </HOTSearch>
      </SearchBox>
    )
  }
}

export default connect(
  ({ search }) => {
    console.log(search.hotSearchList)
    return ({
      hotSearchList: search.hotSearchList
    })
  },
  // null,
  dispatch => {
    return {
      handleHotSearch() {
        dispatch(actions.getHotSearchList())
      }
    }
  }
)(Search)
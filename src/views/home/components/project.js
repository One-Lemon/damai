import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProList } from '../style';
import { withRouter } from 'react-router-dom';

class Project extends Component {
  proDetails (id) {
    this.props.history.push('/pdetails?id='+id);
  }
  render() {
    return (
      <ProList>
        <ul>
          {
            this.props.project.map(item => {
              return (
                <li className="pro-card" key={item.id} onClick={this.proDetails.bind(this, item.id)}>
                  <div className="pro-left">
                    <img src={item.verticalPic} alt={item.name} />
                  </div>
                  <div className="pro-right">
                    <div className="pro-title">{item.name}</div>
                    <div className="pro-time">{item.cityName + ' / ' + item.showTime + ' / ' +  item.venueName}</div>
                    <div className="pro-promotion">{item.isSelectSeat?<span>可选座</span>:''}</div>
                    <div className="pro-price"><span>￥{item.formattedPriceStr}</span></div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </ProList>
    )
  }
}

// export const mapDispatchToProps = dispatch => {
//   return {
//     getProject: (pageNum) => {
//       dispatch(getProject(pageNum))
//     }
//   }
// }
export const mapStateToProps = state => {
  return {
    project: state.home.project
  }
}

export default connect(mapStateToProps, null)(withRouter(Project));

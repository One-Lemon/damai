import React,{ Component } from 'react';
import { DivWrap } from './style'
export default class Order extends Component {
  render() {
    return (
      <DivWrap>
        <div>
          <div className='order-text'><p>您暂时没有订单哟~</p></div>
          <img className='order-list-empty-img' src="https://gw.alicdn.com/tfs/TB1vfTxsNSYBuNjSsphXXbGvVXa-711-507.png" alt=""/>
        </div>
      </DivWrap>
    )
  }
}


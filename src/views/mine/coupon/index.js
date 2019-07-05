import React, { Component } from 'react'
import { Tabs } from 'antd';
import { WhiteSpaceWrap } from './style'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default class Coupon extends Component {
  render() {
    return (
      <div style={{background:"#f0f1f2",
        height: "100%"}}>
        {/* <WhiteSpaceWrap  style={{color:'red'}}/>
          <TabsWrap tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
            <div className='bg-image' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#f0f1f2' }}>
             <div>
                <img src="https://gw.alicdn.com/tfs/TB1tz4pkG6qK1RjSZFmXXX0PFXa-380-372.png" style={{ width:'3.36rem',height: '3.30667rem',marginTop: '3.2rem'}} alt=""/>
                <p style={{ marginTop: '1.2rem',fontSize:'.42667rem',color:' #aaa'}}>您暂时还没有优惠卷</p>
             </div>
            </div>
            <div className='tabs-bg-image' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#f0f1f2' }}>
            <div>
                <img src="https://gw.alicdn.com/tfs/TB1tz4pkG6qK1RjSZFmXXX0PFXa-380-372.png" style={{ width:'3.36rem',height: '3.30667rem',marginTop: '3.2rem'}} alt=""/>
                <p style={{ marginTop: '1.2rem',fontSize:'.42667rem',color:' #aaa'}}>您暂时还没有优惠卷</p>
             </div>
            </div>
            <div className='bg-image' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#f0f1f2' }}>
            <div>
                <img src="https://gw.alicdn.com/tfs/TB1tz4pkG6qK1RjSZFmXXX0PFXa-380-372.png" style={{ width:'3.36rem',height: '3.30667rem',marginTop: '3.2rem'}} alt=""/>
                <p style={{ marginTop: '1.2rem',fontSize:'.42667rem',color:' #aaa'}}>您暂时还没有优惠卷</p>
             </div>
            </div>
          </TabsWrap>
        <WhiteSpaceWrap /> */}
          <WhiteSpaceWrap defaultActiveKey="1" onChange={callback}>
            <TabPane tab="未使用" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="已过期" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="未使用" key="3">
              Content of Tab Pane 3
            </TabPane>
          </WhiteSpaceWrap>,
      </div>
    )
  }
}



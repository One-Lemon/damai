import React, { Component } from 'react'
import { Tabs } from 'antd-mobile';
import { WhiteSpaceWrap, Boxfl } from './style'

const tabs = [
  { title:' 未使用 '},
  { title:' 已过期 '},
  { title:' 已使用 '},
];
export default class Coupon extends Component {

  render() {
    return (
      <div style={{background:' #f0f1f2',height: '100%'}}>
          <Tabs tabs={tabs}
            initialPage={1}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <img src="https://gw.alicdn.com/tfs/TB1tz4pkG6qK1RjSZFmXXX0PFXa-380-372.png" style={{ width:'3.36rem',height: '3.30667rem',marginTop: '3.2rem'}} alt=""/>
                    <p style={{ marginTop: '1.2rem',fontSize:'.42667rem',color:' #aaa'}}>您暂时还没有优惠卷哦</p>
                  </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                  <div>
                    <img src="https://gw.alicdn.com/tfs/TB1tz4pkG6qK1RjSZFmXXX0PFXa-380-372.png" style={{ width:'3.36rem',height: '3.30667rem',marginTop: '3.2rem'}} alt=""/>
                    <p style={{ marginTop: '1.2rem',fontSize:'.42667rem',color:' #aaa'}}>您暂时还没有优惠卷哦</p>
                  </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div>
                    <img src="https://gw.alicdn.com/tfs/TB1tz4pkG6qK1RjSZFmXXX0PFXa-380-372.png" style={{ width:'3.36rem',height: '3.30667rem',marginTop: '3.2rem'}} alt=""/>
                    <p style={{ marginTop: '1.2rem',fontSize:'.42667rem',color:' #aaa'}}>您暂时还没有优惠卷哦</p>
                  </div>
              </div>
          </Tabs>
          <WhiteSpaceWrap />
          <div style={{ position:"fixed",bottom:'0',left:'0',right:'0'}}>
            <Boxfl style={{height:'1.28rem',fontSize:'.4rem',color: '#fff'}}>
                添加优惠卷
            </Boxfl>
          </div>
      </div>
    );
  }
}



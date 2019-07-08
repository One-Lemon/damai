import React, { Component } from 'react'

export default class Ticket extends Component {
  render() {
    return (
      <div style={{background: '#f1f1f1',position: 'relative',height:'100%'}}>
        <div style={{width: '100%',textAlign: 'center',position: 'absolute',
        left:' 0',top: '50%',marginTop:' -1.65rem'}}>
            <img style={{width:'2.4rem',height:'2.4rem',marginBottom:'.31rem'}} src="https://gw.alicdn.com/tfs/TB1NqcebNjaK1RjSZKzXXXVwXXa-76-76.png" alt=""/>
            <span style={{fontSize: '.35rem',display:'block',color:'#999'}}>暂无演出票~</span>
        </div>
      </div>
    )
  }
}


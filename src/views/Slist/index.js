import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from './style';

class Slist extends Component {
  render() {
    return (
      <div>
        SingerList
      </div>
    )
  }
  
}

export default connect()(Slist)


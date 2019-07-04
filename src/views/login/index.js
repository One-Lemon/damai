import React, { Component } from 'react';
import { Picker} from 'antd-mobile';
import {List, Input, Form, Button, } from 'antd';
import 'antd-mobile/dist/antd-mobile.css';
import {NavLink} from 'react-router-dom'
import {MainWrap, HeadWarp, FootWrap} from './style';
import { connect } from 'react-redux';
import * as actions from './store/actionCreates'

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      value:''
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.handleSignIn(values)
      }
    });
  };
   season = [
    {
      label: '+86 中国大陆',
      value: '+86 中国大陆',
    },
    {
      label: '+852 中国香港',
      value: '+852 中国香港',
    },
    {
      label: '+853 中国澳门',
      value: '+853 中国澳门',
    },
    {
      label: '+886 中国台湾地区',
      value: '+886 中国台湾地区',
    }
  ];
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <MainWrap>
          <HeadWarp>
            <img src="https://gw.alicdn.com/tfs/TB1QfeUQAvoK1RjSZFDXXXY3pXa-300-138.png" alt="" className='logo'/>
          </HeadWarp>
          <FootWrap onSubmit={this.handleSubmit}>
              <div className='tel-left'>
                  <div style={{overflow:'hidden',width: '64px'}}>
                    <Picker
                      data={this.season}
                      value={this.state.value}
                      onOk={v => {this.setState({value:v})
                    }}
                    >
                      <List.Item ></List.Item>
                    </Picker>
                  </div>
                  <i className='iconfont icon-down'></i>
                  <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [
                      { required: true,
                         message: 'Please input your phoneNumber!' },
                      {
                      pattern:/^1[3456789]\d{9}$/,
                      message:'The input is not valid phone!'
                    }],
                  })(
                    <Input
                      placeholder="请输入手机号"
                    />,
                  )}
                </Form.Item>
              </div>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your six password!',
                      min:6
                    },
                    {
                      validator: this.validateToNextPassword,
                    },
                  ],
                })(<Input.Password placeholder='请输入登录密码' style={{width:'200'}} />)}
              </Form.Item>
              <Button type='danger' htmlType="submit">登录</Button>
              <div className='tolling'>
                <NavLink to='login'>短信验证码登录</NavLink>
                <NavLink to='/xxx' style={{marginLeft:'-24px'}}>忘记密码</NavLink>
                <NavLink to='/signup'>新用户注册</NavLink>
              </div>
          </FootWrap>
        </MainWrap>
    )
  }
}


const LoginVal =  Form.create()(Login)

export default connect(
  null,
  (dispatch,props) => ({
  handleSignIn (values) {
    dispatch(actions.LoginIn(values,props))
  }
})
)(LoginVal)


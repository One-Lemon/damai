import React, { Component } from 'react';
import { Picker} from 'antd-mobile';
import {List, Input, Form, Button, } from 'antd';
// import 'antd-mobile/dist/antd-mobile.css';
import {NavLink} from 'react-router-dom'
import {MainWrap, HeadWarp, FootWrap} from './style';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      value:''
    }
  }
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
          <FootWrap>
              <div className='tel-left'>
                  <Picker
                    data={this.season}
                    cols={this.state.cols}
                    value={this.state.asyncValue}
                    onPickerChange={this.onPickerChange}
                    onOk={v => {this.setState({value:v})
                  }}
                  >
                    <List.Item>{this.state.value}</List.Item>
                  </Picker>
                  <i className='iconfont icon-down'></i>
                  <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your phoneNumber!' }],
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
              <Button type='danger'>登录</Button>
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


export default Form.create()(Login)

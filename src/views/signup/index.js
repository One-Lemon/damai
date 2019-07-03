import React, { Component } from 'react';
import {RegWrap, BoxWarp } from './style'
import {Picker} from 'antd-mobile';
import {List, Form, Input, Button} from 'antd'

class Signup extends Component {
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
      <RegWrap>
        <div className='posion' style={{position:'relative'}}>
          <BoxWarp>
            <div className='header-top'>
              <div >国家地区</div>
              <div style={{display:'flex',alignItems:'center'}}>
                <Picker
                  data={this.season}
                  cols={this.state.cols}
                  value={this.state.asyncValue}
                  onPickerChange={this.onPickerChange}
                  onOk={v => {this.setState({value:v})
                }}
                style={{float:'right'}}
                >
                  <List.Item >{this.state.value}</List.Item>
                </Picker>
                <i className='iconfont icon-arrow-right'></i>
              </div>
            </div>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your phoneNumber!' }],
              })(
                <Input
                  placeholder="请输入手机号"
                />,
              )}
            </Form.Item>
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
              })(<Input.Password placeholder='请输入密码' style={{width:'200'}} />)}
            </Form.Item>
            <div style={{marginTop:'10px',height:'15px'}}></div>
            <Button type='danger'>同意协议并注册</Button>
            <div style={{height:'9px'}}></div>
            <div style={{ fontSize:'12px',color:'#666'}}>
              <span>我已阅读接受</span><a href="https://sale.damai.cn/contents/4677/13574.html" target="_blank">《大麦网会员服务协议》</a>及<a href="https://sale.damai.cn/contents/4677/13572.html" target="_blank">《隐私专项条款》</a>并同意自动注册成为会员
              </div>
          </BoxWarp>
        </div>
      </RegWrap>
    )
  }
}

export default Form.create()(Signup)

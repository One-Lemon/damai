import styled from 'styled-components';
import {Form} from 'antd'

export const RegWrap = styled.div`
    background-color: #fff;
    font-size: 14px;
    margin:8px;
    /* overflow:hidden; */
    .posion{
      height:100%;
      overflow-y:auto;
      overflow-x:hidden
    }
`

export const BoxWarp = styled(Form)`
    /* position:absolute;
    bottom:0;
    top:0;
    left:0;
    right:0; */
    margin-left: 15px;
    margin-right: 15px;
    .header-top{
      display:flex;
      align-items:center;
      position:relative;
      justify-content:space-between;
      min-height: 55px;
      height:100%;
      border-bottom:1px solid #e7e7e7;

    }
    .ant-form-item {
      margin-bottom:0;
      border-bottom:1px solid #e7e7e7;
    }
    .ant-input{
      border:0;
      padding:0;
      height:55px;
      line-height:55px;
    }
    .ant-input:focus{
      border-color:#fff;
      box-shadow: 0 0 0 2px rgba(29, 165, 122, 0);
}
    .ant-btn{
      background-color: #ff1268;
      display: block;
      outline: 0 none;
      box-sizing: border-box;
      padding: 0;
      text-align: center;
      font-size: 18px;
      height: 47px;
      line-height: 47px;
      color:#fff;
      width:100%;
      background-image: linear-gradient(90deg,#ff4aae,#ff1268);
    }
    a{
      color: #ff1268;
    }
`

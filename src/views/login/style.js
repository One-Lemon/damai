import styled from 'styled-components';
import { Form } from 'antd'

export const MainWrap = styled.div`
    text-align: center;
    height:100%;
    background:#fff;
`
export const HeadWarp = styled.div`
    height: 3.26667rem;
    .logo{
      width: 2.66667rem;
      height: 1.21333rem;
      margin-top: 1.02667rem;
    }
`
export const FootWrap = styled(Form)`
    position: absolute;
    top: 3.26667rem;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 12px;
    margin: 0 auto;
    width: 100%;
    padding: 0 20px 20px;
    -webkit-font-smoothing: antialiased;
    .sc-bxivhb{
      border-bottom:1px solid #e7e7e7;
      justify-content:space-between;
      /* display:flex;
       */
    }
    .tel-left{
      height: 40px;
      line-height: 40px;
      display:flex;
      /* justify-content:center; */
      margin-bottom: 5px;
      overflow:hidden;
      border-bottom:1px solid #e7e7e7;
      li{
        font-size: 14px;
        padding:0 !important;
        color: #666;
        display:flex;
        justify-content:center;
        width:44px;
      }
      .icon-down{
        border-right: 1px solid #ccc;
        border-color: #e7e7e7;
        border-bottom: 0;
      }

      .ant-row{
        margin:0;
        padding:0;
        width:326px;
        margin-bottom: 3px;
      }
      .ant-input{
        border:0
      }
    }
    .ant-form-item{
      border-bottom:1px solid #e7e7e7;
    }
    .ant-input{
        border:0
      }
    .ant-btn{
      background-color: #ff1268;
      background-image: linear-gradient(90deg,#ff4aae,#ff1268);
      width: 100%;
      border-radius: 3px;
      font-size: 18px;
      height: 42px;
      line-height: 42px;
      outline: none;
      color: #fff;
      width: 100%;
      cursor: pointer;
    }
    .tolling{
      display:flex;
      justify-content:space-between;
      margin: 8px 0;
      text-align: right;
      zoom: 1;
      a{
        font-size:12px;
        color: #999;
      }
    }
    .ant-input::-webkit-input-placeholder{
            color:#666
        }
`
// export const FieldCode = styled.div`
//   display:flex;
//   /* justify-content:center;
//   align-items:center; */
//   flex-direction:column
// `

import styled from 'styled-components';
import { List } from 'antd';
import {NavLink} from 'react-router-dom'


export function r(px, psd = 350) {
  return `${px / psd * 10}rem`;
}


export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 10rem;
    margin: 0 auto;
    background: #f2f3f4;
    flex: 1;
`;
export  const HeaderWrap = styled.div`
    display:flex;
    align-items: center;
    height: 2.66667rem;
    background: #ff1268;
    overflow:hidden;
    .Header-Avator{
      background-image: url("//gw.alicdn.com/tfs/TB1o4Bodr_I8KJjy1XaXXbsxpXa-150-150.png");
      display: block;
      margin: 0 .33333rem 0 .32rem;
      width: 1.6rem;
      height: 1.6rem;
      background-size: 100% auto;
      background-position: top center;
      border-radius: 100%;
      border: 3px solid #fff;
    }
    .Header-name a{
      flex: 1;
      font-size: .4rem;
      color: #fff;
      padding-right: .8rem;
      word-break: break-all;
      height: .50667rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
`;

export const MainWrap = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
`;

export const ListWrap = styled(List)`
    padding-left: .33333rem !important;
    background: #fff;
    border-top: 1px solid #e7e7e7 !important;
    border-bottom: 1px solid #e7e7e7 !important;
    margin: .26667rem 0 !important;
    .ant-list-item{
      display:flex;
      align-items:center;
      height: 1.46667rem;
      line-height: 1.46667rem;
      padding: 0 .32rem 0 0!important;
        .main-title{
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .iconfont{
            color: #ff1268;
            width:.66667rem;
            display: inline-block;
            font-size: .50667rem;
          }
          span{
            font-size: .37333rem;
          }
        }
        .main-right{
          flex: 1;
          margin-left: .13333rem;
          text-align: right;
          span{
            color: #999;
            float: right;
            font-size: .32rem;
            }
          }
        }
`;

export const FootWrap = styled.div`
      font-size: .32rem;
      color: #999;
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: .53333rem;
      .about-link{
        height: 1.06667rem;
        margin: 0 .10667rem;
      }
      .about-line{
        padding-top: .04rem;
      }
`

export const UserGreeting = styled(NavLink)`
`
export const GuestGreeting = styled(NavLink)`
`

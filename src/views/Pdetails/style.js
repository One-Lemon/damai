import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
`

export const Content = styled.div`
  width: 100%;
  -webkit-box-flex: 1;
  flex: 1;
  display: block;
  overflow: auto;
`

export const Bottom = styled.div`
  position: relative;
  width: 100%;
  height: 1.6rem;
  display: flex;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  border-top: 1px solid #eee;
  background-color: #fff;
`

export const BottomLeft = styled.div`
  width: 1.33rem;
  border-left: 1px solid #eee;
  display:flex;
  flex-direction: column;
  align-items: center;
  .leftIcon {
    width: .53333rem;
    height: .53333rem;
    background-size: 100% 100%;
    line-height: .57333rem;
    font-size: .57333rem;
    color: #000
  }
  .leftMsg {
    font-size: .24rem;
    color: #000;
    line-height: .4rem;
  }
`

export const BuyButton = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0;
  margin-right: .4rem;
  height: 1.17333rem;
  background-image: linear-gradient(90deg,#ff7f81,#ff2d79);
  border-radius: .58667rem;
  .buybuttontext {
    font-style: normal;
    font-size: .4rem;
    color: #fff;
    line-height: .4rem;
  }
`

export const DetailTop = styled.div`
  position: relative;
  width: 100%;
  background-color: rgba(0,0,0,.4);
  padding-bottom: .48rem;
  .bg-default {
    position: absolute;
    width: 100%;
    background-color: rgba(0,0,0,.4);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    filter: saturate(1) brightness(1.1) blur(.6rem) contrast(.8);
  }
  .container {
    position: relative;
    -webkit-box-orient: horizontal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding-top: .48rem;
    display: flex;
    .imgframe {
      position: relative;
      width: 3.16rem;
      height: 4.26667rem;
      margin-left: .4rem;
      .img {
        width: 100%;
        height: 100%;
        border-radius: .08rem;
        background: hsla(0,0%,100%,.1) no-repeat;
        background-size: cover;
      }
    }
    .right-content {
      -webkit-box-flex: 1;
      flex: 1;
      display: flex;
      -webkit-box-orient: vertical;
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
      height: 4.26667rem;
      margin-left: .4rem;
      margin-right: .4rem;
      .right-content-top {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        .title {
          font-weight: 700;
          font-size: .42667rem;
          letter-spacing: 0;
          line-height: .53333rem;
          text-align: justify;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          color: #fff;
        }
      }
      .right-content-bottom {
        display: flex;
        -webkit-box-direction: normal;
        width: 100%;
        -webkit-box-orient: vertical;
        flex-direction: column;
        .price {
          font-size: .42667rem;
          line-height: .42667rem;
          color: #fff;
        }
      }
    }
  }
`

export const ServiceBar = styled.div`
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  z-index: 1;
  height: .98667rem;
  background-color: #f8f8f8;
  border-top-left-radius: .13333rem;
  border-top-right-radius: .13333rem;
  margin-top: -.10667rem;
  padding-left: .2rem;
  padding-right: .2rem;
  overflow: hidden;
  .service-item {
    margin-left: .2rem;
    margin-right: .2rem;
    font-size: .34667rem;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    .anticon {
      color: #ff2d79;
    }
    .text {
      color: #000;
      margin-left: .06667rem;
      white-space: nowrap;
    }
  }
`

export const DetailTimeInfo = styled.div`
  display: flex;
  -webkit-box-direction: normal;
  min-height: 1.73333rem;
  position: relative;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  background-color: #fff;
  padding-left: .4rem;
  padding-right: .4rem;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  .left {
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    flex-direction: column;
    border-bottom: 1px solid #eee;
    .time {
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      font-size: .42667rem;
      line-height: .42667rem;
      color: #000;
      font-weight: 700;
      margin-top: .48rem;
      -webkit-box-align: center;
      align-items: center;
      .anticon-right {
        margin-left: .13333rem;
        font-size: .29333rem;
      }
    }
    .time-desc {
      height: .34667rem;
      font-size: .34667rem;
      color: #999;
      margin-top: .24rem;
      margin-bottom: .48rem;
      line-height: .34667rem;
    }
  }
  .right {
    height: 100%;
    display: flex;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    .anticon {
      height: 100%;
      color: #ff2d79;
      font-size: .46667rem;
    }
    .seat-text {
      margin-top: .13333rem;
      color: #ff2d79;
      font-size: .34667rem;
    }
  }
`
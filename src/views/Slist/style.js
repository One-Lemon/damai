import styled from 'styled-components';

export const SlistBox=styled.div`
  width:100%;
  height:100%;
  font-size:.32rem;
`
export const BgBox=styled.div`
  position:fixed;
  top:0;
  background-color:#1f0453;
  width:100%;
  height:50%;
  z-index:1;
`
export const BgPic=styled.div`
  width: 100%;
  height:50%;
  position: fixed;
  top: .66667rem;
  background-image: url("//img.alicdn.com/tfs/TB1VdgJlMHqK1RjSZJnXXbNLpXa-748-497.png");
  background-size:cover;
`
export const MainBox=styled.div`
  position:relative;
  width:100%;
  z-index:2;
  box-sizing:border-box;
`
export const HeadBox=styled.div`
  height: 3.33333rem;
  overflow: hidden;
  color: hsla(0,0%,100%,.75);
  font-size: .32rem;
  .bottomTitle{
    display: flex;
    padding: 0 .48rem;
    justify-content: space-between;
    align-items: center;
    margin-top: .26667rem;
    position: relative;
    .introduce{
    }
    .myFollow{
    }
  }

`
export const PageTitle=styled.div`
  display: flex;
  padding: 0 .48rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  color: hsla(0,0%,100%,.75);
  position: relative;
  .abc{
    font-size: .8rem;
    font-weight: 700;
    color: hsla(0,0%,100%,.75);
  }
  .search{
    width: 2.66667rem;
    height: .96rem;
    border-radius: .48rem;
    .texInput{
      width:100%;
      height:100%;
      border-radius: .48rem;
      color: #111;
      background: hsla(0,0%,100%,.5);
      border:none;
    }
  }
  
`
export const MiddleSelect=styled.div`
  width:100%;
  border-bottom: 1px solid #eee;
  border-radius: .16rem .16rem 0 0;
  background: #fff;
  color: #000;
  overflow-x:hidden;
  .navBox{
    font-size: .32rem;
    height: 1.89333rem;
    padding-left: .48rem;
    margin-right: .48rem;
    white-space: nowrap;
    overflow-x: auto;
    ::-webkit-scrollbar{display:none};
    background: #fff;
    .navLi{
      display: inline-block;
      margin-top: .64rem;
      height: .8rem;
      background: #eee;
      padding: 0 .42667rem;
      margin-right: .32rem;
      color: #111;
      text-align: center;
      line-height: .8rem;
      border-radius: .4rem;
      white-space: nowrap;
    }
  }
`
export const BottmDetail=styled.div`
  position: relative;
  background: #fff;
  overflow: auto;
  min-height: 6.66667rem;
  max-height: 100%;
  .detailBox{
    margin-top: .24rem;
    position: relative;
    overflow: hidden;
    .infoBox{
      margin: .24rem .48rem;
      padding: 0 .32rem;
      border: 1px solid #eee;
      box-shadow: 0 0.08rem 0.4rem 0 rgba(0,0,0,.05);
      border-radius: .12rem;
      .singerName{
        display: flex;
        align-items: center;
        height: 1.94667rem;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        overflow: hidden;
        .singerInfo{
          display: flex;
          flex-direction: row;
          align-items: center;
          .littlePic{
            background-image: url("https://intercms.damai.cn/artist/pic/1535596053705/1535596053705-main.jpg");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            width: 1.33333rem;
            height: 1.33333rem;
            border-radius: 50%;
            border: .5px solid #eee;
            margin-right: .32rem;
          }
          .littleName{
            .singer-name{
              display: inline-block;
              font-size: .42667rem;
              font-weight: 700;
            }
            .singer-tag{
              position: relative;
              bottom: .05333rem;
              left: .05333rem;
              display: inline-block;
              height: .48rem;
              padding: .01333rem .16rem;
              border-radius: .10667rem .10667rem .26667rem .10667rem;
              background: rgba(255,18,104,.1);
              color: #ff1268;
              font-size: .29333rem;
              text-align: center;
              line-height: .48rem;
            }
            .singer-fans{
              display: inline-block;
              margin-top: .08rem;
              font-size: .32rem;
              color: #888;
            }
          }
        }
        .follow{
          position: relative;
          display: block;
          width: 1.52rem;
          height: .69333rem;
          border: 2px solid #ff1268;
          border-radius: .34667rem;
          text-align: center;
          font-size: .32rem;
          color: #ff1268;
          line-height: .69333rem;
        }
      }
      .performList{
        padding: .08rem 0 .48rem;
        font-size: .37333rem;
        color: #111;
        .perform-list{
          max-height: 3.86667rem;
          overflow: hidden;
          margin-bottom:.8rem;
          .perform-cell{
            display: flex;
            flex-direction: column;
            justify-content:space-between;
            margin-top: .32rem;
            .perform-title{
              font-size: .37rem;
              white-space: nowrap;
              color: #111;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-bottom: .1rem;
            }
            .perform-address{
              position: relative;
              margin-top: .12rem;
              font-size: .32rem;
              overflow: hidden;
              padding-bottom: .37333rem;
              border-bottom: 1px solid #eee;
              color: #888;
              .perform-address-info{
                max-width: 90%;
                width: 90%;
                float: left;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }
          }
        }
        .perform-list-more{
            margin-top: .32rem;
            text-align: center;
            font-size: .29333rem;
            color: #888;
        }
      }
    }
  }
`
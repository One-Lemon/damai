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
  .bottom-line {
    position: absolute;
    bottom: 0;
    left: .4rem;
    right: .4rem;
    border-bottom: 1px solid #eee;
  }
`

export const LocationInfo = styled.div`
  display: flex;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-top: .48rem;
  padding-bottom: .48rem;
  margin-left: .4rem;
  margin-right: .4rem;
  .location-left {
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    flex-direction: column;
    -webkit-box-flex: 1;
    flex: 1;
    border-right: 1px solid #eee;
    .single-line {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .location-left-city {
      font-size: .42667rem;
      color: #000;
      font-weight: 700;
    }
    .location-left-address {
      font-size: .34667rem;
      color: #999;
      margin-top: .24rem;
    }
  }
  .location-right {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: end;
    align-items: flex-end;
    padding-left: .4rem;
    .anticon {
      width: .53333rem;
      height: .53333rem;
      font-size: .46667rem;
      color: #000;
    }
  }
`

export const SectionPadding = styled.div`
  width: 100%;
  height: .24rem;
  background-color: #f8f8f8;
`

export const SectionTitle = styled.div`
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: .64rem .4rem;
  .title-text {
    font-size: .64rem;
    color: #000;
    font-weight: 700;
  }
`

export const CellContent = styled.div`
  position: relative;
  display: block;
  padding: 0;
  margin: 0;
  background-color: #fff;
  h1,h2,h3,h4,h5,h6 {
    font-size: .32rem;
    font-weight: 500;
  }
  .project-detail-html {
    position: relative;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    padding: 0 0 .58667rem;
    margin: 0;
    margin-left: .4rem;
    margin-right: .4rem;
    word-wrap: break-word;
    word-break: normal;
    font-weight: 300;
    .project-readmore__bg {
      width: 100%;
      height: 2rem;
      position: absolute;
      bottom: 0;
      background: -webkit-gradient(linear,0 top,0 bottom,from(hsla(0,0%,100%,0)),to(#fff));
    }
    .item-detail-html-box {
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      p {
        display: block;
        word-wrap: break-word;
        word-break: normal;
        color: #888;
        font-size: .34667rem;
        line-height: .66667rem;
        img {
          width: 100%;
        }
      }
    }
  }
  .project-readmore {
    position: relative;
    height: 1.06667rem;
    line-height: 1.06667rem;
    width: 100%;
    color: #ff2d79;
    font-size: .42667rem;
    text-align: center;
  }
`

export const ArtistCardWrapper = styled.div`
  .artist-card {
    margin: .48rem .4rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    .artist-card-img {
      width: 2.13333rem;
      height: 2.13333rem;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      margin-right: .32rem;
      border-radius: 50%;
      border: 1px solid #eee;
    }
    .artist-card-content {
      width: 3.29333rem;
      -webkit-box-flex: 1;
      flex: 1;
      .artist-card-content-top {
        -webkit-box-align: center;
        align-items: center;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin-bottom: .4rem;
        span {
          color: #111;
          font-size: .42667rem;
          font-weight: 500;
        }
        .btn {
          color: #ff2d79;
          background: rgba(255,45,121,.1);
          display: flex;
          width: 1.84rem;
          height: .8rem;
          font-size: .32rem;
          border-radius: .4rem;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          .anticon-plus {
            margin-right: .10667rem;
          }
        }
      }
      .artist-card-content-archives {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size: .37333rem;
        line-height: .53333rem;
        font-weight: 300;
        color: #666;
      }
    }
  }
`

export const NoticeSection = styled.div`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  .subtitle {
    font-size: .42667rem;
    color: #000;
    font-weight: 700;
    margin-left: .4rem;
    margin-right: .4rem;
  }
  .notice-content, .read-more {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;

    flex-direction: column;
    margin-left: .4rem;
    margin-right: .4rem;
  }
  .notice-content {
    .info-item, .item-title {
      display: flex;
      -webkit-box-direction: normal;
    }
    .info-item {
      -webkit-box-orient: vertical;
      flex-direction: column;
      .item-title {
        height: 1.2rem;
        -webkit-box-orient: horizontal;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
        margin-right: .2rem;
        .anticon-check-circle {
          font-size: .34667rem;
          color: #ff2d79;
        }
        .text {
          font-size: .37333rem;
          color: #000;
          margin-left: .2rem;
        }
      }
      .item-text {
        font-size: .34667rem;
        line-height: .53333rem;
        color: #666;
        margin-left: .53333rem;
      }
    }
    .read-more {
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      border-bottom: 1px solid #eee;
      padding-bottom: .66667rem;
      .text {
        font-size: .42667rem;
        color: #ff2d79;
        padding-top: .66667rem;
      }
    }
  }
  .subtitle-margin-top {
    margin-top: .66667rem;
  }
`

export const DetailSuggest =styled.div`
  font-size: .58667rem;
  color: #222;
  margin-left: .4rem;
  margin-right: .4rem;
  margin-top: .64rem;
`

export const DetailSuggestItem = styled.div`
  margin-top: .64rem;
  margin-bottom: .32rem;
  .project-item {
    position: relative;
    display: flex;
    .project-item_pic {
      font-size: 0;
      height: 3.2rem;
      position: relative;
      .project-item_pic_poster {
        width: 2.4rem;
        height: 3.2rem;
        border-radius: .08rem;
        border: 1px solid rgba(0,0,0,.06);
      }
    }
    .project-item_info {
      margin-left: .32rem;
      padding-bottom: 0;
      position: relative;
      -webkit-box-flex: 1;
      flex: 1;
      .project-item_info_title {
        width: 6.32rem;
        font-size: .42667rem;
        color: #111;
        font-weight: 700;
        margin-top: -.06667rem;
        line-height: .6rem;
        letter-spacing: 0;
      }
      .project-item_limit_lines_1, .project-item_limit_lines_2 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
      }
      .project-item_limit_lines_2 {
        -webkit-line-clamp: 2;
      }
      .project-item_info_time {
        width: 6.32rem;
        font-size: .32rem;
        color: #aaa;
        padding-top: .16rem;
      }
      .project-item_limit_lines_1 {
        -webkit-line-clamp: 1;
      }
      .project-item_info_price {
        position: absolute;
        bottom: 0;
        width: 98%;
        margin-top: .26667rem;
        font-size: 0;
        .project-item_info_price_str {
          font-size: .37333rem;
          color: #ff1268;
          display: inline-block;
          box-sizing: border-box;
          line-height: .42667rem;
        }
      }
    }
  }
`
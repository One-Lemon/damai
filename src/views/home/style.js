import styled from 'styled-components';
/**
 * ${r()}
 */
// export function r(px, psd = 350) {
//   return `${px / psd * 10}rem`;
// }
export const HomeBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const HomeContent = styled.div`
  flex: 1;
  overflow-y: auto;
`
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  height: .72rem;
  border-radius: .4rem;
  background: #fff;
  color: #999;
  padding-left: .48rem;
  font-size: .37rem;
  .fdj{
    margin-right: .24rem;
    color: #888;
  } 
`

export const HomeHead = styled.header`
  height: 1.33rem;
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  align-items: center;
  z-index: 9999;
  font-size: .42667rem;
  .address{
    display: flex;
    margin: 0 .48rem;
    color: #222;
    font-size: .42667rem;
    align-items: center;
  }
  .mine{
    font-size: .64rem;
    margin: 0 .48rem 0 .32rem;
  }
`
export const BigKa = styled.div`
  position: relative;
  height: .58667rem;
  font-weight: 700;
  padding-left: .48rem;
  font-size: .45333rem;
  color: #111;
  margin-bottom: .42667rem;
  text-align: left;
  a{
    align-items: center;
    font-size: .32rem;
    color: #999;
    right: .48rem;
    bottom: 0;
    font-weight: 400;
    display: flex;
    position: absolute;
  }
`
export const Banner = styled.img`
  background-color: skyblue;
  display:block;
  width: 100%;
`
export const IconWarp = styled.div`
  display: flex;
  padding: .48rem 0 .24rem;
  flex-wrap:wrap;
`
export const IconDiv = styled.div`
  width: 25%;
  margin-bottom: .4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const SingList = styled.div`
  position: relative;
  z-index: 1010;
  height: 3.4rem;
  margin-left: .48rem;
  overflow: hidden;
  ul{
    height: 3.4rem;
    overflow-x: scroll;
    white-space: nowrap;
    li{
      display: inline-block;
      box-sizing: border-box;
      width: 6.08rem;
      padding: 0 .32rem;
      margin-right: .4rem;
      border: 1px solid #eee;
      border-radius: .08rem;
      box-shadow: 0 0.08rem 0.4rem 0 rgba(0,0,0,.05);
      height: 3.0rem;
    }
  }
`
export const Recent = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .65333rem .48rem .48rem;
    font-size: .45333rem;
    font-weight: 700;
    span{
      font-size: .32rem;
      color: #999;  
    }
  }
  .date{
    display: flex;
    justify-content: space-between;
    margin: 0 .48rem .64rem;
    color: #999;
    font-size: .37333rem;
  }
  .card{
    position: relative;
    height: 7.37333rem;
    margin: 0 0 .64rem .48rem;
    overflow: hidden;
    ul{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: -.06667rem;
      white-space: nowrap;
      overflow-x: scroll;
      li{
        background-size: contain;
        display: inline-block;
        width: 4rem;
        height: 5.84rem;
        margin-right: .32rem;
        background-color: pink; 
        flex-direction: column;
        border-radius: .10667rem;
        .card-pic{
          background-size: 100% 100%;
          background-repeat: no-repeat;
          display: inline-block;
          width: 4rem;
          height: 5.84rem;
          border-radius: .10667rem;
        }
        .title{
          margin-top: .32rem;
          margin-bottom: .16rem;
          font-size: .37333rem;
          font-weight: 700;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
`

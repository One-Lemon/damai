import styled from "styled-components";

export const SearchBox=styled.div`
  width:100%;
  height:100%;
`
export const SearchHead=styled.div`
  height: 1.17333rem;
  line-height: 1.17333rem;
  display: flex;
  justify-content: space-between;
  margin: 0 .48rem;
  margin-top: .24rem;
  font-size: .32rem;
  .inputBox{
    position: relative;
    flex: 1;
    color: #000;
    margin-right: .26667rem;
    line-height: 1.17333rem;
    font-size: .32rem;
    .fangdj{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: .42667rem;
      font-size: .4rem;
      color: #ccc;
    }
    .searchInput{
      display: inline-block;
      text-indent: .98667rem;
      width: 100%;
      height: .72rem;
      border-radius: .4rem;
      background: #f2f3f4!important;
      font-size: 100%;
      border:none;
    }
  }
  .cancle{
    margin-left: .21333rem;
    font-size: .37333rem;
    color: #222;
    line-height: 1.17333rem;
  }
`

export const HOTSearch=styled.div`
  width:100%;
  margin-bottom: .53333rem;
  font-size: .32rem;
  margin: 0 .48rem;
  margin-top: .24rem;
  .hotSearchTitle{
    color: #999;
    font-size: .32rem;
  }
  .hotItemBox{
    margin-top: .4rem;
    zoom: 1;
    list-style: none;
    font-size: .32rem;
    color: #000;
    overflow:hidden;
      .hotItem{
        float: left;
        border-radius: .68rem;
        border: 1px solid #e7e7e7;
        padding: .18667rem .4rem;
        margin-right: .26667rem;
        margin-bottom: .24rem;
        color: #222;
        font-size: .32rem;
      }
    }
  }
`
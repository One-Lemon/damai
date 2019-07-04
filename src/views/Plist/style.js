import styled from 'styled-components'

export const Navcategory = styled.div`
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: .32rem;
  height: 1.2rem;
  line-height: 1.2rem;
  overflow: hidden;
  font-size: 24px;
  box-sizing: content-box;
`

export const Menulist = styled.ul`
  white-space: nowrap;
  overflow-x: auto;
  display: flex;
  ::-webkit-scrollbar{display: none}
  .category-wrapper_item {
    display: inline-block;
    box-sizing: border-box;
    height: 1.2rem;
    margin: 0 .4rem;
    font-size: .42667rem;
    font-weight: 400;
    color: #000;
  }
  .category-wrapper_active {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: .8rem;
    transform: translateX(-50%);
    height: .05333rem;
    background: #ff1268;
    border-radius: .08rem;
  }
`

export const Condition = styled.div`
  height: 1.2rem;
  display: flex;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e7e7e7;
  .factor_wrapper, .factor_wrapper_item {
    display: flex;
    height: 1.2rem;
  }
  .factor_wrapper {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    z-index: 1002;
    background: #f5f5f5;
    border-bottom: 1px solid #e7e7e7;
    .factor_wrapper_item {
      -webkit-box-flex: 1;
      flex: 1;
      -webkit-box-pack: center;
      justify-content: center;
      text-align: center;
      line-height: 1.2rem;
      font-size: .37333rem;
      color: #111;
      .anticon-caret-down {
        font-size: .13333rem;
        display: inline-block;
        margin-left: .13333rem;
        line-height: 1.2rem;
      }
    }
    .factor_wrapper_active {
      color: #ff1268;
    }
  }
`

export const Container = styled.div`
  margin-top: .48rem;
`
export const ContentList = styled.div`
  margin: .48rem;
  margin-bottom: .96rem;
  display: flex;
` 

export const ContentImg = styled.div`
  font-size: 0;
  height: 3.2rem;
  img {
    width: 2.4rem;
    height: 3.2rem;
    border-radius: .08rem;
    border: 1px solid rgba(0,0,0,.06);
  }
` 

export const ContentRight = styled.div`
  margin-left: .32rem;
  position: relative;
` 

export const ContentRightTitle = styled.div`
  width: 6.32rem;
  height: 1.2rem;
  font-size: .42rem;
  color: #111;
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
  line-height: .6rem;
`

export const ContentRightInfo = styled.div`
  widows: 6.32rem;
  font-size: .32rem;
  color: #aaa;
  padding-top: .16rem;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
`

export const ContentRightPrice = styled.div`
  margin-top: .26rem;
  font-size: .37rem;
  color: #ff1268;
  position: absolute;
  bottom: 0;
`

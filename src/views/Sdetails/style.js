import styled from 'styled-components';

export const SingerDetail = styled.div`
  width:100%;
  height:100%;
  position:relative;
  overflow-y: auto;
`
export const SingerBanner = styled.div`
  width:100%;
  height: 4.8rem;
  margin-bottom: 1.65rem;
  position:absolute;
  top:0;
  overflow:hidden;
`
export const BannerImg = styled.img`
 width:100%;
`

export const SingerBox = styled.div`
  width:100%;
  height:4rem;
  position:absolute;
  top:4.8rem;
`

export const Avator = styled.div`
  position: absolute;
  top: -1.5rem;
  left: 3.6rem;
  width: 2.9rem;
  height: 2.9rem;
  border: .05rem solid #fff;
  border-radius:100%;
  background-size:cover;
`
export const SingerName = styled.p`
  display:block;
  width:100%;
  margin-top: 1.8rem;
  font-size: .53rem;
  color: #111;
  text-align: center;
  line-height: .59rem;
  color:#111;
`
export const SingerFans = styled.p`
  display:block;
  width:100%;
  margin-top: .16rem;
  font-size: .43rem;
  color: #111;
  text-align: center;
  line-height: .59rem;
  text-align:center;
  color:#111;
`
export const BottomBox = styled.div`
  width:100%;
  border-top: .24rem solid #f5f5f5;
  position:absolute;
  top:8.5rem;
  overflow-y:auto;
`
export const ShowList = styled.div`
  margin: .64rem .48rem;
  padding-bottom: .64rem;
  border-bottom: .03rem solid #eee;
  position: relative;
  display: flex;
  height: 2.3rem;
`
export const Date = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-size: .12rem;
  color: #888;
  width: .8rem;
  height:1.6rem;
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`
export const Party = styled.div`
  position: absolute;
  top: .21rem;
  left: .69rem;
  padding: 0 0 0 .64rem;
  width: 7.68rem;
  height:1.2rem;
  font-size:.12rem;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`
export const PTitle=styled.p`
  font-size: .43rem;
  color: #111;
  line-height: .59rem;
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis; 
`
export const Padress = styled.p`
  display: inline-block;
    margin-right: .16rem;
    max-width: 4.21rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .37rem;
    color: #888;
`
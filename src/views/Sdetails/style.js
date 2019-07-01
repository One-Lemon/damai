import styled from 'styled-components';

export function r(px, psd = 350) {
  return `${px / psd * 10}rem`;
};

export const SingerDetail=styled.div`
  width:100%;
  height:100%;
  overflow-y:auto;
  position:relative;
`

export const SingerBanner=styled.div`
  width:100%;
  height:${r(360)};
  margin-bottom: ${r(123.75)};
  position:absolute;
  top:0;
`
export const BannerImg=styled.img`
 width:100%;
`

export const SingerBox=styled.div`
  width:100%;
  height:150px;
  background:#fff;
  position:absolute;
  top:${r(390)};
`

export const Avator=styled.div`
  width:${r(230)};
  height:${r(230)};
  border-radius:100%;
  border:${r(3.75)} solid #fff;
  margin:0 auto;
  position:relative;
  top:${r(-110)};
  background-image: url("//intercms.damai.cn/artist/pic/1535596053705/1535596053705-main.jpg?x-oss-process=image/quality,q_50/format,webp");
  background-size:cover;
`
export const BottomBox=styled.div`
  width:100%;
  height:${r(1040)};
  border-top:${r(20)} solid #f5f5f5;
  background:#fff;
  position:absolute;
  top:${r(680)};
`
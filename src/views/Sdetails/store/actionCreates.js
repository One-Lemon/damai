import * as Types from './actionTypes';

export const asyncGetSingerDetail=() => {
  return dispatch =>{
      fetch('https://mtop.damai.cn/h5/mtop.damai.wireless.community.account.head/1.0/?jsv=2.5.1&appKey=12574478&t=1561978653716&sign=17e9e9a10cc7fce8f35cdedbf69d6df4&api=mtop.damai.wireless.community.account.head&v=1.0&dataType=json&type=originaljson&H5Request=true&AntiCreep=true&AntiFlood=true&data=%7B%22targetId%22%3A%222031%22%2C%22targetType%22%3A%222%22%7D')
    .then(response => response.json())
    .then(res => {
      console.log(res);
    })

  }
}
import * as Types from './actionTypes';

export const asyncGetSingerDetail=(id) => {
  return dispatch =>{
    fetch(`http://localhost:3003/performanceList?artistId=${id}`)
    .then(response => response.json())
    .then(res => {
      // console.log(res)//res是整个歌手的所有数据
       dispatch(onPerformanceList(res[0]));
       console.log(res)
    })
  }
}

export const onPerformanceList=(data)=>({
  type:Types.SET_PERFORMANCE_lIST,
  data
})
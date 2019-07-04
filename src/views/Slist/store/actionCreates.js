import * as Types from './actionTypes';

export const asyncSingerList=()=>{
  return dispatch=>{
    fetch('http://localhost:3003/singer')
    .then(response=>response.json())
    .then(res=>{
      let data = res[0].data.baccounts;
     // console.log(data)
      dispatch(onSingerList(data))
    })
  }
}

export const onSingerList=data=>({
  type:Types.SET_SINGER_LIST,
  data
})

export const selectPerformace=name=>({
  type:Types.SET_SECLECT_ITEM,
  name
})
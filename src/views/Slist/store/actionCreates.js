import * as Types from './actionTypes';

// export const asyncSingerList=(page)=>{
//   return dispatch=>{
//    // fetch(`http://localhost:3003/singer?_page=${page}&_limit=5`)
//    fetch(`http://localhost:3003/singer?subtype=${歌手}`)
//     .then(response=>response.json())
//     .then(res=>{
//       // console.log(res)
//       dispatch(onSingerList(res))
//       dispatch(onCloseLoding())
//     })
//   }
// }

export const asyncSingerList=(page)=>{
  return dispatch=>{
   fetch(`http://localhost:3003/singer?subtype=''&_page=1&_limit=5`)
    .then(response=>response.json())
    .then(res=>{
      // console.log(res)
      dispatch(onSingerList(res))
      dispatch(onCloseLoding())
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

export const onLoding=()=>({
  type:Types.SET_PAGE
})
export const onCloseLoding=()=>({
  type:Types.CLOSE_LODING
})
import * as Types from './actionTypes';

export const asyncSingerList = (type, page) => {
  if (type === "全部") {
    return dispatch => {
      fetch(`http://localhost:3003/singer?&_page=${page}&_limit=5`)
        .then(response => response.json())
        .then(res => {
          if(res.length > 0){
            
            dispatch(onSingerList(res))
            dispatch(onCloseLoding())
          }else{
            dispatch(onShowAlert(page))
          }
         
        })
    }
  } else {
    return dispatch => {
      fetch(`http://localhost:3003/singer?subtype=${type}&_page=${page}&_limit=5`)
        .then(response => response.json())
        .then(res => {
          if(res.length >=1){
            // console.log(res)
            dispatch(onSingerList(res))
            dispatch(onCloseLoding())
          }else{
            dispatch(onShowAlert(page))
          }
        })
    }
  }
}

export const onSingerList = data => ({
  type: Types.SET_SINGER_LIST,
  data
})

export const initStatePage=()=>({
  type:Types.INIT_PAGE
})

export const setSelectItem = (data) => ({
  type: Types.SET_SECLECT_ITEM,
  data
})

export const onLoding = () => ({
  type: Types.SET_PAGE
})
export const onCloseLoding = () => ({
  type: Types.CLOSE_LODING
})

export const onShowAlert=(page)=>({
  type:Types.SET_ALRERT,
  page
})
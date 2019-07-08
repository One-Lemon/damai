import * as Types from './actionTypes';
import axios from 'axios';

export const getHotSearchList=()=>{
  return dispatch=>{
    axios.get('http://localhost:3003/hotSearch')
    .then(res=>{
      console.log(res.data);
      dispatch(onHotSearchList(res.data))
    })
  }
}
export const onHotSearchList=data=>({
  type:Types.SET_HOT_SEARCH_LIST,
  data
})
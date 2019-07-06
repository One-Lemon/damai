import * as Types from './actionTypes';
import axios from 'axios';

export const asyncCityList=()=>{
  return dispatch =>{
    axios('http://localhost:3003/city')
    .then(res=>{
      let data=res.data;
      // console.log(data);
      let hot=data.filter(item=>item.prefix==="hotCities")
      // console.log(hot[0].cities);
      let city=data.filter(item=>item.prefix!=="hotCities")
      // console.log(city);

      dispatch(onHotCityList(hot[0].cities))
      dispatch(onCityList(city));
    })
  }
}
export const onCityList=data=>({
  type:Types.SET_CITY_LIST,
  data
})
export const onHotCityList=data=>({
  type:Types.SET_HOT_CITY_LIST,
  data
})
export const chgCityId=id=>({
  type:Types.SET_CITY_ID,
  id
})
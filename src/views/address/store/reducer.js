import * as Types from './actionTypes';
const initState={
  cityList:[],
  hotCityList:[],
  cityId:0
}

export default(state=initState,action)=>{
  let newState=JSON.parse(JSON.stringify(state));
  if(action.type===Types.SET_CITY_LIST){
    newState.cityList=action.data;
  }
  if(action.type===Types.SET_HOT_CITY_LIST){
    newState.hotCityList=action.data
  }
  if(action.type===Types.SET_CITY_ID){
    newState.cityId=action.id
  }
  return newState;
}

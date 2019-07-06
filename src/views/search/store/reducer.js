import* as Types from "./actionTypes";

const initState={
  hotSearchList:[]
}

export default (state=initState,action)=>{
  let newState=JSON.parse(JSON.stringify(state));
  
    if(action.type===Types.SET_HOT_SEARCH_LIST){
      newState.hotSearchList=action.data;
      console.log(newState.hotSearchList)
    }
  return newState
}
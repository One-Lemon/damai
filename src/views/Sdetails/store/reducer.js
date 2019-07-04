import * as Types from './actionTypes';

const initState={
  performanceList:{}
};

export default(state=initState,action)=>{
  let newState=JSON.parse(JSON.stringify(state));
  if(action.type===Types.SET_PERFORMANCE_lIST){
    newState.performanceList=action.data
  }

  return newState;
}
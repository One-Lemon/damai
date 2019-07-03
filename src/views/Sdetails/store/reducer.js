import * as Types from './actionTypes';

const initState={
  singer:[]
};

export default(state=initState,action)=>{
  let newState=JSON.parse(JSON.stringify(state));


  return newState;
}
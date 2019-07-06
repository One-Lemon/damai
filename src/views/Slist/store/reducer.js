import * as Types from './actionTypes';

const initState={
  singerList:[],
  selectItem:'全部',
  page:1,
  loding:false,
  isAlert:false
}

export default (state=initState,action)=>{
  let newState=JSON.parse(JSON.stringify(state));

  if(action.type===Types.SET_SINGER_LIST){
   
    if(newState.page===1){
      newState.singerList=action.data
    }else{
      newState.singerList=[...newState.singerList,...action.data];
    }
  }
  if(action.type===Types.SET_SECLECT_ITEM){
    newState.selectItem=action.data;
  }

  if(action.type===Types.SET_PAGE){
    // console.log( newState.page)
    newState.page+=1;
    newState.loding=true
  }

  if(action.type===Types.CLOSE_LODING){
    newState.loding=false;
  }

  if(action.type===Types.INIT_PAGE){
    newState.page=1;
  }

  if(action.type===Types.SET_ALRERT){
    newState.isAlert=true
    newState.loding=true;
    newState.page=action.page;
  }
  return newState;
}
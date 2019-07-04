import * as Types from './actionTypes';

const initState={
  singerList:[],
  selectItem:'全部',
  selectList:[]
}

export default (state=initState,action)=>{
  let newState=JSON.parse(JSON.stringify(state));
  if(action.type===Types.SET_SINGER_LIST){
    newState.singerList=action.data;
    newState.selectList=action.data;
    
  }
  if(action.type===Types.SET_SECLECT_ITEM){
    newState.selectItem=action.name;

    let sList=newState.singerList;

    let name=newState.selectItem;

    let list=sList.filter(item=>{
      // console.log(item.subtype);
      if(name==="全部"){
        return item
      }
        return item.subtype===name
    })
    newState.selectList=list;
    //console.log(newState.selectList)
  }
  return newState;
}
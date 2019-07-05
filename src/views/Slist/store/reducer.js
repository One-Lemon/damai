import * as Types from './actionTypes';

const initState={
  singerList:[],
  selectItem:'全部',
  selectList:[],
  page:1,
  loding:false
}

export default (state=initState,action)=>{
  let newState=JSON.parse(JSON.stringify(state));
  if(action.type===Types.SET_SINGER_LIST){
  
    newState.singerList=newState.singerList.concat(action.data);

    newState.selectList=newState.singerList;
    console.log(newState.page);
    // console.log(newState.singerList);
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

  if(action.type===Types.SET_PAGE){
    newState.page+=1;
    newState.loding=true
  }

  if(action.type===Types.CLOSE_LODING){
    newState.loding=false;
  }
  return newState;
}
import {LOGIN_IN} from './actionTypes'

// const initVisible = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : {userInfo:''}
const initVisible = {
  isLoggedIn:window.localStorage.getItem('visible') ? JSON.parse(window.localStorage.getItem('visible')) : undefined,
  userInfo:window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : undefined
}

export default (state = initVisible, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  if(action.type === LOGIN_IN){
    newState.userInfo = action.values
    console.log(newState.userInfo);
    newState.isLoggedIn = !newState.isLoggedIn
    window.localStorage.setItem('visible',JSON.stringify(newState.isLoggedIn))
    // newState = {...newState.userInfo,...newState.isLoggedIn}
    // console.log( newState.isLoggedIn);
    // window.localStorage.setItem('user',JSON.stringify(userInfo));
    // let userList = []
    // userList.push(window.localStorage.getItem('user'))
  }
  return newState;
}

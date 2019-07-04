const initVisible = {
  isLoggedIn:false
}

export default (state = initVisible, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  
  return newState;
}

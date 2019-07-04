import * as Types from './actionTypes'

const initState = {
  list: [],
  recomlist: []
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  
  if(action.type === Types.DETAILS_LIST) {
    newState.list = action.data
  }
  
  if(action.type === Types.RECOMMENDED_LIST) {
    newState.recomlist = action.recomlist
  }
  
  return newState
}
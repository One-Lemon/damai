import * as Types from './actionTypes'

const initState = {
  list: []
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  
  if(action.type === Types.PROJECT_LIST) {
    newState.list = action.data
  }

  return newState
}
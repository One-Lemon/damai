import { SETSLIDELIST } from './actionType';
const initState = {
  slideList: []
}
export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  if (action.type === SETSLIDELIST) {
    newState.slideList = action.data
  }
  return newState;
}

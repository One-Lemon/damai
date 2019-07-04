import { SETSLIDELIST, SETBIGKALIST, SETDATELIST, SETPROJECT } from './actionType';
const initState = {
  slideList: [],
  bigKaList: [],
  dateList: [],
  project: []
}
export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case SETSLIDELIST:
      newState.slideList = action.data;
      break;
    case SETBIGKALIST:
      newState.bigKaList = action.data;
      break;
    case SETDATELIST:
      newState.dateList = action.data.currentCity;
      break;
    case SETPROJECT:
      newState.project = action.data;
      break;
    default:
      break;
  }
  return newState;
}

import { SETSLIDELIST, SETBIGKALIST, SETDATELIST, SETPROJECT, CHGOPEN, DISTANCE } from './actionType';
const initState = {
  slideList: [],
  bigKaList: [],
  dateList: [],
  project: [],
  open: true,
  page: 1
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
      newState.project = newState.project.concat(action.data);
      newState.page++;
      break;
    case CHGOPEN:
      newState.open = !newState.open;
      break;
    case DISTANCE:
      break;
    default:
      break;
  }
  return newState;
}

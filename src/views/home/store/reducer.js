import { SETSLIDELIST, SETBIGKALIST, SETDATELIST, SETPROJECT, CHGOPEN } from './actionType';
const initState = {
  slideList: [],
  bigKaList: [],
  dateList: [],
  project: [],
  open: true
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
      break;
    case CHGOPEN:
      newState.open = !newState.open;
      console.log(newState.open);
      break;
    default:
      break;
  }
  return newState;
}

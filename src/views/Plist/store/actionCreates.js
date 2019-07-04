import * as Types from './actionTypes';

export const onProjectList = (data) => ({
  type: Types.PROJECT_LIST,
  data
})

export const asyncProjectList = () => {
  return dispatch => {
    fetch("http://localhost:3003/Plist")
    .then(response => response.json())
    .then(res => {
      let data = res[0].data.projectInfo;
      dispatch(onProjectList(data))
    })
  }
}
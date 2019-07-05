import { SETSLIDELIST, SETBIGKALIST, SETDATELIST, SETPROJECT, CHGOPEN } from './actionType';
import axios from 'axios';

export const setSlideList = data => {
  return {
    type: SETSLIDELIST,
    data
  }
}

export const getSlideList = () => {
  return ((dispatch) => {
    axios.get('http://localhost:3003/banner')
      .then(response => response.data)
      .then(res => {
        dispatch(setSlideList(res));
      })
  })
}

export const setBigKaList = data => {
  return {
    type: SETBIGKALIST,
    data
  }
}

export const getBigKaList = () => {
  return ((dispatch) => {
    axios.get('http://localhost:3003/bigka')
      .then(response => response.data[0])
      .then(res => {
        dispatch(setBigKaList(res.data.artistProjectList));
      })
  })
}

export const setDateList = data => {
  return {
    type: SETDATELIST,
    data
  }
}

export const getDateList = (index) => {
  return (dispatch => {
    axios.get(`http://localhost:3003/dateList?index=${index}`)
      .then(response => response.data)
      .then(res => {
        dispatch(setDateList(res[0].data));
      })
  })
}

export const setProject = data => {
  return {
    type: SETPROJECT,
    data
  }
}

export const getProject = (page) => {
  //需要修改判断 - -明天
  return (dispatch, getState) => {
    let open = getState().home.open;
    console.log(open);
    if (open) {
      dispatch(chgOpen());
      axios.get(`http://localhost:3003/project?_page=${page}&_limit=8`)
        .then(response => response.data)
        .then(res => {
          if (res.length <= 0) {
            console.log('没数据了');
            return;
          }
          dispatch(chgOpen());
          dispatch(setProject(res));
        }).catch(error => {
          console.log(error);
        })
    }
  }
}

export const chgOpen = bool => {
  return {
    type: CHGOPEN,
    bool
  }
}

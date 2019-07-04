import { SETSLIDELIST, SETBIGKALIST, SETDATELIST, SETPROJECT } from './actionType';
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

export const getProject = (pageNum) => {
  let _page = 0;
  let _limit = 8;
  return dispatch => {
    axios.get(`http://localhost:3003/project?_page=${_page}&_limit=${_limit}`)
      .then(response => response.data)
      .then(res => {
        console.log(res);
        if (res.length <= 0) {
          console.log('没数据了');
          return;
        }
        dispatch(setProject(res));
      }).catch(error => {
        console.log(error);
      })
  }
}

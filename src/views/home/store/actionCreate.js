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
  return dispatch => {
    axios.get(`http://localhost:3003/project?id=${pageNum}`)
      .then(response => response.data)
      .then(res => {
        if (res.length <= 0) {
          console.log('没数据了');
          return;
        }
        dispatch(setProject(res[0].data.projectInfo));
      }).catch(error => {
        console.log(error);
      })
  }
}

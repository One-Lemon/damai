import { SETSLIDELIST, SETBIGKALIST, SETDATELIST, SETPROJECT, CHGOPEN, DISTANCE } from './actionType';
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

export const getProject = () => {
  //需要修改判断 - -明天
  return (dispatch, getState) => {
    let open = getState().home.open;
    let page = getState().home.page;
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

export const chgOpen = () => {
  return {
    type: CHGOPEN
  }
}

export const distance = data => {
  return {
    type: DISTANCE,
    data
  }
}

export const setDistance = () => {
  return (dispatch, getState) => {
    // longitude
    let project = getState().home.project;
    let newProject = project.sort((a, b) => {
      if (a.longitude > b.longitude) {
        return 1
      }
    })
    console.log(newProject);
    dispatch(distance(project));
  }
}

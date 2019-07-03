import { SETSLIDELIST } from './actionType';
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

import * as Types from './actionTypes'

const onDetailsList = (data) => ({
  type: Types.DETAILS_LIST,
  data
})

export const asyncDetailsList = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3003/Pdetails?itemId=${id}`)
    .then(response => response.json())
    .then(res => {
      let data = res[0].item
      dispatch(onDetailsList(data))
    })
  }
}

const onRecommendedList = (recomlist) => ({
  type: Types.RECOMMENDED_LIST,
  recomlist
})

export const asyncRecommendedList = () => {
  return (dispatch) => {
    fetch("http://localhost:3003/recommended")
    .then(response => response.json())
    .then(res => {
      let recomlist = res[0].data.projectInfo
      dispatch(onRecommendedList(recomlist))
    })
  }
}

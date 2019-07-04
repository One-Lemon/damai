import * as Types from './actionTypes'

const onDetailsList = (data) => ({
  type: Types.DETAILS_LIST,
  data
})

export const asyncDetailsList = () => {
  return (dispatch) => {
    fetch("http://localhost:3003/Pdetails")
    .then(response => response.json())
    .then(res => {
      let data = res[0].detailViewComponentMap.item
      dispatch(onDetailsList(data))
    })
  }
}
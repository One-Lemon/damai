import * as Types from './actionType'

export const onsignIn = (value,props) => ({
  type: Types.SIGN_IN,
  value,
  props
})

export const asyncSignIn = (values,props) => {
  return (dispatch) => {
        // let value = JSON.stringify(values);
    dispatch(onsignIn(values,props));
    // userList.push(userInfo)


  }
}

import {message} from 'antd'
import {LOGIN_IN} from './actionTypes'

export const OnLogin = (values) => {
  return {
    type:LOGIN_IN,
    values
  }
}

export const LoginIn = (values,props) => {
  // console.log(111);
  return (dispatch => {
    new Promise((resolve, reject) => {
      let userInfo = JSON.parse(window.localStorage.getItem('Sign'));
      console.log(userInfo);
      // let user = userInfo.map(item => (item.username === values.username && item.password === values.password ? true : false))
      // console.log(user[0])
      if (userInfo.username === values.username && userInfo.password === values.password) {
        //登录成功
        dispatch(OnLogin(values))
        // console.log(user);
        resolve(userInfo);
        window.localStorage.setItem('user',JSON.stringify(userInfo));
        let redirect = props.location.state ? props.location.state.redirect : "/mine";
        props.history.replace(redirect)
      } else {
        reject(message.error('你输入的账号或密码有误！'))
      }
    })
  })
}

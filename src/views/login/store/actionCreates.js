import {message} from 'antd'

export const LoginIn = (values, props) => {
  console.log(111);

  return new Promise((resolve, reject) => {
    let userInfo = JSON.parse(window.localStorage.getItem('user'));
    // console.log(userInfo);
    let user = userInfo.map(item => (item.username === values.username && item.password === values.password ? true : false))
    // console.log(user[0])
    if (user[0]) {
      //登录成功
      console.log(222);
      resolve(user);
      let redirect = props.location.state ? props.location.state.redirect : "/mine";
      props.history.replace(redirect)
    } else {
      reject(message.error('你输入的账号或密码有误！'))
    }
  })
}

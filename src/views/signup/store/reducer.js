import * as Types from './actionType.js';

const initState = {
  userInfo:[]
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  // console.log(111 );
  if (action.type === Types.SIGN_IN) {
    // console.log(111 );
    newState.userInfo = action.value;
    let values = action.value
    let props = action.props;
    // let userList = JSON.parse(window.localStorage.getItem('user'));
    // if (userList) {
    //   if (!userList[0].username === values.username) {
    //     userList.push(values);
    //     console.log(props);
    //     let redirect = props.location.state ? props.location.state.redirect : "/login";
    //     props.history.replace(redirect)
    //   } else {
    //     message.error('用户已存在，请重新输入');
    //   }
    // } else {
    //   // console.log(111 );

    //   userList = [];
    //   userList.push(values);

      window.localStorage.setItem('Sign', JSON.stringify(values))
      let redirect = props.location.state ? props.location.state.redirect : "/login";
      props.history.replace(redirect)
    // }

  }
  return newState;
}

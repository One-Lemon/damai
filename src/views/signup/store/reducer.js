import * as Types from './actionType.js';

const initState = {
  userInfo: []
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  // console.log(111 );
  if (action.type === Types.SIGN_IN) {
    // console.log(111 );
    newState.userInfo = action.value;
    let values = action.value;
    let props = action.props;
    let userList = JSON.parse(window.localStorage.getItem('user'));
    if (userList) {
      console.log(userList)
      if (!userList.name === values.name) {

        window.localStorage.setItem('user', JSON.stringify(values));
        console.log(props);
        let redirect = props.location.state ? props.location.state.redirect : "/login";
        props.history.replace(redirect)
      } else {
        alert(111);
      }
    } else {
      // console.log(111 );

      userList = [];
      userList.push(values);
      window.localStorage.setItem('user', JSON.stringify(userList))
      let redirect = props.location.state ? props.location.state.redirect : "/login";
      props.history.replace(redirect)
    }

  }
  return newState;
}

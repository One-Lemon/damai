import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class AuthRoute extends React.Component {
  render() {
    let {component:Component, userInfo, ...rest} = this.props;
    console.log(userInfo);
    return (
      <Route {...rest} render={(routerProps) => {
        if(userInfo){
          console.log(1111);

          return <Component  {...routerProps}/>
        } else {
          console.log(3333);

          return <Redirect to= {{
            pathname:'/login',
            state: { redirect: routerProps.match.url }
          }} />
        }
      }}>

      </Route>
    )
  }
}

export default connect( ({ login }) => {
  return {
    // username:login.username
    userInfo:login.userInfo
  }
},null)(AuthRoute)

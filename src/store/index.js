import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import HomeReducer from '@/views/home/store/reducer';
import UsersReducer from '@/views/signup/store/reducer'
import LoginReducer from '@/views/login/store/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    home: HomeReducer,
    user: UsersReducer,
    login:LoginReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

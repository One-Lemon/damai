import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import HomeReducer from '@/views/home/store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    home: HomeReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);
